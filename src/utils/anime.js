const notAvailable = "Not available yet";
const originalContinuation = "Original anime. No source continuation available.";

function extractVolume(value) {
  return extractNumber(value, /Volume\s+(\d+)/i);
}

function extractChapter(value) {
  return extractNumber(value, /Chapter\s+(\d+)/i);
}

function extractNumber(value, pattern) {
  if (typeof value !== "string") return null;
  const match = value.match(pattern);
  return match ? Number(match[1]) : null;
}

function normalizeContinuation(value, volume, chapter) {
  const label = value || notAvailable;

  return {
    volume: normalizeContinuePart(volume, "Volume") ?? formatContinuePart("Volume", extractVolume(label)),
    chapter: normalizeContinuePart(chapter, "Chapter") ?? formatContinuePart("Chapter", extractChapter(label)),
    label,
  };
}

function normalizeContinuePart(value, prefix) {
  if (value === undefined || value === null || value === "") return null;
  if (value === notAvailable) return notAvailable;
  if (typeof value === "number") return `${prefix} ${value}`;
  const label = String(value);
  return label.toLowerCase().startsWith(prefix.toLowerCase()) ? label : `${prefix} ${label}`;
}

function formatContinuePart(prefix, value) {
  return Number.isFinite(value) ? `${prefix} ${value}` : notAvailable;
}

export function toAnimeViewModel(anime) {
  const alternativeTitles = Array.isArray(anime.alternativeTitles) ? anime.alternativeTitles : [];
  const genres = Array.isArray(anime.genres) ? anime.genres : [];
  const mangaContinueFrom = normalizeContinuation(
    anime.mangaContinueFrom,
    anime.mangaContinueVolume,
    anime.mangaContinueChapter,
  );
  const lightNovelContinueFrom = normalizeContinuation(
    anime.lightNovelContinueFrom,
    anime.lightNovelContinueVolume,
    anime.lightNovelContinueChapter,
  );
  const seasonsBreakdown = Array.isArray(anime.seasonsBreakdown) ? anime.seasonsBreakdown : [];
  const isekaiSubgenres = Array.isArray(anime.isekaiSubgenres) ? anime.isekaiSubgenres : [];
  const searchText = normalize([anime.title || "", ...alternativeTitles].join(" "));

  return {
    ...anime,
    title: anime.title || "Untitled Anime",
    alternativeTitles,
    genres,
    seasonsBreakdown,
    isekaiSubgenres,
    searchText,
    coverImage: typeof anime.coverImage === "string" ? anime.coverImage : "",
    status: anime.animeStatus || "Status not available yet",
    animeLastEpisode: anime.animeEndsAt || notAvailable,
    mangaContinueVolume: mangaContinueFrom.volume,
    mangaContinueChapter: mangaContinueFrom.chapter,
    lightNovelContinueVolume: lightNovelContinueFrom.volume,
    lightNovelContinueChapter: lightNovelContinueFrom.chapter,
    mangaContinueFrom,
    lightNovelContinueFrom,
    webNovelContinueFrom: anime.webNovelContinueFrom || notAvailable,
    recommendedContinueFrom: anime.recommendedContinueFrom || getContinueLabel({ ...anime, mangaContinueFrom, lightNovelContinueFrom }),
    continuationStatus: anime.continuationStatus || "Needs Manual Research",
    shouldStartFromBeginning: Boolean(anime.shouldStartFromBeginning),
    whyStartFromBeginning: anime.whyStartFromBeginning || "Not required for this entry.",
    continuationNote: anime.continuationNote || "The exact continuation point is not verified yet.",
    researchPriority: anime.researchPriority || "Medium",
    needsManualResearch: Boolean(anime.needsManualResearch),
    sourceEvidence: Array.isArray(anime.sourceEvidence) ? anime.sourceEvidence : [],
    coverStatus: anime.coverStatus || "Unknown",
    coverCredit: anime.coverCredit || "Generated CSS cover fallback.",
    coverNeedsUpdate: Boolean(anime.coverNeedsUpdate || anime.coverStatus === "Missing" || anime.coverStatus === "Needs Replacement"),
    notes: anime.adaptationNote || notAvailable,
    spoilerFreeSummary: anime.spoilerFreeNote || notAvailable,
    isOriginalAnime: anime.sourceType === "Original Anime",
  };
}

export function hasUpcomingSeason(anime) {
  return anime.seasonsBreakdown?.some((season) => season.status === "Announced") || false;
}

export function formatEpisodeCount(value) {
  return Number.isFinite(value) && value > 0 ? value : "Episodes not available yet";
}

export function formatSeasonCount(value) {
  return Number.isFinite(value) && value > 0 ? value : "Seasons not available yet";
}

export function formatSeasonEpisodes(episodes) {
  return Number.isFinite(episodes) && episodes > 0 ? `${episodes} episodes` : "TBA";
}

export function getSeasonBreakdown(anime) {
  return Array.isArray(anime.seasonsBreakdown) ? anime.seasonsBreakdown : [];
}

export function getContinueLabel(anime) {
  if (anime.recommendedContinueFrom && anime.recommendedContinueFrom !== notAvailable) {
    return anime.recommendedContinueFrom;
  }

  if (anime.sourceType === "Original Anime") {
    return originalContinuation;
  }

  if (anime.sourceType === "Light Novel" && anime.lightNovelContinueFrom?.label !== "Not available yet") {
    return anime.lightNovelContinueFrom.label;
  }

  if (anime.sourceType === "Manga" && anime.mangaContinueFrom?.label !== "Not available yet") {
    return anime.mangaContinueFrom.label;
  }

  if (anime.recommendedRoute && anime.recommendedRoute !== "Manga" && anime.recommendedRoute !== "Light Novel") {
    return anime.recommendedRoute;
  }

  return notAvailable;
}

export function hasContinuationValue(value) {
  const label = typeof value === "string" ? value : value?.label;
  return Boolean(label && label !== notAvailable && label !== originalContinuation);
}

export function getRecommendedRouteType(anime) {
  if (anime.sourceType === "Original Anime" || anime.continuationStatus === "Anime Original") return "No continuation available";

  const route = anime.recommendedRoute || "";
  const routeText = route.toLowerCase();

  if (routeText.includes("web novel")) return "Web Novel Route";
  if (routeText.includes("manhwa") || anime.sourceType === "Manhwa / Web Novel") return "Manhwa Route";
  if (routeText.includes("light novel")) return "Light Novel Route";
  if (routeText.includes("manga")) return "Manga Route";
  if (anime.sourceType === "Web Novel") return "Web Novel Route";
  if (anime.sourceType === "Light Novel") return "Light Novel Route";
  if (anime.sourceType === "Manga") return "Manga Route";

  return hasContinuationValue(anime.mangaContinueFrom) || hasContinuationValue(anime.lightNovelContinueFrom)
    ? `${anime.recommendedRoute || anime.sourceType} Route`
    : "No continuation available";
}

export function getRecommendedRouteExplanation(anime) {
  const routeType = getRecommendedRouteType(anime);

  if (routeType === "No continuation available") {
    return anime.recommendedContinueFrom || "This entry is marked as an original anime or has no confirmed source continuation in the local database.";
  }

  if (anime.continuationStatus === "Needs Verification") {
    return "The exact continuation point is not verified yet, so this entry is flagged for manual research before publishing.";
  }

  if (anime.continuationStatus === "Needs Manual Research") {
    return "The exact continuation point is not verified yet, so this entry is flagged for manual review before publishing.";
  }

  if (anime.continuationStatus === "Approximate") {
    return "This is an approximate continuation point. Starting a little earlier may give smoother context.";
  }

  if (anime.continuationStatus === "Start From Beginning Recommended") {
    return anime.whyStartFromBeginning || "Start from the beginning because the anime may skip, rearrange, compress, or diverge from the source.";
  }

  if (anime.continuationStatus === "Source Caught Up") {
    return "The anime is caught up or close to the available source material, so there may not be a useful next reading point yet.";
  }

  if (routeType === "Light Novel Route") {
    return "The light novel route is highlighted because it is usually closest to the original source coverage for this entry.";
  }

  if (routeType === "Web Novel Route") {
    return "The web novel route is highlighted because the local data points to web novel material as the best available continuation path.";
  }

  if (routeType === "Manhwa Route") {
    return "The manhwa or webtoon route is highlighted because it is the clearest practical continuation path for most anime viewers.";
  }

  if (routeType === "Manga Route") {
    return "The manga route is highlighted because the local data has the clearest manga continuation point for this entry.";
  }

  return "This route is based on the local recommendedRoute field and should be checked if the entry is marked for verification.";
}

export function getRouteComparison(anime) {
  const hasManga = hasContinuationValue(anime.mangaContinueFrom);
  const hasLightNovel = hasContinuationValue(anime.lightNovelContinueFrom);

  if (!hasManga || !hasLightNovel) return null;

  const recommendedRouteType = getRecommendedRouteType(anime);
  const recommended = recommendedRouteType.includes("Light Novel") ? "Light Novel" : "Manga";

  return {
    recommended,
    rows: [
      {
        label: "More complete",
        manga: anime.sourceType === "Manga" ? "Primary source route" : "Useful adaptation route",
        lightNovel: anime.sourceType === "Light Novel" ? "Primary source route" : "Useful source route",
      },
      {
        label: "Closer to original story",
        manga: anime.sourceType === "Manga" ? "Usually closest" : "May adapt or condense material",
        lightNovel: anime.sourceType === "Light Novel" ? "Usually closest" : "Depends on this entry",
      },
      {
        label: "Easier to follow",
        manga: "Visual and quick to scan",
        lightNovel: "More text detail and context",
      },
      {
        label: "Recommended",
        manga: recommended === "Manga" ? "Recommended" : "Secondary option",
        lightNovel: recommended === "Light Novel" ? "Recommended" : "Secondary option",
      },
    ],
  };
}

export function normalize(value) {
  return String(value ?? "").trim().toLowerCase();
}

export function filterAnime(
  animeList,
  searchTerm,
  selectedGenre,
  selectedSourceType,
  selectedStatus,
  selectedConfidenceLevel,
  selectedNeedsVerification = "All",
  selectedContinuationStatus = "All",
  selectedRecommendedRoute = "All",
  selectedResearchPriority = "All",
) {
  const query = normalize(searchTerm);

  return animeList.filter((anime) => {
    const titleMatches = !query || anime.searchText?.includes(query);

    const genreMatches = selectedGenre === "All" || anime.genres.includes(selectedGenre);
    const sourceMatches = selectedSourceType === "All" || anime.sourceType === selectedSourceType;
    const statusMatches = selectedStatus === "All" || anime.status === selectedStatus;
    const confidenceMatches =
      selectedConfidenceLevel === "All" || anime.confidenceLevel === selectedConfidenceLevel;
    const verificationMatches =
      selectedNeedsVerification === "All" ||
      (selectedNeedsVerification === "Needs verification" && anime.needsVerification) ||
      (selectedNeedsVerification === "Verified" && !anime.needsVerification) ||
      (selectedNeedsVerification === "Verified continuation" && anime.continuationStatus === "Verified");
    const continuationStatusMatches =
      selectedContinuationStatus === "All" || anime.continuationStatus === selectedContinuationStatus;
    const routeMatches =
      selectedRecommendedRoute === "All" || anime.recommendedRoute === selectedRecommendedRoute;
    const researchPriorityMatches =
      selectedResearchPriority === "All" || anime.researchPriority === selectedResearchPriority;

    return (
      titleMatches &&
      genreMatches &&
      sourceMatches &&
      statusMatches &&
      confidenceMatches &&
      verificationMatches &&
      continuationStatusMatches &&
      routeMatches &&
      researchPriorityMatches
    );
  });
}

export function sortAnime(animeList, sortBy) {
  const sortedAnime = [...animeList];

  if (sortBy === "Title A-Z") {
    return sortedAnime.sort((first, second) => first.title.localeCompare(second.title));
  }

  if (sortBy === "Title Z-A") {
    return sortedAnime.sort((first, second) => second.title.localeCompare(first.title));
  }

  if (sortBy === "Release year newest") {
    return sortedAnime.sort((first, second) => second.releaseYear - first.releaseYear);
  }

  if (sortBy === "Release year oldest") {
    return sortedAnime.sort((first, second) => first.releaseYear - second.releaseYear);
  }

  if (sortBy === "Total episodes highest") {
    return sortedAnime.sort((first, second) => (second.totalEpisodes || 0) - (first.totalEpisodes || 0));
  }

  if (sortBy === "Total episodes lowest") {
    return sortedAnime.sort((first, second) => (first.totalEpisodes || 0) - (second.totalEpisodes || 0));
  }

  return sortedAnime.sort((first, second) => new Date(second.lastUpdated) - new Date(first.lastUpdated));
}

export function getAllGenres(animeList) {
  return ["All", ...new Set(animeList.flatMap((anime) => anime.genres))].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return a.localeCompare(b);
  });
}

export function getAllStatuses(animeList) {
  return ["All", ...new Set(animeList.map((anime) => anime.status))].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return a.localeCompare(b);
  });
}

export function getAllConfidenceLevels(animeList) {
  const confidenceOrder = ["All", "High", "Medium", "Low", "Unknown"];
  const values = new Set(animeList.map((anime) => anime.confidenceLevel));

  return confidenceOrder.filter((level) => level === "All" || values.has(level));
}

export function getAllContinuationStatuses(animeList) {
  const statusOrder = [
    "All",
    "Verified",
    "Approximate",
    "Start From Beginning Recommended",
    "Anime Original",
    "Source Caught Up",
    "No Source Continuation",
    "Needs Manual Research",
    "Verified for Season 1 / Needs update if Season 2 is included",
    "Verified for Season 2 / Needs update if Season 3 is included",
    "Verified for Season 2 / Needs update if newer seasons are included",
    "Verified for Season 3 / Needs update if movie included",
    "Verified for Season 4 / Needs update if movies included",
    "Verified for Hashira Training / Needs update if movies included",
  ];
  const values = new Set(animeList.map((anime) => anime.continuationStatus).filter(Boolean));
  const orderedStatuses = statusOrder.filter((status) => status === "All" || values.has(status));
  const remainingStatuses = [...values]
    .filter((status) => !statusOrder.includes(status))
    .sort((first, second) => first.localeCompare(second));

  return [...orderedStatuses, ...remainingStatuses];
}

export function getAllResearchPriorities(animeList) {
  const priorityOrder = ["All", "High", "Medium", "Low"];
  const values = new Set(animeList.map((anime) => anime.researchPriority).filter(Boolean));

  return priorityOrder.filter((priority) => priority === "All" || values.has(priority));
}

export function getAllRecommendedRoutes(animeList) {
  return ["All", ...new Set(animeList.map((anime) => anime.recommendedRoute).filter(Boolean))].sort((a, b) => {
    if (a === "All") return -1;
    if (b === "All") return 1;
    return a.localeCompare(b);
  });
}

export function getPopularAnime(animeList, popularAnimeIds) {
  return popularAnimeIds
    .map((id) => animeList.find((anime) => anime.id === id))
    .filter(Boolean);
}

export function getRecentlyUpdatedAnime(animeList, limit = 3) {
  return [...animeList]
    .sort((first, second) => new Date(second.lastUpdated) - new Date(first.lastUpdated))
    .slice(0, limit);
}
