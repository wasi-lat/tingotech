module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#56C35B',
        'primary-dark': '#4da351',
        'second': '#113423',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
