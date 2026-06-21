import { getRecommendedRouteExplanation, getRecommendedRouteType } from "../utils/anime.js";
import MagicBadge from "./MagicBadge.jsx";

const routeTone = {
  "Manga Route": "cyan",
  "Light Novel Route": "pink",
  "Web Novel Route": "violet",
  "No continuation available": "amber",
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

export default function ContinueAfterHighlight({ anime }) {
  const routeType = getRecommendedRouteType(anime);
  const explanation = getRecommendedRouteExplanation(anime);

  return (
    <section className="route-card overflow-hidden rounded-2xl p-5 shadow-glow">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <MagicBadge value="Best next step" tone={routeTone[routeType] || "cyan"} />
          <h2 className="mt-4 text-3xl font-black text-white">{routeType}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">{explanation}</p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">{anime.continuationNote}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            <MagicBadge label="Status" value={anime.continuationStatus} tone={statusTone[anime.continuationStatus] || "cyan"} />
            <MagicBadge label="Confidence" value={anime.confidenceLevel} tone={anime.confidenceLevel === "High" ? "green" : "amber"} />
            {anime.needsManualResearch && <MagicBadge value="Needs research" tone="amber" />}
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 sm:min-w-48">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">Start point</p>
          <p className="mt-2 break-words text-lg font-black text-white">{anime.recommendedContinueFrom}</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Route</p>
          <p className="mt-1 break-words text-sm font-black text-cyan-100">{anime.recommendedRoute}</p>
        </div>
      </div>
    </section>
  );
}
