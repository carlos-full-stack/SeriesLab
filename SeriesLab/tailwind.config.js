module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#69C9C5',
        primaryHover: '#519189',
        secondary: '#4D8E89',
        secondaryHover: '',
      },
      backgroundColor: {
        mainBackground: '#1D1CSA',
        secondaryBackground: '#2B2C3E',
      },
      fontFamily: {
        poppinsBlack: 'poppins-black',
        poppinsExtraBold: 'poppins-extrabold',
        poppinsBold: 'poppins-bold',
        poppinsSemiBold: 'poppins-semibold',
        poppinsMedium: 'poppins-medium',
        poppinsRegular: 'poppins-regular',
        poppinsLight: 'poppins-light',
        poppinsExtraLight: 'poppins-extralight',
        poppinsThin: 'poppins-thin',

      }
    },
  },
  plugins: [],
}