/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Arial', 'sans-serif'], // Default sans font to Inter
        openSans: ['Open Sans', 'Arial', 'sans-serif'],
        montaga: ['Montaga', 'serif'],  // Add Montaga font here
        poppins: ['Poppins', 'sans-serif'], // Define Poppins
        lora: ['Lora', 'serif'], // Define Lora
      },
      colors: {
        'accent': '#C14725',
        'background': '#F5F5F5',
        'blue': '#033D75',
        'light-blue': '#0078E9',
        'pastel-blue': '#E6F2FF',
        'aquaire': '#3A435E',
        'campus': '#0072CE',
        'orange': '#F6C09F',
        'gray-card': '#24292E',
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
      screens: {
      'between-lg-xl': { 'min': '1024px', 'max': '1630px' }, // Custom range between 1024px and 1630px
      'max-1600': { 'max': '1600px' },
      'min-1600': { 'min' : '1600px'},
      'min-1236': { 'min' : '1236px'},
      'max-1236': { 'max' : '1236px'},
      'max-940': { 'max' : '940px'},
      'min-940': { 'min' : '940px'},
      'max-770': { 'max' : '770px'},
      'max-640': { 'max' : '640px'},
        // 'between-xl-2xl': '1630px', // Targeting 1630px (for the max range)
        // 'max-md': { 'max': '1024px' }, // Target screens below 1024px
        // 'min-2xl': { 'min': '1630px' }, // Target screens above 1630px
      },
    },
  },
  plugins: [],
}

