<script lang="ts">
	export let show = false

	import hamburger from '$lib/assets/icons/hamburger.svg'
	import { portal } from '$lib/portal'
	import { createEventDispatcher, onMount } from 'svelte'

	let keydownHandler: (event: { key: string }) => void
	// Create event dispatcher
	const dispatch = createEventDispatcher()

	// Dispatch close to parent component and destroy keydown event listener
	function closeModal() {
		show = false

		dispatch('close')
	}

	// Close modal on escape key press
	onMount(() => {
		keydownHandler = (event) => {
			if (event.key === 'Escape') {
				closeModal()
			}
		}
		window.addEventListener('keydown', keydownHandler)
	})
	// Close modal on outside click
	function outsideClick(event: any) {
		closeModal()
	}

	// Prevent click event from propagating to parent elements
	function insideClick(event: any) {
		event.stopPropagation()
	}
</script>

{#if show}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		use:portal
		class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 p-[2rem]"
		on:click={outsideClick}
	>
		<button
			class="absolute right-[40px] top-[30px] flex h-[30px] w-[30px] items-center justify-center text-[4rem] font-semibold text-azure"
		>
			&times;
		</button>
		<div class="relative mx-auto h-[620px] w-full max-w-[600px]" on:click={insideClick}>
			<slot />
		</div>
	</div>
{/if}

<style lang="postcss">
</style>
