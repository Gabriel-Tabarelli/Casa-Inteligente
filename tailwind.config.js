/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'corPrimaria' : '#1D425C',
        'corFundoCard' : '#D9D9D9',
        
      },
      height:{
        '1/10' : '10%',
        '9/10' : '90%',
      },
      gridTemplateRows: {
        'custom': '30% 70%', // Define your custom grid template
        'customComodo' : '40% 60%',
      },
    },
  },
  plugins: [],
}