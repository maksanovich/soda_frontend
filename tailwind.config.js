/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/sections/*.{js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'auth': "url('/src/assets/img/background.jpg')",
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}