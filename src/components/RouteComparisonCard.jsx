import { getRouteComparison } from "../utils/anime.js";
import MagicBadge from "./MagicBadge.jsx";

export default function RouteComparisonCard({ anime }) {
  const comparison = getRouteComparison(anime);

  if (!comparison) return null;

  return (
    <section className="manga-panel rounded-2xl p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Route Comparison</p>
          <h2 className="mt-3 text-2xl font-black text-white">Manga or light novel?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Both continuation paths are listed locally, so this card compares the reading experience without spoilers.
          </p>
        </div>
        <MagicBadge label="Recommended" value={comparison.recommended} tone={comparison.recommended === "Light Novel" ? "pink" : "cyan"} />
      </div>

      <div className="mt-5 grid gap-3">
        {comparison.rows.map((row) => (
          <div key={row.label} className="grid gap-3 rounded-xl border border-white/10 bg-ink/50 p-4 md:grid-cols-[0.85fr_1fr_1fr]">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{row.label}</p>
            <p className="text-sm font-semibold leading-6 text-cyan-100">Manga: {row.manga}</p>
            <p className="text-sm font-semibold leading-6 text-pink-100">Light novel: {row.lightNovel}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
