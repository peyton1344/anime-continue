import { Link } from "react-router-dom";
import { formatEpisodeCount, formatSeasonCount, hasUpcomingSeason } from "../utils/anime.js";
import AnimeCover from "./AnimeCover.jsx";
import IsekaiTagPill from "./IsekaiTagPill.jsx";
import MagicBadge from "./MagicBadge.jsx";

export default function AnimeCard({ anime }) {
  const hasUpcoming = hasUpcomingSeason(anime);
  const confidenceTone = {
    High: "green",
    Medium: "amber",
    Low: "violet",
    Unknown: "cyan",
  };
  const statusTone = {
    Verified: "green",
    Approximate: "amber",
    "Start From Beginning Recommended": "violet",
    "Anime Original": "violet",
    "Source Caught Up": "pink",
    "No Source Continuation": "cyan",
    "Needs Manual Research": "amber",
  };
  const displayTags = anime.isekaiSubgenres?.length > 0 ? anime.isekaiSubgenres : anime.genres || [];

  return (
    <article className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#11121e] shadow-[0_18px_50px_rgba(2,6,23,0.28)] transition duration-200 hover:-translate-y-0.5 hover:border-white/15">
      <div className="relative aspect-[3/4] overflow-hidden bg-slate-900">
        <AnimeCover
          src={anime.coverImage}
          alt={`${anime.title} cover art`}
          anime={anime}
          className="transition duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="flex min-h-[4.05rem] flex-wrap content-start gap-2 overflow-hidden">
          {displayTags.slice(0, 3).map((tag) => (
            <IsekaiTagPill key={tag} value={tag} />
          ))}
          {anime.needsVerification && <MagicBadge value="Needs verification" tone="amber" />}
          {anime.needsManualResearch && <MagicBadge value="Needs research" tone="amber" />}
          {hasUpcoming && <MagicBadge value="Upcoming Season" tone="violet" />}
        </div>

        <div className="min-h-[7.35rem] min-w-0 overflow-hidden">
          <h2 className="line-clamp-2 min-h-[3.25rem] break-words text-[22px] font-extrabold leading-[1.08] text-white">{anime.title}</h2>
          <p className="mt-2 line-clamp-3 min-h-[4.05rem] text-[14px] leading-[1.65] text-slate-300">{anime.spoilerFreeSummary}</p>
        </div>

        <div className="min-w-0 rounded-xl border border-white/10 bg-white/[0.045] p-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500">Continue after anime</p>
          <p className="mt-2 line-clamp-2 break-words text-sm font-black leading-5 text-white">
            {anime.recommendedContinueFrom}
          </p>
          <p className="mt-2 line-clamp-1 text-xs font-bold text-slate-400">
            Route: {anime.recommendedRoute}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <MagicBadge value={anime.continuationStatus} tone={statusTone[anime.continuationStatus] || "cyan"} />
            <MagicBadge label="Confidence" value={anime.confidenceLevel} tone={confidenceTone[anime.confidenceLevel]} />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <CardStat label="Episodes" value={formatEpisodeCount(anime.totalEpisodes)} />
          <CardStat label="Seasons" value={formatSeasonCount(anime.totalSeasons)} />
          <CardStat label="Source" value={anime.sourceType} />
          <CardStat label="Route" value={anime.recommendedRoute} />
        </div>

        <div className="flex min-h-7 flex-wrap content-start gap-2 overflow-hidden">
          <MagicBadge label="Confidence" value={anime.confidenceLevel} tone={confidenceTone[anime.confidenceLevel]} />
        </div>

        <Link
          to={`/anime/${anime.id}`}
          className="mt-auto rounded-xl border border-white/10 bg-white px-4 py-3 text-center text-sm font-black text-ink transition hover:bg-cyan-100"
        >
          Open details
        </Link>
      </div>
    </article>
  );
}

function CardStat({ label, value }) {
  return (
    <div className="min-h-[4.2rem] min-w-0 rounded-lg border border-white/10 bg-[#0d0f1b] p-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-2 truncate text-[14px] font-black text-white">{value}</p>
    </div>
  );
}
