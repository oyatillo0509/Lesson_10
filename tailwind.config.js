/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
      },
      aspectRatio: {
        'w-4': '4',
        'h-3': '3',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};