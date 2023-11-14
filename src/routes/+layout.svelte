<script lang="ts">
	import '../app.postcss'
	import { Header, Footer } from '$lib/components'
</script>

<Header />
<main>
	<slot />
</main>
<Footer />
