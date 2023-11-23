<script lang="ts">
	import type { SectionHeadingDescriptionData } from '$lib/types/components/SectionHeadingDescription'

	export let data: SectionHeadingDescriptionData
</script>

<h1 class="font-suisse text-[3.4rem] text-black">{data.title}</h1>
{#each data.description as description (description)}
	<p class="font-suise text-2xl font-normal">
		{description}
	</p>
{/each}
