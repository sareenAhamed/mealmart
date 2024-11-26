/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "daraz": "#fa5409",
      },
      fontFamily:{
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}

