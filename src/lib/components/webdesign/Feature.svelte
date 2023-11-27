<script lang="ts">
	import type { FeatureData } from '$lib/types/components/Feature'
	export let data: FeatureData
</script>

<div class="flex flex-col">
	<div class="mb-[0.5rem] flex">
		<div class="mr-[1.5rem] flex items-center">
			<img class="h-[20px] w-[20px]" src={data.icon.url} alt={data.icon.alt} />
		</div>
		<h2 class="font-roboto text-[1.6rem] font-semibold">{data.title}</h2>
	</div>
	<p class="mb-[2rem] ml-[3.5rem] font-roboto text-[1.6rem]">{data.description}</p>
</div>
