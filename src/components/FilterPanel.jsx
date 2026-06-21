export default function FilterPanel({
  genres,
  selectedGenre,
  onGenreChange,
  sourceTypes,
  selectedSourceType,
  onSourceTypeChange,
  statuses,
  selectedStatus,
  onStatusChange,
  confidenceLevels,
  selectedConfidenceLevel,
  onConfidenceLevelChange,
  selectedNeedsVerification,
  onNeedsVerificationChange,
  continuationStatuses = ["All"],
  selectedContinuationStatus = "All",
  onContinuationStatusChange,
  recommendedRoutes = ["All"],
  selectedRecommendedRoute = "All",
  onRecommendedRouteChange,
  researchPriorities = ["All"],
  selectedResearchPriority = "All",
  onResearchPriorityChange,
  sortBy,
  onSortByChange,
  onClearFilters,
  onClose,
  quickFilters = [],
  activeFilterCount = 0,
}) {
  const selectClass =
    "h-12 w-full max-w-full min-w-0 box-border truncate rounded-xl border border-white/10 bg-slate-950/70 px-3 py-3 text-sm font-bold text-white outline-none transition duration-200 hover:border-cyan-200/30 focus:border-cyan-200 focus:bg-slate-950 focus:shadow-[0_0_0_3px_rgba(34,211,238,0.14),0_0_28px_rgba(192,132,252,0.18)] focus:ring-0";

  return (
    <aside className="glass-panel premium-border w-full min-w-0 rounded-2xl p-4 pb-6 pr-1 shadow-[0_24px_80px_rgba(12,18,46,0.32)] lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:w-80 lg:shrink-0 lg:self-start lg:overflow-y-auto lg:overscroll-contain lg:pr-2">
      <details open className="group min-w-0">
        <summary className="flex min-w-0 cursor-pointer list-none items-start justify-between gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 transition hover:bg-white/[0.07]">
          <div className="min-w-0">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-cyan-200">Guide filters</p>
            <h2 className="mt-1 text-xl font-black text-white">Find Your Next Anime</h2>
            <p className="mt-1 text-xs leading-5 text-slate-300">Filter by genre, route, status, and confidence.</p>
          </div>
          <span className="shrink-0 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-100">
            {activeFilterCount} active
          </span>
        </summary>

      <div className="mt-4 grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-1">
        <FilterSection title="Quick picks" subtitle="One-tap shortcuts for common guide searches.">
          <div className="flex min-w-0 flex-wrap gap-2">
            {quickFilters.map((chip) => (
              <QuickFilterChip key={chip.label} {...chip} />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Anime Type">
          <SelectField
            label="Genre"
            value={selectedGenre}
            onChange={onGenreChange}
            options={genres}
            className={selectClass}
          />
        </FilterSection>

        <FilterSection title="Season Info">
          <SelectField
            label="Anime status"
            value={selectedStatus}
            onChange={onStatusChange}
            options={statuses}
            className={selectClass}
          />
        </FilterSection>

        <FilterSection title="Reading Route">
          <div className="grid min-w-0 gap-3">
            <SelectField
              label="Source type"
              value={selectedSourceType}
              onChange={onSourceTypeChange}
              options={sourceTypes}
              className={selectClass}
            />
            <SelectField
              label="Recommended route"
              value={selectedRecommendedRoute}
              onChange={onRecommendedRouteChange}
              options={recommendedRoutes}
              className={selectClass}
            />
          </div>
        </FilterSection>

        <FilterSection title="Data Quality">
          <div className="grid min-w-0 gap-3">
            <SelectField
              label="Confidence"
              value={selectedConfidenceLevel}
              onChange={onConfidenceLevelChange}
              options={confidenceLevels}
              className={selectClass}
            />
            <SelectField
              label="Verification"
              value={selectedNeedsVerification}
              onChange={onNeedsVerificationChange}
              options={["All", "Needs verification", "Verified", "Verified continuation"]}
              className={selectClass}
            />
            <SelectField
              label="Continuation status"
              value={selectedContinuationStatus}
              onChange={onContinuationStatusChange}
              options={continuationStatuses}
              className={selectClass}
            />
            <SelectField
              label="Research priority"
              value={selectedResearchPriority}
              onChange={onResearchPriorityChange}
              options={researchPriorities}
              className={selectClass}
            />
          </div>
        </FilterSection>

        <FilterSection title="Sorting">
          <SelectField
            label="Sort by"
            value={sortBy}
            onChange={onSortByChange}
            options={[
              "Last updated newest",
              "Title A-Z",
              "Title Z-A",
              "Release year newest",
              "Release year oldest",
              "Total episodes highest",
              "Total episodes lowest",
            ]}
            className={selectClass}
          />
        </FilterSection>

        <button
          type="button"
          onClick={onClearFilters}
          className="gradient-button w-full max-w-full rounded-xl px-4 py-3 text-sm font-black transition duration-200 hover:scale-[1.01] hover:shadow-[0_16px_46px_rgba(192,132,252,0.3)] sm:col-span-2 lg:col-span-1"
        >
          Clear filters
        </button>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="w-full max-w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-black text-white transition hover:bg-white/15 sm:col-span-2 lg:hidden"
          >
            Close Filters
          </button>
        )}
      </div>
      </details>
    </aside>
  );
}

function FilterSection({ title, subtitle, children }) {
  return (
    <section className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.035] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
      <div className="mb-3 flex min-w-0 items-center gap-2">
        <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-200 shadow-[0_0_16px_rgba(103,232,249,0.7)]" />
        <div className="min-w-0">
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-white">{title}</h3>
          {subtitle && <p className="mt-1 text-xs leading-5 text-slate-400">{subtitle}</p>}
        </div>
      </div>
      {children}
    </section>
  );
}

function SelectField({ label, value, onChange, options, className }) {
  return (
    <label className="grid min-w-0 gap-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className={className}>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}

function QuickFilterChip({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`max-w-full rounded-full border px-3 py-2 text-xs font-black transition duration-200 ${
        active
          ? "border-cyan-200 bg-cyan-200 text-ink shadow-[0_0_22px_rgba(103,232,249,0.28)]"
          : "border-white/10 bg-white/[0.06] text-slate-200 hover:border-fuchsia-200/40 hover:bg-fuchsia-300/10 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
