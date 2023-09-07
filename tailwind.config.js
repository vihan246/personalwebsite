/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    colors: {
      background: "#0C1618",
      "background-med": "#3D5467",
      "background-light": "#AFCBFF",
      text: "#FEFAE0",
      "text-pop": "#E9806E",
    },
    extend: {},
  },
  plugins: [],
};
