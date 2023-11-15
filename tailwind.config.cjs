/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		fontSize: {
			xs: '.75rem',
			sm: '.875rem',
			tiny: '.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem'
		},
		colors: {
			black: '#000000ff',
			white: '#ffffffff',
			'orange-web': '#ffa400ff',
			'royal-blue-traditional': '#2a2a72ff',
			'raisin-black': '#232528ff',
			'alice-blue': '#eaf6ffff',
			azure: '#3a86ffff'
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
