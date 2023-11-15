/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontSize: {
			xs: '.6rem',
			sm: '.8rem',
			base: '1rem',
			lg: '1.2rem',
			xl: '1.4rem',
			'2xl': '1.6rem',
			'3xl': '1.8rem',
			'4xl': '2rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem'
		},
		fontFamily: {
			suisse: ['SuisseIntl', 'serif'],
			mono: ['SuisseIntlMono', 'serif'],
			works: ['SuisseWorks', 'serif']
		},
		colors: {
			black: '#000000',
			white: '#ffffff',
			'orange-web': '#ffa400',
			'royal-blue-traditional': '#2a2a72',
			'raisin-black': '#232528',
			'alice-blue': '#eaf6ff',
			azure: '#3a86ff',
			transparent: 'transparent'
		},
		screens: {
			'2xl': { max: '1535px' },
			xl: { max: '1279px' },
			lg: { max: '1023px' },
			md: { max: '850px' },
			sm: { max: '650px' },
			xs: { max: '450px' },
			'2xs': { max: '400px' }
		}
	},
	plugins: []
}

module.exports = config
