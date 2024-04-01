<script lang="ts">
	import type { ActionCardData } from '$lib/types/components/ActionCard'
	export let cardData: ActionCardData
</script>

<div
	class="flex h-full w-full flex-col items-center justify-between rounded-2xl border border-solid border-subtle-gray bg-transparent px-[15px] py-[40px]"
>
	<div class="mb-[1rem] h-[80px] w-[80px]">
		<img src={cardData.image.url} alt={cardData.image.alt} />
	</div>
	<h2 class="whitespace-nowrap font-roboto text-[2.2rem] font-medium lg:text-[2rem]">
		{cardData.title}
	</h2>
	<p class="mb-[0.5rem] text-center font-roboto text-[1.6rem]">{cardData.description}</p>
	<a
		class="leading-[1.4 rem] text-[2rem] font-bold text-azure hover:cursor-pointer hover:text-orange-web"
		href={cardData.button.url}
		target={cardData.button.target}>{cardData.button.text}</a
	>
</div>
