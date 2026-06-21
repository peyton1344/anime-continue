import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import AnimeGlowCard from "../components/AnimeGlowCard.jsx";
import AnimeCard from "../components/AnimeCard.jsx";
import MagicBadge from "../components/MagicBadge.jsx";
import MangaPanelSection from "../components/MangaPanelSection.jsx";
import RandomAnimeButton from "../components/RandomAnimeButton.jsx";
import SearchBar from "../components/SearchBar.jsx";
import SpoilerWarningBox from "../components/SpoilerWarningBox.jsx";
import { animeDatabase } from "../data/animeDatabase.js";
import { getPopularAnime, getRecentlyUpdatedAnime, normalize, toAnimeViewModel } from "../utils/anime.js";

const popularAnimeIds = [
  "solo-leveling",
  "frieren-beyond-journeys-end",
  "oshi-no-ko",
];

export default function Home() {
  const [homeSearch, setHomeSearch] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const animeList = useMemo(() => animeDatabase.map(toAnimeViewModel), []);
  const featuredAnime = getPopularAnime(animeList, popularAnimeIds);
  const popularIsekai = animeList.filter((anime) => anime.isekaiSubgenres.length > 0).slice(0, 3);
  const recentlyUpdated = getRecentlyUpdatedAnime(animeList, 3);
  const trimmedSearch = homeSearch.trim();
  const homeSearchResults = useMemo(() => {
    const query = normalize(trimmedSearch);

    if (!query) return [];

    return animeList
      .filter((anime) => anime.searchText.includes(query))
      .slice(0, 6);
  }, [animeList, trimmedSearch]);

  const handleHomeSearch = (event) => {
    event.preventDefault();
    setHasSearched(true);
  };

  return (
    <div className="page-shell px-4 py-8 sm:px-6 lg:px-8">
      <section className="anime-hero mx-auto grid max-w-7xl gap-8 rounded-3xl p-5 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:p-10">
        <div className="sparkle-field pointer-events-none" aria-hidden="true">
          <span className="left-[8%] top-[18%]" />
          <span className="left-[34%] top-[72%]" />
          <span className="left-[74%] top-[34%]" />
          <span className="left-[88%] top-[78%]" />
        </div>
        <div className="relative z-10">
          <div className="flex flex-wrap gap-2">
            <MagicBadge value="Spoiler-safe" tone="green" />
            <MagicBadge value="Local database" tone="cyan" />
            <MagicBadge value="Beginner-friendly" tone="pink" />
          </div>
          <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Find where to continue after the anime ends
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Search an anime, check episodes and seasons, then get spoiler-safe manga and light
            novel continuation guidance from the local database.
          </p>

          <form onSubmit={handleHomeSearch} className="relative z-20 mt-8 max-w-2xl rounded-xl border border-white/10 bg-white/10 p-2">
            <SearchBar
              value={homeSearch}
              onChange={setHomeSearch}
              onEnter={handleHomeSearch}
              placeholder="Try Solo Leveling or Frieren"
            />
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="gradient-button rounded-xl px-5 py-3 text-center text-sm font-black transition hover:scale-[1.01]"
              >
                Search anime
              </button>
              <Link
                to="/isekai"
                className="rounded-xl border border-white/10 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-white/10"
              >
                Browse isekai
              </Link>
            </div>
          </form>
        </div>

        <AnimeGlowCard className="relative z-10 p-5 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-aurora-blue">
            Guide format
          </p>
          <div className="mt-5 grid gap-4">
            {[
              ["1", "Search by title or alternate title"],
              ["2", "Review anime episode and season information"],
              ["3", "Continue from a spoiler-safe manga or light novel point"],
            ].map(([step, label]) => (
              <div key={step} className="flex gap-4 rounded-lg border border-white/10 bg-white/5 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-sm font-black text-ink">
                  {step}
                </span>
                <p className="self-center text-sm font-semibold text-slate-100">{label}</p>
              </div>
            ))}
          </div>
          <div className="mt-5">
            <SpoilerWarningBox />
          </div>
        </AnimeGlowCard>
      </section>

      <div className="mx-auto mt-10 grid max-w-7xl gap-10">
        {hasSearched && (
          <MangaPanelSection
            eyebrow="Home search"
            title={trimmedSearch ? `Results for "${trimmedSearch}"` : "Type an anime name to search"}
          >
            {!trimmedSearch ? (
              <div className="rounded-xl border border-white/10 bg-ink/50 p-6 text-sm leading-6 text-slate-300">
                Type an anime name in the search box, then press Enter or click Search anime.
              </div>
            ) : homeSearchResults.length > 0 ? (
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {homeSearchResults.map((anime) => (
                  <AnimeCard key={anime.id} anime={anime} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-white/10 bg-ink/50 p-6 text-sm leading-6 text-slate-300">
                No anime found for that search. Try another title, a shorter phrase, or an alternative title.
              </div>
            )}
          </MangaPanelSection>
        )}

        <RandomAnimeButton />

        <MangaPanelSection
          eyebrow="Featured guides"
          title="Popular continuation picks"
          action={<Link to="/search" className="text-sm font-bold text-cyan-100 hover:text-white">
            Browse all
          </Link>}
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
          </div>
        </MangaPanelSection>

        <MangaPanelSection eyebrow="Popular isekai" title="Another-world starter picks">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {popularIsekai.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </MangaPanelSection>

        <MangaPanelSection eyebrow="Recently updated" title="Fresh guide entries">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {recentlyUpdated.map((anime) => (
              <AnimeCard key={anime.id} anime={anime} />
            ))}
          </div>
        </MangaPanelSection>

        <MangaPanelSection eyebrow="Data confidence" title="Why some entries are marked for review">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["High confidence", "A safer draft after checking source coverage."],
              ["Low or unknown", "Use as a pointer, not a final chapter claim."],
              ["Needs verification", "Editors should confirm episodes, seasons, and route before publishing."],
            ].map(([title, copy]) => (
              <div key={title} className="rounded-xl border border-white/10 bg-ink/50 p-4">
                <h3 className="font-black text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{copy}</p>
              </div>
            ))}
          </div>
        </MangaPanelSection>
      </div>
    </div>
  );
}
