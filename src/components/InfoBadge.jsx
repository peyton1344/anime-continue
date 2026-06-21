const toneStyles = {
  default: "border-white/10 bg-white/8 text-slate-200",
  blue: "border-cyan-300/25 bg-cyan-300/10 text-cyan-100",
  pink: "border-fuchsia-300/25 bg-fuchsia-300/10 text-fuchsia-100",
  green: "border-emerald-300/25 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/25 bg-amber-300/10 text-amber-100",
};

export default function InfoBadge({ label, value, tone = "default" }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${toneStyles[tone]}`}>
      {label && <span className="text-slate-400">{label}</span>}
      <span>{value}</span>
    </span>
  );
}
