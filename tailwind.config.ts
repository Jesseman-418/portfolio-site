import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#101310",
          50: "#141815",
          100: "#1a201b",
          200: "#202720",
          300: "#303a31",
          400: "#465448",
        },
        ink: {
          DEFAULT: "#f0f1e8",
          900: "#f0f1e8",
          800: "#e5e8dd",
          700: "#d0d5c7",
          600: "#b1b9a7",
          500: "#969f8b",
          400: "#7d8773",
          300: "#626d5a",
          200: "#465141",
          100: "#2b3427",
        },
        cobalt: {
          DEFAULT: "#c8ff4d",
          50: "#f5ffd8",
          100: "#eaffb0",
          400: "#d9ff83",
          500: "#c8ff4d",
          600: "#b2eb35",
          700: "#83b61f",
          800: "#5b8216",
          900: "#3e5a12",
          950: "#263a0c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        display: "-0.03em",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
