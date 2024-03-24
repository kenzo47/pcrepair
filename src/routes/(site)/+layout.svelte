<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import Footer from '$lib/components/Footer.svelte'
	import Navigation from '$lib/components/Navigation.svelte'
	import { description, title } from '$lib/config'

	// export let data: LayoutData
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<Navigation />
<main>
	<slot />
</main>
<Footer />
