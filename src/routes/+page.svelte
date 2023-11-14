<script lang="ts">
	import HeaderSwiper from '$lib/components/HeaderSwiper/HeaderSwiper.svelte'
	import pc from '$lib/images/pc.jpg'
	import phone from '$lib/images/phone.jpg'
	import coding from '$lib/images/coding.jpg'

	let images = [
		{ src: pc, text: 'Herstelling nodig?' },
		{ src: phone, text: 'Smartphone reparaties' },
		{ src: coding, text: 'Webdesign' }
	]
</script>

<div class="h-[124rem] overflow-hidden">
	<HeaderSwiper {images} />
</div>
