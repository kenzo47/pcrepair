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
