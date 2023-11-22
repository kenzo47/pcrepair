<script lang="ts">
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import pcrepair from '$lib/assets/images/pcrepair.jpg'
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
</script>

<!--Header Image-->
<header class="mb-[8rem] overflow-hidden">
	<HeaderImage data={ImageSwiperData} />
</header>
<!--PC Repairs-->
<section class="wrapper mb-[8rem]">
	<div class="flex flex-col items-center">
		<h1 class="text-center font-suisse text-[3.4rem] text-black">Computer Herstellingen</h1>
		<p class="font-suise text-2xl font-normal">
			U kan terecht bij ons voor herstellingen en onderhoud van alle merken en types van computers,
			ook als deze niet bij ons zijn aangekocht.
		</p>
		<p class="font-suise text-2xl font-normal">
			We voeren een gratis diagnose uit en contacteren u wanneer er kosten aan verbonden zijn.
		</p>
		<p class="font-suise mb-[4rem] text-2xl font-normal">
			Na uw goedkeuring voeren we reparaties uit in ons eigen atelier of bij u thuis.
		</p>
	</div>
	<div class="grid grid-cols-3 gap-[4rem] bg-raisin-black">
		<div>
			<div>
				<img src={pcrepair} alt="PC-Herstelling" />
			</div>
		</div>
		<div>
			<div>
				<img src={pcrepair} alt="PC-Herstelling" />
			</div>
		</div>
		<div>
			<div>
				<img src={pcrepair} alt="PC-Herstelling" />
			</div>
		</div>
	</div>
</section>
