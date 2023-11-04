/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
      },
      keyframes:{
        scaleForNav:{
          "0%":{transform:'scale(0)'},
          "60%":{transform:'scale(1.2)'},
          "100%":{transform:'scale(1)'}
        },

      },
      animation:{
        scaleForNav:'scaleForNav 0.5s 1',
      },
      colors:{
        containerColorDark:"#18181b",
        containerColorLight:"#fff",
        // ****
        secondaryBorder:"rgba(63,63,70,0.4)",
        // *******
        navbgDark:"#27272a",
        navbgLight:"##fdfdfd",
        // *******
        blueDarkNormal:'rgb(93, 188, 252,0.5)',
        blueDark:'rgb(93, 188, 252)',
        /******* */
        layoutNavDark:'rgb(40, 40, 48,0.5)',
          /******* */
          borderIconHoverDark:"rgb(244, 165, 69)",
    
        /******* */
          iconbgDark:"#27272a", 
          iconbg:"#fdfdfd",
          //********* */
          bgMainButtonsDark:'rgba(36, 37, 46, 1)',
          bgMainButonNotActiveLightMode:"#24252e",
          //************** */
          bginputDark:"#1d1d21",
          //*********** */
          borderInputDarkColor:"#2dd4bf",
          //***************** */
          bgButtonFormDark:"#24252e",
          
           //***************** */
           scrollTopIConDarkColor:"rgba(25, 118, 210, 0.85)",
           scrollTopIConDarkColorHover:"rgb(25, 118, 210);",
           //********** */
           muted:"#8b8b8c"


      }
    },
  },
  plugins: [],
}