/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'bellefair': ['Bellefair', 'serif'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      colors: {
        'cWhite': '#FFFFFF',
        'cLightBlue': '#D0D6F9',
        'cDarkBlue': '#0B0D17',
      }
    },
  },
  plugins: [],
}
