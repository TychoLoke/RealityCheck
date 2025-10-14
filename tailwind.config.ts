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
        midnight: "#050B1A",
        graphite: "#F4F6FB",
        cloud: "#FFFFFF",
        neutral: "#8F9BB2",
        accentBlue: "#2563EB",
        accentTeal: "#0EA5E9",
        signalAmber: "#F59E0B",
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
