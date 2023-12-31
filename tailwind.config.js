/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {},
    screens: {
      md: '512px',
      lg: '1024px',
      xl: '1600px',
    },
    fontFamily: {
      'serif' : ['New Century Schoolbook', 'TeX Gyre Schola',],
      'sans': ['Noto Sans',]
    },
  },
  plugins: [],
}

