/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.ejs"],
  theme: {
    extend: {},
    fontFamily: {
      'serif' : ['New Century Schoolbook', 'TeX Gyre Schola',],
      'sans': ['Noto Sans',]
    },
  },
  plugins: [],
}

