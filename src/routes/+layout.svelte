<script lang="ts">
	import '$lib/assets/css/app.postcss'
	import { Header, Footer } from '$lib/components'
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
