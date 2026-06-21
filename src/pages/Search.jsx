import { useDeferredValue, useEffect, useMemo, useState } from "react";
import AnimeCard from "../components/AnimeCard.jsx";
import FilterPanel from "../components/FilterPanel.jsx";
import SearchBar from "../components/SearchBar.jsx";
import { animeDatabase, supportedSourceTypes } from "../data/animeDatabase.js";
import {
  filterAnime,
  getAllConfidenceLevels,
  getAllContinuationStatuses,
  getAllGenres,
  getAllResearchPriorities,
  getAllRecommendedRoutes,
  getAllStatuses,
  getPopularAnime,
  getRecentlyUpdatedAnime,
  sortAnime,
  toAnimeViewModel,
} from "../utils/anime.js";

const popularAnimeIds = [
  "solo-leveling",
  "jujutsu-kaisen",
  "demon-slayer",
];
const initialResultCount = 18;
const loadMoreCount = 18;
const defaultFilters = {
  query: "",
  selectedGenre: "All",
  selectedSourceType: "All",
  selectedStatus: "All",
  selectedConfidenceLevel: "All",
  selectedNeedsVerification: "All",
  selectedContinuationStatus: "All",
  selectedRecommendedRoute: "All",
  selectedResearchPriority: "All",
  sortBy: "Last updated newest",
};

export default function Search() {
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const [query, setQuery] = useState(defaultFilters.query);
  const deferredQuery = useDeferredValue(query);
  const [selectedGenre, setSelectedGenre] = useState(defaultFilters.selectedGenre);
  const [selectedSourceType, setSelectedSourceType] = useState(defaultFilters.selectedSourceType);
  const [selectedStatus, setSelectedStatus] = useState(defaultFilters.selectedStatus);
  const [selectedConfidenceLevel, setSelectedConfidenceLevel] = useState(defaultFilters.selectedConfidenceLevel);
  const [selectedNeedsVerification, setSelectedNeedsVerification] = useState(defaultFilters.selectedNeedsVerification);
  const [selectedContinuationStatus, setSelectedContinuationStatus] = useState(defaultFilters.selectedContinuationStatus);
  const [selectedIsekaiQuickFilter, setSelectedIsekaiQuickFilter] = useState("All");
  const [selectedRecommendedRoute, setSelectedRecommendedRoute] = useState(defaultFilters.selectedRecommendedRoute);
  const [selectedResearchPriority, setSelectedResearchPriority] = useState(defaultFilters.selectedResearchPriority);
  const [sortBy, setSortBy] = useState(defaultFilters.sortBy);
  const [visibleCount, setVisibleCount] = useState(initialResultCount);
  const [showFilters, setShowFilters] = useState(false);

  const genres = useMemo(() => getAllGenres(animeList), [animeList]);
  const sourceTypes = useMemo(() => ["All", ...supportedSourceTypes], []);
  const statuses = useMemo(() => getAllStatuses(animeList), [animeList]);
  const confidenceLevels = useMemo(() => getAllConfidenceLevels(animeList), [animeList]);
  const continuationStatuses = useMemo(() => getAllContinuationStatuses(animeList), [animeList]);
  const recommendedRoutes = useMemo(() => getAllRecommendedRoutes(animeList), [animeList]);
  const researchPriorities = useMemo(() => getAllResearchPriorities(animeList), [animeList]);
  const popularAnime = useMemo(() => getPopularAnime(animeList, popularAnimeIds), [animeList]);
  const recentlyUpdatedAnime = useMemo(() => getRecentlyUpdatedAnime(animeList), [animeList]);
  const finishedStatus = useMemo(
    () => statuses.find((status) => status.toLowerCase().includes("finished")) ?? "All",
    [statuses],
  );
  const results = useMemo(
    () => {
      const filteredAnime = filterAnime(
        animeList,
        deferredQuery,
        selectedGenre,
        selectedSourceType,
        selectedStatus,
        selectedConfidenceLevel,
        selectedNeedsVerification,
        selectedContinuationStatus,
        selectedRecommendedRoute,
        selectedResearchPriority,
      );

      const quickFilteredAnime = filteredAnime.filter((anime) => {
        const isekaiMatches =
          selectedIsekaiQuickFilter === "All" ||
          (selectedIsekaiQuickFilter === "Isekai" && anime.isekaiSubgenres.length > 0) ||
          anime.isekaiSubgenres.includes(selectedIsekaiQuickFilter);

        return isekaiMatches;
      });

      return sortAnime(quickFilteredAnime, sortBy);
    },
    [
      animeList,
      deferredQuery,
      selectedGenre,
      selectedSourceType,
      selectedStatus,
      selectedConfidenceLevel,
      selectedNeedsVerification,
      selectedContinuationStatus,
      selectedIsekaiQuickFilter,
      selectedRecommendedRoute,
      selectedResearchPriority,
      sortBy,
    ],
  );
  const visibleResults = useMemo(() => results.slice(0, visibleCount), [results, visibleCount]);
  const hasMoreResults = visibleResults.length < results.length;
  const activeFilterCount = [
    query !== defaultFilters.query,
    selectedGenre !== defaultFilters.selectedGenre,
    selectedSourceType !== defaultFilters.selectedSourceType,
    selectedStatus !== defaultFilters.selectedStatus,
    selectedConfidenceLevel !== defaultFilters.selectedConfidenceLevel,
    selectedNeedsVerification !== defaultFilters.selectedNeedsVerification,
    selectedContinuationStatus !== defaultFilters.selectedContinuationStatus,
    selectedIsekaiQuickFilter !== "All",
    selectedRecommendedRoute !== defaultFilters.selectedRecommendedRoute,
    selectedResearchPriority !== defaultFilters.selectedResearchPriority,
  ].filter(Boolean).length;

  useEffect(() => {
    setVisibleCount(initialResultCount);
  }, [
    deferredQuery,
    selectedGenre,
    selectedSourceType,
    selectedStatus,
    selectedConfidenceLevel,
    selectedNeedsVerification,
    selectedContinuationStatus,
    selectedIsekaiQuickFilter,
    selectedRecommendedRoute,
    selectedResearchPriority,
    sortBy,
  ]);

  const resetFilters = () => {
    setQuery(defaultFilters.query);
    setSelectedGenre(defaultFilters.selectedGenre);
    setSelectedSourceType(defaultFilters.selectedSourceType);
    setSelectedStatus(defaultFilters.selectedStatus);
    setSelectedConfidenceLevel(defaultFilters.selectedConfidenceLevel);
    setSelectedNeedsVerification(defaultFilters.selectedNeedsVerification);
    setSelectedContinuationStatus(defaultFilters.selectedContinuationStatus);
    setSelectedIsekaiQuickFilter("All");
    setSelectedRecommendedRoute("All");
    setSelectedResearchPriority(defaultFilters.selectedResearchPriority);
    setSortBy(defaultFilters.sortBy);
    setVisibleCount(initialResultCount);
  };
  const quickFilters = [
    {
      label: "Isekai",
      active: selectedIsekaiQuickFilter === "Isekai",
      onClick: () => setSelectedIsekaiQuickFilter("Isekai"),
    },
    {
      label: "Reincarnation",
      active: selectedIsekaiQuickFilter === "Reincarnation",
      onClick: () => setSelectedIsekaiQuickFilter("Reincarnation"),
    },
    {
      label: "Overpowered MC",
      active: selectedIsekaiQuickFilter === "Overpowered MC",
      onClick: () => setSelectedIsekaiQuickFilter("Overpowered MC"),
    },
    {
      label: "Slow Life",
      active: selectedIsekaiQuickFilter === "Slow Life",
      onClick: () => setSelectedIsekaiQuickFilter("Slow Life"),
    },
    genres.includes("Romance") && {
      label: "Romance",
      active: selectedGenre === "Romance",
      onClick: () => setSelectedGenre("Romance"),
    },
    finishedStatus !== "All" && {
      label: "Finished Anime",
      active: selectedStatus === finishedStatus,
      onClick: () => setSelectedStatus(finishedStatus),
    },
    sourceTypes.includes("Light Novel") && {
      label: "Light Novel Route",
      active: selectedRecommendedRoute === "Light Novel",
      onClick: () => setSelectedRecommendedRoute("Light Novel"),
    },
    sourceTypes.includes("Manga") && {
      label: "Manga Route",
      active: selectedRecommendedRoute === "Manga",
      onClick: () => setSelectedRecommendedRoute("Manga"),
    },
    confidenceLevels.includes("High") && {
      label: "High Confidence",
      active: selectedConfidenceLevel === "High",
      onClick: () => setSelectedConfidenceLevel("High"),
    },
    continuationStatuses.includes("Verified") && {
      label: "Verified Continuation",
      active: selectedContinuationStatus === "Verified",
      onClick: () => setSelectedContinuationStatus("Verified"),
    },
    continuationStatuses.includes("Approximate") && {
      label: "Approximate Continuation",
      active: selectedContinuationStatus === "Approximate",
      onClick: () => setSelectedContinuationStatus("Approximate"),
    },
    continuationStatuses.includes("Start From Beginning Recommended") && {
      label: "Start From Beginning",
      active: selectedContinuationStatus === "Start From Beginning Recommended",
      onClick: () => setSelectedContinuationStatus("Start From Beginning Recommended"),
    },
    continuationStatuses.includes("Anime Original") && {
      label: "Anime Original",
      active: selectedContinuationStatus === "Anime Original",
      onClick: () => setSelectedContinuationStatus("Anime Original"),
    },
    continuationStatuses.includes("Source Caught Up") && {
      label: "Source Caught Up",
      active: selectedContinuationStatus === "Source Caught Up",
      onClick: () => setSelectedContinuationStatus("Source Caught Up"),
    },
    {
      label: "Needs Manual Research",
      active: selectedContinuationStatus === "Needs Manual Research",
      onClick: () => setSelectedContinuationStatus("Needs Manual Research"),
    },
    researchPriorities.includes("High") && {
      label: "High Research Priority",
      active: selectedResearchPriority === "High",
      onClick: () => setSelectedResearchPriority("High"),
    },
  ].filter(Boolean);

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Anime search</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Browse anime continuation guides</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            Search by main title or alternative title, then narrow the mock guide list by genre,
            status, source type, or confidence level.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowFilters(true)}
          className="mb-4 w-full rounded-xl border border-cyan-200/20 bg-cyan-300/10 px-4 py-3 text-sm font-black text-cyan-50 shadow-[0_14px_35px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300/15 lg:hidden"
        >
          Show Filters
        </button>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className={`${showFilters ? "block" : "hidden"} min-w-0 lg:block`}>
            <FilterPanel
              genres={genres}
              selectedGenre={selectedGenre}
              onGenreChange={setSelectedGenre}
              sourceTypes={sourceTypes}
              selectedSourceType={selectedSourceType}
              onSourceTypeChange={setSelectedSourceType}
              statuses={statuses}
              selectedStatus={selectedStatus}
              onStatusChange={setSelectedStatus}
              confidenceLevels={confidenceLevels}
              selectedConfidenceLevel={selectedConfidenceLevel}
              onConfidenceLevelChange={setSelectedConfidenceLevel}
              selectedNeedsVerification={selectedNeedsVerification}
              onNeedsVerificationChange={setSelectedNeedsVerification}
              continuationStatuses={continuationStatuses}
              selectedContinuationStatus={selectedContinuationStatus}
              onContinuationStatusChange={setSelectedContinuationStatus}
              recommendedRoutes={recommendedRoutes}
              selectedRecommendedRoute={selectedRecommendedRoute}
              onRecommendedRouteChange={setSelectedRecommendedRoute}
              researchPriorities={researchPriorities}
              selectedResearchPriority={selectedResearchPriority}
              onResearchPriorityChange={setSelectedResearchPriority}
              sortBy={sortBy}
              onSortByChange={setSortBy}
              onClearFilters={resetFilters}
              onClose={() => setShowFilters(false)}
              quickFilters={quickFilters}
              activeFilterCount={activeFilterCount}
            />
          </div>

          <section aria-labelledby="search-results-title" className="min-w-0">
            <h2 id="search-results-title" className="sr-only">
              Anime search results
            </h2>
            <div className="anime-glow-card min-w-0 rounded-2xl p-4">
              <SearchBar value={query} onChange={setQuery} placeholder="Search by title or alternative title..." />
              <div className="mt-3 flex items-center justify-between text-sm text-slate-400">
                <span>
                  Showing {visibleResults.length} of {results.length} guide{results.length === 1 ? "" : "s"}
                </span>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="font-semibold text-cyan-100 hover:text-white"
                >
                  Clear filters
                </button>
              </div>
            </div>

            {results.length > 0 ? (
              <>
                <AnimeGrid anime={visibleResults} className="mt-5" />
                {hasMoreResults && (
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((currentCount) => currentCount + loadMoreCount)}
                      className="rounded-xl border border-white/10 bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-cyan-100"
                    >
                      Load more anime
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="manga-panel mt-5 rounded-2xl p-8 text-center shadow-[0_18px_55px_rgba(2,6,23,0.22)]">
                <h2 className="text-xl font-black text-white">No anime found yet</h2>
                <p className="mt-2 text-sm text-slate-300">
                  Try a different title, check alternate spelling, or clear a filter. The guide
                  library is still using friendly mock data.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-cyan-100"
                >
                  Clear search and filters
                </button>
              </div>
            )}
          </section>
        </div>

        <BrowseSection
          eyebrow="Popular Anime"
          title="Student-friendly picks"
          description="Mock popular entries that make good examples for browsing and card layouts."
          anime={popularAnime}
        />

        <BrowseSection
          eyebrow="Recently Updated"
          title="Fresh guide updates"
          description="Sorted by last updated date so future editors can quickly review recent changes."
          anime={recentlyUpdatedAnime}
        />
      </div>
    </div>
  );
}

function BrowseSection({ eyebrow, title, description, anime }) {
  return (
    <section className="mt-12">
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">{description}</p>
      </div>
      <AnimeGrid anime={anime} />
    </section>
  );
}

function AnimeGrid({ anime, className = "" }) {
  return (
    <div className={`grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-3 ${className}`}>
      {anime.map((item) => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </div>
  );
}
