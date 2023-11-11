<script>
	import emblaCarouselSvelte from 'embla-carousel-svelte'
	import Autoplay from 'embla-carousel-autoplay'
	import pc from '$lib/images/pc.jpg'
	import phone from '$lib/images/phone.jpg'
	import coding from '$lib/images/coding.jpg'

	let emblaApi
	let options = { loop: true }
	let plugins = [Autoplay()]

	const onInit = (event) => {
		emblaApi = event.detail
		// console.log(emblaApi.slideNodes()) // Access API
	}
</script>

<div
	class="embla overflow-hidden"
	use:emblaCarouselSvelte={{ options, plugins }}
	on:emblaInit={onInit}
>
	<div class="embla__container flex">
		<div class="embla__slide"><img src={pc} alt="PC repair header" /></div>
		<div class="embla__slide"><img src={phone} alt="Phone repair header" /></div>
		<div class="embla__slide"><img src={coding} alt="Coding and webdesigm header" /></div>
	</div>
</div>

<style lang="postcss">
	.embla__slide {
		flex: 0 0 30%;
		min-width: 0;
	}
</style>
