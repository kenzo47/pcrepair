<script lang="ts">
	import { goto } from '$app/navigation'
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
				class="absolute left-[50%] top-[25%] -translate-x-1/2 transform whitespace-nowrap text-center font-roboto text-[4.6rem] text-white shadow-black text-shadow md:top-[30%] md:text-[3.8rem]"
			>
				{item.title}
			</h1>
			<p
				class="absolute left-[50%] top-[48%] -translate-x-1/2 transform text-center font-roboto text-[2rem] font-medium text-white shadow-black text-shadow md:top-[46%] md:w-[40rem] md:text-[1.8rem] sm:top-[47%] sm:text-[1.6rem]"
			>
				{item.description}
			</p>
			<button
				on:click={() => goto(item.button.url ? item.button.url : '/')}
				class="absolute left-[50%] top-[72%] flex h-[45px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
				><span class="font-roboto text-[2.2rem] font-bold text-white">
					{#if item.button.text}
						{item.button.text}
					{:else}
						Klik hier
					{/if}</span
				></button
			>
		</swiper-slide>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
