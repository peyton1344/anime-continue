import ContinueRouteCard from "./ContinueRouteCard.jsx";

export default function MangaContinueCard({ anime, isApproximate }) {
  const isOriginalAnime = anime.sourceType === "Original Anime";
  const hasMangaGuide = anime.mangaContinueFrom.label !== "Not available yet";

  return (
    <ContinueRouteCard
      eyebrow="Manga route"
      title={isOriginalAnime ? "Original anime" : hasMangaGuide ? "Start the manga here" : "No manga start point listed"}
      tone="cyan"
      stats={[
        {
          label: "Recommended volume",
          value: isOriginalAnime ? "No source continuation" : anime.mangaContinueVolume || "Not available yet",
        },
        {
          label: "Recommended chapter",
          value: isOriginalAnime ? "No source continuation" : anime.mangaContinueChapter || "Not available yet",
        },
      ]}
      note={getMangaHelpText(anime, hasMangaGuide)}
      warning={hasMangaGuide && isApproximate ? "This continuation point is approximate. Consider starting a little earlier for the smoothest reading experience." : ""}
    />
  );
}

function getMangaHelpText(anime, hasMangaGuide) {
  if (anime.sourceType === "Original Anime") {
    return "This is an original anime, so there is no manga source continuation listed.";
  }

  if (hasMangaGuide) {
    return `Database note: ${anime.mangaContinueFrom.label}`;
  }

  return "No manga continuation point is available in the local database yet.";
}
