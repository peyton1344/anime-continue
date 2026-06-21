import ConfidenceLevelBadge from "./ConfidenceLevelBadge.jsx";
import VerificationWarningBox from "./VerificationWarningBox.jsx";

const confidenceLevels = [
  ["High", "The local entry is considered reliable enough for a spoiler-safe guide draft."],
  ["Medium", "The route is useful, but editors should still check adaptation coverage before publishing."],
  ["Low", "The continuation point may be approximate or based on incomplete local notes."],
  ["Unknown", "The route has not been verified enough to treat as a firm recommendation."],
];

export default function ConfidenceExplainer({ currentLevel }) {
  const isLowConfidence = currentLevel === "Low" || currentLevel === "Unknown";

  return (
    <section className="glass-panel rounded-2xl p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Data Confidence</p>
          <h2 className="mt-3 text-2xl font-black text-white">How reliable is this guide?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Confidence is a local editorial signal. It is not a spoiler and does not rely on external APIs.
          </p>
        </div>
        <ConfidenceLevelBadge label="Current" level={currentLevel} />
      </div>

      {isLowConfidence && (
        <div className="mt-4">
          <VerificationWarningBox title="Use as approximate guidance">
            This continuation point may be approximate because the confidence level is {currentLevel}.
          </VerificationWarningBox>
        </div>
      )}

      <div className="mt-5 grid gap-3 md:grid-cols-2">
        {confidenceLevels.map(([level, description]) => (
          <div key={level} className="rounded-xl border border-white/10 bg-ink/50 p-4">
            <ConfidenceLevelBadge level={level} />
            <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
