/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        customBlue: '#E6F8FF',
        blue: '#4898FF',
        blueDark: '#007AFF',
        Gray: '#676767',
        voilet: '#5533FF',
        skyblue:'#007AFF',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Define the Poppins font
      },
    },
  },
  plugins: [],
};
