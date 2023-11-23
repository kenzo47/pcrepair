<script lang="ts">
	import type { HoverInfoItemData } from '$lib/types/components/HoverInfoItem'

	export let data: HoverInfoItemData
</script>

<div
	class="flex min-w-[400px] flex-col border-l-2 border-transparent px-[2rem] hover:border-l-orange-web"
>
	<h2 class="mb-[1rem] font-suisse text-4xl font-medium">
		{data.title}
	</h2>
	<p class="font-suise mb-[3rem] text-2xl font-normal">
		{data.description}
	</p>
</div>
