<script lang="ts">
	import type { HeaderSwiperData } from '$lib/types/components/HeaderSwiper'
	import { onMount } from 'svelte'
	import { register } from 'swiper/element/bundle'

	export let data: HeaderSwiperData[]
	onMount(() => {
		register()
	})
</script>

<swiper-container
	navigation="true"
	pagination={{ clickable: true, el: '.swiper-pagination' }}
	space-between="30"
	centered-slides="true"
	autoplay-delay="4500"
	autoplay-disable-on-interaction="true"
	class="h-[50vh] max-w-[100vw]"
>
	{#each data as item (item.title)}
		<swiper-slide class="h-full w-full">
			<div
				class="relative h-full bg-raisin-black bg-cover bg-center bg-no-repeat bg-blend-overlay"
				style="background-image: url({item.image.url})"
			></div>
			<h1
				class="absolute left-[50%] top-[25%] -translate-x-1/2 transform text-center font-roboto text-[6rem] text-white shadow-black text-shadow"
			>
				{item.title}
			</h1>
			<p
				class="absolute left-[50%] top-[45%] -translate-x-1/2 transform text-center font-roboto text-[2rem] font-medium text-white shadow-black text-shadow"
			>
				{item.description}
			</p>
			<button
				class="absolute left-[50%] top-[65%] flex h-[45px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
				><span class="font-roboto text-[2.2rem] font-bold text-white">Klik hier</span></button
			>
		</swiper-slide>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
