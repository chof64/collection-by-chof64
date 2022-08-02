/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'sansBaseHeading': ['Oswald', 'Arial'],
        'sansBaseBody': ['Roboto Flex', 'Helvetica'],
      },
  
    },
  },
  plugins: [],
}
