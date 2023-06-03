/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkBlue: "#091638",
      blue: "#1C3988",
      lightBlue: "#F3F3FA",
      hover: "#6E8AE9",
      white: "#DDDDDD",
    },
    fontFamily: {
      serifs: ["Merriweather", "serif"],
      sans: ["Nato Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
