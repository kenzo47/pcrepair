<script lang="ts">
	import Saos from 'saos'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	export let infoItemData: InfoItemData
</script>

<div class="mx-[4rem] flex flex-1 flex-col">
	<Saos once={true} animation={'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}>
		<div class="mb-[6rem]">
			<h2 class="font-suisse text-4xl font-medium">
				{infoItemData.title}
			</h2>
			<p class="font-suise text-3xl font-normal tracking-[-0.05rem]">
				{infoItemData.description}
			</p>
		</div>
	</Saos>
	<div class="flex gap-[4rem]">
		{#each infoItemData.subInfoItems as subInfoItem (subInfoItem.title)}
			<Saos
				once={true}
				animation={'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
			>
				<div class="flex flex-col">
					<h3 class="font-suisse text-3xl font-medium">{subInfoItem.title}</h3>
					<p class="font-suise text-2xl font-normal tracking-[-0.05rem]">
						{subInfoItem.description}
					</p>
				</div>
			</Saos>
		{/each}
	</div>
</div>

<style lang="postcss">
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
