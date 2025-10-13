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
        graphite: "#111827",
        cloud: "#F5F7FA",
        neutral: "#94A3B8",
        accentBlue: "#5B5CEB",
        accentTeal: "#00B3A4",
        signalAmber: "#FF9A1F",
        successGreen: "#16A34A",
        errorRed: "#EF4444",
      },
      maxWidth: {
        content: "72rem",
      },
      boxShadow: {
        card: "0 20px 48px -28px rgba(91, 92, 235, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
