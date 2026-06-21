const requiredFields = [
  "id",
  "title",
  "animeStatus",
  "totalEpisodes",
  "totalSeasons",
  "sourceType",
  "animeEndsAt",
  "mangaContinueFrom",
  "mangaContinueVolume",
  "mangaContinueChapter",
  "lightNovelContinueFrom",
  "lightNovelContinueVolume",
  "lightNovelContinueChapter",
  "webNovelContinueFrom",
  "recommendedRoute",
  "recommendedContinueFrom",
  "continuationStatus",
  "shouldStartFromBeginning",
  "needsManualResearch",
  "sourceEvidence",
  "confidenceLevel",
  "spoilerFreeNote",
  "adaptationNote",
  "lastUpdated",
  "needsVerification",
  "dataSources",
];

const defaultSourceTypes = [
  "Manga",
  "Light Novel",
  "Web Novel",
  "Original Anime",
  "Game",
  "Visual Novel",
  "Mixed Source",
  "Manhwa",
  "Manhwa / Web Novel",
  "Manhwa / Webcomic",
  "Light Novel / Manga",
  "Light Novel / Web Novel",
  "Manga / Webcomic",
  "Manga / Original Anime",
  "Web Novel / Manhwa",
];

const defaultConfidenceLevels = ["High", "Medium", "Low", "Unknown"];
const defaultCoverStatuses = ["Real Local Cover", "Generated Cover", "Missing", "Needs Replacement"];
const defaultContinuationStatuses = [
  "Verified",
  "Approximate",
  "Start From Beginning Recommended",
  "Anime Original",
  "Source Caught Up",
  "No Source Continuation",
  "Needs Manual Research",
  "Verified for Season 2 / Needs update if Season 3 is included",
  "Verified for Season 1 / Needs update if Season 2 is included",
  "Verified for Season 2 / Needs update if newer seasons are included",
  "Verified for Season 3 / Needs update if movie included",
  "Verified for Season 4 / Needs update if movies included",
  "Verified for Hashira Training / Needs update if movies included",
];
const defaultResearchPriorities = ["High", "Medium", "Low"];
const oldContinuationStatuses = [
  "Needs Verification",
  "Anime Caught Up",
  "Not Available Yet",
];
const missingText = "Not available yet";
const originalText = "Original anime. No source continuation available.";
const continuationFields = [
  "mangaContinueFrom",
  "mangaContinueVolume",
  "mangaContinueChapter",
  "lightNovelContinueFrom",
  "lightNovelContinueVolume",
  "lightNovelContinueChapter",
  "webNovelContinueFrom",
  "recommendedRoute",
  "recommendedContinueFrom",
  "continuationStatus",
];
const suspiciousLinkPattern = /https?:\/\/|gogoanime|9anime|aniwave|zoro\.to|mangadex|manganato|mangakakalot|kissmanga|novelupdates/i;
const coverPathPattern = /^\/covers\/[a-z0-9-]+\.jpg$/;

export function validateAnimeDatabase(
  animeDatabase,
  {
    sourceTypes = defaultSourceTypes,
    confidenceLevels = defaultConfidenceLevels,
    coverStatuses = defaultCoverStatuses,
    continuationStatuses = defaultContinuationStatuses,
    researchPriorities = defaultResearchPriorities,
    currentDate = new Date(),
    outdatedAfterDays = 180,
  } = {},
) {
  const entries = Array.isArray(animeDatabase) ? animeDatabase : [];
  const problems = [];
  const idCounts = countBy(entries.map((anime) => anime.id));
  const titleCounts = countBy(entries.map((anime) => normalizeTitle(anime.title)));

  entries.forEach((anime, index) => {
    const entryProblems = [];

    requiredFields.forEach((field) => {
      if (!(field in anime)) entryProblems.push(`Missing required field: ${field}`);
    });

    if (idCounts.get(anime.id) > 1) entryProblems.push("Duplicate id");
    if (titleCounts.get(normalizeTitle(anime.title)) > 1) entryProblems.push("Duplicate title");

    if (!sourceTypes.includes(anime.sourceType)) entryProblems.push(`Invalid sourceType: ${anime.sourceType}`);
    if (!confidenceLevels.includes(anime.confidenceLevel)) {
      entryProblems.push(`Invalid confidenceLevel: ${anime.confidenceLevel}`);
    }
    if ("coverStatus" in anime && !coverStatuses.includes(anime.coverStatus)) {
      entryProblems.push(`Invalid coverStatus: ${anime.coverStatus}`);
    }
    if ("coverNeedsUpdate" in anime && typeof anime.coverNeedsUpdate !== "boolean") {
      entryProblems.push("coverNeedsUpdate should be a boolean");
    }
    if (!continuationStatuses.includes(anime.continuationStatus)) {
      entryProblems.push(`Invalid continuationStatus: ${anime.continuationStatus}`);
    }
    if (oldContinuationStatuses.includes(anime.continuationStatus)) {
      entryProblems.push(`Old continuationStatus should be migrated: ${anime.continuationStatus}`);
    }
    if ("researchPriority" in anime && !researchPriorities.includes(anime.researchPriority)) {
      entryProblems.push(`Invalid researchPriority: ${anime.researchPriority}`);
    }
    if (typeof anime.needsManualResearch !== "boolean") {
      entryProblems.push("needsManualResearch should be a boolean");
    }
    if (typeof anime.shouldStartFromBeginning !== "boolean") {
      entryProblems.push("shouldStartFromBeginning should be a boolean");
    }
    if (!Array.isArray(anime.sourceEvidence) || anime.sourceEvidence.length === 0) {
      entryProblems.push("Missing sourceEvidence");
    }
    continuationFields.forEach((field) => {
      if (anime[field] === undefined) entryProblems.push(`Continuation field is undefined: ${field}`);
      if (typeof anime[field] === "string" && anime[field].trim() === "") {
        entryProblems.push(`Blank continuation field: ${field}`);
      }
    });
    if (anime.shouldStartFromBeginning && !String(anime.whyStartFromBeginning || "").trim()) {
      entryProblems.push("Missing whyStartFromBeginning for start-from-beginning entry");
    }
    if (
      typeof anime.continuationNote === "string" &&
      /manual research before publishing|needs manual research before publishing/i.test(anime.continuationNote)
    ) {
      entryProblems.push("Stale manual-research continuationNote");
    }

    if ("seasonsBreakdown" in anime && !Array.isArray(anime.seasonsBreakdown)) {
      entryProblems.push("seasonsBreakdown should be an array");
    } else if (Array.isArray(anime.seasonsBreakdown) && anime.seasonsBreakdown.length > 0) {
      anime.seasonsBreakdown.forEach((season, seasonIndex) => {
        ["seasonNumber", "seasonTitle", "episodes", "releaseYear", "status"].forEach((field) => {
          if (!(field in season)) entryProblems.push(`Season ${seasonIndex + 1} missing field: ${field}`);
        });
      });
    }

    if (isMissingNumber(anime.totalSeasons)) entryProblems.push("Missing totalSeasons");
    if (isMissingNumber(anime.totalEpisodes)) entryProblems.push("Missing totalEpisodes");

    const mainSeasons = Array.isArray(anime.seasonsBreakdown)
      ? anime.seasonsBreakdown.filter((season) => season.status !== "Special")
      : [];
    const seasonCount = mainSeasons.length;
    const episodeCount = mainSeasons.reduce((total, season) => total + (Number.isFinite(season.episodes) ? season.episodes : 0), 0);

    if (!isMissingNumber(anime.totalSeasons) && seasonCount > 0 && anime.totalSeasons !== seasonCount) {
      entryProblems.push(`totalSeasons mismatch: expected ${seasonCount}, found ${anime.totalSeasons}`);
    }

    if (!isMissingNumber(anime.totalEpisodes) && episodeCount > 0 && anime.totalEpisodes !== episodeCount) {
      entryProblems.push(`totalEpisodes mismatch: expected ${episodeCount}, found ${anime.totalEpisodes}`);
    }

    if (!anime.animeEndsAt || anime.animeEndsAt.trim() === "") entryProblems.push("Missing animeEndsAt");
    if (!anime.recommendedRoute || anime.recommendedRoute.trim() === "") entryProblems.push("Missing recommendedRoute");
    if (!anime.recommendedContinueFrom || anime.recommendedContinueFrom.trim() === "") {
      entryProblems.push("Missing recommendedContinueFrom");
    }
    if (!anime.continuationStatus || anime.continuationStatus.trim() === "") {
      entryProblems.push("Missing continuationStatus");
    }
    if (anime.coverImage && !coverPathPattern.test(anime.coverImage)) {
      entryProblems.push("Invalid coverImage path format");
    }
    if (hasMissingContinuation(anime)) entryProblems.push("Continuation needs manual research or route data is incomplete");
    if (isOutdated(anime.lastUpdated, currentDate, outdatedAfterDays)) entryProblems.push("Outdated lastUpdated value");
    if (hasSuspiciousLinks(anime)) entryProblems.push("Possible external, streaming, or piracy link found");
    if (hasAnnouncedSeason(anime) && !statusMentionsAnnouncement(anime.animeStatus)) {
      entryProblems.push("animeStatus does not mention announced/upcoming season");
    }
    if (hasAiringSeason(anime) && !statusMentionsAiring(anime.animeStatus)) {
      entryProblems.push("animeStatus does not mention airing/in-progress season");
    }

    if (entryProblems.length > 0) {
      problems.push({
        id: anime.id || `entry-${index}`,
        title: anime.title || "Untitled entry",
        problems: entryProblems,
      });
    }
  });

  const duplicateIds = [...idCounts.entries()].filter(([, count]) => count > 1).map(([id]) => id);
  const duplicateTitles = [...titleCounts.entries()].filter(([, count]) => count > 1).map(([title]) => title);

  return {
    totalEntries: entries.length,
    needsVerificationCount: entries.filter((anime) => anime.needsVerification).length,
    missingEpisodeCount: entries.filter((anime) => isMissingNumber(anime.totalEpisodes)).length,
    missingSeasonCount: entries.filter((anime) => isMissingNumber(anime.totalSeasons)).length,
    blankContinuationCount: entries.filter(hasBlankContinuationSection).length,
    verifiedContinuationCount: entries.filter((anime) => anime.continuationStatus === "Verified").length,
    approximateContinuationCount: entries.filter((anime) => anime.continuationStatus === "Approximate").length,
    startFromBeginningCount: entries.filter((anime) => anime.continuationStatus === "Start From Beginning Recommended").length,
    originalAnimeContinuationCount: entries.filter((anime) => anime.continuationStatus === "Anime Original").length,
    animeCaughtUpCount: entries.filter((anime) => anime.continuationStatus === "Source Caught Up").length,
    needsManualResearchCount: entries.filter((anime) => anime.needsManualResearch).length,
    continuationStatusCounts: countBy(entries.map((anime) => anime.continuationStatus)),
    duplicateIds,
    duplicateTitles,
    problems,
    problemCount: problems.length,
  };
}

function countBy(values) {
  return values.reduce((counts, value) => {
    counts.set(value, (counts.get(value) || 0) + 1);
    return counts;
  }, new Map());
}

function normalizeTitle(title) {
  return String(title || "").trim().toLowerCase();
}

function isMissingNumber(value) {
  return !Number.isFinite(value);
}

function hasMissingContinuation(anime) {
  if (anime.continuationStatus === "Needs Manual Research") return true;
  if (anime.recommendedContinueFrom === "Needs manual research before publishing.") return true;
  if (anime.sourceType === "Original Anime") return false;
  if (anime.continuationStatus === "Anime Original" || anime.continuationStatus === "No Source Continuation") return false;
  if (anime.continuationStatus === "Start From Beginning Recommended") return false;

  if (anime.sourceType === "Manga") return isMissingValue(anime.mangaContinueFrom);
  if (anime.sourceType === "Light Novel" || anime.sourceType === "Web Novel") {
    return isMissingValue(anime.lightNovelContinueFrom);
  }

  return isMissingValue(anime.mangaContinueFrom) && isMissingValue(anime.lightNovelContinueFrom);
}

function hasBlankContinuationSection(anime) {
  return [
    anime.animeEndsAt,
    anime.recommendedRoute,
    anime.recommendedContinueFrom,
    anime.mangaContinueFrom,
    anime.lightNovelContinueFrom,
    anime.confidenceLevel,
    anime.continuationStatus,
  ].some((value) => value === undefined || value === null || String(value).trim() === "");
}

function isMissingValue(value) {
  return !value || value === missingText || value === originalText;
}

function isOutdated(lastUpdated, currentDate, outdatedAfterDays) {
  const updatedDate = new Date(lastUpdated);
  if (Number.isNaN(updatedDate.getTime())) return true;

  const ageMs = currentDate.getTime() - updatedDate.getTime();
  return ageMs > outdatedAfterDays * 24 * 60 * 60 * 1000;
}

function hasSuspiciousLinks(value) {
  if (typeof value === "string") return suspiciousLinkPattern.test(value);
  if (Array.isArray(value)) return value.some(hasSuspiciousLinks);
  if (value && typeof value === "object") return Object.values(value).some(hasSuspiciousLinks);
  return false;
}

function hasAnnouncedSeason(anime) {
  return anime.seasonsBreakdown?.some((season) => season.status === "Announced");
}

function hasAiringSeason(anime) {
  return anime.seasonsBreakdown?.some((season) => season.status === "Airing");
}

function statusMentionsAnnouncement(status) {
  return /announced|upcoming|sequel|new|more/i.test(status || "");
}

function statusMentionsAiring(status) {
  return /airing|ongoing|in progress|needs verification/i.test(status || "");
}
