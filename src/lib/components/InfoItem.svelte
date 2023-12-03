<script lang="ts">
	import Saos from 'saos'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	export let infoItemData: InfoItemData
</script>

<div class="mx-[4rem] flex flex-1 flex-col">
	<Saos once={true} animation={'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}>
		<div class="mb-[2rem]">
			<h2 class="font-roboto text-[3rem] font-medium">
				{infoItemData.title}
			</h2>
			<p class="font-roboto text-[1.6rem] font-normal">
				{infoItemData.description}
			</p>
		</div>
	</Saos>
	<div class="mb-[2rem] flex flex-col gap-[2rem]">
		{#each infoItemData.subInfoItems as subInfoItem (subInfoItem.title)}
			<Saos
				once={true}
				animation={'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
			>
				<div class="flex flex-col">
					<h3 class="mb-[0.4rem] font-roboto text-[2.2rem] font-medium">{subInfoItem.title}</h3>
					<p class="font-roboto text-[1.6rem] font-normal">
						{subInfoItem.description}
					</p>
				</div>
			</Saos>
		{/each}
	</div>
	{#if infoItemData.button}
		<div class="flex items-center justify-start">
			<Saos
				once={true}
				animation={'puff-in-center 0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both'}
			>
				<a
					class="leading-[1.4 rem] text-[2rem] font-bold text-azure hover:cursor-pointer hover:text-orange-web"
					href={infoItemData.button.url}
					target={infoItemData.button.target}>{infoItemData.button.text}</a
				>
			</Saos>
		</div>
	{/if}
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
