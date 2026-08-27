import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "#f46524",
        ink: "#f5f4f2",
        void: "#14161a",
        paper: "#fdfdfb",
        muted: "#6b6f76",
        hairline: "#e3e0da",
        cobalt: "#2454ff",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-lato)"],
        manrope: ["var(--font-manrope)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
