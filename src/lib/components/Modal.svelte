<script>
	export let show = false
	import { portal } from '$lib/portal'
</script>

{#if show}
	<div use:portal class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/60">
		<div class="mx-auto w-full max-w-[800px] rounded-2xl bg-white p-6">
			<slot />
		</div>
	</div>
{/if}
