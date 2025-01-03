/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: '#FC4747',
        'dark-blue': '#10141E',
        'semidark-blue': '#161D2F',
        'grayish-blue': '#5A698F',
      },
      fontFamily: {
        'outfit': ['Outfit', 'serif'],
      },
    },
  },
  plugins: [],
}