/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#0066ff',
        gelap: '#003d99',
        abu: '#475569',
        hitam: '#020617',
        biru: '#1449f7',
      },
      screens:{
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
