import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gold: "#ffd074",
        purple: "#a374ff",
      },
      backgroundColor: {
        purple: "#a374ff",
        gold: "#ffd074",
      },
      fontFamily: {
        heavy: ["Heavy", "sans-serif"],
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
