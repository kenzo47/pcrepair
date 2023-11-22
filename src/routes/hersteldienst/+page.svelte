<script lang="ts">
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import pcrepair from '$lib/assets/images/pcrepair.jpg'
	import type { CenterHeadingData } from '$lib/types/components/CenterHeading'
	import CenterHeading from '$lib/components/hersteldienst/CenterHeading.svelte'
	export let data: PageData

	let ImageSwiperData: HeaderImageData = {
		image: {
			url: pcrepair,
			alt: 'Herstellingen'
		},
		title: 'Herstellingen',
		description: 'Informatie over onze herstellingen en diensten.',
		url: '#'
	}
	let CenterHeadingData: CenterHeadingData = {
		title: 'Herstellingen',
		description: [
			'U kan terecht bij ons voor herstellingen en onderhoud van alle merken en types van computers, ook als deze niet bij ons zijn aangekocht.',
			'We voeren een gratis diagnose uit en contacteren u wanneer er kosten aan verbonden zijn.',
			'Na uw goedkeuring voeren we reparaties uit in ons eigen atelier of bij u thuis.'
		]
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={ImageSwiperData} />
</header>
<!--PC Repairs-->
<section class="wrapper mb-[8rem]">
	<CenterHeading data={CenterHeadingData} />
	<div class="grid grid-cols-3 gap-[4rem]">
		<div>
			<div class="mb-[1rem]">
				<img src={pcrepair} alt="PC-Herstelling" />
			</div>
			<div>
				<h2 class="text-center font-suisse text-4xl text-black">
					Comprehensive Diagnostics for Accurate Problem Identification
				</h2>
				<p class="font-suise text-center text-2xl font-normal">
					Our skilled technicians use advanced tools and techniques to accurately identify and
					diagnose issues with your PC.
				</p>
			</div>
		</div>
		<div>
			<div class="mb-[1rem]">
				<img src={pcrepair} alt="PC-Herstelling" />
			</div>
			<div>
				<h2 class="text-center font-suisse text-4xl text-black">
					Comprehensive Diagnostics for Accurate Problem Identification
				</h2>
				<p class="font-suise text-center text-2xl font-normal">
					Our skilled technicians use advanced tools and techniques to accurately identify and
					diagnose issues with your PC.
				</p>
			</div>
		</div>
		<div>
			<div class="mb-[1rem]">
				<img src={pcrepair} alt="PC-Herstelling" />
			</div>
			<div>
				<h2 class="text-center font-suisse text-4xl text-black">
					Comprehensive Diagnostics for Accurate Problem Identification
				</h2>
				<p class="font-suise text-center text-2xl font-normal">
					Our skilled technicians use advanced tools and techniques to accurately identify and
					diagnose issues with your PC.
				</p>
			</div>
		</div>
	</div>
</section>
