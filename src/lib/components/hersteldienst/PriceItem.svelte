<script lang="ts">
	import type { PriceItemData } from '$lib/types/components/PriceItem'
	import LinkButton from '../LinkButton.svelte'

	export let data: PriceItemData
</script>

<div
	class="flex h-[380px] min-w-[300px] flex-col items-center justify-center border border-subtle-gray py-[2rem]"
>
	<h2 class="font-suise mb-[1rem] text-4xl font-medium">
		{data.title}
	</h2>
	<p class="font-suise mb-[3rem] text-5xl font-semibold">
		{data.price}
	</p>
	<ul class="mb-[3rem] flex flex-col items-start">
		{#each data.features as features (features)}
			<li class="font-suise list-disc text-left text-2xl">{features}</li>
		{/each}
	</ul>
	<div class="flex justify-center">
		<LinkButton data={data.button}></LinkButton>
	</div>
</div>
