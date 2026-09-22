/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        'surface-2': '#161616',
        'text-primary': '#F0EDE8',
        'text-muted': '#6B6B6B',
        accent: '#C9A84C',
        'accent-dim': '#8A6F30',
        border: '#1E1E1E',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
