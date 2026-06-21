import MagicBadge from "./MagicBadge.jsx";

export default function ContinueRouteCard({ eyebrow, title, tone = "cyan", stats = [], note, warning }) {
  return (
    <section className="route-card rounded-2xl p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <MagicBadge value={eyebrow} tone={tone} />
          <h3 className="mt-3 text-2xl font-black text-white">{title}</h3>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-xl border border-white/10 bg-ink/50 p-4">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{stat.label}</p>
            <p className="mt-2 break-words text-lg font-black text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      {note && <p className="mt-4 text-sm leading-6 text-slate-300">{note}</p>}
      {warning && (
        <p className="mt-4 rounded-xl border border-amber-200/30 bg-amber-300/10 p-3 text-sm font-bold text-amber-100">
          {warning}
        </p>
      )}
    </section>
  );
}
