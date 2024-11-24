/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'], // Default sans font to Inter
        openSans: ['Open Sans', 'Arial', 'sans-serif'], 
        montaga: ['Montaga', 'serif'],  // Add Montaga font here
      },
    },
  },
  plugins: [],
}

