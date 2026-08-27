/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#211C16',
        raffia: '#F1E7D3',
        nofy: '#14171F',
        sisal: {
          DEFAULT: '#C08A2E',
          light: '#D9A94F',
          dark: '#96691F',
        },
        ravinala: {
          DEFAULT: '#3F6B4F',
          light: '#5A8A6B',
        },
        'tany-mena': {
          DEFAULT: '#A8382B',
          light: '#C24B3D',
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