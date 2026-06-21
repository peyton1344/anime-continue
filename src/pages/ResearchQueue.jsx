import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import InfoBadge from "../components/InfoBadge.jsx";
import SearchBar from "../components/SearchBar.jsx";
import {
  animeDatabase,
  supportedConfidenceLevels,
  supportedContinuationStatuses,
  supportedResearchPriorities,
} from "../data/animeDatabase.js";
import { toAnimeViewModel } from "../utils/anime.js";

const defaultFilters = {
  query: "",
  continuationStatus: "All",
  confidenceLevel: "All",
  needsVerification: "All",
  researchPriority: "All",
  route: "All",
};

const priorityRank = { High: 3, Medium: 2, Low: 1 };

export default function ResearchQueue() {
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const [filters, setFilters] = useState(defaultFilters);
  const routes = useMemo(
    () => ["All", ...new Set(animeList.map((anime) => anime.recommendedRoute).filter(Boolean))].sort(),
    [animeList],
  );

  const queue = useMemo(() => {
    return animeList
      .filter(needsQueueReview)
      .filter((anime) => matchesFilters(anime, filters))
      .sort((first, second) => {
        const priorityDelta = priorityRank[second.researchPriority] - priorityRank[first.researchPriority];
        if (priorityDelta !== 0) return priorityDelta;
        return first.title.localeCompare(second.title);
      });
  }, [animeList, filters]);

  const allQueue = useMemo(() => animeList.filter(needsQueueReview), [animeList]);
  const setFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }));
  const clearFilters = () => setFilters(defaultFilters);

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Research Queue</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Continuation entries that need checking</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            This queue keeps uncertain continuation points useful but honest. Entries stay here until
            their chapter, volume, route, or source evidence is manually verified.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <QueueStat label="Queue entries" value={allQueue.length} />
          <QueueStat label="High priority" value={allQueue.filter((anime) => anime.researchPriority === "High").length} />
          <QueueStat label="Needs research" value={allQueue.filter((anime) => anime.needsManualResearch).length} />
          <QueueStat label="Unknown confidence" value={allQueue.filter((anime) => anime.confidenceLevel === "Unknown").length} />
        </div>

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_220px_180px_180px_180px_220px_auto] lg:items-end">
            <SearchBar
              value={filters.query}
              onChange={(value) => setFilter("query", value)}
              placeholder="Search research queue..."
            />
            <SelectField
              label="Continuation status"
              value={filters.continuationStatus}
              options={["All", ...supportedContinuationStatuses]}
              onChange={(value) => setFilter("continuationStatus", value)}
            />
            <SelectField
              label="Confidence"
              value={filters.confidenceLevel}
              options={["All", ...supportedConfidenceLevels]}
              onChange={(value) => setFilter("confidenceLevel", value)}
            />
            <SelectField
              label="Verification"
              value={filters.needsVerification}
              options={["All", "Needs verification", "Verified"]}
              onChange={(value) => setFilter("needsVerification", value)}
            />
            <SelectField
              label="Priority"
              value={filters.researchPriority}
              options={["All", ...supportedResearchPriorities]}
              onChange={(value) => setFilter("researchPriority", value)}
            />
            <SelectField
              label="Route"
              value={filters.route}
              options={routes}
              onChange={(value) => setFilter("route", value)}
            />
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-xl border border-white/10 bg-white px-4 py-3 text-sm font-black text-ink transition hover:bg-cyan-100"
            >
              Clear
            </button>
          </div>
          <p className="mt-3 text-sm text-slate-400">
            Showing {queue.length} of {allQueue.length} research item{allQueue.length === 1 ? "" : "s"}.
          </p>
        </section>

        <div className="mt-6 grid gap-4">
          {queue.length === 0 ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 text-center">
              <h2 className="text-xl font-black text-white">No research items match these filters</h2>
              <p className="mt-2 text-sm text-slate-300">Clear filters or search for another title.</p>
            </div>
          ) : (
            queue.map((anime) => <QueueItem key={anime.id} anime={anime} />)
          )}
        </div>
      </section>
    </div>
  );
}

function needsQueueReview(anime) {
  return (
    anime.confidenceLevel === "Unknown" ||
    anime.confidenceLevel === "Low" ||
    anime.needsVerification ||
    anime.needsManualResearch ||
    anime.continuationStatus === "Needs Manual Research" ||
    !anime.recommendedContinueFrom ||
    anime.sourceEvidence.length === 0
  );
}

function matchesFilters(anime, filters) {
  const query = filters.query.trim().toLowerCase();
  const queryMatches = !query || anime.searchText.includes(query);
  const statusMatches = filters.continuationStatus === "All" || anime.continuationStatus === filters.continuationStatus;
  const confidenceMatches = filters.confidenceLevel === "All" || anime.confidenceLevel === filters.confidenceLevel;
  const verificationMatches =
    filters.needsVerification === "All" ||
    (filters.needsVerification === "Needs verification" && anime.needsVerification) ||
    (filters.needsVerification === "Verified" && !anime.needsVerification);
  const priorityMatches = filters.researchPriority === "All" || anime.researchPriority === filters.researchPriority;
  const routeMatches = filters.route === "All" || anime.recommendedRoute === filters.route;

  return queryMatches && statusMatches && confidenceMatches && verificationMatches && priorityMatches && routeMatches;
}

function QueueItem({ anime }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-[0_18px_55px_rgba(2,6,23,0.2)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-2">
            <InfoBadge value={anime.continuationStatus} tone={anime.continuationStatus === "Needs Manual Research" ? "amber" : "green"} />
            <InfoBadge value={`${anime.researchPriority} priority`} tone={anime.researchPriority === "High" ? "amber" : "cyan"} />
            <InfoBadge value={`Confidence: ${anime.confidenceLevel}`} tone={anime.confidenceLevel === "High" ? "green" : "amber"} />
          </div>
          <h2 className="mt-4 text-2xl font-black text-white">{anime.title}</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            <MiniStat label="Route" value={anime.recommendedRoute} />
            <MiniStat label="Continue from" value={anime.recommendedContinueFrom} />
            <MiniStat label="Needs verification" value={anime.needsVerification ? "Yes" : "No"} />
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <TextBlock label="Adaptation note" value={anime.notes} />
            <TextBlock label="Continuation note" value={anime.continuationNote} />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {getSourceNames(anime).map((sourceName) => (
              <InfoBadge key={sourceName} value={sourceName} />
            ))}
          </div>
        </div>

        <Link
          to={`/anime/${anime.id}`}
          className="shrink-0 rounded-xl border border-white/10 bg-white px-4 py-3 text-center text-sm font-black text-ink transition hover:bg-cyan-100"
        >
          Open details
        </Link>
      </div>
    </article>
  );
}

function SelectField({ label, value, options, onChange }) {
  return (
    <label className="grid gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300">
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-12 w-full rounded-xl border border-white/10 bg-slate-950/70 px-3 text-sm font-bold text-white outline-none transition focus:border-cyan-200"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function QueueStat({ label, value }) {
  return (
    <div className="glass-panel rounded-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-ink/50 p-3">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-black text-white">{value}</p>
    </div>
  );
}

function TextBlock({ label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-ink/50 p-3">
      <p className="text-[11px] font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{value || "Not available yet"}</p>
    </div>
  );
}

function getSourceNames(anime) {
  const sources = anime.sourceEvidence?.length > 0 ? anime.sourceEvidence : anime.dataSources || [];
  const names = sources.map((source) => source.name).filter(Boolean);
  return names.length > 0 ? names : ["No source evidence listed yet"];
}
