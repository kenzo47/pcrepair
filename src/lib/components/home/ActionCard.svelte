<script lang="ts">
	import type { ActionCard } from '$lib/types/components/ActionCard'
	export let cardData: ActionCard
</script>

<div
	class="flex h-full w-full flex-col items-center justify-between border border-solid border-subtle-gray bg-transparent px-[15px] py-[40px]"
>
	<div class="h-[80px] w-[80px]">
		<img src={cardData.image.url} alt={cardData.image.alt} />
	</div>
	<h2 class="font-suisse text-4xl">{cardData.title}</h2>
	<p class="mb-[1rem] text-center text-2xl">{cardData.description}</p>
	<button
		class="flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
	>
		<a
			class="leading-[1.2 rem] text-[2rem] font-bold text-white"
			href={cardData.button.url}
			target={cardData.button.target}>{cardData.button.text}</a
		>
	</button>
</div>
