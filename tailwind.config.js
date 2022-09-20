/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {

    backgroundImage: {
      'queen': "url('./images/img4.jpg')",
      'queen1': "url('./images/img2.jpg')",
      
    },

    // screens: {
    //   'lp': '420px',
    //   // => @media (min-width: 425px) { ... }

      
    // },
    fontFamily: {
      'headings': ['"Space Grotesk"'],
      'body': ['"Source Sans Pro"'],
    },
    
    extend: {
      colors: {
        'dark-noise': '#1F2022',
        'primcol':'#E7E8E9',
      },

      gridTemplateColumns: {
        
        '3': '1fr  2fr 2fr',
      },

      gridTemplateRows: {
        
        '2': '1fr , 2fr',
      }
    },
  },
  plugins: [],
}
