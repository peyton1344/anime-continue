import { Link } from "react-router-dom";
import InfoBadge from "../components/InfoBadge.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import { formatEpisodeCount, formatSeasonCount, hasUpcomingSeason, toAnimeViewModel } from "../utils/anime.js";
import {
  coverReviewFilters,
  dataReviewFilters,
  getCoverStats,
  getCoverStatusBadge,
  getDataIssues,
  matchesCoverReviewFilter,
  matchesDataReviewFilter,
  readLocalReports,
  shouldShowInDataReview,
} from "../utils/dataQuality.js";
import { useEffect, useMemo, useState } from "react";

export default function DataReview() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeCoverFilter, setActiveCoverFilter] = useState("all");
  const [reports, setReports] = useState([]);
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const reviewEntries = useMemo(
    () => animeList.filter((anime) => shouldShowInDataReview(anime)),
    [animeList],
  );
  const filterSourceEntries = usesFullDatabaseFilter(activeFilter) ? animeList : reviewEntries;
  const filteredEntries = filterSourceEntries.filter((anime) => matchesDataReviewFilter(anime, activeFilter));
  const coverStats = useMemo(() => getCoverStats(animeList), [animeList]);
  const filteredCoverEntries = animeList.filter((anime) => matchesCoverReviewFilter(anime, activeCoverFilter));

  useEffect(() => {
    setReports(readLocalReports());
  }, []);

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Data Review</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Find entries that need attention</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            This local-only review page highlights draft, stale, or incomplete anime records. No backend,
            login, external API, streaming links, or piracy links are used.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <ReviewStat label="Entries to review" value={reviewEntries.length} />
          <ReviewStat label="Needs verification" value={animeList.filter((anime) => anime.needsVerification).length} />
          <ReviewStat label="Low or unknown confidence" value={animeList.filter((anime) => anime.confidenceLevel === "Low" || anime.confidenceLevel === "Unknown").length} />
          <ReviewStat label="Local reports" value={reports.length} />
        </div>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4">
          <h2 className="text-lg font-black text-white">Filters</h2>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {dataReviewFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={[
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition",
                  activeFilter === filter.id
                    ? "border-white bg-white text-ink"
                    : "border-white/10 bg-white/[0.06] text-slate-200 hover:bg-white/10",
                ].join(" ")}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="mt-6 grid gap-4">
          {filteredEntries.length === 0 ? (
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-8 text-center">
              <h2 className="text-xl font-black text-white">No matching data issues</h2>
              <p className="mt-2 text-sm text-slate-300">Try another filter or add more local database entries.</p>
            </div>
          ) : (
            filteredEntries.map((anime) => <ReviewAnimeRow key={anime.id} anime={anime} />)
          )}
        </section>

        <CoverReviewSection
          activeFilter={activeCoverFilter}
          animeList={filteredCoverEntries}
          coverStats={coverStats}
          onFilterChange={setActiveCoverFilter}
        />

        <LocalReportsSection reports={reports} />
      </section>
    </div>
  );
}

function CoverReviewSection({ activeFilter, animeList, coverStats, onFilterChange }) {
  const entriesNeedingUpdates = animeList.filter((anime) => anime.coverNeedsUpdate || anime.coverStatus === "Needs Replacement");
  const visibleEntries = activeFilter === "all" ? entriesNeedingUpdates : animeList;

  return (
    <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-white">Cover Review</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
            Track which records have real local cover files and which are currently using generated CSS covers.
          </p>
        </div>
        <InfoBadge value={`${coverStats.needsCoverUpdates} need updates`} tone={coverStats.needsCoverUpdates > 0 ? "amber" : "green"} />
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-5">
        <ReviewStat label="Total entries" value={coverStats.total} />
        <ReviewStat label="Real local covers" value={coverStats.realLocalCovers} />
        <ReviewStat label="Generated covers" value={coverStats.generatedCovers} />
        <ReviewStat label="Broken cover paths" value={coverStats.brokenCoverPaths} />
        <ReviewStat label="Need cover updates" value={coverStats.needsCoverUpdates} />
      </div>

      <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
        {coverReviewFilters.map((filter) => (
          <button
            key={filter.id}
            type="button"
            onClick={() => onFilterChange(filter.id)}
            className={[
              "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition",
              activeFilter === filter.id
                ? "border-white bg-white text-ink"
                : "border-white/10 bg-white/[0.06] text-slate-200 hover:bg-white/10",
            ].join(" ")}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-3">
        {visibleEntries.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-ink/50 p-4 text-sm text-slate-300">
            No entries match this cover filter.
          </p>
        ) : (
          visibleEntries.slice(0, 40).map((anime) => <CoverReviewRow key={anime.id} anime={anime} />)
        )}
      </div>
    </section>
  );
}

function CoverReviewRow({ anime }) {
  const statusBadge = getCoverStatusBadge(anime);

  return (
    <article className="rounded-lg border border-white/10 bg-ink/50 p-4">
      <div className="grid gap-3 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <div className="flex flex-wrap gap-2">
            <InfoBadge value={statusBadge.label} tone={statusBadge.tone} />
            {anime.coverNeedsUpdate && <InfoBadge value="Needs Update" tone="amber" />}
          </div>
          <h3 className="mt-3 font-black text-white">{anime.title}</h3>
          <p className="mt-1 break-all text-sm leading-6 text-slate-300">
            {anime.coverImage || "No coverImage path listed"}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-400">{anime.coverCredit}</p>
        </div>
        <Link
          to={`/anime/${anime.id}`}
          className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-ink transition hover:bg-cyan-100"
        >
          Open details
        </Link>
      </div>
    </article>
  );
}

function ReviewAnimeRow({ anime }) {
  const issues = getDataIssues(anime);
  const hasUpcoming = hasUpcomingSeason(anime);

  return (
    <article className="rounded-xl border border-white/10 bg-white/[0.06] p-5">
      <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <div className="flex flex-wrap gap-2">
            {issues.map((issue) => (
              <InfoBadge key={issue.id} value={issue.label} tone={issue.tone} />
            ))}
            {hasUpcoming && <InfoBadge value="Upcoming Season" tone="blue" />}
          </div>

          <h2 className="mt-4 text-xl font-black text-white">{anime.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            {anime.sourceType} source | {anime.status} | Updated {anime.lastUpdated}
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <MiniStat label="Episodes" value={formatEpisodeCount(anime.totalEpisodes)} />
            <MiniStat label="Seasons" value={formatSeasonCount(anime.totalSeasons)} />
            <MiniStat label="Confidence" value={anime.confidenceLevel} />
            <MiniStat label="Continuation status" value={anime.continuationStatus} />
            <MiniStat label="Continue from" value={anime.recommendedContinueFrom} />
            <MiniStat label="Needs verification" value={anime.needsVerification ? "Yes" : "No"} />
          </div>

          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <ReviewTextBlock label="Adaptation note" value={anime.notes} />
            <ReviewTextBlock label="Data sources" value={getSourceNames(anime).join(", ")} />
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-300">
            Continuation: Manga - {anime.mangaContinueFrom?.label || "Not available yet"} | Light novel -{" "}
            {anime.lightNovelContinueFrom?.label || "Not available yet"} | Web novel -{" "}
            {anime.webNovelContinueFrom || "Not available yet"}
          </p>
        </div>

        <Link
          to={`/anime/${anime.id}`}
          className="inline-flex justify-center rounded-xl bg-white px-4 py-3 text-sm font-black text-ink transition hover:bg-cyan-100"
        >
          Open details
        </Link>
      </div>
    </article>
  );
}

function LocalReportsSection({ reports }) {
  return (
    <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-black text-white">Local reports</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Reports are saved in this browser only using localStorage.
          </p>
        </div>
        <InfoBadge value={`${reports.length} reports`} tone={reports.length > 0 ? "amber" : "green"} />
      </div>

      <div className="mt-5 grid gap-3">
        {reports.length === 0 ? (
          <p className="rounded-lg border border-white/10 bg-ink/50 p-4 text-sm text-slate-300">
            No local reports yet.
          </p>
        ) : (
          reports.map((report) => (
            <div key={`${report.animeId}-${report.createdAt}`} className="rounded-lg border border-white/10 bg-ink/50 p-4">
              <div className="flex flex-wrap gap-2">
                <InfoBadge value={report.issueType} tone="amber" />
                <InfoBadge value={new Date(report.createdAt).toLocaleString()} />
              </div>
              <p className="mt-3 font-black text-white">{report.animeTitle}</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{report.userNote || "No note provided."}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

function ReviewStat({ label, value }) {
  return (
    <div className="glass-panel rounded-xl p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink/50 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 break-words text-sm font-black text-white">{value}</p>
    </div>
  );
}

function ReviewTextBlock({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink/50 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{value || "Not available yet"}</p>
    </div>
  );
}

function getSourceNames(anime) {
  const sources = anime.sourceEvidence?.length > 0 ? anime.sourceEvidence : anime.dataSources || [];
  const names = sources.map((source) => source.name).filter(Boolean);
  return names.length > 0 ? names : ["No source evidence listed yet"];
}

function usesFullDatabaseFilter(filterId) {
  return [
    "verifiedContinuation",
    "approximateContinuation",
    "needsManualResearch",
    "highConfidence",
    "mediumConfidence",
    "lowConfidence",
    "unknownConfidence",
    "needsVerification",
  ].includes(filterId);
}
