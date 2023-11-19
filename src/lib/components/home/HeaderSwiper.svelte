<script lang="ts">
	import { onMount } from 'svelte'
	import { register } from 'swiper/element/bundle'

	export let images: { src: string; text: string }[] = []
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
	autoplay-delay="4500"
	autoplay-disable-on-interaction="true"
	class="h-[50vh] max-w-[100vw]"
>
	{#each images as { src: imgSrc, text: imgText }}
		<swiper-slide class="w-full">
			<!--TODO: Pass alt tag, description and href-->
			<div
				class="relative h-[500px] bg-cover bg-center bg-no-repeat"
				style="background-image: url({imgSrc})"
			></div>
			<h1
				class="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2 transform text-center font-suisse text-7xl text-white shadow-raisin-black text-shadow"
			>
				{imgText}
			</h1>
			<button
				class="absolute left-[50%] top-[60%] flex h-[45px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
				><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">Klik hier</span></button
			>
		</swiper-slide>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
