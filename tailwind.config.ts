// tailwind.config.ts (v3 syntax)
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // This 'extend' block is now required
    extend: {
      colors: {
        "orange-primary": "#D87D4A",
        "orange-light": "#FBAF85",
        "black-dark": "#101010",
        "black-light": "#191919",
        "gray-light": "#F1F1F1",
        "gray-medium": "#FAFAFA",
        "gray-dark": "#979797",
        white: "#FFFFFF",
        "white-off": "#F1F1F1",
      },
      letterSpacing: {
        "overline": "0.625rem",
        "sub-title": "0.08125rem",
      },
      padding: {
        "22": "5.5rem",
      }
    },
  },
  plugins: [],
};
export default config;