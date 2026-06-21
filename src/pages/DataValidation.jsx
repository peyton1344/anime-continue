import InfoBadge from "../components/InfoBadge.jsx";
import {
  animeDatabase,
  supportedConfidenceLevels,
  supportedContinuationStatuses,
  supportedResearchPriorities,
  supportedSourceTypes,
} from "../data/animeDatabase.js";
import { validateAnimeDatabase } from "../utils/validateAnimeDatabase.js";

export default function DataValidation() {
  const report = validateAnimeDatabase(animeDatabase, {
    sourceTypes: supportedSourceTypes,
    confidenceLevels: supportedConfidenceLevels,
    continuationStatuses: supportedContinuationStatuses,
    researchPriorities: supportedResearchPriorities,
  });

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Data Validation</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Anime database console report</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Static validation for the local anime database. This page checks structure, duplicate records,
            season and episode totals, enum values, missing continuation data, verification flags, and
            suspicious external link patterns.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-6">
          <ReportStat label="Total entries" value={report.totalEntries} />
          <ReportStat label="Needs verification" value={report.needsVerificationCount} />
          <ReportStat label="Missing episodes" value={report.missingEpisodeCount} />
          <ReportStat label="Missing seasons" value={report.missingSeasonCount} />
          <ReportStat label="Duplicate ids" value={report.duplicateIds.length} />
          <ReportStat label="Problem entries" value={report.problemCount} />
          <ReportStat label="Blank continue answers" value={report.blankContinuationCount} />
          <ReportStat label="Verified continuations" value={report.verifiedContinuationCount} />
          <ReportStat label="Approximate continuations" value={report.approximateContinuationCount} />
          <ReportStat label="Start from beginning" value={report.startFromBeginningCount} />
          <ReportStat label="Original anime" value={report.originalAnimeContinuationCount} />
          <ReportStat label="Anime caught up" value={report.animeCaughtUpCount} />
          <ReportStat label="Manual research" value={report.needsManualResearchCount} />
        </div>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-white">Duplicate checks</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Duplicate IDs and titles should be resolved before publishing.
              </p>
            </div>
            <InfoBadge value={report.duplicateIds.length === 0 && report.duplicateTitles.length === 0 ? "No duplicates" : "Duplicates found"} tone={report.duplicateIds.length === 0 && report.duplicateTitles.length === 0 ? "green" : "amber"} />
          </div>

          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <DuplicateList label="Duplicate ids" values={report.duplicateIds} />
            <DuplicateList label="Duplicate titles" values={report.duplicateTitles} />
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-white">Entries with possible problems</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Uncertain entries are not deleted. They should stay marked for verification until an editor checks them.
              </p>
            </div>
            <InfoBadge value={`${report.problemCount} entries`} tone={report.problemCount > 0 ? "amber" : "green"} />
          </div>

          <div className="grid gap-3">
            {report.problems.length === 0 ? (
              <p className="rounded-lg border border-white/10 bg-ink/50 p-4 text-sm text-slate-300">
                No validation problems found.
              </p>
            ) : (
              report.problems.map((entry) => (
                <article key={entry.id} className="rounded-lg border border-white/10 bg-ink/50 p-4">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-black text-white">{entry.title}</p>
                      <p className="mt-1 text-sm text-slate-500">{entry.id}</p>
                    </div>
                    <InfoBadge value={`${entry.problems.length} issues`} tone="amber" />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {entry.problems.map((problem) => (
                      <InfoBadge key={problem} value={problem} tone="amber" />
                    ))}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </section>
    </div>
  );
}

function ReportStat({ label, value }) {
  return (
    <div className="glass-panel rounded-xl p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}

function DuplicateList({ label, values }) {
  return (
    <div className="rounded-lg border border-white/10 bg-ink/50 p-4">
      <p className="text-sm font-black text-white">{label}</p>
      <p className="mt-2 text-sm text-slate-300">{values.length > 0 ? values.join(", ") : "None found"}</p>
    </div>
  );
}
