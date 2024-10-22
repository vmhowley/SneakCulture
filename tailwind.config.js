/** @type {import('tailwindcss').Config} */
import react from "@vitejs/plugin-react"
import path from "path"

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
      },
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}