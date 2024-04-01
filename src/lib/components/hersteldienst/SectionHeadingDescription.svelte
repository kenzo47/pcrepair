<script lang="ts">
	import type { SectionHeadingDescriptionData } from '$lib/types/components/SectionHeadingDescription'

	export let data: SectionHeadingDescriptionData
	let combinedDescription = data.description.join(' ')
</script>

<h1 class="mb-[1rem] font-roboto text-[3.4rem] font-medium text-black">{data.title}</h1>
<p class="font-roboto text-[1.6rem] font-normal md:mb-[1rem]">
	{combinedDescription}
</p>
