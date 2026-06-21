const toneStyles = {
  cyan: "border-cyan-200/20 bg-cyan-300/[0.08] text-cyan-100",
  pink: "border-pink-200/20 bg-pink-300/[0.08] text-pink-100",
  violet: "border-violet-200/20 bg-violet-300/[0.08] text-violet-100",
  amber: "border-amber-200/30 bg-amber-300/[0.10] text-amber-100",
  green: "border-emerald-200/20 bg-emerald-300/[0.08] text-emerald-100",
};

export default function MagicBadge({ label, value, tone = "cyan" }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[12px] font-semibold leading-none ${toneStyles[tone] || toneStyles.cyan}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-60" />
      {label && <span className="text-white/55">{label}</span>}
      <span>{value}</span>
    </span>
  );
}
