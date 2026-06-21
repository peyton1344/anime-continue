import AnimeCard from "../components/AnimeCard.jsx";
import InfoBadge from "../components/InfoBadge.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import { toAnimeViewModel } from "../utils/anime.js";

export default function RecentlyUpdated() {
  const animeList = animeDatabase
    .map(toAnimeViewModel)
    .sort((first, second) => new Date(second.lastUpdated) - new Date(first.lastUpdated));

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="mx-auto max-w-7xl">
        <div className="anime-hero mb-6 rounded-3xl p-5 sm:p-7">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">Recently Updated</p>
          <h1 className="mt-3 text-3xl font-black text-white sm:text-4xl">Freshly edited anime entries</h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-300">
            Sorted by the local lastUpdated field. Update notes are inferred from the current database fields until a full changelog exists.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {animeList.slice(0, 48).map((anime) => (
            <div key={anime.id} className="grid gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex flex-wrap gap-2">
                  <InfoBadge label="Updated" value={anime.lastUpdated} tone="blue" />
                  <InfoBadge value={anime.needsVerification ? "Needs check" : "Stable"} tone={anime.needsVerification ? "amber" : "green"} />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Current record tracks {anime.totalEpisodes || "unknown"} episodes, {anime.totalSeasons || "unknown"} seasons,
                  and a {anime.recommendedRoute} recommendation.
                </p>
              </div>
              <AnimeCard anime={anime} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
