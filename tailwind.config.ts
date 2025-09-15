import { type Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./src/**/*.{css}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "san-serif"],
        emoji: [
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Noto Color Emoji"',
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
export default config;
