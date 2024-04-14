<script lang="ts">
	import type { PortfolioItemData } from '$lib/types/components/PortfolioItem'
	import { onMount } from 'svelte'
	import { register } from 'swiper/element/bundle'
	import type { PortfolioCollectionData } from '../../types/components/PortfolioCollection'

	export let data: PortfolioCollectionData
	onMount(() => {
		register()
	})
</script>

<swiper-container
	navigation="true"
	pagination={{ clickable: true, el: '.swiper-pagination' }}
	space-between="30"
	centered-slides="true"
	autoplay-delay="{data.delay}"
	autoplay-disable-on-interaction="true"
	class="max-w-[500px] h-[400px]"
>
	{#each data.portfolioItems as item (item.title)}
		<swiper-slide>
			<div class="h-[400px] w-[500px]">
				<enhanced:img class="h-full w-full object-cover rounded-2xl" src={item.image.url} alt={item.image.alt} />
				<a href={item.url} target="_blank" rel="noopener noreferrer">
					<div
						class="absolute rounded-2xl left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[#00000060] opacity-0 transition-opacity duration-700 hover:opacity-100 md:opacity-100"
						style="background-color: {item.color}99;"
					>
						<img src={item.icon.url} alt={item.icon.alt} class="mb-4 h-[40px]" />
						<h2 class="mb-[1rem] font-roboto text-[2.2rem] font-medium text-black">
							{item.title}
						</h2>
						<p class="font-roboto text-[1.6rem] text-center text-black">{item.description}</p>
					</div>
				</a>
			</div></swiper-slide
		>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
