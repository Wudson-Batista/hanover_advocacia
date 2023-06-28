/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gold-200': '#FFE699',
      'gold-300': '#E5C973',
      'gold-400': '#CCAE52',
      'gold-500': '#BF9E39',
      'gold-600': '#A68521',
      'gold-700': '#8C711C',
      'blue-slate-500': '#6699CC',
      'blue-slate-600': '#477DB2',
      'blue-slate-700': '#2E6399',
      'blue-slate-800': '#1A4C80',
      'blue-slate-900': '#0A3866',
      'white': '#E6ECF2',
      'black': '#1E1E1E'

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
    extend: {},
  },
  plugins: [],
}

