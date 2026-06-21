import ContinueRouteCard from "./ContinueRouteCard.jsx";

export default function LightNovelContinueCard({ anime, isApproximate }) {
  const isOriginalAnime = anime.sourceType === "Original Anime";
  const hasLightNovelGuide = anime.lightNovelContinueFrom.label !== "Not available yet";

  return (
    <ContinueRouteCard
      eyebrow="Light novel route"
      title={isOriginalAnime ? "Original anime" : hasLightNovelGuide ? "Start the light novel here" : "No light novel start point listed"}
      tone="pink"
      stats={[
        {
          label: "Recommended volume",
          value: isOriginalAnime ? "No source continuation" : anime.lightNovelContinueVolume || "Not available yet",
        },
        {
          label: "Recommended chapter",
          value: isOriginalAnime ? "No source continuation" : anime.lightNovelContinueChapter || "Not available yet",
        },
      ]}
      note={getLightNovelHelpText(anime, hasLightNovelGuide)}
      warning={hasLightNovelGuide && isApproximate ? "This continuation point is approximate. Start slightly earlier if you want extra context from skipped or rearranged scenes." : ""}
    />
  );
}

function getLightNovelHelpText(anime, hasLightNovelGuide) {
  if (anime.sourceType === "Original Anime") {
    return "This is an original anime, so there is no light novel source continuation listed.";
  }

  if (hasLightNovelGuide) {
    return `Database note: ${anime.lightNovelContinueFrom.label}`;
  }

  return "No light novel continuation point is available in the local database yet.";
}
