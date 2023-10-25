/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary' : 'Sora'
      },

      colors: {
        'VeryPaleBlue' : 'hsl(207, 100%, 98%)',
      },

      backgroundImage: {
        'primary': "url('src/assets/worship.webp')"
      }
    },
  },
  plugins: [],
}

