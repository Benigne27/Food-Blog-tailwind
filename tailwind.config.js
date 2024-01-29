/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'chef': "url('/Images/chef.jpg')",
        'cherries': "url('/Images/cherries.jpg')",
        'croissant': "url('/Images/croissant.jpg')",
        'gondol': "url('/Images/gondol.jpg')",
        'popsicle': "url('/Images/popsicle.jpg')",
        'salmon': "url('/Images/salmon.jpg')",
        'sandwich': "url('/Images/sandwich.jpg')",
        'steak': "url('/Images/steak.jpg')",
        'wine': "url('/Images/wine.jpg')",
        'workshop': "url('/Images/workshop.jpg')",
      },
      fontFamily:{
        'karma':["Karma", 'serif'],
      }
    },
  },
  plugins: [],
}