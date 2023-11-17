<script lang="ts">
	import type { ActionCard } from '$lib/types/components/actioncard'
	export let cardData: ActionCard
</script>

<div
	class="border-subtle-gray flex h-full w-full flex-col items-center justify-between border border-solid bg-transparent px-[15px] py-[40px]"
>
	<div class="h-[80px] w-[80px]">
		<img src={cardData.image.url} alt={cardData.image.alt} />
	</div>
	<h2 class="text-4xl font-suisse">{cardData.title}</h2>
	<p class="text-2xl text-center mb-[1rem]">{cardData.description}</p>
	<button
		class="bg-gradient-top-right flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-xl border border-solid border-alice-blue px-[1rem] py-[0.6rem] text-center"
	>
		<a
			class="leading-[1.2 rem] text-[2rem] font-bold text-alice-blue"
			href={cardData.button.url}
			target={cardData.button.target}>{cardData.button.text}</a
		>
	</button>
</div>
