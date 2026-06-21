export default function SearchBar({ value, onChange, onEnter, placeholder = "Search anime title..." }) {
  return (
    <label className="block">
      <span className="sr-only">Search anime</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            onEnter?.(event);
          }
        }}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white px-4 py-4 text-base font-medium text-ink outline-none ring-0 transition placeholder:text-slate-500 focus:border-aurora-blue focus:shadow-glow"
      />
    </label>
  );
}
