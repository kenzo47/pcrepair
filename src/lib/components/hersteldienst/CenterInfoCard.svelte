<script lang="ts">
	import type { CenterInfoCardData } from '$lib/types/components/CenterInfoCard'

	export let data: CenterInfoCardData
</script>

<div>
	<div class="mb-[1rem]">
		<img src={data.image.url} alt={data.image.alt} />
	</div>
	<div>
		<h2 class="text-center font-suisse text-4xl text-black">
			{data.title}
		</h2>
		<p class="font-suise text-center text-2xl font-normal">
			{data.description}
		</p>
	</div>
</div>
