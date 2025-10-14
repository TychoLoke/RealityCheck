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
        graphite: "#F5F7FB",
        cloud: "#FFFFFF",
        neutral: "#8A93A6",
        accentBlue: "#3C4CFF",
        accentTeal: "#2FB4D3",
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
