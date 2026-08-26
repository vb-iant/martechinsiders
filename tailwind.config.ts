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
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
        body: ["var(--font-lato)"],
      },
    },
  },
  plugins: [],
};
export default config;
