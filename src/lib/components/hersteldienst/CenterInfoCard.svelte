<script lang="ts">
	import type { CenterInfoCardData } from '$lib/types/components/CenterInfoCard'
	export let data: CenterInfoCardData
</script>

<div class="grid grid-cols-1 text-center">
	<div
		class="image-container mx-auto mb-[1rem] h-[200px] w-[300px] md:mb-[2rem] md:h-[280px] md:w-[400px] sm:h-[140px] sm:w-[200px]"
	>
		<img class="image h-full w-full rounded-2xl" src={data.image.url} alt={data.image.alt} />
	</div>
	<div>
		<h2 class="mb-[1rem] text-center font-roboto text-[2.2rem] font-medium text-black">
			{data.title}
		</h2>
		<p class="text-center font-roboto text-[1.6rem] font-normal">
			{data.description}
		</p>
	</div>
</div>
