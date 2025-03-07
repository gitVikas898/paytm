/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter','sans-serif'],
        merriweather:['Merriweather','sans-serif'],
        firesans:['Fira Sans']
      }
    },
  },
  plugins: [],
}

