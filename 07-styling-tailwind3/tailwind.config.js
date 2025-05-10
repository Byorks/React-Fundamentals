/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Precisa do "" para a fonte importada da Google - pesquisar
      fontFamily: {
        title: ['"Pacifico"', 'cursive'] 
      }
    },
  },
  plugins: [],
}

