<script lang="ts">
	import type { EmployeeData } from '$lib/types/components/Employee'

	export let data: EmployeeData
</script>

<div class="flex h-[520px] flex-col justify-center border border-black p-[4rem]">
	<div class="flex flex-col">
		<div class="mb-[1rem] flex justify-center">
			<img
				class="h-[220px] max-w-[220px] rounded-[50%]"
				src={data.image.url}
				alt={data.image.alt}
			/>
		</div>
		<div class="mb-[1rem] flex flex-col items-center">
			<h2 class="font-roboto text-[2.2rem] font-medium">{data.name}</h2>
			<h3 class="font-roboto text-[2rem] lg:whitespace-nowrap">{data.function}</h3>
		</div>
	</div>
	<div class="mb-[2rem] flex text-center">
		<p class="font-roboto text-[1.6rem]">{data.intro}</p>
	</div>
	<div class="mt-[2rem] flex flex-col lg:hidden md:flex">
		<h3 class="mb-[0.2rem] text-center font-roboto text-[1.8rem] font-medium">Specialiteiten</h3>
		<ul class="flex flex-wrap justify-center">
			{#each data.skills as skill}
				<li class="mr-[1rem] font-roboto text-[1.6rem]">{skill}</li>
				{#if skill !== data.skills[data.skills.length - 1]}
					{@html '<li class="mr-[1rem] text-[1.6rem]">|</li>'}
				{/if}
			{/each}
		</ul>
	</div>
</div>
