/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1D2420',
        raffia: '#ECE7DA',
        nofy: '#13170F',
        sisal: {
          DEFAULT: '#2F6B4A',
          light: '#4C8A66',
          dark: '#1F4E35',
        },
        ravinala: {
          DEFAULT: '#B9873A',
          light: '#D1A35E',
        },
        'tany-mena': {
          DEFAULT: '#9C4A32',
          light: '#B5614A',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Karla', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'weave-pattern': "url('/images/weave-pattern.svg')",
      },
      transitionTimingFunction: {
        weave: 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
    },
  },
  plugins: [],
}