/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'bgblue' : '#E0EEFF',
        'bggreen' : '#B5E9DB',
      },
      backgroundImage:{
        wawe_logo : "url('img/wawe.svg')",
      }
    },
  },
  plugins: [],
}

