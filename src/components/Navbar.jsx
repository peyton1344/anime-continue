import { NavLink } from "react-router-dom";

const links = [
  { href: "/", label: "Home" },
  { href: "/search", label: "Search" },
  { href: "/isekai", label: "Isekai" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/recently-updated", label: "Updated" },
  { href: "/research-queue", label: "Research" },
  { href: "/needs-verification", label: "Needs Check" },
  { href: "/data-review", label: "Data Review" },
  { href: "/data-validation", label: "Validation" },
  { href: "/admin", label: "Admin" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#090816]/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-cyan-200 via-violet-300 to-pink-300 text-sm font-black text-ink shadow-glow">
            ✦
          </span>
          <span>
            <span className="block text-base font-black tracking-wide text-white">AfterAnime</span>
            <span className="block text-xs text-cyan-100/75">Magic-safe continuation guide</span>
          </span>
        </NavLink>

        <div className="flex gap-2 overflow-x-auto rounded-2xl border border-white/10 bg-white/5 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
          {links.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                [
                  "whitespace-nowrap rounded-xl px-3 py-2 text-sm font-bold transition",
                  isActive
                    ? "bg-gradient-to-r from-cyan-100 via-violet-100 to-pink-100 text-ink shadow-[0_10px_30px_rgba(103,232,249,0.16)]"
                    : "text-slate-300 hover:bg-white/10 hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
