/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'], // Default sans font to Inter
        openSans: ['Open Sans', 'Arial', 'sans-serif'],
        montaga: ['Montaga', 'serif'],  // Add Montaga font here
        poppins: ['Poppins', 'sans-serif'], // Define Poppins
      },
      colors: {
        'accent': '#C14725',
        'background': '#F5F5F5',
        'blue': '#1480DC',
        'aquaire': '#3A435E',
        'campus': '#0072CE',
        'orange': '#F6C09F'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'grow-text': 'grow 0.8s forwards',
        'gradient-x': 'gradient-x 5s ease infinite',
        'gradient-y': 'gradient-y 5s ease infinite',
      },
      keyframes: {
        animation: {
          'bounce-slow': 'bounce 3s linear infinite',

        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'gradient-y': {
          '0%, 100%': { 'background-position': '50% 0%' },
          '50%': { 'background-position': '50% 100%' },
        },

      },
    },
  },
  plugins: [],
}

