<script lang="ts">
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'

	import { navigateToSection } from '$lib/utils/scroll'

	export let data: HeaderImageData
</script>

<div class="relative flex h-[50vh] max-w-[100vw] justify-center">
	<div class="absolute h-full w-full">
		<enhanced:img
			class="absolute h-full w-full object-cover object-center"
			src={data.image.url}
			alt={data.image.alt ? data.image.alt : data.title}
		/>
		<div class="absolute h-full w-full bg-raisin-black opacity-50"></div>
	</div>
	<h1
		class="absolute left-[50%] top-[25%] -translate-x-1/2 transform whitespace-nowrap text-center font-roboto text-[4.6rem] text-white shadow-black text-shadow md:top-[30%] md:text-[3.8rem]"
	>
		{data.title}
	</h1>
	<p
		class="absolute left-[50%] top-[48%] -translate-x-1/2 transform whitespace-nowrap text-center font-roboto text-[2.2rem] font-medium text-white shadow-black text-shadow md:top-[46%] md:w-[40rem] md:text-[1.8rem] sm:top-[47%] sm:text-[1.6rem]"
	>
		{data.description}
	</p>
	{#if data.section}
		<button
			on:click={() => navigateToSection(data.section ?? '')}
			class="absolute left-[50%] top-[72%] flex h-[45px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
			><span class="text-[2.2rem] font-bold text-white">Prijslijst</span></button
		>
	{/if}
</div>
