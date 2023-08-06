/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontSize: {
      sm: ['15px', '22px'],
      min: [
        '10px',
        {
          lineHeight: '15px',
        },
      ],
      md: ['20px', '26px'],
      lg: ['28px', '34px'],
    },
    // fontSize: {
    //   sm: ['15px', '22px'],
    // },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1200px',
      },
    },
    extend: {
      fontSize: {
        '12px': '12px',
        '13px': '13px',
        '14px': '14px',
        '15px': '15px',
        '16px': '16px',
      },
      lineHeight: {
        1: 1,
        '18px': '18px',
      },
      colors: {
        grey: {
          100: '#ebebeb',
          200: '#f0f0f0',
          300: '#f7f7f7',
          400: '#ccc',
          500: '#b3b3b3',
          900: '#999',
        },
        light: 'rgba(255,255,255,.15)',
        black: {
          light: '#3d464d',
          100: '#212529',
        },
        green: {
          100: '#67b740',
          300: '#28a745',
          400: '#21bf73',
          600: '#47991f',
        },
        yellow: {
          500: '#ffc338',
          600: '#ffc107',
        },
        red: {
          500: '#ff2626',
        },
        'blue-light': {
          100: '#3c5a99',
        },
        'white-light': '#f2f2f2',
      },
      width: {
        '5px': '5px',
        '12px': '12px',
        '14px': '14px',
        '15px': '15px',
        '34px': '34px',
        '55px': '55px',
        '200px': '200px',
        '255px': '255px',
        '290px': '290px',
        '300px': '300px',
      },
      height: {
        '14px': '14px',
        '15px': '15px',
        '34px': '34px',
        '42px': '42px',
        '54px': '54px',
      },
      spacing: {
        '3px': '3px',
        '7px': '7px',
        '10px': '10px',
        '11px': '11px',
        '14px': '14px',
        '15px': '15px',
        '22px': '22px',
        '25px': '25px',
        '30px': '30px',
        '43px': '43px',
        '48px': '48px',
        '52px': '52px',
        '54px': '54px',
        '140px': '140px',
        '600px': '600px',
      },
      borderRadius: {
        1.5: '1.5px',
      },
      zIndex: {
        100: '99999',
      },
    },
  },
  plugins: [],
}
