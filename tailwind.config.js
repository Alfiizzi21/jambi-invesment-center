/** @type {import('tailwindcss').Config} */
export default {
  darkMode : "class",
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        primary: {
					50: '#f1fcf6',
					100: '#defaec',
					200: '#bff3d8',
					300: '#8de8bb',
					400: '#54d495',
					500: '#30c67c',
					600: '#20995e',
					700: '#1c794c',
					800: '#1b603f',
					900: '#184f36',
					950: '#082b1b'
				}
      }
    },
  },
  plugins: [],
}

