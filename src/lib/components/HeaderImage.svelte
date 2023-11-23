<script lang="ts">
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'

	export let data: HeaderImageData
</script>

<div class="relative flex h-[50vh] max-w-[100vw] justify-center">
	<div
		class="absolute h-full w-full bg-raisin-black bg-pcrepair bg-cover bg-center bg-no-repeat bg-blend-overlay"
	></div>
	<h1
		class=" absolute top-[25%] z-10 text-center font-suisse text-7xl text-white shadow-black text-shadow"
	>
		{data.title}
	</h1>
	<p
		class="absolute left-[50%] top-[45%] -translate-x-1/2 transform text-center font-suisse text-3xl font-normal text-white shadow-black text-shadow"
	>
		{data.description}
	</p>
	<button
		class="absolute left-[50%] top-[65%] flex h-[45px] w-[120px] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
		><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">Prijslijst</span></button
	>
</div>
