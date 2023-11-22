<script lang="ts">
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { CenterHeadingData } from '$lib/types/components/CenterHeading'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import pcrepair from '$lib/assets/images/pcrepair.jpg'
	import CenterHeading from '$lib/components/hersteldienst/CenterHeading.svelte'
	import CenterInfoCard from '$lib/components/hersteldienst/CenterInfoCard.svelte'
	import type { CenterInfoCardData } from '$lib/types/components/CenterInfoCard'
	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: pcrepair,
			alt: 'Herstellingen'
		},
		title: 'Herstellingen',
		description: 'Informatie over onze herstellingen en diensten.',
		url: '#'
	}
	let centerHeadingData: CenterHeadingData = {
		title: 'Herstellingen',
		description: [
			'U kan terecht bij ons voor herstellingen en onderhoud van alle merken en types van computers, ook als deze niet bij ons zijn aangekocht.',
			'We voeren een gratis diagnose uit en contacteren u wanneer er kosten aan verbonden zijn.',
			'Na uw goedkeuring voeren we reparaties uit in ons eigen atelier of bij u thuis.'
		]
	}

	let centerInfoCardData: CenterInfoCardData[] = [
		{
			image: {
				url: pcrepair,
				alt: 'Computer reparaties'
			},
			title: 'Comprehensive Diagnostics for Accurate Problem Identification',
			description:
				'Our skilled technicians use advanced tools and techniques to accurately identify and diagnose issues with your PC.'
		},
		{
			image: {
				url: pcrepair,
				alt: 'Computer reparaties'
			},
			title: 'Comprehensive Diagnostics for Accurate Problem Identification',
			description:
				'Our skilled technicians use advanced tools and techniques to accurately identify and diagnose issues with your PC.'
		},
		{
			image: {
				url: pcrepair,
				alt: 'Computer reparaties'
			},
			title: 'Comprehensive Diagnostics for Accurate Problem Identification',
			description:
				'Our skilled technicians use advanced tools and techniques to accurately identify and diagnose issues with your PC.'
		}
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--PC Repairs-->
<section class="wrapper mb-[8rem]">
	<CenterHeading data={centerHeadingData} />
	<div class="grid grid-cols-3 gap-[4rem]">
		{#each centerInfoCardData as centerInfoCard (centerInfoCard.title)}
			<CenterInfoCard data={centerInfoCard} />
		{/each}
	</div>
</section>
