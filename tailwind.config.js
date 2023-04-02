/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom:{
          brown: '#5C4B51',
          bluegreen: '#8CBEB2',
          creme: '#F2EBBF',
          vanilla: '#F3B562',
          red: '#F06060',
          dark: '#D9D3AB',
        }
      }
    },
  },
  plugins: [],
}

