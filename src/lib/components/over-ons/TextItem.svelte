<script lang="ts">
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'

	export let data: TextItemData
</script>

<div class="flex flex-col">
	<h1 class="mb-[4rem] text-center font-roboto text-[3.4rem] font-semibold text-black">
		{data.title}
	</h1>
	{#each data.items as subItem (subItem.title)}
		<div class="mb-[4rem]">
			<h2 class="mb-[0.6rem] font-roboto text-[2.2rem] font-medium">{subItem.title}</h2>
			<p class="font-roboto text-[1.6rem] font-normal">{subItem.paragraph}</p>
		</div>
	{/each}
</div>
