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
	class="mx-auto flex h-[50vh] w-[100vw] overflow-hidden"
>
	{#each images as imgSrc}
		<swiper-slide class="w-full">
			<img src={imgSrc} alt="" class="h-full w-full object-cover" />
		</swiper-slide>
	{/each}
	<div class="swiper-pagination"></div>
</swiper-container>
