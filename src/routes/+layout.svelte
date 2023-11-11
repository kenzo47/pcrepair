<script lang="ts">
	import '../app.postcss'
	import { Header, Footer } from '$lib/components'
</script>

<div class="layout">
	<Header />
	<main class="wrapper flex flex-1 flex-row">
		<slot />
	</main>
	<Footer />
</div>

<style lang="postcss">
	.layout {
		display: flex;
		flex-direction: column;
		align-items: center;
		min-height: 100vh;
		background-color: purple;
	}
</style>
