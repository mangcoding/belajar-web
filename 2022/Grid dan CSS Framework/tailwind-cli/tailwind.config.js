/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
          primary : '#99c6d8',
          header : "#F6F9FC",
      },
      fontFamily: {
          raleway: ['Raleway', 'sans-serif'],
          nunito: ['Nunito Sans', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
