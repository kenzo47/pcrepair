<script lang="ts">
	import { page } from '$app/stores'
	import hamburger from '$lib/assets/icons/hamburger.svg'
	import logo from '$lib/assets/icons/logo3.svg'
	import NavModal from './NavModal.svelte'

	let showModal = false
</script>

<nav class="wrapper flex h-[100px] w-full items-center justify-between p-4">
	<div class="mr-[6rem] flex h-full">
		<a href="/" class="h-full">
			<img src={logo} alt="Reboot-IT Logo" class="max-h-[120px] max-w-[240px]" />
		</a>
	</div>
	<div
		class="menu flex gap-[7rem] whitespace-nowrap text-center text-[2rem] lg:gap-[4rem] lg:text-[1.6rem] md:hidden"
	>
		<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
		<a href="/hersteldienst" class:active={$page.url.pathname === '/hersteldienst'}>Hersteldienst</a
		>
		<a href="/webdesign" class:active={$page.url.pathname === '/webdesign'}>Webdesign</a>
		<a href="/over-ons" class:active={$page.url.pathname === '/over-ons'}>Over ons</a>
		<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
	</div>
	<NavModal
		show={showModal}
		on:close={() => {
			showModal = false
		}}
	>
		<div class="mobile-menu flex flex-col gap-4 overflow-hidden text-center text-[5rem] text-white">
			<a href="/" class:active={$page.url.pathname === '/'}>Home</a>
			<a href="/hersteldienst" class:active={$page.url.pathname === '/hersteldienst'}
				>Hersteldienst</a
			>
			<a href="/webdesign" class:active={$page.url.pathname === '/webdesign'}>Webdesign</a>
			<a href="/over-ons" class:active={$page.url.pathname === '/over-ons'}>Over ons</a>
			<a href="/contact" class:active={$page.url.pathname === '/contact'}>Contact</a>
		</div>
	</NavModal>
	<button
		class="hamburger hidden md:block"
		class:open={showModal}
		on:click={() => {
			showModal = true
		}}
	>
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

	.hamburger {
		@apply transition duration-200;
	}

	.hamburger.open {
		@apply rotate-90 transform opacity-0;
	}
</style>
