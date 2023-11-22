<script lang="ts">
	import type { CenterHeadingData } from '$lib/types/components/CenterHeading'

	export let data: CenterHeadingData
</script>

<div class="flex flex-col items-center">
	<h1 class="text-center font-suisse text-[3.4rem] text-black">Computer Herstellingen</h1>
	{#each data.description as description (description)}
		<p class="font-suise text-2xl font-normal">
			{description}
		</p>
	{/each}
</div>
