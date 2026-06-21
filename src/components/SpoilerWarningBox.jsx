export default function SpoilerWarningBox() {
  return (
    <div className="warning-scroll rounded-2xl p-4 text-sm text-amber-50">
      <h2 className="font-bold">Spoiler-safe note</h2>
      <p className="mt-2 leading-6 text-amber-100/90">
        This page only shows continuation points and general adaptation notes. Character outcomes,
        arc twists, and late-story reveals are intentionally avoided.
      </p>
    </div>
  );
}
