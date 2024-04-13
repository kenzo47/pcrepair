<script lang="ts">
	import clockIcon from '$lib/assets/icons/clock.svg'
	import emailIcon from '$lib/assets/icons/email.svg'
	import locationIcon from '$lib/assets/icons/location.svg'
	import supportIcon from '$lib/assets/icons/support.svg'
	import contact from '$lib/assets/images/contact.jpg?enhanced'
	import ContactForm from '$lib/components/ContactFormModal.svelte'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import ServiceItem from '$lib/components/ServiceItem.svelte'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
	import PortfolioItem from '../../../lib/components/portfolio/PortfolioItem.svelte'
	import type { PortfolioItemData } from '../../../lib/types/components/PortfolioItem'

	let imageSwiperData: HeaderImageData = {
		image: {
			url: contact,
			alt: 'Portfolio'
		},
		title: 'Portfolio',
		description: 'Wat hebben wij al gerealiseerd?'
	}
	let portfolioItemData: PortfolioItemData[] = [
		{
			index: 1,
			image: {
				url: contact,
				alt: 'Contact'
			},
			title: 'Bulldozer Expert',
			description:
				'Op maat gebouwde wordpress website voor een (anoniem) bedrijf in de regio Antwerpen.',
			icon: {
				url: locationIcon,
				alt: 'Bulldozer Expert'
			},
			color: '#ffa400',
			url: 'https://bulldozer-expert.webpc.be/'
		}
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Information-->
<section class="wrapper mb-[8rem]"></section>
<!--Portfolio Items-->
<section class="wrapper mb-[8rem] w-full">
	<h2 class="mb-[4rem] text-center font-roboto text-[2.6rem] text-black">Wordpress websites</h2>
	<div class="flex justify-evenly">
		{#each portfolioItemData as portfolioItem, index (portfolioItem.index)}
			<div class="mb-[4rem]">
				<PortfolioItem data={portfolioItem} />
			</div>
		{/each}
	</div>
</section>
