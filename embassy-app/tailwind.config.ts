import type { Config } from "tailwindcss";

// Design tokens for the Embassy of Lebanon in Romania concept.
// Palette intent: deep cedar green (authority) + restrained burgundy
// (accent/emergency only) + warm ivory (base, warmer than clinical
// government-portal grey) + subtle gold (fine dividers/focus only).
const config: Config = {
  darkMode: false, // an official diplomatic site should not silently
  // reinterpret national colours via a dark theme; out of scope for v1.
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cedar: {
          950: "#0F2A22",
          800: "#1C4636",
          700: "#25573F",
        },
        burgundy: {
          800: "#5A1521",
          700: "#6E1F2A",
        },
        ivory: {
          50: "#FAF6EE",
          100: "#F3ECDD",
        },
        gold: {
          300: "#D9BD84",
          400: "#C9A659",
        },
        charcoal: {
          900: "#241F1C",
          600: "#55504A",
        },
        line: "rgba(15, 42, 34, 0.16)",
      },
      fontFamily: {
        // Diplomatic display serif — used sparingly (H1, eyebrows only).
        serif: ["var(--font-serif)", "Georgia", "serif"],
        // UI/body sans for Latin (EN/RO).
        sans: ["var(--font-sans)", "system-ui", "Arial", "sans-serif"],
        // Arabic-script companion, sized/weighted to feel equally premium.
        arabic: ["var(--font-arabic)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        // Institutional, not app-like: minimal rounding throughout.
        DEFAULT: "2px",
      },
      spacing: {
        18: "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
