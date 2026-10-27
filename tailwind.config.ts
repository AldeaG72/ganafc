import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { 950: "#071427", 900: "#0B1F3A", 800: "#132C52", 700: "#1C3B69" },
        gold: { 300: "#E3C98A", 400: "#D4B26A", 500: "#C9A24D", 600: "#A9852F" },
        cream: "#F8F6F1",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
