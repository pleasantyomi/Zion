/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary' : 'Sora',
        'secondary' : 'Montserrat',
        'tetiary' : 'Open Sans',
        'other' : 'Poppins',

      },

      colors: {
        'VeryPaleBlue' : 'hsl(207, 100%, 98%)',
      },

      backgroundImage: {
        'primary': "url('src/assets/worship.webp')",
        'contact': "url('src/assets/bishop.webp')",
      },

      screens:{
        'tablet' : '640px',
        'laptop' : '1024px',
        'mobile' : '375px'
      },

      keyframes: {
        slideIn:{

        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animatecss'),
  ],
}

