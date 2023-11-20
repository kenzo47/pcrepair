<script lang="ts">
	import type { ActionCard } from '$lib/types/components/ActionCard'
	export let cardData: ActionCard
</script>

<div
	class="flex h-full w-full flex-col items-center justify-between border border-solid border-subtle-gray bg-transparent px-[15px] py-[40px]"
>
	<div class="mb-[0.5rem] h-[80px] w-[80px]">
		<img src={cardData.image.url} alt={cardData.image.alt} />
	</div>
	<h2 class="font-suisse text-4xl">{cardData.title}</h2>
	<p class="mb-[1rem] text-center text-2xl">{cardData.description}</p>

	<a
		class="leading-[1.4 rem] text-[2rem] font-bold text-azure hover:cursor-pointer hover:text-orange-web"
		href={cardData.button.url}
		target={cardData.button.target}>{cardData.button.text}</a
	>
</div>
