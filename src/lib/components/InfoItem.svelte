<script lang="ts">
	import Saos from 'saos'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	export let infoItemData: InfoItemData
</script>

<div class="mx-[4rem] flex flex-1 flex-col">
	<div class="mb-[6rem]">
		<h2 class="font-suisse text-4xl font-medium">
			{infoItemData.title}
		</h2>
		<p class="font-suise text-2xl font-normal">
			{infoItemData.description}
		</p>
	</div>
	<div class="flex gap-[4rem]">
		{#each infoItemData.subInfoItems as subInfoItem}
			<Saos
				once={true}
				animation={'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
			>
				<div class="flex flex-col">
					<h3 class="font-suisse text-3xl font-medium">{subInfoItem.title}</h3>
					<p class="font-suise text-2xl font-normal">{subInfoItem.description}</p>
				</div>
			</Saos>
		{/each}
	</div>
</div>

<style lang="postcss">
	p {
		font-family: 'Suisse Intl', sans-serif;
		font-weight: 500;
		font-size: 1.4rem;
	}

	@keyframes -global-puff-in-center {
		0% {
			transform: scale(2);
			filter: blur(4px);
			opacity: 0;
		}
		100% {
			transform: scale(1);
			filter: blur(0px);
			opacity: 1;
		}
	}
</style>
