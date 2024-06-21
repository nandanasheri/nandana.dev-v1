/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white' : '#ffff',
      'neon' : '#64DFB2',
      'green' : '#CCF6EC',
      'light-bg' : '#192025',
      'main-bg' : '#040D14',
      'grey' : '#556068',
      'light-grey' : '#A4AEB6',
      'grey-sub' : '#798A98',
      'dark-bg' : '#0B151D',
    },
    extend: {
      fontFamily: {
        subtext :["Poppins", "sans-serif"],
        header : ["Quantico", "sans-serif" ]
      }
    }
  },
  plugins: [],
}

