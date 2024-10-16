/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'backimg': "url('./assets/products/img1.svg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  plugins: [],
}