import { getContinueLabel } from "../utils/anime.js";
import InfoBadge from "./InfoBadge.jsx";

export default function ContinueReadingCard({ anime }) {
  return (
    <section className="premium-border rounded-xl bg-white/[0.06] p-5 shadow-glow">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">
            Continue after the anime
          </p>
          <h2 className="mt-3 text-2xl font-black text-white">{getContinueLabel(anime)}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">{anime.notes}</p>
        </div>
        <InfoBadge label="Confidence" value={anime.confidenceLevel} tone="green" />
      </div>
    </section>
  );
}
