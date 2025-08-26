/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#6E3FAD',
          600: '#5b2f87',
          700: '#4c1d95',
        },
        kiku: {
          50: '#faf5ff',
          100: '#f3e8ff',
          500: '#6E3FAD',
          600: '#5b2f87',
        }
      },
      fontFamily: {
        japanese: ['Hiragino Sans', 'Yu Gothic', 'Meiryo', 'Takao', 'IPAexGothic', 'IPAPGothic', 'VL PGothic', 'Noto Sans CJK JP', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
