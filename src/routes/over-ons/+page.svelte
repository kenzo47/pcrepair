<script lang="ts">
	import type { PageData } from './$types'
	import about from '$lib/assets/images/about.jpg'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import type HeaderImageData from '$lib/types/components/HeaderImage'

	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: about,
			alt: 'Over ons'
		},
		title: 'Over ons',
		description: 'Wie zijn wij?'
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
