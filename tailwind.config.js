module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1440px'
    },
    extend: {
       colors: {
         'blueGrayish' : '#1A1A40',
         'whitishgrey': '#DAD0C2',
         'pinkishRed': '#E94560',
         'dullOrange': '#CA6035',
         'dullBlue': '#26265A',
         'otherdullOrange': '#96411e'
       },
       fontFamily: {
        Poppins : ['Poppins', 'sans-serif']
      }
    }, 
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
