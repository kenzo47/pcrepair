<script lang="ts">
	import HeaderSwiper from '$lib/components/HeaderSwiper/HeaderSwiper.svelte'
	import pc from '$lib/images/pc.jpg'
	import phone from '$lib/images/phone.jpg'
	import coding from '$lib/images/coding.jpg'
	let images = [pc, phone, coding]
</script>

<HeaderSwiper {images} />
