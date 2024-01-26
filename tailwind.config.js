/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#5D4032",
      "background-light": "#F9F4F0",
      light: "#F9F4F0",
      dark: "#5D4032",
      pop: "#229BD3",
      "pop-light": "#61BBE5",
    },
    extend: {},
  },
  plugins: [],
};
