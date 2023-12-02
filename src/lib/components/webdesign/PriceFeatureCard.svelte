<script lang="ts">
	import type { PriceFeatureCardData } from '$lib/types/components/PriceFeatureCard'
	export let data: PriceFeatureCardData
</script>

<div class="flex h-full flex-col border border-raisin-black px-[2rem] py-[2rem]">
	<div class="mb-[1rem] flex justify-between">
		<div class="flex flex-col">
			<h3 class="font-roboto text-[2rem] font-medium">{data.title}</h3>
			<p class="font-roboto text-[1.6rem]">{data.subtitle}</p>
		</div>
		<div class="flex items-center">
			<p class="text-right font-roboto text-[3rem] font-semibold">{data.price}</p>
		</div>
	</div>
	<hr class="mb-[1rem]" />
	<div class="flex flex-grow flex-col">
		<p class="mb-[1rem] font-roboto text-[1.6rem]">Bevat:</p>
		<div class="grid grid-cols-2 gap-4">
			{#each data.features as feature}
				<div class="flex w-full text-left font-roboto text-[1.6rem]">
					&#10003; {feature}
				</div>
			{/each}
		</div>
	</div>
	<hr class="mb-[2rem]" />
	<div class="flex w-full justify-center">
		<button
			class="flex h-[45px] w-full transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center href={data
				.button.url} target={data.button.target}"
			><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">{data.button.text}</span
			></button
		>
	</div>
</div>
