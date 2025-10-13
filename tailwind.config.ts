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
        graphite: "#F1F3F8",
        cloud: "#FFFFFF",
        neutral: "#8A93A6",
        accentBlue: "#0B0E1A",
        accentTeal: "#8A93A6",
        signalAmber: "#FF9A1F",
        successGreen: "#16A34A",
        errorRed: "#EF4444",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 24px 64px -40px rgba(11, 14, 26, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
