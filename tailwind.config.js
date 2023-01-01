/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'white': 'white',
      'black': '#16123F',
      'green': '#ABD699',
      'blue': '#75C9B7',
      'yellow': '#FFE26A',
      'teal': '#C7DDCC',
    },
    extend: {},
  },
  plugins: [],
}
