<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import Navigation from '$lib/components/Navigation.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import type { LayoutData } from './$types'
	// export let data: LayoutData
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />
