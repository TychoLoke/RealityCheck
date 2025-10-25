import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.mdx",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0B0E1A",
          secondary: "#8A93A6",
          bg: "#FFFFFF",
          muted: "#F6F7F9",
        },
        zinc: {
          950: "#0B0E1A",
        },
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [typography],
};

export default config;
