/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#4C2948',
        'detail': '#FBBF24'
      },
      spacing: {
        '20vh': '20vh',
        '10vh': '10vh'
      }
    },
  },
  plugins: [],
}

