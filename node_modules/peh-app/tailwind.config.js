/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#925390'
      },
      spacing: {
        '20vh': '20vh',
        '10vh': '10vh'
      }
    },
  },
  plugins: [],
}

