<script lang="ts">
	import { onMount } from 'svelte'
	import { register } from 'swiper/element/bundle'

	export let images: string[] = []

	onMount(() => {
		register()
		setTimeout(() => {
			images = [...images]
		}, 0)
	})
</script>

<swiper-container
	navigation="true"
	pagination={{ clickable: true, el: '.swiper-pagination' }}
	space-between="30"
	centered-slides="true"
	autoplay-delay="2500"
	autoplay-disable-on-interaction="true"
	class="h-[50vh] max-w-[100vw]"
>
	{#each images as imgSrc}
		<swiper-slide class="w-full">
			<img src={imgSrc} alt="" class="h-[920px] w-full object-cover" />
		</swiper-slide>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
