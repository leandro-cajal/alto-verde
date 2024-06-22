/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
        'playfair': ['Playfair Display', 'cursive'],
      },
      colors:{
        'primary': '#15542e',
        'secondary': '#FE5F00',
        'third': '#66cb52',
        'new-white': '#F5F0F6',
      },
    },
  },
  plugins: [],
}

