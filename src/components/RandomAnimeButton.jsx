import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { animeDatabase } from "../data/animeDatabase.js";
import { toAnimeViewModel } from "../utils/anime.js";
import InfoBadge from "./InfoBadge.jsx";

const randomOptions = [
  { id: "all", label: "Random Anime", matches: () => true },
  { id: "isekai", label: "Random Isekai", matches: (anime) => anime.isekaiSubgenres.length > 0 },
  { id: "romance", label: "Random Romance", matches: (anime) => anime.genres.includes("Romance") },
  { id: "finished", label: "Random Finished Anime", matches: (anime) => anime.status.toLowerCase().includes("finished") },
  { id: "high", label: "Random High Confidence Entry", matches: (anime) => anime.confidenceLevel === "High" },
];

export default function RandomAnimeButton() {
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const [selectedOption, setSelectedOption] = useState(randomOptions[0].id);
  const [pickedAnime, setPickedAnime] = useState(null);

  const pickRandomAnime = () => {
    const option = randomOptions.find((item) => item.id === selectedOption) || randomOptions[0];
    const candidates = animeList.filter(option.matches);
    const nextAnime = candidates[Math.floor(Math.random() * candidates.length)];
    setPickedAnime(nextAnime || null);
  };

  return (
    <section className="anime-glow-card rounded-2xl p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Random discovery</p>
          <h2 className="mt-2 text-2xl font-black text-white">Let fate pick the next guide</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Pick a local-only random filter and jump to an anime detail page.
          </p>
        </div>

        <div className="grid min-w-0 gap-3 sm:grid-cols-[1fr_auto]">
          <select
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
            className="h-12 w-full min-w-0 rounded-xl border border-white/10 bg-slate-950/70 px-3 text-sm font-bold text-white outline-none focus:border-cyan-200"
          >
            {randomOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="button" onClick={pickRandomAnime} className="gradient-button rounded-xl px-5 py-3 text-sm font-black transition hover:scale-[1.01]">
            Random Anime
          </button>
        </div>
      </div>

      {pickedAnime && (
        <div className="mt-5 rounded-xl border border-white/10 bg-ink/50 p-4">
          <div className="flex flex-wrap gap-2">
            <InfoBadge value={pickedAnime.sourceType} tone="blue" />
            <InfoBadge value={pickedAnime.confidenceLevel} tone={pickedAnime.confidenceLevel === "High" ? "green" : "amber"} />
          </div>
          <h3 className="mt-3 text-xl font-black text-white">{pickedAnime.title}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">{pickedAnime.spoilerFreeSummary}</p>
          <Link to={`/anime/${pickedAnime.id}`} className="mt-4 inline-flex rounded-xl bg-white px-4 py-3 text-sm font-black text-ink transition hover:bg-cyan-100">
            Open random guide
          </Link>
        </div>
      )}
    </section>
  );
}
