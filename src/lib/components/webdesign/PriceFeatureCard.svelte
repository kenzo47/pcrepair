<script lang="ts">
	import type { PriceFeatureCardData } from '$lib/types/components/PriceFeatureCard'
	import LinkButton from '../LinkButton.svelte'

	export let data: PriceFeatureCardData
</script>

<div class="flex h-full flex-col border border-subtle-gray p-[2rem]">
	<div class="mb-[1rem] flex justify-between">
		<div class="mb-[1rem] ml-[1rem] flex flex-col">
			<h3 class="font-roboto text-[2rem] font-medium">{data.title}</h3>
			<p class="font-roboto text-[1.6rem]">{data.subtitle}</p>
		</div>
		<div class="mr-[1rem] flex">
			<p class="text-right font-roboto text-[3rem] font-semibold">{data.price}</p>
		</div>
	</div>
	<hr class="mb-[2rem]" />
	<div class="mb-[2rem] flex flex-grow flex-col">
		<p class="mb-[2rem] font-roboto text-[1.6rem]">Bevat:</p>
		<div class="flex flex-grow flex-wrap items-center">
			{#each data.features as feature (feature)}
				<div class="flex w-1/2 font-roboto text-[1.6rem]">{feature}</div>
			{/each}
		</div>
	</div>
	<hr class="mb-[2rem]" />
	<div class="flex justify-center">
		<LinkButton data={data.button}></LinkButton>
	</div>
</div>
