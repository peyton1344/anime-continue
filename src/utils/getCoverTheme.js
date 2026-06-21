const defaultCoverTheme = {
  id: "unknown",
  colors: ["#050816", "#172033", "#0f2742"],
};

const coverThemes = [
  {
    id: "reincarnation",
    matches: ({ genres, isekaiSubgenres }) => hasAny(isekaiSubgenres, ["Reincarnation"]),
    colors: ["#050816", "#23245f", "#1e3a5f"],
  },
  {
    id: "fantasy",
    matches: ({ genres, isekaiSubgenres }) => hasAny(genres, ["Fantasy", "Isekai"]) || isekaiSubgenres.length > 0,
    colors: ["#050816", "#14344d", "#0f4c5f"],
  },
  {
    id: "romance",
    matches: ({ genres }) => hasAny(genres, ["Romance", "Drama"]),
    colors: ["#0c1020", "#4c1d3f", "#5f2c42"],
  },
  {
    id: "action",
    matches: ({ genres }) => hasAny(genres, ["Action", "Shounen", "Adventure"]),
    colors: ["#050816", "#40201d", "#2d1b3d"],
  },
  {
    id: "mystery",
    matches: ({ genres }) => hasAny(genres, ["Mystery", "Thriller", "Suspense", "Horror"]),
    colors: ["#050816", "#20163e", "#283241"],
  },
];

export function getCoverTheme(anime = {}) {
  const themeInput = {
    genres: Array.isArray(anime.genres) ? anime.genres : [],
    isekaiSubgenres: Array.isArray(anime.isekaiSubgenres) ? anime.isekaiSubgenres : [],
  };

  return coverThemes.find((theme) => theme.matches(themeInput)) || defaultCoverTheme;
}

function hasAny(values, expected) {
  return expected.some((value) => values.includes(value));
}
