<script lang="ts">
	import type { LinkButtonData } from '$lib/types/components/Button'
	import { goto } from '$app/navigation'

	export let data: LinkButtonData

	function handleClick() {
		if (data.url) {
			goto(data.url)
		}
	}
</script>

<button
	on:click={handleClick}
	class="flex h-[45px] transform cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center href={data.url} target={data.target}"
	><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">{data.text}</span></button
>
