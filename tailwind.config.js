const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
