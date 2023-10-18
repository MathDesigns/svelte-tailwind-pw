/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
				fira: ['Fira Code']
			},
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'light-back': '#F5F5F5',
        'orange-acc': '#F99417',
        'blueish': '#4D4C7D',
        'purpleish': '#363062',
      },
    },
  },
  plugins: [],
};
