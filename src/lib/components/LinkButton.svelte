<script lang="ts">
	import type { LinkButtonData } from '$lib/types/components/Button'

	export let data: LinkButtonData
</script>

<button
	class="bg-gradient-top-right flex h-[45px] transform cursor-pointer items-center justify-center rounded-2xl px-[1rem] py-[0.6rem] text-center href={data.url} target={data.target}"
	><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">{data.text}</span></button
>
