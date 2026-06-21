import { mkdirSync, writeFileSync } from "node:fs";
import {
  animeDatabase,
  supportedConfidenceLevels,
  supportedContinuationStatuses
} from "../src/data/animeDatabase.js";

const docsDir = "docs";
const generatedDate = new Date().toISOString().slice(0, 10);
const notAvailable = "Not available yet";
const manualResearchText = "Needs manual research before publishing.";

const value = (input, fallback = notAvailable) => {
  if (input === undefined || input === null || input === "") {
    return fallback;
  }

  return String(input);
};

const cleanCell = (input, fallback = notAvailable) =>
  value(input, fallback)
    .replace(/\r?\n/g, " ")
    .replace(/\|/g, "\\|")
    .replace(/\s+/g, " ")
    .trim();

const numberCell = (input) => {
  const numeric = Number(input);
  return Number.isFinite(numeric) && numeric > 0 ? String(numeric) : notAvailable;
};

const yesNo = (input) => (input ? "Yes" : "No");

const isMissing = (input) => {
  if (input === undefined || input === null) return true;
  if (typeof input === "string") {
    const normalized = input.trim();
    return normalized === "" || normalized === notAvailable;
  }
  return false;
};

const isManualResearchValue = (input) =>
  value(input, "").toLowerCase().includes("needs manual research");

const sortByTitle = (entries) =>
  [...entries].sort((a, b) =>
    value(a.title, "").localeCompare(value(b.title, ""), "en-US", {
      sensitivity: "base"
    })
  );

const countBy = (entries, key, supportedValues = []) => {
  const counts = new Map();

  for (const supportedValue of supportedValues) {
    counts.set(supportedValue, 0);
  }

  for (const entry of entries) {
    const raw = value(entry[key], "Missing / undefined status");
    const bucket = raw === notAvailable ? "Missing / undefined status" : raw;
    counts.set(bucket, (counts.get(bucket) || 0) + 1);
  }

  return counts;
};

const duplicatesBy = (entries, key) => {
  const seen = new Map();

  for (const entry of entries) {
    const raw = value(entry[key], "").trim().toLowerCase();
    if (!raw) continue;

    if (!seen.has(raw)) {
      seen.set(raw, []);
    }

    seen.get(raw).push(entry);
  }

  return [...seen.values()].filter((group) => group.length > 1);
};

const hasDataSources = (entry) =>
  Array.isArray(entry.dataSources) && entry.dataSources.length > 0;

const hasUsefulContinuation = (entry) =>
  !isMissing(entry.recommendedContinueFrom) &&
  !isManualResearchValue(entry.recommendedContinueFrom);

const researchedEnough = (entry) =>
  hasUsefulContinuation(entry) &&
  !isMissing(entry.recommendedRoute) &&
  !isMissing(entry.continuationStatus) &&
  !isMissing(entry.confidenceLevel) &&
  hasDataSources(entry);

const isSaferEntry = (entry) =>
  researchedEnough(entry) &&
  !entry.needsVerification &&
  !entry.needsManualResearch &&
  ["High", "Medium"].includes(entry.confidenceLevel) &&
  !["Approximate", "Needs Manual Research"].includes(entry.continuationStatus);

const issueReasons = (entry) => {
  const reasons = [];

  if (entry.needsManualResearch) reasons.push("Needs manual research");
  if (entry.confidenceLevel === "Unknown") reasons.push("Unknown confidence");
  if (entry.needsVerification) reasons.push("Needs verification");
  if (isMissing(entry.animeEndsAt)) reasons.push("Missing animeEndsAt");
  if (isMissing(entry.recommendedContinueFrom)) {
    reasons.push("Missing recommendedContinueFrom");
  }
  if (isManualResearchValue(entry.recommendedContinueFrom)) {
    reasons.push("Manual research placeholder");
  }
  if (isMissing(entry.continuationStatus)) reasons.push("Missing continuationStatus");
  if (isMissing(entry.confidenceLevel)) reasons.push("Missing confidenceLevel");
  if (!hasDataSources(entry)) reasons.push("Missing dataSources");
  if (isMissing(entry.lastUpdated)) reasons.push("Missing lastUpdated");

  return reasons;
};

const suggestedNextBatch = (entries) => {
  const unique = new Map();

  for (const entry of entries) {
    if (!entry.id || unique.has(entry.id)) continue;
    if (entry.confidenceLevel === "High" && !entry.needsVerification) continue;

    const reasons = issueReasons(entry);
    if (reasons.length === 0) continue;

    unique.set(entry.id, {
      entry,
      reasons,
      score:
        (entry.needsManualResearch ? 300 : 0) +
        (entry.confidenceLevel === "Unknown" ? 200 : 0) +
        (entry.needsVerification ? 100 : 0) +
        (isManualResearchValue(entry.recommendedContinueFrom) ? 50 : 0)
    });
  }

  return [...unique.values()]
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return value(a.entry.title, "").localeCompare(value(b.entry.title, ""), "en-US", {
        sensitivity: "base"
      });
    })
    .slice(0, 50);
};

const bullets = (entries, formatter) => {
  if (entries.length === 0) return ["* None."];
  return entries.map((entry) => `* ${formatter(entry)}`);
};

const table = (headers, rows) => [
  `| ${headers.join(" | ")} |`,
  `| ${headers.map((header) => (header === "#" ? "-:" : "--")).join(" | ")} |`,
  ...rows.map((row) => `| ${row.join(" | ")} |`)
];

const animeList = sortByTitle(animeDatabase);
const duplicateIds = duplicatesBy(animeDatabase, "id");
const duplicateTitles = duplicatesBy(animeDatabase, "title");
const confidenceCounts = countBy(
  animeDatabase,
  "confidenceLevel",
  supportedConfidenceLevels
);
const continuationCounts = countBy(
  animeDatabase,
  "continuationStatus",
  supportedContinuationStatuses
);

const needsVerification = sortByTitle(
  animeDatabase.filter((entry) => entry.needsVerification)
);
const needsManualResearch = sortByTitle(
  animeDatabase.filter((entry) => entry.needsManualResearch)
);
const missingAnimeEndsAt = sortByTitle(
  animeDatabase.filter((entry) => isMissing(entry.animeEndsAt))
);
const missingRecommendedContinueFrom = sortByTitle(
  animeDatabase.filter((entry) => isMissing(entry.recommendedContinueFrom))
);
const missingContinuationStatus = sortByTitle(
  animeDatabase.filter((entry) => isMissing(entry.continuationStatus))
);
const missingConfidenceLevel = sortByTitle(
  animeDatabase.filter((entry) => isMissing(entry.confidenceLevel))
);
const missingDataSources = sortByTitle(
  animeDatabase.filter((entry) => !hasDataSources(entry))
);
const missingLastUpdated = sortByTitle(
  animeDatabase.filter((entry) => isMissing(entry.lastUpdated))
);
const saferEntries = sortByTitle(animeDatabase.filter(isSaferEntry));
const researchedEnoughEntries = animeDatabase.filter(researchedEnough);
const nextBatch = suggestedNextBatch(animeDatabase);
const unfinishedEntries = sortByTitle(
  animeDatabase.filter((entry) => issueReasons(entry).length > 0)
);
const recentlyUpdated = [...animeDatabase]
  .filter((entry) => !isMissing(entry.lastUpdated))
  .sort((a, b) => {
    const dateCompare = value(b.lastUpdated, "").localeCompare(value(a.lastUpdated, ""));
    if (dateCompare !== 0) return dateCompare;
    return value(a.title, "").localeCompare(value(b.title, ""), "en-US", {
      sensitivity: "base"
    });
  });

const duplicateLine = (groups, key) => {
  if (groups.length === 0) return "None";
  return groups
    .map((group) => group.map((entry) => value(entry[key], "Missing")).join(", "))
    .join("; ");
};

const animeRows = animeList.map((entry, index) => [
  String(index + 1),
  cleanCell(entry.id),
  cleanCell(entry.title),
  cleanCell(entry.sourceType),
  numberCell(entry.totalEpisodes),
  numberCell(entry.totalSeasons),
  cleanCell(entry.recommendedRoute),
  cleanCell(entry.recommendedContinueFrom),
  cleanCell(entry.continuationStatus),
  cleanCell(entry.confidenceLevel),
  yesNo(entry.needsVerification),
  yesNo(entry.needsManualResearch),
  cleanCell(entry.lastUpdated)
]);

const currentAnimeList = [
  "# Current Anime List",
  "",
  "Generated from `src/data/animeDatabase.js`.",
  "",
  `Generated date: ${generatedDate}`,
  "",
  `Total anime entries: ${animeDatabase.length}`,
  "",
  "## Duplicate Check",
  "",
  `* Duplicate ids: ${duplicateLine(duplicateIds, "id")}`,
  `* Duplicate titles: ${duplicateLine(duplicateTitles, "title")}`,
  "",
  "## Progress Summary",
  "",
  `* Total anime entries: ${animeDatabase.length}`,
  `* High confidence: ${confidenceCounts.get("High") || 0}`,
  `* Medium confidence: ${confidenceCounts.get("Medium") || 0}`,
  `* Low confidence: ${confidenceCounts.get("Low") || 0}`,
  `* Unknown confidence: ${confidenceCounts.get("Unknown") || 0}`,
  `* Needs verification: ${needsVerification.length}`,
  `* Does not need verification: ${animeDatabase.length - needsVerification.length}`,
  `* Needs manual research: ${needsManualResearch.length}`,
  `* Missing recommendedContinueFrom: ${missingRecommendedContinueFrom.length}`,
  `* Missing animeEndsAt: ${missingAnimeEndsAt.length}`,
  `* Missing dataSources: ${missingDataSources.length}`,
  "",
  "## Anime List A-Z",
  "",
  ...table(
    [
      "#",
      "id",
      "Title",
      "Source",
      "Episodes",
      "Seasons",
      "Route",
      "Continue From",
      "Status",
      "Confidence",
      "Needs Verification",
      "Needs Manual Research",
      "Last Updated"
    ],
    animeRows
  ),
  "",
  "## Needs Verification",
  "",
  ...bullets(
    needsVerification,
    (entry) =>
      `${value(entry.title)} - ${value(entry.confidenceLevel)} - ${value(
        entry.recommendedContinueFrom
      )}`
  ),
  "",
  "## Needs Manual Research",
  "",
  ...bullets(
    needsManualResearch,
    (entry) =>
      `${value(entry.title)} - ${value(entry.confidenceLevel)} - ${value(
        entry.recommendedContinueFrom
      )}`
  ),
  "",
  "## Missing Important Data",
  "",
  "### Missing animeEndsAt",
  "",
  ...bullets(missingAnimeEndsAt, (entry) => value(entry.title)),
  "",
  "### Missing recommendedContinueFrom",
  "",
  ...bullets(missingRecommendedContinueFrom, (entry) => value(entry.title)),
  "",
  "### Missing continuationStatus",
  "",
  ...bullets(missingContinuationStatus, (entry) => value(entry.title)),
  "",
  "### Missing confidenceLevel",
  "",
  ...bullets(missingConfidenceLevel, (entry) => value(entry.title)),
  "",
  "### Missing dataSources",
  "",
  ...bullets(missingDataSources, (entry) => value(entry.title)),
  "",
  "### Missing lastUpdated",
  "",
  ...bullets(missingLastUpdated, (entry) => value(entry.title)),
  "",
  "## Fully Researched / Safer Entries",
  "",
  ...bullets(
    saferEntries,
    (entry) =>
      `${value(entry.title)} - ${value(entry.recommendedRoute)} - ${value(
        entry.recommendedContinueFrom
      )}`
  ),
  ""
].join("\n");

const progressRows = nextBatch.map(({ entry, reasons }, index) => [
  String(index + 1),
  cleanCell(entry.id),
  cleanCell(entry.title),
  cleanCell(entry.confidenceLevel),
  cleanCell(entry.recommendedContinueFrom),
  cleanCell(reasons.join(", "))
]);

const animeResearchProgress = [
  "# Anime Research Progress",
  "",
  "## Overall Progress",
  "",
  `* Total anime: ${animeDatabase.length}`,
  `* Researched enough to display: ${researchedEnoughEntries.length}`,
  `* Still needs verification: ${needsVerification.length}`,
  `* Still needs manual research: ${needsManualResearch.length}`,
  `* Unknown confidence: ${confidenceCounts.get("Unknown") || 0}`,
  `* Estimated remaining anime to research: ${unfinishedEntries.length}`,
  "",
  "## By Confidence",
  "",
  ...[...confidenceCounts.entries()].map(([name, count]) => `* ${name}: ${count}`),
  "",
  "## By Continuation Status",
  "",
  ...[...continuationCounts.entries()].map(([name, count]) => `* ${name}: ${count}`),
  "",
  "## Suggested Next Batch",
  "",
  ...table(
    ["#", "id", "Title", "Current Confidence", "Current Continue From", "Reason"],
    progressRows
  ),
  ""
].join("\n");

const recentlyUpdatedRows = recentlyUpdated.map((entry) => [
  cleanCell(entry.id),
  cleanCell(entry.title),
  cleanCell(entry.confidenceLevel),
  cleanCell(entry.recommendedContinueFrom),
  cleanCell(entry.lastUpdated)
]);

const unfinishedRows = unfinishedEntries.map((entry) => [
  cleanCell(entry.id),
  cleanCell(entry.title),
  cleanCell(entry.confidenceLevel),
  yesNo(entry.needsVerification),
  yesNo(entry.needsManualResearch),
  cleanCell(issueReasons(entry).join(", "))
]);

const animeDatabaseChanges = [
  "# Anime Database Changes",
  "",
  "## Latest Generated Summary",
  "",
  `* Generated date: ${generatedDate}`,
  `* Total anime entries: ${animeDatabase.length}`,
  `* Entries with High confidence: ${confidenceCounts.get("High") || 0}`,
  `* Entries with Unknown confidence: ${confidenceCounts.get("Unknown") || 0}`,
  `* Entries still needing manual research: ${needsManualResearch.length}`,
  "",
  "## Recently Updated Entries",
  "",
  ...table(
    ["id", "Title", "Confidence", "Continue From", "Last Updated"],
    recentlyUpdatedRows
  ),
  "",
  "## Entries That Still Look Unfinished",
  "",
  ...table(
    ["id", "Title", "Confidence", "Needs Verification", "Needs Manual Research", "Issue"],
    unfinishedRows
  ),
  ""
].join("\n");

mkdirSync(docsDir, { recursive: true });
writeFileSync(`${docsDir}/current-anime-list.md`, currentAnimeList, "utf8");
writeFileSync(`${docsDir}/anime-research-progress.md`, animeResearchProgress, "utf8");
writeFileSync(`${docsDir}/anime-database-changes.md`, animeDatabaseChanges, "utf8");

console.log(
  JSON.stringify(
    {
      generatedDate,
      total: animeDatabase.length,
      duplicateIds: duplicateIds.length,
      duplicateTitles: duplicateTitles.length,
      files: [
        "docs/current-anime-list.md",
        "docs/anime-research-progress.md",
        "docs/anime-database-changes.md"
      ]
    },
    null,
    2
  )
);
