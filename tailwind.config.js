/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    fontFamily: {
      'beatriceDisplay': ['"Beatrice Display Trial"', 'sans-serif'],
      'logo': ['"Reddit Mono"', 'monospace'],
      'fancyText': ['"Public Sans"', 'sans-serif'],
      'bigTitleCleanText': ['"Public Sans"', 'sans-serif']
    },
  },
  plugins: [],
}

