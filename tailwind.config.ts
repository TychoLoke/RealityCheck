import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0B0E1A",
        neutral: "#8A93A6",
        accentBlue: "#4E7EFF",
        accentTeal: "#00B3A4",
        signalAmber: "#FF9A1F",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 12px 30px -18px rgba(78, 126, 255, 0.35)",
      },
    },
  },
  plugins: [],
};

export default config;
