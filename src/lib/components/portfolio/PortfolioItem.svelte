<script lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import { register } from 'swiper/element/bundle'
	import type { PortfolioCollectionData } from '$lib/types/components/PortfolioCollection'
	export let data: PortfolioCollectionData

	onMount(() => {
		register()
		if (typeof window !== 'undefined') {
			if (!sessionStorage.getItem('reloaded')) {
				sessionStorage.setItem('reloaded', 'true')
				window.location.reload()
			}
		}
	})

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			sessionStorage.removeItem('reloaded')
		}
	})
</script>

<swiper-container
	navigation="true"
	pagination={{ clickable: true, el: '.swiper-pagination' }}
	space-between="30"
	centered-slides="true"
	autoplay-delay={data.delay}
	autoplay-disable-on-interaction="true"
	class="h-[400px] max-w-[500px] md:h-[300px] md:max-w-[400px]"
>
	{#each data.portfolioItems as item (item.title)}
		<swiper-slide>
			<div class="group h-[400px] w-[500px] md:h-[300px] md:w-[400px]">
				<enhanced:img
					class="h-full w-full rounded-2xl object-cover object-top opacity-100 transition-opacity group-hover:opacity-30 md:opacity-20"
					src={item.image.url}
					alt={item.image.alt}
				/>
				<a href={item.url} target="_blank" rel="noopener noreferrer">
					<div
						class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center rounded-2xl bg-[#00000060] p-[2rem] opacity-0 transition-opacity duration-700 group-hover:opacity-100 md:p-[1rem] md:opacity-100"
						style="background-color: {item.color}99;"
					>
						<img src={item.icon.url} alt={item.icon.alt} class="mt-[2rem] h-[80px]" />
						<h2 class="mb-[1rem] font-roboto text-[2.2rem] font-medium text-black">
							{item.title}
						</h2>
						<p class="text-center font-roboto text-[1.6rem] text-black">{item.description}</p>
					</div>
				</a>
			</div></swiper-slide
		>
	{/each}
	<div class="swiper-pagination justify-center text-center"></div>
</swiper-container>
