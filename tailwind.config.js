/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#0C1618",
      "blue-dark": "#3D5467",
      "blue-light": "#AFCBFF",
      normal: "#FEFAE0",
      pop: "#E9806E",
    },
    extend: {},
  },
  plugins: [],
};
