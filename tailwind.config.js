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
      colors: {
        'accent': '#C14725',
      },
      animation: {
        'grow-text': 'grow 0.8s forwards',
      },
      keyframes: {
        animation: {
          'bounce-slow': 'bounce 3s linear infinite',
        }
      },
    },
  },
  plugins: [],
}

