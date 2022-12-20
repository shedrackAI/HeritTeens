/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      screens: {
        "xs": "314px",
        "small-phone": '412px'
      },
      colors: {
        primary: "#FFA14A",
        secondary: "#4c5870",
        neutral: "#4c58708a",
        grayBg: "#959eae0e"
      },
    },
  },
  plugins: [],
}