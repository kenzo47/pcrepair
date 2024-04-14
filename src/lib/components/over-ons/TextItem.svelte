<script lang="ts">
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'

	export let data: TextItemData
</script>

<div class="flex flex-col">
	{#if data.title}
		<h1 class="mb-[4rem] text-center font-roboto text-[3.4rem] font-semibold text-black">
			{data.title}
		</h1>
	{/if}
	{#each data.items as subItem}
		<div class="mb-[4rem]">
			{#if subItem.title}
				<h2 class="mb-[0.6rem] font-roboto text-[2.2rem] font-medium">{subItem.title}</h2>
			{/if}
			<p class="font-roboto text-[1.6rem] font-normal">{subItem.paragraph}</p>
		</div>
	{/each}
</div>
