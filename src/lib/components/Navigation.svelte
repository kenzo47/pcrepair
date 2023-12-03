<script lang="ts">
	import logo from '$lib/assets/icons/logo.svg'
	import { page } from '$app/stores'
</script>

<nav class="wrapper flex h-[100px] w-full items-center justify-between p-4">
	<div class="flex">
		<a href="/">
			<img src={logo} alt="Reboot-IT Logo" class="h-[60px] w-[240px]" />
		</a>
	</div>
	<div class="menu flex gap-[8rem] text-center text-[2rem]">
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/hersteldienst" class:active={$page.url.pathname === '/hersteldienst'}>Hersteldienst</a
		>
		<a href="/webdesign" class:active={$page.url.pathname === '/webdesign'}>Webdesign</a>
		<a href="/over-ons" class:active={$page.url.pathname === '/over-ons'}>Over ons</a>
		<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
	</div>
</nav>

<style lang="postcss">
	/* dO nOt uSe @aPpLy hUe */
	nav a.active {
		@apply border-b-2 border-solid border-azure text-azure;
	}

	.menu a:hover {
		@apply scale-110 transform-gpu duration-300 ease-in-out;
	}
</style>
