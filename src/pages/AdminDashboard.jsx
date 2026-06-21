import { useEffect, useState } from "react";
import InfoBadge from "../components/InfoBadge.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import { toAnimeViewModel } from "../utils/anime.js";
import { readLocalReports } from "../utils/dataQuality.js";

export default function AdminDashboard() {
  const [reports, setReports] = useState([]);
  const animeList = animeDatabase.map(toAnimeViewModel);
  const needsVerificationCount = animeList.filter((anime) => anime.needsVerification).length;

  useEffect(() => {
    setReports(readLocalReports());
  }, []);

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Admin placeholder</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Guide operations dashboard</h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            This page is intentionally static for now. It reserves room for content review, source
            verification, confidence scoring, and update workflows later.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          <DashboardCard label="Local database records" value={animeList.length} />
          <DashboardCard label="Needs verification" value={needsVerificationCount} />
          <DashboardCard label="Local reports" value={reports.length} />
        </div>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-white">Future admin tools</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Add, review, and publish continuation entries after a real backend and auth are introduced.
              </p>
            </div>
            <InfoBadge value="Placeholder only" tone="amber" />
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {[
              "Anime record editor",
              "Continuation source verification",
              "Spoiler review checklist",
              "Change history and last-updated controls",
            ].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-ink/50 p-4 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-white">Local data reports</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Reports submitted from anime detail pages. Stored only in this browser with localStorage.
              </p>
            </div>
            <InfoBadge value={reports.length > 0 ? `${reports.length} reports` : "No reports"} tone={reports.length > 0 ? "amber" : "green"} />
          </div>

          <div className="grid gap-3">
            {reports.length === 0 ? (
              <p className="rounded-lg border border-white/10 bg-ink/50 p-4 text-sm text-slate-300">
                No local reports have been submitted yet.
              </p>
            ) : (
              reports.map((report) => (
                <div key={`${report.animeId}-${report.createdAt}`} className="rounded-lg border border-white/10 bg-ink/50 p-4">
                  <div className="flex flex-wrap gap-2">
                    <InfoBadge value={report.issueType} tone="amber" />
                    <InfoBadge value={new Date(report.createdAt).toLocaleString()} />
                  </div>
                  <p className="mt-3 font-black text-white">{report.animeTitle}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{report.userNote || "No note provided."}</p>
                </div>
              ))
            )}
          </div>
        </section>

        <section className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-5">
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-black text-white">Local anime entries</h2>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Preview of records loaded from src/data/animeDatabase.js.
              </p>
            </div>
            <InfoBadge value={`${animeList.length} entries`} tone="blue" />
          </div>

          <div className="grid gap-3">
            {animeList.slice(0, 12).map((anime) => (
              <div
                key={anime.id}
                className="grid gap-3 rounded-lg border border-white/10 bg-ink/50 p-4 md:grid-cols-[1fr_auto]"
              >
                <div>
                  <p className="font-black text-white">{anime.title}</p>
                  <p className="mt-1 text-sm text-slate-400">
                    {anime.sourceType} · {anime.releaseYear} · {anime.animeLastEpisode}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  <InfoBadge value={anime.confidenceLevel} tone={anime.confidenceLevel === "High" ? "green" : "amber"} />
                  <InfoBadge
                    value={anime.needsVerification ? "Needs check" : "Verified"}
                    tone={anime.needsVerification ? "amber" : "green"}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  );
}

function DashboardCard({ label, value }) {
  return (
    <div className="glass-panel rounded-xl p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">{label}</p>
      <p className="mt-3 text-3xl font-black text-white">{value}</p>
    </div>
  );
}
