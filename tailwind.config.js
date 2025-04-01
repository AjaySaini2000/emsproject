/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'Roboto': ['Roboto', 'sans-serif'], // Replace default 'sans' font
      },
      colors:{
        "white":"#ffffff",
        "dark-pink":"#d7255a",
        "warning":"#ef4444"
      },
  },
  },
  plugins: [],
}
