import { formatSeasonEpisodes } from "../utils/anime.js";
import MagicBadge from "./MagicBadge.jsx";

export default function SeasonTimeline({ seasons }) {
  return (
    <section className="manga-panel rounded-2xl p-5 sm:p-6">
      <p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-blue">Season Timeline</p>
      <h2 className="mt-2 text-2xl font-black text-white">Episodes by season</h2>

      {seasons.length === 0 ? (
        <p className="mt-4 rounded-xl border border-white/10 bg-ink/50 p-4 text-sm text-slate-300">
          Season details not available yet
        </p>
      ) : (
        <div className="relative mt-5 grid gap-4 before:absolute before:bottom-4 before:left-4 before:top-4 before:w-px before:bg-gradient-to-b before:from-cyan-200/60 before:via-violet-200/40 before:to-pink-200/30">
          {seasons.map((season) => (
            <div key={`${season.seasonNumber}-${season.seasonTitle}`} className="relative grid gap-3 pl-10 sm:grid-cols-[1fr_auto] sm:items-center">
              <span className="absolute left-1.5 top-2 h-5 w-5 rounded-full border border-cyan-100/50 bg-ink shadow-[0_0_20px_rgba(103,232,249,0.35)]" />
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <p className="text-sm font-black text-white">
                  Season {season.seasonNumber}: {season.seasonTitle}
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  {formatSeasonEpisodes(season.episodes)} | {season.releaseYear || "TBA"}
                </p>
              </div>
              <MagicBadge value={season.status || "Status not available"} tone={season.status === "Announced" ? "violet" : "green"} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
