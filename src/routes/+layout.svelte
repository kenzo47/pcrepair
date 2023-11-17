<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import { Navigation, Footer } from '$lib/components'
</script>

<Navigation />
<main>
	<slot />
</main>
<Footer />
