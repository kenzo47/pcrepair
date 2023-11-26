<script lang="ts">
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'

	import { navigateToSection } from '$lib/utils/scroll'

	export let data: HeaderImageData
</script>

<div class="relative flex h-[50vh] max-w-[100vw] justify-center">
	<div
		class="absolute h-full w-full bg-raisin-black bg-cover bg-center bg-no-repeat bg-blend-overlay"
		style="background-image: url({data.image.url})"
		aria-label={data.image.alt ? data.image.alt : data.title}
	></div>
	<h1
		class="absolute top-[25%] z-10 text-center font-roboto text-[6rem] text-white shadow-black text-shadow"
	>
		{data.title}
	</h1>
	<p
		class="absolute left-[50%] top-[45%] -translate-x-1/2 transform text-center font-roboto text-[2rem] font-normal text-white shadow-black text-shadow"
	>
		{data.description}
	</p>
	<button
		on:click={() => navigateToSection(data.section ? data.section : 'home')}
		class="absolute left-[50%] top-[65%] flex h-[45px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
		><span class="text-[2.2rem] font-bold text-white">Prijslijst</span></button
	>
</div>
