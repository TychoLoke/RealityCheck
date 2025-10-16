import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        night: "#04060F",
        ink: "#F7FAFF",
        mist: "#0F1524",
        slate: "#1D2638",
        accent: "#5D7CFF",
        accentSoft: "#89A8FF",
        success: "#3CD4A0",
        warning: "#FBC15A",
      },
      maxWidth: {
        content: "80rem",
      },
      boxShadow: {
        surface: "0 24px 60px -30px rgba(12, 17, 32, 0.55)",
      },
      borderRadius: {
        "2xl": "1.25rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out both",
      },
    },
  },
  plugins: [typography],
};

export default config;
