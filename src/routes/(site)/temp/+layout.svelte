<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import Footer from '$lib/components/Footer.svelte'
	import Navigation from '$lib/components/Navigation.svelte'

	// export let data: LayoutData
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />
