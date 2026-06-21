import { getCoverTheme } from "../utils/getCoverTheme.js";

export default function GeneratedAnimeCover({ anime = {}, title, className = "" }) {
  const displayTitle = title || anime.title || "AfterAnime Guide";
  const { colors } = getCoverTheme(anime);
  const [base, middle, accent] = colors;
  const shortTitle = displayTitle.length > 58 ? `${displayTitle.slice(0, 55)}...` : displayTitle;

  return (
    <div
      className={`relative flex h-full w-full overflow-hidden rounded-[inherit] border border-white/10 bg-slate-950 text-white shadow-[0_18px_50px_rgba(2,6,23,0.22)] ${className}`}
      style={{
        background: `linear-gradient(145deg, ${base} 0%, ${middle} 54%, ${accent} 100%)`,
      }}
      aria-label={`${displayTitle} generated cover`}
      role="img"
    >
      <div className="absolute -right-9 top-8 h-28 w-28 rounded-full bg-white/[0.13]" />
      <div className="absolute -bottom-7 -left-9 h-32 w-32 rounded-full bg-white/[0.16]" />

      <div className="absolute inset-x-5 bottom-5 top-5 border border-white/10 bg-black/[0.10]" />

      <div className="absolute left-9 top-[16%] z-10 w-fit text-[13px] font-semibold uppercase tracking-wide text-slate-200">
        AFTERANIME
      </div>

      <div className="absolute left-9 right-8 top-[38%] z-10 h-28 overflow-hidden">
        <h3 className="line-clamp-3 break-words text-[24px] font-extrabold leading-[1.08] text-white sm:text-[25px]">
          {shortTitle}
        </h3>
      </div>

      <div className="absolute bottom-[14%] left-9 right-8 z-10">
        <p className="truncate text-[12px] font-semibold text-slate-300">Local cover placeholder</p>
      </div>
    </div>
  );
}
