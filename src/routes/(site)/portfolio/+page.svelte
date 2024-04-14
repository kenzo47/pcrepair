<script lang="ts">
	import bulldozerIcon from '$lib/assets/icons/portfolio/bulldozer.svg'
	import rebootIcon from '$lib/assets/icons/portfolio/reboot.svg'
	import bulldozerExpert from '$lib/assets/images/portfolio/bulldozer-expert.png?enhanced'
	import rebootIt from '$lib/assets/images/portfolio/reboot-it.png?enhanced'
	import projects from '$lib/assets/images/projects.jpg?enhanced'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import TextItem from '$lib/components/over-ons/TextItem.svelte'
	import PortfolioItem from '$lib/components/portfolio/PortfolioItem.svelte'
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'
	import type { PortfolioCollectionData } from '$lib/types/components/PortfolioCollection'

	let imageSwiperData: HeaderImageData = {
		image: {
			url: projects,
			alt: 'Portfolio'
		},
		title: 'Portfolio',
		description: 'Wat hebben wij al gerealiseerd?'
	}
	let portfolioHeadingData: TextItemData = {
		title: 'Realisaties',
		items: [
			{
				paragraph:
					'Wij hebben al verschillende projecten gerealiseerd. Hieronder vindt u een overzicht van enkele van onze realisaties.'
			}
		]
	}
	let portfolioCollectionDataWordpress: PortfolioCollectionData = {
		delay: 4500,
		portfolioItems: [
			{
				index: 1,
				image: {
					url: bulldozerExpert,
					alt: 'Bulldozer Expert'
				},
				title: 'Bulldozer Expert',
				description: 'Op maat gebouwde wordpress website voor een bedrijf in de regio Antwerpen.',
				icon: {
					url: bulldozerIcon,
					alt: 'Bulldozer Expert'
				},
				color: '#3a86ff',
				url: 'https://bulldozer-expert.webpc.be/'
			},
			{
				index: 2,
				image: {
					url: rebootIt,
					alt: 'Reboot-IT'
				},
				title: 'Reboot-IT',
				description:
					'Onze eigen website voor het aanbieden van computerherstellingen en webdesign. Deze website is gebouwd met SvelteKit.',
				icon: {
					url: rebootIcon,
					alt: 'Reboot-IT'
				},
				color: '#ffa400',
				url: 'https://www.reboot-it.be/'
			}
			// {
			// 	index: 3,
			// 	image: {
			// 		url: phonerepair,
			// 		alt: 'Contact'
			// 	},
			// 	title: 'Test3',
			// 	description:
			// 		'Op maat gebouwde wordpress website voor een (anoniem) bedrijf in de regio Antwerpen.',
			// 	icon: {
			// 		url: locationIcon,
			// 		alt: 'Bulldozer Expert'
			// 	},
			// 	color: '#ffa400',
			// 	url: 'https://bulldozer-expert.webpc.be/'
			// }
		]
	}

	let portfolioCollectionDataWebApp: PortfolioCollectionData = {
		delay: 5500,
		portfolioItems: []
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Information-->
<section class="wrapper">
	<div class="flex flex-col">
		<div class="flex flex-col items-center">
			<TextItem data={portfolioHeadingData} />
		</div>
	</div>
</section>
<!--Portfolio Wordpress-->
<section class="wrapper mb-[8rem] w-full">
	<h2 class="mb-[2rem] text-center font-roboto text-[2.6rem] text-black">Websites</h2>
	<PortfolioItem data={portfolioCollectionDataWordpress} />
</section>
<!--Portfolio web apps-->
<!-- <section class="wrapper mb-[2rem] w-full">
	<h2 class="mb-[2rem] text-center font-roboto text-[2.6rem] text-black">Web applicaties</h2>
	<PortfolioItem data={portfolioCollectionDataWebApp} />
</section> -->
