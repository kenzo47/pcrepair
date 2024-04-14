<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import Footer from '$lib/components/Footer.svelte'
	import Navigation from '$lib/components/Navigation.svelte'
	import { description, title } from '$lib/config'

	import { page } from '$app/stores'
	// export let data: LayoutData
	let pageTitle = ''
	$: {
		if ($page.url.pathname === '/') {
			pageTitle = 'Home'
		} else {
			pageTitle = $page.url.pathname.slice(1)
			pageTitle = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1)
		}
	}
</script>

<svelte:head>
	<title>{title} - {pageTitle}</title>
	<meta name="description" content={description} />
</svelte:head>

<Navigation />
<main>
	<slot />
</main>
<Footer />
