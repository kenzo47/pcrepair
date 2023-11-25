<script lang="ts">
	import type { CenterInfoCardData } from '$lib/types/components/CenterInfoCard'

	export let data: CenterInfoCardData
</script>

<div>
	<div class="mb-[1rem]">
		<img src={data.image.url} alt={data.image.alt} />
	</div>
	<div>
		<h2 class="text-center font-roboto text-[2.2rem] font-medium text-black">
			{data.title}
		</h2>
		<p class="text-center font-roboto text-[1.6rem] font-normal">
			{data.description}
		</p>
	</div>
</div>
