<script lang="ts">
	import type { InfoItem } from '$lib/types/components/InfoItem/InfoItem'
	export let infoItemData: InfoItem
</script>

<div class="mx-[4rem] flex max-w-[50%] flex-col">
	<div class="mb-[6rem]">
		<h2 class="font-suisse text-4xl font-medium">
			{infoItemData.title}
		</h2>
		<p>
			{infoItemData.description}
		</p>
	</div>
	<div class="flex gap-[4rem]">
		{#each infoItemData.subInfoItems as subInfoItem}
			<div class="flex flex-col">
				<h3 class="font-suisse text-3xl font-medium">{subInfoItem.title}</h3>
				<p>{subInfoItem.description}</p>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	p {
		font-family: 'Suisse Intl', sans-serif;
		font-weight: 500;
		font-size: 1.4rem;
	}
</style>
