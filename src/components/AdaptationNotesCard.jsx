import { useState } from "react";
import ConfidenceLevelBadge from "./ConfidenceLevelBadge.jsx";

export default function AdaptationNotesCard({ anime, isApproximate }) {
  const [showNotes, setShowNotes] = useState(false);

  return (
    <section className="manga-panel rounded-2xl p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-100">
            Adaptation notes
          </p>
          <h3 className="mt-2 text-2xl font-black text-white">Spoiler-safe by default</h3>
        </div>
        <ConfidenceLevelBadge level={anime.confidenceLevel} />
      </div>

      <div className="warning-scroll mt-5 rounded-2xl p-4 text-sm leading-6 text-amber-50">
        Detailed adaptation notes may mention skipped, changed, or rearranged content. They stay
        hidden until you choose to show them.
      </div>

      {isApproximate && (
        <p className="mt-4 rounded-lg border border-white/10 bg-ink/50 p-4 text-sm font-semibold text-slate-200">
          Approximate recommendation: this guide may change if the anime is ongoing or the
          adaptation order is unusual.
        </p>
      )}

      {showNotes && (
        <div className="mt-4 rounded-lg border border-white/10 bg-ink/60 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
            Possible adaptation detail
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-200">{anime.notes}</p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setShowNotes((current) => !current)}
        className="gradient-button mt-5 rounded-xl px-5 py-3 text-sm font-black transition hover:scale-[1.01]"
      >
        {showNotes ? "Hide adaptation notes" : "Show adaptation notes"}
      </button>
    </section>
  );
}
