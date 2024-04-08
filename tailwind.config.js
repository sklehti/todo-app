/** @type {import('tailwindcss').Config} */
export default {
  // darkMode: "class",
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "dark-grayish-blue": "#393A4C",
      },
    },
  },
  plugins: [],
};
