/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'corPrimaria' : '#1D425C',
      },
      height:{
        '1/10' : '10%',
        '9/10' : '90%',
      }
    },
  },
  plugins: [],
}