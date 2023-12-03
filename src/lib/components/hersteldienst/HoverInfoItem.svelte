<script lang="ts">
	import type { HoverInfoItemData } from '$lib/types/components/HoverInfoItem'

	export let data: HoverInfoItemData
</script>

<div class="flex min-w-[400px] flex-col">
	<div
		class="mb-[3rem] flex flex-col border-l-2 border-transparent px-[2rem] hover:border-orange-web"
	>
		<h2 class="mb-[1rem] font-roboto text-[2.2rem] font-medium">
			{data.title}
		</h2>
		<p class=" font-roboto text-[1.6rem] font-normal">
			{data.description}
		</p>
	</div>
</div>
