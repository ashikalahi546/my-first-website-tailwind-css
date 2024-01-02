/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#010A5A',
        primaryLow:'#0C0C22',
        secondary:'#FFECF4',
        dark:'#232F55',
        success:'#FF4C8D',
        successLow:'#FF6773',
        dark:'#0B0B23',
      },
      height:{
        xl:'850px',
      },
    },
  },
  plugins: [],
}

