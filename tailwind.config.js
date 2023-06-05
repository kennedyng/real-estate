/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        sm: "1rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    colors: {
      darkBlue: "#091638",
      blue: "#1C3988",
      lightBlue: "#F3F3FA",
      hover: "#6E8AE9",
      white: "#DDDDDD",
      paleBlue: "#141B2D",
      faint: "#DADAEE",
    },
    fontFamily: {
      serifs: ["Merriweather", "serif"],
      sans: ["Nato Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
