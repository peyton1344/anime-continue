import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AdaptationNotesCard from "../components/AdaptationNotesCard.jsx";
import AnimeGlowCard from "../components/AnimeGlowCard.jsx";
import ConfidenceExplainer from "../components/ConfidenceExplainer.jsx";
import ConfidenceLevelBadge from "../components/ConfidenceLevelBadge.jsx";
import ContinueAfterHighlight from "../components/ContinueAfterHighlight.jsx";
import AnimeCover from "../components/AnimeCover.jsx";
import DataReportForm from "../components/DataReportForm.jsx";
import InfoBadge from "../components/InfoBadge.jsx";
import LightNovelContinueCard from "../components/LightNovelContinueCard.jsx";
import MagicBadge from "../components/MagicBadge.jsx";
import MangaContinueCard from "../components/MangaContinueCard.jsx";
import MangaPanelSection from "../components/MangaPanelSection.jsx";
import RouteComparisonCard from "../components/RouteComparisonCard.jsx";
import SeasonTimeline from "../components/SeasonTimeline.jsx";
import SpoilerWarningBox from "../components/SpoilerWarningBox.jsx";
import VerificationWarningBox from "../components/VerificationWarningBox.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import {
  formatEpisodeCount,
  formatSeasonCount,
  getSeasonBreakdown,
  hasUpcomingSeason,
  toAnimeViewModel,
} from "../utils/anime.js";

const WATCHLIST_STORAGE_KEY = "afterAnimeGuide.watchlistState";

export default function AnimeDetail() {
  const { id } = useParams();
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const anime = animeList.find((item) => item.id === id);
  const [watchlistState, setWatchlistState] = useState({});

  useEffect(() => {
    try {
      const savedState = JSON.parse(localStorage.getItem(WATCHLIST_STORAGE_KEY) || "{}");
      setWatchlistState(savedState);
    } catch {
      setWatchlistState({});
    }
  }, []);

  if (!anime) {
    return (
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-xl border border-white/10 bg-white/[0.06] p-8 text-center">
          <h1 className="text-2xl font-black text-white">Anime guide not found</h1>
          <p className="mt-2 text-slate-300">This mock guide may not exist yet.</p>
          <Link to="/search" className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-bold text-ink">
            Back to search
          </Link>
        </div>
      </div>
    );
  }

  const userAnimeState = watchlistState[anime.id] || {};
  const seasonsBreakdown = getSeasonBreakdown(anime);
  const hasUpcoming = hasUpcomingSeason(anime);
  const hasLowConfidence = anime.confidenceLevel === "Low" || anime.confidenceLevel === "Unknown";
  const isApproximate =
    anime.needsVerification ||
    anime.needsManualResearch ||
    hasLowConfidence ||
    anime.continuationStatus === "Approximate" ||
    anime.continuationStatus === "Needs Manual Research" ||
    anime.status.toLowerCase().includes("ongoing");
  const sourceSummary = getSourceSummary(anime);

  const toggleWatchlistState = (key) => {
    setWatchlistState((currentState) => {
      const nextAnimeState = {
        ...(currentState[anime.id] || {}),
        [key]: !currentState[anime.id]?.[key],
      };
      const nextState = {
        ...currentState,
        [anime.id]: nextAnimeState,
      };

      localStorage.setItem(WATCHLIST_STORAGE_KEY, JSON.stringify(nextState));
      return nextState;
    });
  };

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-7xl">
        <Link to="/search" className="text-sm font-bold text-cyan-100 hover:text-white">
          Back to search
        </Link>

        <section className="mt-5 grid gap-6 lg:grid-cols-[380px_1fr] lg:items-start">
          <aside className="grid gap-5">
            <div className="anime-glow-card overflow-hidden rounded-3xl shadow-[0_24px_90px_rgba(103,232,249,0.12)]">
              <AnimeCover
                src={anime.coverImage}
                alt={`${anime.title} cover art`}
                anime={anime}
                className="aspect-[3/4]"
              />
            </div>

            <WatchlistControls state={userAnimeState} onToggle={toggleWatchlistState} />
            <DataReportForm anime={anime} />
          </aside>

          <div className="grid gap-5">
            <AnimeGlowCard className="anime-hero p-5 sm:p-6">
              <div className="flex flex-wrap gap-2">
                <MagicBadge value={anime.status} tone="green" />
                <MagicBadge value={anime.sourceType} tone={anime.sourceType === "Manga" ? "cyan" : "pink"} />
                <MagicBadge label="Updated" value={anime.lastUpdated} tone="violet" />
                <ConfidenceLevelBadge level={anime.confidenceLevel} />
                <MagicBadge label="Continuation" value={anime.continuationStatus} tone={anime.continuationStatus === "Verified" ? "green" : "amber"} />
                {anime.needsManualResearch && <MagicBadge value="Needs research" tone="amber" />}
                {hasUpcoming && <MagicBadge value="Upcoming Season" tone="violet" />}
                <MagicBadge
                  label="Verification"
                  value={anime.needsVerification ? "Needs checking" : "Verified"}
                  tone={anime.needsVerification ? "amber" : "green"}
                />
              </div>

              <h1 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">{anime.title}</h1>
              <p className="mt-3 text-sm text-slate-400">{anime.alternativeTitles.join(" / ")}</p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">{anime.spoilerFreeSummary}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
                <Stat label="Episodes" value={formatEpisodeCount(anime.totalEpisodes)} />
                <Stat label="Seasons" value={formatSeasonCount(anime.totalSeasons)} />
                <Stat label="Anime ending point" value={anime.animeLastEpisode} />
                <Stat label="Source type" value={anime.sourceType} />
                <Stat label="Recommended route" value={anime.recommendedRoute} />
                <Stat label="Continue from" value={anime.recommendedContinueFrom} />
              </div>
            </AnimeGlowCard>

            <SeasonTimeline seasons={seasonsBreakdown} />

            {(anime.needsVerification || anime.needsManualResearch || anime.continuationStatus === "Approximate" || hasLowConfidence) && (
              <section className="grid gap-3">
                {anime.needsVerification && (
                  <VerificationWarningBox title="Verification warning">
                    This anime data may need verification.
                  </VerificationWarningBox>
                )}
                {anime.continuationStatus === "Approximate" && (
                  <VerificationWarningBox title="Approximate continuation">
                    This continuation point is useful but approximate. Start a little earlier if you want the smoothest source-material context.
                  </VerificationWarningBox>
                )}
                {anime.needsManualResearch && (
                  <VerificationWarningBox title="Research warning">
                    The exact continuation point is not verified yet. This entry needs manual research.
                  </VerificationWarningBox>
                )}
                {hasLowConfidence && (
                  <VerificationWarningBox title="Continuation warning">
                    Continuation point may be approximate.
                  </VerificationWarningBox>
                )}
              </section>
            )}

            <MangaPanelSection title="Genres" eyebrow="Story tags">
              <div className="flex flex-wrap gap-2">
                {anime.genres.map((genre) => (
                  <InfoBadge key={genre} value={genre} />
                ))}
              </div>
            </MangaPanelSection>

            <section className="manga-panel rounded-2xl p-5 shadow-glow">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">
                    Continue After Anime
                  </p>
                  <h2 className="mt-3 text-3xl font-black text-white">Where to start reading next</h2>
                  <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
                    This guide uses mock continuation data only. It gives volume and chapter numbers,
                    not streaming, manga, or novel links.
                  </p>
                </div>
                {isApproximate && (
                  <InfoBadge value="Approximate point" tone="amber" />
                )}
              </div>

              <div className="mt-5">
                <div className="mb-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  <ContinuationStat label="Anime ends at" value={anime.animeLastEpisode} />
                  <ContinuationStat label="Recommended route" value={anime.recommendedRoute} />
                  <ContinuationStat label="Continue from" value={anime.recommendedContinueFrom} />
                  <ContinuationStat label="Continuation status" value={anime.continuationStatus} />
                  <ContinuationStat label="Manga route" value={anime.mangaContinueFrom.label} />
                  <ContinuationStat label="Light novel route" value={anime.lightNovelContinueFrom.label} />
                  <ContinuationStat label="Web novel route" value={anime.webNovelContinueFrom} />
                  <ContinuationStat label="Confidence" value={anime.confidenceLevel} />
                  <ContinuationStat label="Research priority" value={anime.researchPriority} />
                  <ContinuationStat label="Research needed" value={anime.needsManualResearch ? "Yes" : "No"} />
                </div>
                <ContinueAfterHighlight anime={anime} />
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-2">
                <ContinueTextPanel title="Spoiler-free note" copy={anime.spoilerFreeSummary} />
                <ContinueTextPanel title="Adaptation note" copy={anime.notes} />
                <ContinueTextPanel title="Continuation note" copy={anime.continuationNote} />
                <ContinueTextPanel title="Data source summary" copy={sourceSummary} />
              </div>

              {anime.shouldStartFromBeginning && (
                <div className="mt-5 rounded-xl border border-violet-200/20 bg-violet-300/10 p-4 text-sm font-semibold leading-6 text-violet-100">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-200">Why start from the beginning</p>
                  <p className="mt-2">{anime.whyStartFromBeginning}</p>
                </div>
              )}

              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.045] p-4">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Source evidence</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {getSourceNames(anime).map((sourceName) => (
                    <InfoBadge key={sourceName} value={sourceName} />
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-5 xl:grid-cols-2">
                <MangaContinueCard anime={anime} isApproximate={isApproximate} />
                <LightNovelContinueCard anime={anime} isApproximate={isApproximate} />
              </div>
            </section>

            <RouteComparisonCard anime={anime} />
            <ConfidenceExplainer currentLevel={anime.confidenceLevel} />
            <AdaptationNotesCard anime={anime} isApproximate={isApproximate} />
            <SpoilerWarningBox />
          </div>
        </section>
      </article>
    </div>
  );
}

function WatchlistControls({ state, onToggle }) {
  const actions = [
    { key: "watching", label: "Watching" },
    { key: "finishedAnime", label: "Finished Anime" },
    { key: "planToReadManga", label: "Plan to Read Manga" },
    { key: "planToReadLightNovel", label: "Plan to Read Light Novel" },
    { key: "completed", label: "Completed" },
  ];

  return (
    <section className="glass-panel rounded-xl p-5">
      <h2 className="text-lg font-black text-white">Your progress</h2>
      <p className="mt-2 text-sm leading-6 text-slate-300">
        Save this guide into local categories. No account or backend is connected.
      </p>

      <div className="mt-4 grid gap-3">
        {actions.map((action) => {
          const isActive = Boolean(
            state[action.key] ||
              (action.key === "watching" && state.watchlist) ||
              (action.key === "planToReadManga" && state.planToRead),
          );

          return (
            <button
              key={action.key}
              type="button"
              onClick={() => onToggle(action.key)}
              className={[
                "rounded-xl border px-4 py-3 text-left text-sm font-black transition",
                isActive
                  ? "border-cyan-200/40 bg-cyan-200 text-ink"
                  : "border-white/10 bg-white/[0.06] text-white hover:bg-white/10",
              ].join(" ")}
              aria-pressed={isActive}
            >
              {action.label}
              {isActive && <span className="ml-2 text-xs font-bold uppercase tracking-[0.14em]">Saved</span>}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink/50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-lg font-black text-white">{value}</p>
    </div>
  );
}

function ContinuationStat({ label, value }) {
  return (
    <div className="min-w-0 rounded-xl border border-white/10 bg-ink/50 p-4">
      <p className="text-[11px] font-black uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-black leading-5 text-white">{value || "Not available yet"}</p>
    </div>
  );
}

function ContinueTextPanel({ title, copy }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-4">
      <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">{title}</p>
      <p className="mt-2 text-sm leading-6 text-slate-300">{copy || "Not available yet"}</p>
    </div>
  );
}

function getSourceNames(anime) {
  const sources = anime.sourceEvidence?.length > 0 ? anime.sourceEvidence : anime.dataSources || [];
  const names = sources.map((source) => source.name).filter(Boolean);
  return names.length > 0 ? names : ["No source evidence listed yet"];
}

function getSourceSummary(anime) {
  const sources = anime.sourceEvidence?.length > 0 ? anime.sourceEvidence : anime.dataSources || [];
  if (!sources.length) return "No source evidence listed yet.";

  const checkedCount = sources.filter((source) => source.checked).length;
  const names = sources.map((source) => source.name).filter(Boolean).slice(0, 4).join(", ");
  return `${checkedCount} checked source${checkedCount === 1 ? "" : "s"} listed: ${names || "source names not available"}.`;
}
