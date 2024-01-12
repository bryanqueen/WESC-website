/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#006885',
        'secondary': '#f8f8f8',
        'red': '#f60202',
        'orange': '#ffd83a',
        'Gray': '#d0d4d5'
      },
      backgroundImage: {
        'uniqueprep' : "url('/src/assets/img2.jpg')"
      }
    },
  },
  plugins: [],
}

