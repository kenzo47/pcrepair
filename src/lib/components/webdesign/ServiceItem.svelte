<script lang="ts">
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
	export let data: ServiceItemData
</script>

<div class="flex h-full w-full flex-col justify-between px-[15px] py-[40px]">
	<div class="mb-[1rem] flex items-center justify-center">
		<img class="h-[50px] w-[50px]" src={data.icon.url} alt={data.icon.alt} />
	</div>
	<h2 class="mb-[0.5rem] text-center font-roboto text-[2.2rem] font-medium">{data.title}</h2>
	<p class="mb-[2rem] text-center font-roboto text-[1.6rem]">{data.description}</p>
	<a
		class="leading-[1.4 rem] text-center text-[2rem] font-bold text-azure hover:cursor-pointer hover:text-orange-web"
		href={data.button.url}
		target={data.button.target}>{data.button.text}</a
	>
</div>
