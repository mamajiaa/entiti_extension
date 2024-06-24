/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // 或 'media' 或 false
  theme: {
    extend: {
      width: {
        '50': '200px',
      },
      height: {
        '125': '500px',
      },
    },
  },
  plugins: [],
};