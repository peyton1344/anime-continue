import { useDeferredValue, useEffect, useMemo, useState } from "react";
import AnimeCard from "../components/AnimeCard.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {
  animeDatabase,
  supportedConfidenceLevels,
  supportedContinuationStatuses,
  supportedResearchPriorities,
  supportedSourceTypes,
} from "../data/animeDatabase.js";
import { getAllGenres, toAnimeViewModel } from "../utils/anime.js";

const isekaiSubgenres = [
  "All",
  "Reincarnation",
  "Summoned",
  "Transported",
  "Game World",
  "Reverse Isekai",
  "Villainess",
  "Slow Life",
  "Overpowered MC",
  "Kingdom Building",
  "Cooking",
  "Farming",
  "Dungeon",
  "Fantasy Adventure",
];

const seasonRanges = ["All", "1 season", "2 seasons", "3+ seasons", "5+ seasons"];
const episodeRanges = ["All", "1-12 episodes", "13-24 episodes", "25-50 episodes", "51+ episodes"];
const verificationOptions = ["All", "Needs verification", "Verified"];
const continuationStatusOptions = ["All", ...supportedContinuationStatuses];
const researchPriorityOptions = ["All", ...supportedResearchPriorities];
const sortOptions = [
  "Recently updated",
  "Title A-Z",
  "Newest release year",
  "Oldest release year",
  "Most episodes",
  "Most seasons",
  "Highest confidence first",
];
const initialVisibleCount = 18;
const loadMoreCount = 18;

const defaultFilters = {
  query: "",
  subgenre: "All",
  genre: "All",
  sourceType: "All",
  seasonRange: "All",
  episodeRange: "All",
  status: "All",
  confidenceLevel: "All",
  needsVerification: "All",
  continuationStatus: "All",
  researchPriority: "All",
  recommendedRoute: "All",
  sortBy: "Recently updated",
};

const popularIsekaiIds = [
  "that-time-i-got-reincarnated-as-a-slime",
  "mushoku-tensei-jobless-reincarnation",
  "rezero-starting-life-in-another-world",
  "overlord",
  "konosuba",
  "the-rising-of-the-shield-hero",
];

export default function Isekai() {
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const isekaiAnime = useMemo(() => animeList.filter((anime) => anime.isekaiSubgenres.length > 0), [animeList]);
  const [filters, setFilters] = useState(defaultFilters);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [showFilters, setShowFilters] = useState(false);
  const deferredQuery = useDeferredValue(filters.query);

  const statuses = useMemo(() => ["All", ...new Set(isekaiAnime.map((anime) => anime.status))].sort(), [isekaiAnime]);
  const genres = useMemo(() => getAllGenres(isekaiAnime), [isekaiAnime]);
  const recommendedRoutes = useMemo(
    () => ["All", ...new Set(isekaiAnime.map((anime) => anime.recommendedRoute).filter(Boolean))].sort(),
    [isekaiAnime],
  );
  const finishedStatus = useMemo(
    () => statuses.find((status) => status.toLowerCase().includes("finished")) ?? "All",
    [statuses],
  );

  const filteredAnime = useMemo(() => {
    const nextFilters = { ...filters, query: deferredQuery };
    return sortIsekaiAnime(isekaiAnime.filter((anime) => matchesIsekaiFilters(anime, nextFilters)), filters.sortBy);
  }, [isekaiAnime, filters, deferredQuery]);

  const visibleAnime = useMemo(() => filteredAnime.slice(0, visibleCount), [filteredAnime, visibleCount]);
  const hasMoreResults = visibleAnime.length < filteredAnime.length;
  const activeFilterCount = Object.entries(filters).filter(([key, value]) => key !== "sortBy" && value !== defaultFilters[key]).length;

  const updateFilter = (key, value) => {
    setFilters((currentFilters) => ({ ...currentFilters, [key]: value }));
  };

  const clearFilters = () => {
    setFilters(defaultFilters);
    setVisibleCount(initialVisibleCount);
  };
  const quickFilters = [
    {
      label: "Isekai",
      active: filters.subgenre === "All" && filters.genre === "All",
      onClick: () => setFilters((currentFilters) => ({ ...currentFilters, subgenre: "All", genre: "All" })),
    },
    {
      label: "Reincarnation",
      active: filters.subgenre === "Reincarnation",
      onClick: () => updateFilter("subgenre", "Reincarnation"),
    },
    {
      label: "Overpowered MC",
      active: filters.subgenre === "Overpowered MC",
      onClick: () => updateFilter("subgenre", "Overpowered MC"),
    },
    {
      label: "Slow Life",
      active: filters.subgenre === "Slow Life",
      onClick: () => updateFilter("subgenre", "Slow Life"),
    },
    genres.includes("Romance") && {
      label: "Romance",
      active: filters.genre === "Romance",
      onClick: () => updateFilter("genre", "Romance"),
    },
    finishedStatus !== "All" && {
      label: "Finished Anime",
      active: filters.status === finishedStatus,
      onClick: () => updateFilter("status", finishedStatus),
    },
    recommendedRoutes.includes("Light Novel") && {
      label: "Light Novel Route",
      active: filters.recommendedRoute === "Light Novel",
      onClick: () => updateFilter("recommendedRoute", "Light Novel"),
    },
    recommendedRoutes.includes("Manga") && {
      label: "Manga Route",
      active: filters.recommendedRoute === "Manga",
      onClick: () => updateFilter("recommendedRoute", "Manga"),
    },
    {
      label: "High Confidence",
      active: filters.confidenceLevel === "High",
      onClick: () => updateFilter("confidenceLevel", "High"),
    },
    {
      label: "Verified Continuation",
      active: filters.continuationStatus === "Verified",
      onClick: () => updateFilter("continuationStatus", "Verified"),
    },
    {
      label: "Needs Manual Research",
      active: filters.continuationStatus === "Needs Manual Research",
      onClick: () => updateFilter("continuationStatus", "Needs Manual Research"),
    },
    {
      label: "High Research Priority",
      active: filters.researchPriority === "High",
      onClick: () => updateFilter("researchPriority", "High"),
    },
    {
      label: "Needs Verification",
      active: filters.needsVerification === "Needs verification",
      onClick: () => updateFilter("needsVerification", "Needs verification"),
    },
  ].filter(Boolean);

  useEffect(() => {
    setVisibleCount(initialVisibleCount);
  }, [filters, deferredQuery]);

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Isekai Anime</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Browse isekai by world, route, and vibe</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Search the local database by isekai subgenre, source type, episode count, season count,
            confidence, and continuation route. No external APIs or streaming links are used.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <HeroStat label="Isekai entries" value={isekaiAnime.length} />
          <HeroStat label="Needs verification" value={isekaiAnime.filter((anime) => anime.needsVerification).length} />
          <HeroStat label="Light novel routes" value={isekaiAnime.filter((anime) => anime.recommendedRoute === "Light Novel").length} />
          <HeroStat label="Manga routes" value={isekaiAnime.filter((anime) => anime.recommendedRoute === "Manga").length} />
        </div>

        <button
          type="button"
          onClick={() => setShowFilters(true)}
          className="mt-8 w-full rounded-xl border border-cyan-200/20 bg-cyan-300/10 px-4 py-3 text-sm font-black text-cyan-50 shadow-[0_14px_35px_rgba(34,211,238,0.12)] transition hover:bg-cyan-300/15 lg:hidden"
        >
          Show Filters
        </button>

        <div className="mt-5 grid grid-cols-1 gap-6 lg:mt-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <div className={`${showFilters ? "block" : "hidden"} min-w-0 lg:block`}>
            <IsekaiFilterPanel
              filters={filters}
              genres={genres}
              statuses={statuses}
              recommendedRoutes={recommendedRoutes}
              quickFilters={quickFilters}
              activeFilterCount={activeFilterCount}
              onChange={updateFilter}
              onClear={clearFilters}
              onClose={() => setShowFilters(false)}
            />
          </div>

          <section aria-labelledby="isekai-results-title" className="min-w-0">
            <div className="anime-glow-card min-w-0 rounded-2xl p-4">
              <SearchBar
                value={filters.query}
                onChange={(value) => updateFilter("query", value)}
                placeholder="Search isekai by title or alternate title..."
              />
              <div className="mt-3 flex flex-col gap-2 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
                <span>
                  Showing {visibleAnime.length} of {filteredAnime.length} isekai guide{filteredAnime.length === 1 ? "" : "s"}
                </span>
                <button type="button" onClick={clearFilters} className="self-start font-semibold text-cyan-100 hover:text-white sm:self-auto">
                  Clear filters
                </button>
              </div>
            </div>

            {filteredAnime.length === 0 ? (
              <div className="manga-panel mt-5 rounded-2xl p-8 text-center">
                <h2 id="isekai-results-title" className="text-xl font-black text-white">
                  No isekai anime found for these filters.
                </h2>
                <p className="mt-2 text-sm text-slate-300">Try a different subgenre or clear the filters.</p>
                <button type="button" onClick={clearFilters} className="mt-5 rounded-xl bg-white px-5 py-3 text-sm font-black text-ink transition hover:bg-cyan-100">
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                <h2 id="isekai-results-title" className="sr-only">Isekai anime results</h2>
                <IsekaiGrid anime={visibleAnime} className="mt-5" />
                {hasMoreResults && (
                  <div className="mt-6 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setVisibleCount((currentCount) => currentCount + loadMoreCount)}
                      className="rounded-xl border border-white/10 bg-white px-6 py-3 text-sm font-black text-ink transition hover:bg-cyan-100"
                    >
                      Load more isekai
                    </button>
                  </div>
                )}
              </>
            )}
          </section>
        </div>

        <IsekaiSections anime={isekaiAnime} />
      </section>
    </div>
  );
}

const filterSelectClass =
  "h-12 w-full max-w-full min-w-0 box-border truncate rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm font-bold text-white outline-none transition duration-200 hover:border-cyan-200/30 focus:border-cyan-200 focus:bg-slate-950 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.14),0_0_28px_rgba(192,132,252,0.18)] focus:ring-0";

function IsekaiFilterPanel({ filters, genres, statuses, recommendedRoutes, quickFilters, activeFilterCount, onChange, onClear, onClose }) {
  return (
    <aside className="glass-panel premium-border w-full min-w-0 overflow-hidden rounded-2xl p-4 shadow-[0_24px_80px_rgba(12,18,46,0.32)] lg:sticky lg:top-24 lg:w-80 lg:shrink-0 lg:self-start">
      <details open className="group min-w-0">
      <summary className="flex min-w-0 cursor-pointer list-none items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.07]">
        <div className="min-w-0">
          <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-cyan-200">Isekai filters</p>
          <h2 className="mt-1 text-xl font-black text-white">Find Your Next Anime</h2>
          <p className="mt-1 text-xs leading-5 text-slate-300">Filter by genre, route, status, and confidence.</p>
        </div>
        <span className="shrink-0 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
          {activeFilterCount} active
        </span>
      </summary>

      <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <FilterGroup title="Quick picks" subtitle="Jump into common isekai moods and guide routes.">
          <div className="flex min-w-0 flex-wrap gap-2">
            {quickFilters.map((chip) => (
              <QuickFilterChip key={chip.label} {...chip} />
            ))}
          </div>
        </FilterGroup>

        <FilterGroup title="Anime Type">
          <div className="grid min-w-0 gap-3">
            <SelectFilter label="Isekai subgenre" value={filters.subgenre} options={isekaiSubgenres} onChange={(value) => onChange("subgenre", value)} />
            <SelectFilter label="Genre" value={filters.genre} options={genres} onChange={(value) => onChange("genre", value)} />
            <SelectFilter label="Source type" value={filters.sourceType} options={["All", ...supportedSourceTypes]} onChange={(value) => onChange("sourceType", value)} />
          </div>
        </FilterGroup>

        <FilterGroup title="Season Info">
          <div className="grid min-w-0 gap-3">
            <SelectFilter label="Total seasons" value={filters.seasonRange} options={seasonRanges} onChange={(value) => onChange("seasonRange", value)} />
            <SelectFilter label="Total episodes" value={filters.episodeRange} options={episodeRanges} onChange={(value) => onChange("episodeRange", value)} />
            <SelectFilter label="Anime status" value={filters.status} options={statuses} onChange={(value) => onChange("status", value)} />
          </div>
        </FilterGroup>

        <FilterGroup title="Reading Route">
          <SelectFilter label="Recommended route" value={filters.recommendedRoute} options={recommendedRoutes} onChange={(value) => onChange("recommendedRoute", value)} />
        </FilterGroup>

        <FilterGroup title="Data Quality">
          <div className="grid min-w-0 gap-3">
            <SelectFilter label="Confidence level" value={filters.confidenceLevel} options={["All", ...supportedConfidenceLevels]} onChange={(value) => onChange("confidenceLevel", value)} />
            <SelectFilter label="Needs verification" value={filters.needsVerification} options={verificationOptions} onChange={(value) => onChange("needsVerification", value)} />
            <SelectFilter label="Continuation status" value={filters.continuationStatus} options={continuationStatusOptions} onChange={(value) => onChange("continuationStatus", value)} />
            <SelectFilter label="Research priority" value={filters.researchPriority} options={researchPriorityOptions} onChange={(value) => onChange("researchPriority", value)} />
          </div>
        </FilterGroup>

        <FilterGroup title="Sorting">
          <SelectFilter label="Sort by" value={filters.sortBy} options={sortOptions} onChange={(value) => onChange("sortBy", value)} />
        </FilterGroup>

        <button
          type="button"
          onClick={onClear}
          className="gradient-button w-full max-w-full rounded-xl px-4 py-3 text-sm font-black transition duration-200 hover:scale-[1.01] hover:shadow-[0_16px_46px_rgba(192,132,252,0.3)] sm:col-span-2 lg:col-span-1"
        >
          Clear filters
        </button>
        <button
          type="button"
          onClick={onClose}
          className="w-full max-w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:bg-white/15 sm:col-span-2 lg:hidden"
        >
          Close Filters
        </button>
      </div>
      </details>
    </aside>
  );
}

function SelectFilter({ label, value, options, onChange }) {
  return (
    <label className="grid min-w-0 gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={filterSelectClass}
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function FilterGroup({ title, subtitle, children }) {
  return (
    <section className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mb-3 flex min-w-0 items-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-fuchsia-200 shadow-[0_0_16px_rgba(240,171,252,0.7)]" />
        <div className="min-w-0">
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">{title}</h3>
          {subtitle && <p className="mt-1 text-xs leading-5 text-slate-400">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function QuickFilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`max-w-full rounded-full border px-3 py-2 text-xs font-black transition duration-200 ${
        active
          ? "border-cyan-200 bg-cyan-200 text-ink shadow-[0_0_22px_rgba(103,232,249,0.28)]"
          : "border-white/10 bg-white/[0.06] text-slate-200 hover:border-fuchsia-200/40 hover:bg-fuchsia-300/10 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function IsekaiSections({ anime }) {
  const sections = [
    {
      eyebrow: "Popular Isekai",
      title: "Big gateway titles",
      anime: popularIsekaiIds.map((id) => anime.find((item) => item.id === id)).filter(Boolean),
    },
    {
      eyebrow: "New Isekai",
      title: "Recent releases",
      anime: [...anime].sort((first, second) => second.releaseYear - first.releaseYear).slice(0, 6),
    },
    {
      eyebrow: "Classic Isekai",
      title: "Older portal-world picks",
      anime: anime.filter((item) => item.releaseYear <= 2005).sort((first, second) => first.releaseYear - second.releaseYear).slice(0, 6),
    },
    {
      eyebrow: "Overpowered MC Isekai",
      title: "Power fantasy routes",
      anime: bySubgenre(anime, "Overpowered MC"),
    },
    {
      eyebrow: "Slow Life Isekai",
      title: "Low-stress another-world stories",
      anime: bySubgenre(anime, "Slow Life"),
    },
    {
      eyebrow: "Villainess Isekai",
      title: "Otome and noble-life reincarnation",
      anime: bySubgenre(anime, "Villainess"),
    },
    {
      eyebrow: "Isekai with Light Novel continuation",
      title: "Novel-first continuation routes",
      anime: anime.filter((item) => item.recommendedRoute === "Light Novel").slice(0, 6),
    },
    {
      eyebrow: "Isekai with Manga continuation",
      title: "Manga-first continuation routes",
      anime: anime.filter((item) => item.recommendedRoute === "Manga").slice(0, 6),
    },
    {
      eyebrow: "Needs Manual Research",
      title: "Draft entries to check",
      anime: anime.filter((item) => item.needsManualResearch).slice(0, 6),
    },
  ];

  return (
    <div className="mt-12 grid gap-12">
      {sections.map((section) => (
        <BrowseSection key={section.eyebrow} {...section} />
      ))}
    </div>
  );
}

function BrowseSection({ eyebrow, title, anime }) {
  if (anime.length === 0) return null;

  return (
    <section>
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">{eyebrow}</p>
        <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>
      </div>
      <IsekaiGrid anime={anime.slice(0, 6)} />
    </section>
  );
}

function IsekaiGrid({ anime, className = "" }) {
  return (
    <div className={`grid min-w-0 gap-5 sm:grid-cols-2 xl:grid-cols-3 ${className}`}>
      {anime.map((item) => (
        <AnimeCard key={item.id} anime={item} />
      ))}
    </div>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="glass-panel rounded-xl p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}

function matchesIsekaiFilters(anime, filters) {
  const queryMatches = !filters.query || anime.searchText?.includes(filters.query.trim().toLowerCase());
  const subgenreMatches = filters.subgenre === "All" || anime.isekaiSubgenres.includes(filters.subgenre);
  const genreMatches = filters.genre === "All" || anime.genres.includes(filters.genre);
  const sourceMatches = filters.sourceType === "All" || anime.sourceType === filters.sourceType;
  const seasonMatches = matchesSeasonRange(anime.totalSeasons, filters.seasonRange);
  const episodeMatches = matchesEpisodeRange(anime.totalEpisodes, filters.episodeRange);
  const statusMatches = filters.status === "All" || anime.status === filters.status;
  const confidenceMatches = filters.confidenceLevel === "All" || anime.confidenceLevel === filters.confidenceLevel;
  const continuationStatusMatches =
    filters.continuationStatus === "All" || anime.continuationStatus === filters.continuationStatus;
  const researchPriorityMatches =
    filters.researchPriority === "All" || anime.researchPriority === filters.researchPriority;
  const verificationMatches =
    filters.needsVerification === "All" ||
    (filters.needsVerification === "Needs verification" && anime.needsVerification) ||
    (filters.needsVerification === "Verified" && !anime.needsVerification);
  const routeMatches = filters.recommendedRoute === "All" || anime.recommendedRoute === filters.recommendedRoute;

  return (
    queryMatches &&
    subgenreMatches &&
    genreMatches &&
    sourceMatches &&
    seasonMatches &&
    episodeMatches &&
    statusMatches &&
    confidenceMatches &&
    continuationStatusMatches &&
    researchPriorityMatches &&
    verificationMatches &&
    routeMatches
  );
}

function matchesSeasonRange(totalSeasons, range) {
  if (range === "All") return true;
  if (range === "1 season") return totalSeasons === 1;
  if (range === "2 seasons") return totalSeasons === 2;
  if (range === "3+ seasons") return totalSeasons >= 3;
  if (range === "5+ seasons") return totalSeasons >= 5;
  return true;
}

function matchesEpisodeRange(totalEpisodes, range) {
  if (range === "All") return true;
  if (range === "1-12 episodes") return totalEpisodes >= 1 && totalEpisodes <= 12;
  if (range === "13-24 episodes") return totalEpisodes >= 13 && totalEpisodes <= 24;
  if (range === "25-50 episodes") return totalEpisodes >= 25 && totalEpisodes <= 50;
  if (range === "51+ episodes") return totalEpisodes >= 51;
  return true;
}

function sortIsekaiAnime(anime, sortBy) {
  const confidenceRank = { High: 4, Medium: 3, Low: 2, Unknown: 1 };
  const sortedAnime = [...anime];

  if (sortBy === "Title A-Z") return sortedAnime.sort((first, second) => first.title.localeCompare(second.title));
  if (sortBy === "Newest release year") return sortedAnime.sort((first, second) => second.releaseYear - first.releaseYear);
  if (sortBy === "Oldest release year") return sortedAnime.sort((first, second) => first.releaseYear - second.releaseYear);
  if (sortBy === "Most episodes") return sortedAnime.sort((first, second) => (second.totalEpisodes || 0) - (first.totalEpisodes || 0));
  if (sortBy === "Most seasons") return sortedAnime.sort((first, second) => (second.totalSeasons || 0) - (first.totalSeasons || 0));
  if (sortBy === "Highest confidence first") {
    return sortedAnime.sort((first, second) => confidenceRank[second.confidenceLevel] - confidenceRank[first.confidenceLevel]);
  }

  return sortedAnime.sort((first, second) => new Date(second.lastUpdated) - new Date(first.lastUpdated));
}

function bySubgenre(anime, subgenre) {
  return anime.filter((item) => item.isekaiSubgenres.includes(subgenre)).slice(0, 6);
}
