<script lang="ts">
	import type { PortfolioItemData } from '../../types/components/PortfolioItem'
	export let data: PortfolioItemData
</script>

<div class="grid grid-cols-1 text-center">
	<div class="relative mx-auto mb-4 h-[400px] w-[500px] md:h-[300px] md:w-[400px]">
		<enhanced:img class="h-full w-full object-cover" src={data.image.url} alt={data.image.alt} />
		<a href={data.url} target="_blank" rel="noopener noreferrer">
			<div
				class="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-[#00000060] opacity-0 transition-opacity duration-700 hover:opacity-100 md:opacity-100"
				style="background-color: {data.color}99;"
			>
				<img src={data.icon.url} alt={data.icon.alt} class="mb-4 h-[40px]" />
				<h2 class="mb-[1rem] font-roboto text-[2.2rem] font-medium text-black">
					{data.title}
				</h2>
				<p class="font-roboto text-[1.6rem] text-black">{data.description}</p>
			</div>
		</a>
	</div>
</div>
