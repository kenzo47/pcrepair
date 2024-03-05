<script lang="ts">
	import { page } from '$app/stores'
	import hamburger from '$lib/assets/icons/hamburger.svg'
	import logo from '$lib/assets/icons/logo.svg'
	import Modal from './Modal.svelte'

	let showModal = false
</script>

<nav class="wrapper flex h-[100px] w-full items-center justify-between p-4">
	<div class="flex">
		<a href="/">
			<img src={logo} alt="Reboot-IT Logo" class="h-[60px] w-[240px]" />
		</a>
	</div>
	<div class="menu flex gap-[8rem] text-center text-[2rem] md:hidden">
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/hersteldienst" class:active={$page.url.pathname === '/hersteldienst'}>Hersteldienst</a
		>
		<a href="/webdesign" class:active={$page.url.pathname === '/webdesign'}>Webdesign</a>
		<a href="/over-ons" class:active={$page.url.pathname === '/over-ons'}>Over ons</a>
		<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
	</div>
	<Modal show={showModal} on:close={() => (showModal = false)}>
		<div class="mobile-menu flex flex-col gap-4 overflow-hidden text-center text-[5rem] text-white">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/hersteldienst" class:active={$page.url.pathname === '/hersteldienst'}
				>Hersteldienst</a
			>
			<a href="/webdesign" class:active={$page.url.pathname === '/webdesign'}>Webdesign</a>
			<a href="/over-ons" class:active={$page.url.pathname === '/over-ons'}>Over ons</a>
			<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
		</div>
	</Modal>
	<button class="hamburger hidden md:block" on:click={() => (showModal = true)}>
		<img src={hamburger} alt="Hamburger Icon" class="h-[30px] w-[30px]" />
	</button>
</nav>

<style lang="postcss">
	nav a.active {
		@apply border-b-2 border-solid border-azure text-azure;
	}

	.menu a:hover {
		@apply scale-110 transform-gpu duration-300 ease-in-out;
	}

	.mobile-menu a {
		@apply my-[2rem];
	}
</style>
