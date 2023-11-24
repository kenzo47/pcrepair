<script lang="ts">
	import type { PriceItemData } from '$lib/types/components/PriceItem'
	import LinkButton from '../LinkButton.svelte'

	export let data: PriceItemData
</script>

<div
	class="flex min-w-[400px] flex-col border-l-2 border-transparent px-[2rem] hover:border-l-orange-web"
>
	<h2 class="mb-[1rem] font-suisse text-4xl font-medium">
		{data.title}
	</h2>
	<p class="font-suise mb-[3rem] text-2xl font-normal">
		{data.price}
	</p>
	<ul>
		{#each data.features as features (features)}
			<li>{features}</li>
		{/each}
	</ul>
	<LinkButton data={data.button}></LinkButton>
</div>
