<script lang="ts">
	import HeaderSwiper from '$lib/components/home/HeaderSwiper.svelte'
	import pc from '$lib/assets/images/pc.jpg'
	import phone from '$lib/assets/images/phone.jpg'
	import coding from '$lib/assets/images/coding.jpg'

	let images = [
		{ src: pc, text: 'Herstelling nodig?' },
		{ src: phone, text: 'Smartphone reparaties' },
		{ src: coding, text: 'Webdesign' }
	]
</script>

<!--Swiper-->
<header class="mb-[2rem] overflow-hidden">
	<HeaderSwiper {images} />
</header>
<!--Cards-->
<section>
	<div class="mx-auto mb-[2rem] grid h-[300px] w-[1440px] grid-cols-3 gap-[4rem] bg-black">
		<div class="h-full w-full place-self-center bg-orange-web">test1</div>
		<div class="h-full w-full place-self-center bg-azure">test2</div>
		<div class="h-full w-full place-self-center bg-raisin-black">test3</div>
	</div>
</section>
