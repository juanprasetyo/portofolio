/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#CD3F3E',
        'secondary': '#FF9C91',
        'custom-white': '#F4F6F6',
        'custom-black': '#1C2938',
      },
    },
  },
  plugins: [],
}

