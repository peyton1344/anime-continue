export default function AnimeGlowCard({ children, className = "", as: Component = "section" }) {
  return (
    <Component className={`anime-glow-card rounded-2xl ${className}`}>
      {children}
    </Component>
  );
}
