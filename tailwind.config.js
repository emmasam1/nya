/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ['Inter', 'sans-serif']
      },
      backgroundPosition: {
        'top-50px': 'center top 50px',
        'top-140px': 'center top 140px',
        'top-200px': 'center top 200px',
      },
      backgroundSize: {
          '20-auto': '20% auto',
          '50-auto': '50% auto',
          '20%': '20%',
          '10%': '10%',
      },
    },
  },
  plugins: [],
}