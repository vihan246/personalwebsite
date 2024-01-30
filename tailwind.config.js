/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#222222",
      "background-light": "#F9F4F0",
      light: "#F9F4F0",
      "dark-light": "#474747",
      dark: "#222222",
      pop: "#229BD3",
      "pop-light": "#61BBE5",
    },
    extend: {
      boxShadow: {
        custom: "0 0px 6px 3px rgb(0 0 0 / 0.1)",
        "custom-view": "0 0px 15px 10px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
