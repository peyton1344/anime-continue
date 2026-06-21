import { useEffect, useMemo, useState } from "react";
import AnimeCard from "../components/AnimeCard.jsx";
import InfoBadge from "../components/InfoBadge.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import { toAnimeViewModel } from "../utils/anime.js";

const WATCHLIST_STORAGE_KEY = "afterAnimeGuide.watchlistState";

const categoryOptions = [
  { id: "all", label: "All saved" },
  { id: "watching", label: "Watching" },
  { id: "finishedAnime", label: "Finished Anime" },
  { id: "planToReadManga", label: "Plan to Read Manga" },
  { id: "planToReadLightNovel", label: "Plan to Read Light Novel" },
  { id: "completed", label: "Completed" },
];

const legacyCategoryMap = {
  watchlist: "Watching",
  planToRead: "Plan to Read Manga",
};

export default function Watchlist() {
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const [savedState, setSavedState] = useState({});
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    try {
      const nextState = JSON.parse(localStorage.getItem(WATCHLIST_STORAGE_KEY) || "{}");
      setSavedState(nextState && typeof nextState === "object" ? nextState : {});
    } catch {
      setSavedState({});
    }
  }, []);

  const savedEntries = animeList
    .map((anime) => ({
      anime,
      categories: getSavedCategories(savedState[anime.id]),
    }))
    .filter((entry) => entry.categories.length > 0);
  const filteredEntries =
    activeCategory === "all"
      ? savedEntries
      : savedEntries.filter((entry) => Boolean(savedState[entry.anime.id]?.[activeCategory]));

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 flex flex-col gap-4 rounded-3xl p-5 sm:flex-row sm:items-end sm:justify-between sm:p-7">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Watchlist</p>
            <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Saved continuation guides</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Organize anime by watching progress and what you plan to read next. Everything is saved locally.
            </p>
          </div>
          <InfoBadge label="Saved" value={savedEntries.length} tone="green" />
        </div>

        <section className="glass-panel mb-6 rounded-2xl p-4">
          <h2 className="text-lg font-black text-white">Watchlist filters</h2>
          <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
            {categoryOptions.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={[
                  "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-black transition",
                  activeCategory === category.id
                    ? "border-cyan-200 bg-cyan-200 text-ink"
                    : "border-white/10 bg-white/[0.06] text-slate-200 hover:bg-white/10",
                ].join(" ")}
              >
                {category.label}
              </button>
            ))}
          </div>
        </section>

        {filteredEntries.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredEntries.map(({ anime, categories }) => (
              <div key={anime.id} className="grid gap-3">
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <InfoBadge key={category} value={category} tone="blue" />
                  ))}
                </div>
                <AnimeCard anime={anime} />
              </div>
            ))}
          </div>
        ) : (
          <div className="manga-panel rounded-2xl p-8 text-center">
            <h2 className="text-xl font-black text-white">No saved anime in this category</h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Open an anime detail page and save it as Watching, Finished Anime, Plan to Read Manga,
              Plan to Read Light Novel, or Completed.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function getSavedCategories(state = {}) {
  const labels = categoryOptions
    .filter((category) => category.id !== "all" && state[category.id])
    .map((category) => category.label);

  Object.entries(legacyCategoryMap).forEach(([key, label]) => {
    if (state[key] && !labels.includes(label)) labels.push(label);
  });

  return labels;
}
