/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{vue,astro,html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
          sans: ['Poppins'],
      },
      colors:{
        'ahl-blue':'#00409A'
      },
      height:{
        '138':'28rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ],
}
