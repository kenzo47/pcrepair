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

<style lang="postcss">
	.disabled {
		background-color: #f7f7f7;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%23e0e4ea' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23c1cfe4' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%239bb8e6' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%236ea0ef' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%233A86FF' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: local;
		background-size: cover;
		background-position: center;
	}
</style>
