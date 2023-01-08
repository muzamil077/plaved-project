/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/component/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'signUp': "url('../pages/images/sideImg.png')"
      },
      color:{
        text:"white",
        
      },
      backgroundColor:{
        "sideColor":"bg-red-500"
      },
      width:{
        "width":"30%"
      }
    },
  },
  plugins: [],
}