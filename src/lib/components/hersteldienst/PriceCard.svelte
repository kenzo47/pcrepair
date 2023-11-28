<script lang="ts">
	import type { PriceCardData } from '$lib/types/components/PriceCard'
	import LinkButton from '../LinkButton.svelte'

	export let data: PriceCardData
</script>

<div
	class="flex h-[380px] min-w-[300px] flex-col items-center justify-center border border-subtle-gray py-[2rem]"
>
	<h2 class="mb-[1rem] font-roboto text-[2.2rem] font-medium">
		{data.title}
	</h2>
	<p class="mb-[3rem] font-roboto text-[3rem] font-semibold">
		{data.price}
		<!--TODO: € centering -->
	</p>
	<ul class="mb-[3rem] flex flex-col items-start">
		{#each data.features as features (features)}
			<li class="list-disc text-left font-roboto text-[1.6rem]">{features}</li>
		{/each}
	</ul>
	<div class="mt-auto flex justify-center">
		<LinkButton data={data.button}></LinkButton>
	</div>
</div>
