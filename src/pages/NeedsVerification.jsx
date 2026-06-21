import { Link } from "react-router-dom";
import InfoBadge from "../components/InfoBadge.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import { formatEpisodeCount, formatSeasonCount, toAnimeViewModel } from "../utils/anime.js";
import { getDataIssues, shouldShowInDataReview } from "../utils/dataQuality.js";

export default function NeedsVerification() {
  const animeList = animeDatabase.map(toAnimeViewModel);
  const entries = animeList.filter((anime) => shouldShowInDataReview(anime));

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Needs Verification</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Entries that need checking</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            This page highlights local records with verification flags, low confidence, missing continuation data,
            or missing season breakdowns.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-4">
          <Stat label="Total to check" value={entries.length} />
          <Stat label="Needs verification" value={animeList.filter((anime) => anime.needsVerification).length} />
          <Stat label="Low confidence" value={animeList.filter((anime) => anime.confidenceLevel === "Low").length} />
          <Stat label="Unknown confidence" value={animeList.filter((anime) => anime.confidenceLevel === "Unknown").length} />
        </div>

        <div className="mt-6 grid gap-4">
          {entries.map((anime) => {
            const issues = getDataIssues(anime);

            return (
              <article key={anime.id} className="manga-panel rounded-2xl p-5">
                <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-start">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      {issues.map((issue) => (
                        <InfoBadge key={issue.id} value={issue.label} tone={issue.tone} />
                      ))}
                    </div>
                    <h2 className="mt-4 text-xl font-black text-white">{anime.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {anime.sourceType} | {anime.status} | Updated {anime.lastUpdated}
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      <MiniStat label="Episodes" value={formatEpisodeCount(anime.totalEpisodes)} />
                      <MiniStat label="Seasons" value={formatSeasonCount(anime.totalSeasons)} />
                      <MiniStat label="Confidence" value={anime.confidenceLevel} />
                    </div>
                  </div>
                  <Link to={`/anime/${anime.id}`} className="rounded-xl bg-white px-4 py-3 text-center text-sm font-black text-ink transition hover:bg-cyan-100">
                    Open details
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function Stat({ label, value }) {
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
