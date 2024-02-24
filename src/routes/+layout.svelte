<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import Footer from '$lib/components/Footer.svelte'
	import Navigation from '$lib/components/Navigation.svelte'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit'
	// export let data: LayoutData
	injectSpeedInsights()
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />
