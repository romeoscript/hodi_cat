/* eslint-disable */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        meme: ["'Bangers'", "'Comic Neue'", "cursive"],
      },
      colors: {
        memeYellow: '#ffe066',
        memeOrange: '#ff8800',
        memeRed: '#ff3860',
        memeBlue: '#00bfff',
      },
      keyframes: {
        'wave': {
          '0%, 100%': { transform: 'rotate(-8deg)' },
          '50%': { transform: 'rotate(8deg)' },
        },
        'typewriter': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'color-cycle': {
          '0%': { color: '#ffe066' },
          '25%': { color: '#ff8800' },
          '50%': { color: '#ff3860' },
          '75%': { color: '#00bfff' },
          '100%': { color: '#ffe066' },
        },
      },
      animation: {
        wave: 'wave 1.2s infinite ease-in-out',
        typewriter: 'typewriter 2.5s steps(40, end) 1s 1 normal both',
        'color-cycle': 'color-cycle 3s infinite',
      },
    },
  },
  plugins: [],
}; 