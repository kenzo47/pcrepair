<script lang="ts">
	import type { SectionHeadingDescriptionData } from '$lib/types/components/SectionHeadingDescription'

	export let data: SectionHeadingDescriptionData
</script>

<h1 class="font-roboto text-[3.4rem] font-medium text-black">{data.title}</h1>
{#each data.description as description (description)}
	<p class="font-roboto text-[1.6rem] font-normal">
		{description}
	</p>
{/each}
