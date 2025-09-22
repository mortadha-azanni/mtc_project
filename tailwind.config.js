/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  
  theme: {
    
    extend: {
      colors: {
        base: {
          1: '#BDD8F1',
          2: '#82A6CB',
          3: '#3667A6',
          4: '#214177',
        },
      },
      
    },
  },
  plugins: [],
};
