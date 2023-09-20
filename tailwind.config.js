/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#F9F4F0",
      "background-dark": "#5D4032",
      light: "#F9F4F0",
      dark: "#5D4032",
      pop: "#48A9A6",
      "pop-light": "#A9DBD8",
    },
    extend: {},
  },
  plugins: [],
};
