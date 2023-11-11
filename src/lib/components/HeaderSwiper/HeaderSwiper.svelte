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
	class="swiper w-[1440px] overflow-hidden"
>
	{#each images as imgSrc}
		<swiper-slide class="swiper-slide">
			<img src={imgSrc} alt="" />
		</swiper-slide>
	{/each}
	<div class="swiper-pagination"></div>
</swiper-container>

<style>
	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
