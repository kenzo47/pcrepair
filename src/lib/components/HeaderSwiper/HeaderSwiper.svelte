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
	autoplay-delay="2500"
	autoplay-disable-on-interaction="true"
	class="h-[50vh] max-w-[100vw]"
>
	{#each images as { src: imgSrc, text: imgText }}
		<swiper-slide class="w-full">
			<!--TODO: Pass alt tag and href-->
			<img src={imgSrc} alt="" class="h-[920px] w-full object-cover blur-[2px]" />
			<h1
				class="font-suisse absolute left-[50%] top-[40%] -translate-x-1/2 -translate-y-1/2 transform text-center text-7xl text-alice-blue"
			>
				{imgText}
			</h1>
			<button
				class="font-suisse absolute left-[50%] top-[60%] inline-block -translate-x-1/2 -translate-y-1/2 transform rounded-xl border border-solid border-alice-blue bg-transparent bg-opacity-60 px-[1rem] py-[0.5rem] text-center text-4xl uppercase text-white no-underline"
				>Klik hier</button
			>
		</swiper-slide>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
