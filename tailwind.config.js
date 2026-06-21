/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1020",
        "ink-soft": "#141a2d",
        "aurora-blue": "#6ee7f9",
        "aurora-pink": "#f0abfc",
        "aurora-violet": "#a78bfa",
      },
      boxShadow: {
        glow: "0 24px 80px rgba(110, 231, 249, 0.18)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
