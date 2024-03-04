/** @type {import('tailwindcss').Config}*/

import plugin from 'tailwindcss/plugin'

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			backgroundImage: () => ({
				'gradient-top': 'linear-gradient(0deg,  #2a2a72ff, #3a86ffff)',
				'gradient-right': 'linear-gradient(90deg, #2a2a72ff, #3a86ffff)',
				'gradient-bottom': 'linear-gradient(180deg,  #2a2a72ff, #3a86ffff)',
				'gradient-left': 'linear-gradient(270deg,  #2a2a72ff, #3a86ffff)',
				'gradient-top-right': 'linear-gradient(45deg,  #2a2a72ff, #3a86ffff)',
				'gradient-bottom-right': 'linear-gradient(135deg,  #2a2a72ff, #3a86ffff)',
				'gradient-top-left': 'linear-gradient(225deg,  #2a2a72ff, #3a86ffff)',
				'gradient-bottom-left': 'linear-gradient(315deg,  #2a2a72ff, #3a86ffff)',
				'gradient-radial': 'radial-gradient( #2a2a72ff, #3a86ffff)',
				circuit: "url('/src/lib/assets/icons/pattern.svg')",
				laptoprepair: "url('/src/lib/assets/images/laptoprepair.jpg')",
				pcrepair: "url('/src/lib/assets/images/pcrepair.jpg')",
				pchdd: "url('/src/lib/assets/images/pchdd.jpg')",
				contact: "url('/src/lib/assets/images/contact.jpg')"
			})
		},
		fontSize: {
			xs: '.6rem'
		},
		fontFamily: {
			suisse: ['SuisseIntl', 'serif'],
			mono: ['SuisseIntlMono', 'serif'],
			works: ['SuisseWorks', 'serif'],
			roboto: ['Roboto', 'sans-serif']
		},
		colors: {
			black: '#000000',
			white: '#ffffff',
			'off-white': '#f7f7f7',
			'subtle-gray': '#ecedec',
			'orange-web': '#ffa400',
			'royal-blue-traditional': '#2a2a72',
			'raisin-black': '#232528',
			'alice-blue': '#eaf6ff',
			error: '#ff0033',
			azure: '#3a86ff',
			transparent: 'transparent'
		},
		textShadow: {
			sm: '0 1px 2px var(--tw-shadow-color)',
			DEFAULT: '0 2px 4px var(--tw-shadow-color)',
			lg: '0 8px 16px var(--tw-shadow-color)'
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
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': (value) => ({
						textShadow: value
					})
				},
				{ values: theme('textShadow') }
			)
		})
	]
}

module.exports = config
