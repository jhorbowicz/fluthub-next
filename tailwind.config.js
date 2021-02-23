module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        base: "#4a86cf",
        'base-hover': "#4d73a2",
        gray: '#9b9b9b',
        'gray-darker': '#707070'
      },
      maxWidth: {
        '2xs': '250px',
        '3xs': '180px',
        paragraph: "700px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
