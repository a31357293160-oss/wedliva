import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"]
      },
      colors: {
        ivory: "#F8F2E7",
        ink: "#2A211B",
        champagne: "#C8A66A",
        champagneLight: "#E6D1A5",
        espresso: "#3A2B20",
        blush: "#D9B7A6"
      }
    }
  },
  plugins: []
};

export default config;
