/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {},
    screens: {
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      'serif' : ['New Century Schoolbook', 'TeX Gyre Schola',],
      'sans': ['Noto Sans',]
    },
  },
  plugins: [],
}

