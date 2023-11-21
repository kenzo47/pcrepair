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
		url: '#'
	}
</script>

<!--Header Image-->
<header class="mb-[8rem] overflow-hidden">
	<HeaderImage data={ImageSwiperData} />
</header>
