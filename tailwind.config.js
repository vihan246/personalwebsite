/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#20201D",
      "background-light": "#E0DFD5",
      light: "#E0DFD5",
      dark: "#20201D",
      pop: "#48A9A6",
      "pop-light": "#A9DBD8",
    },
    extend: {},
  },
  plugins: [],
};
