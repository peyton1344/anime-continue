export default function MangaPanelSection({ eyebrow, title, children, action, className = "" }) {
  return (
    <section className={`manga-panel rounded-2xl p-5 sm:p-6 ${className}`}>
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          {eyebrow && <p className="text-sm font-black uppercase tracking-[0.2em] text-aurora-blue">{eyebrow}</p>}
          {title && <h2 className="mt-2 text-2xl font-black text-white">{title}</h2>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
