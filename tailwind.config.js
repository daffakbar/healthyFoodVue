module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'pinkred' : '#FF5B5B',
        'pinklight' : '#ffecec',
        'pinkcard' : '#5fb9b0',
        'darkaddcard' : '#2d132c',
        'darksect3' : '#2e394a',
        'darkfooter' : '#243040',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
