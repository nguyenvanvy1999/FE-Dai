/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: ['15px', '22px'],
      'min': ['10px', {
        lineHeight: '15px',
      }]
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        grey: {
          100: '#ebebeb',
          300: '#f7f7f7',
          900: '#999',
        },
        light: 'rgba(255,255,255,.15)',
        black: {
          light: '#3d464d',
        },
        green: {
          300: '#28a745',
          400: '#21bf73',
          600: '#47991f',
        },
        yellow: {
          500: '#ffc338',
        },
        red: {
          500: '#ff2626',
        },
        'blue-light': {
          100: '#3c5a99',
        },
      },
      width: {
        '5px': '5px',
        '14px': '14px',
        '15px': '15px',
        '34px': '34px',
        '55px': '55px',
        '290px': '290px',
        '300px': '300px',
      },
      height: {
        '15px': '15px',
        '34px': '34px',
        '42px': '42px',
        '54px': '54px',
      },
      spacing: {
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '25px': '25px',
        '52px': '52px',
        '54px': '54px',
        '140px': '140px',
        '600px': '600px'
      },
      zIndex: {
        100: '999999',
      },
    },
  },
  plugins: [],
}
