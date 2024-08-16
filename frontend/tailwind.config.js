/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('./src/assets/header_img.png')",
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        'nanum-pen': ['Nanum Pen Script', 'cursive']
      },
    },
  },
  plugins: [
   

  ],
}

