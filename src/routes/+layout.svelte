<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import { Navigation, Footer } from '$lib/components'
	import type { LayoutData } from './$types'
	export let data: LayoutData
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />
