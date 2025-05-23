/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./index.html"
  ],
  theme: {
    extend: {
      boxShadow: {
        'blue-solid': '0 0 0 6px rgba(59, 130, 246, 0.8)', // azul sólido
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'], // Montserrat como padrão
        montserrat: ['Montserrat', 'sans-serif'], // ou usa 'font-montserrat'
      },
    },
  },
  plugins: [],
}
