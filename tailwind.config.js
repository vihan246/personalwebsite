/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#2C363F",
      "blue-dark": "#3D5467",
      "blue-light": "#AFCBFF",
      normal: "#FEFAE0",
      pop: "#E9806E",
    },
    extend: {},
  },
  plugins: [],
};
