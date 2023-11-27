const colors = require("tailwindcss/colors");


module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
          'display': ['PT Sans'],
      },
      backgroundImage: {
        'paranal': "url('img/paranal.jpg')"
    },
    colors: {
        tblue: {
            light: '#00AAE5',
            std: '#00BDFF',
            medium: '#0084B2',
            dark: '#007199',
        }
    },

  },
},
  variants: {
    extend: {},
  },
  plugins: [],
}

