/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      'black': '#1E1E1E',
    },
    fontFamily: {
      'serif': ['"Libre Baskerville"', ...defaultTheme.fontFamily.sans],
      'sans': ['Montserrat']
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
        '2xl': '1496px',
      },
    },
    extend: {
      colors: {
        gold: {
          200: '#FFE699',
          300: '#E5C973',
          400: '#CCAE52',
          500: '#BF9E39',
          600: '#A68521',
          700: '#8C711C',
        },
        'blue-slate': {
          500: '#6699CC',
          600: '#477DB2',
          700: '#2E6399',
          800: '#1A4C80',
          900: '#0A3866',
        },
        'blue-grey': {
          100: '#E6ECF2',
          200: '#CED3D9',
          300: '#B6BABF',
          400: '#9DA2A6',
          500: '#85898C',
          600: '#555759',
          700: '#242526',
          800: '#18191A',
        },
        card: '#3C5773',
        footer: '#3D5A75',
        about: '#304961'
      },
    },
  },
  plugins: [],
}

