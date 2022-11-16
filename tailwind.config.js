/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "theme-color":"var(--theme-color)",
        "border-style":"var(--border-style)",
        "shadow-color":"var(--shadow-color)"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Merriweather':['Merriweather','serif'],
        'Play':['Play','sans-serif']
      }
    },
  },
  plugins: [],
}
