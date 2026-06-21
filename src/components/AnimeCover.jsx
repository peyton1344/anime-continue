import { useEffect, useState } from "react";
import GeneratedAnimeCover from "./GeneratedAnimeCover.jsx";

function resolvePublicPath(path) {
  if (typeof path !== "string") return "";

  const basePath = import.meta.env.BASE_URL || "/";
  const cleanBase = basePath.endsWith("/") ? basePath : `${basePath}/`;

  if (path.startsWith("/")) {
    return `${cleanBase}${path.slice(1)}`;
  }

  return path;
}

function shouldUseGeneratedCover({ anime, src, hasImageError }) {
  return (
    anime?.coverStatus === "Generated Cover" ||
    anime?.coverStatus === "Missing" ||
    anime?.coverStatus === "Needs Replacement" ||
    typeof src !== "string" ||
    !src.trim() ||
    src.includes("default-cover") ||
    src.includes("placeholder") ||
    hasImageError
  );
}

export default function AnimeCover({ anime, src = anime?.coverImage, alt, className = "" }) {
  const [hasImageError, setHasImageError] = useState(false);
  const title = anime?.title || alt?.replace(/\s+cover art$/i, "") || "AfterAnime Guide";
  const useGeneratedCover = shouldUseGeneratedCover({ anime, src, hasImageError });

  useEffect(() => {
    setHasImageError(false);
  }, [src]);

  if (useGeneratedCover) {
    return <GeneratedAnimeCover anime={anime} title={title} className={`h-full w-full ${className}`} />;
  }

  return (
    <img
      src={resolvePublicPath(src)}
      alt={alt || `${title} cover art`}
      loading="lazy"
      onError={() => setHasImageError(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  );
}
