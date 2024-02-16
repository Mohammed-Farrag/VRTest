/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        default: '#FFF100',
        yellow: '#FFB900',
        darkYellow: '#E09B00'
      },
      container: {
        center: true,
        padding: '2rem'
      }
    },

    boxShadow: {
      'custom': '0 2px 4px 0px #ccc'
    },
    fontFamily: {
      'mont': ["Montserrat", 'sans-serif']
    }
  },
  plugins: [],
}

