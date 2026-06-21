import { useState } from "react";
import { getReportIssueTypes, saveLocalReport } from "../utils/dataQuality.js";

export default function DataReportForm({ anime }) {
  const issueTypes = getReportIssueTypes();
  const [isOpen, setIsOpen] = useState(false);
  const [issueType, setIssueType] = useState(issueTypes[0]);
  const [userNote, setUserNote] = useState("");
  const [savedMessage, setSavedMessage] = useState("");

  const submitReport = (event) => {
    event.preventDefault();

    saveLocalReport({
      animeId: anime.id,
      animeTitle: anime.title,
      issueType,
      userNote: userNote.trim(),
      createdAt: new Date().toISOString(),
    });

    setUserNote("");
    setSavedMessage("Report saved locally.");
    setIsOpen(false);
  };

  return (
    <section className="anime-glow-card rounded-2xl p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-lg font-black text-white">Help improve this entry</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Reports are saved locally in this browser until a real backend exists.
          </p>
        </div>
        <button
          type="button"
          onClick={() => {
            setIsOpen((current) => !current);
            setSavedMessage("");
          }}
          className="gradient-button rounded-xl px-4 py-3 text-sm font-black transition hover:scale-[1.01]"
        >
          Report wrong data
        </button>
      </div>

      {savedMessage && <p className="mt-4 rounded-lg border border-emerald-300/25 bg-emerald-300/10 p-3 text-sm font-bold text-emerald-100">{savedMessage}</p>}

      {isOpen && (
        <form onSubmit={submitReport} className="mt-5 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Issue type</span>
            <select
              value={issueType}
              onChange={(event) => setIssueType(event.target.value)}
              className="rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm font-semibold text-white outline-none focus:border-cyan-200/50"
            >
              {issueTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="grid gap-2">
            <span className="text-sm font-bold text-white">Note</span>
            <textarea
              value={userNote}
              onChange={(event) => setUserNote(event.target.value)}
              rows={4}
              placeholder="What should be checked or corrected?"
              className="resize-none rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm font-semibold text-white outline-none placeholder:text-slate-500 focus:border-cyan-200/50"
            />
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="submit" className="gradient-button rounded-xl px-4 py-3 text-sm font-black transition hover:scale-[1.01]">
              Save report locally
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-black text-white transition hover:bg-white/10"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
