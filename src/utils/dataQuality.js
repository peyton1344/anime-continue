import { hasUpcomingSeason } from "./anime.js";

export const DATA_REPORTS_STORAGE_KEY = "afterAnimeGuide.dataReports";

const notAvailable = "Not available yet";
const originalContinuation = "Original anime. No source continuation available.";
const outdatedAfterDays = 180;

const issueDefinitions = {
  missingEpisodes: { label: "Missing Episodes", tone: "amber" },
  missingSeasons: { label: "Missing Seasons", tone: "amber" },
  missingSeasonData: { label: "Missing Season Data", tone: "amber" },
  needsVerification: { label: "Needs Verification", tone: "amber" },
  lowConfidence: { label: "Low Confidence", tone: "amber" },
  unknownConfidence: { label: "Unknown Confidence", tone: "amber" },
  outdatedData: { label: "Outdated Data", tone: "default" },
  missingContinuation: { label: "Missing Continuation", tone: "pink" },
  originalAnime: { label: "Original Anime", tone: "blue" },
  approximateContinuation: { label: "Approximate Continuation", tone: "amber" },
  needsManualResearch: { label: "Needs Manual Research", tone: "pink" },
};

export const dataReviewFilters = [
  { id: "all", label: "All issues" },
  { id: "verifiedContinuation", label: "Verified" },
  { id: "approximateContinuation", label: "Approximate" },
  { id: "needsManualResearch", label: "Needs manual research" },
  { id: "highConfidence", label: "High confidence" },
  { id: "mediumConfidence", label: "Medium confidence" },
  { id: "needsVerification", label: "Needs verification" },
  { id: "lowConfidence", label: "Low confidence" },
  { id: "unknownConfidence", label: "Unknown confidence" },
  { id: "missingSeasonData", label: "Missing season data" },
  { id: "missingContinuation", label: "Missing continuation data" },
  { id: "originalAnime", label: "Original anime" },
  { id: "lightNovelSource", label: "Light novel source" },
  { id: "mangaSource", label: "Manga source" },
  { id: "announcedSeason", label: "Announced season" },
];

export const coverReviewFilters = [
  { id: "all", label: "All covers" },
  { id: "real", label: "Real Local Cover" },
  { id: "generated", label: "Generated Cover" },
  { id: "missing", label: "Missing Cover" },
  { id: "needsReplacement", label: "Needs Replacement" },
];

export function getDataIssues(anime, currentDate = new Date()) {
  const issues = [];

  if (!hasKnownNumber(anime.totalEpisodes)) issues.push(toIssue("missingEpisodes"));
  if (!hasKnownNumber(anime.totalSeasons)) issues.push(toIssue("missingSeasons"));
  if (!Array.isArray(anime.seasonsBreakdown) || anime.seasonsBreakdown.length === 0) {
    issues.push(toIssue("missingSeasonData"));
  }
  if (anime.needsVerification) issues.push(toIssue("needsVerification"));
  if (anime.confidenceLevel === "Low") issues.push(toIssue("lowConfidence"));
  if (anime.confidenceLevel === "Unknown") issues.push(toIssue("unknownConfidence"));
  if (isOutdated(anime.lastUpdated, currentDate)) issues.push(toIssue("outdatedData"));
  if (hasMissingContinuation(anime)) issues.push(toIssue("missingContinuation"));
  if (anime.sourceType === "Original Anime") issues.push(toIssue("originalAnime"));
  if (anime.continuationStatus === "Approximate") issues.push(toIssue("approximateContinuation"));
  if (anime.needsManualResearch || anime.continuationStatus === "Needs Manual Research") {
    issues.push(toIssue("needsManualResearch"));
  }

  return issues;
}

export function shouldShowInDataReview(anime, currentDate = new Date()) {
  return getDataIssues(anime, currentDate).length > 0;
}

export function matchesDataReviewFilter(anime, filterId, currentDate = new Date()) {
  if (filterId === "all") return shouldShowInDataReview(anime, currentDate);
  if (filterId === "lightNovelSource") return anime.sourceType === "Light Novel";
  if (filterId === "mangaSource") return anime.sourceType === "Manga";
  if (filterId === "announcedSeason") return hasUpcomingSeason(anime);
  if (filterId === "verifiedContinuation") return anime.continuationStatus === "Verified";
  if (filterId === "approximateContinuation") return anime.continuationStatus === "Approximate";
  if (filterId === "needsManualResearch") {
    return anime.needsManualResearch || anime.continuationStatus === "Needs Manual Research";
  }
  if (filterId === "highConfidence") return anime.confidenceLevel === "High";
  if (filterId === "mediumConfidence") return anime.confidenceLevel === "Medium";

  return getDataIssues(anime, currentDate).some((issue) => issue.id === filterId);
}

export function getCoverStatusBadge(anime) {
  if (anime.coverStatus === "Real Local Cover") return { label: "Real Cover", tone: "green" };
  if (anime.coverStatus === "Missing") return { label: "Missing Cover", tone: "amber" };
  if (anime.coverStatus === "Needs Replacement") return { label: "Needs Update", tone: "amber" };
  return { label: "Generated Cover", tone: "blue" };
}

export function getCoverStats(animeList) {
  return animeList.reduce(
    (stats, anime) => {
      stats.total += 1;
      if (anime.coverStatus === "Real Local Cover") stats.realLocalCovers += 1;
      if (anime.coverStatus === "Generated Cover") stats.generatedCovers += 1;
      if (anime.coverStatus === "Missing") stats.missingCovers += 1;
      if (anime.coverNeedsUpdate || anime.coverStatus === "Needs Replacement") stats.needsCoverUpdates += 1;
      if (anime.coverStatus === "Generated Cover" && anime.coverNeedsUpdate && anime.coverImage) stats.brokenCoverPaths += 1;
      return stats;
    },
    {
      total: 0,
      realLocalCovers: 0,
      generatedCovers: 0,
      missingCovers: 0,
      brokenCoverPaths: 0,
      needsCoverUpdates: 0,
    },
  );
}

export function matchesCoverReviewFilter(anime, filterId) {
  if (filterId === "all") return true;
  if (filterId === "real") return anime.coverStatus === "Real Local Cover";
  if (filterId === "generated") return anime.coverStatus === "Generated Cover";
  if (filterId === "missing") return anime.coverStatus === "Missing";
  if (filterId === "needsReplacement") return anime.coverNeedsUpdate || anime.coverStatus === "Needs Replacement";
  return true;
}

export function readLocalReports() {
  try {
    const reports = JSON.parse(localStorage.getItem(DATA_REPORTS_STORAGE_KEY) || "[]");
    return Array.isArray(reports) ? reports : [];
  } catch {
    return [];
  }
}

export function saveLocalReport(report) {
  const reports = readLocalReports();
  const nextReports = [report, ...reports];
  localStorage.setItem(DATA_REPORTS_STORAGE_KEY, JSON.stringify(nextReports));
  return nextReports;
}

export function getReportIssueTypes() {
  return [
    "Wrong episode count",
    "Wrong season count",
    "Wrong manga continuation",
    "Wrong light novel continuation",
    "Wrong source type",
    "Other",
  ];
}

function toIssue(id) {
  return { id, ...issueDefinitions[id] };
}

function hasKnownNumber(value) {
  return Number.isFinite(value) && value > 0;
}

function hasMissingContinuation(anime) {
  if (anime.sourceType === "Original Anime") return false;

  const mangaMissing = isMissingValue(anime.mangaContinueFrom?.label || anime.mangaContinueFrom);
  const lightNovelMissing = isMissingValue(anime.lightNovelContinueFrom?.label || anime.lightNovelContinueFrom);

  if (anime.sourceType === "Manga") return mangaMissing;
  if (anime.sourceType === "Light Novel" || anime.sourceType === "Web Novel") return lightNovelMissing;

  return mangaMissing && lightNovelMissing;
}

function isMissingValue(value) {
  return !value || value === notAvailable || value === originalContinuation;
}

function isOutdated(lastUpdated, currentDate) {
  const updatedDate = new Date(lastUpdated);
  if (Number.isNaN(updatedDate.getTime())) return true;

  const ageMs = currentDate.getTime() - updatedDate.getTime();
  return ageMs > outdatedAfterDays * 24 * 60 * 60 * 1000;
}
