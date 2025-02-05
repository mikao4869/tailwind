/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors:{
        white:"#fffff",
        black:"#00000",
        red:"#ce0018"
      }
    },
  },
  
  plugins: [],
}

