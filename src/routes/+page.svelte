<script lang="ts">
	import Saos from 'saos'
	import type { PageData } from './$types'
	import HeaderSwiper from '$lib/components/home/HeaderSwiper.svelte'
	import pc from '$lib/assets/images/pc.jpg'
	import phone from '$lib/assets/images/phone.jpg'
	import coding from '$lib/assets/images/webdesign.jpg'
	import pcIcon from '$lib/assets/icons/desktop.svg'
	import phoneIcon from '$lib/assets/icons/phone.svg'
	import webIcon from '$lib/assets/icons/website.svg'
	import ActionCard from '$lib/components/home/ActionCard.svelte'
	import ContactForm from '$lib/components/ContactForm.svelte'
	import InfoItem from '$lib/components/InfoItem.svelte'

	export let data: PageData
	let images = [
		{ src: pc, text: 'Herstelling nodig?' },
		{ src: phone, text: 'Smartphone reparaties' },
		{ src: coding, text: 'Webdesign' }
	]

	let ActionCardData = [
		{
			image: {
				url: pcIcon,
				alt: 'Computer herstellingen'
			},
			title: 'Computer herstellingen',
			description: 'Werkt uw computer niet meer zoals het hoort? Wij helpen u graag verder!',
			button: {
				url: '#',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		},
		{
			image: {
				url: phoneIcon,
				alt: 'Smartphone herstellingen'
			},
			title: 'Smartphone herstellingen',
			description: 'Problemen met uw smartphone? Gebarsten scherm? Wij herstellen het voor u!',
			button: {
				url: 'https://google.com',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		},
		{
			image: {
				url: webIcon,
				alt: 'Webdesign'
			},
			title: 'Webdesign',
			description:
				'Wij maken uw website op maat! Van eenvoudige websites tot uitgebreide web applicaties.',
			button: {
				url: 'https://google.com',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		}
	]

	let infoItemData = [
		{
			title: 'Over ons',
			description:
				'Wij zijn een jong en dynamisch bedrijf dat zich specialiseert in het herstellen van computers en smartphones. Daarnaast maken wij ook websites op maat.',
			subInfoItems: [
				{
					title: 'Computer herstellingen',
					description:
						'Wij herstellen uw computer of laptop. Dit kan gaan van een software probleem tot een hardware probleem.'
				},
				{
					title: 'Smartphone herstellingen',
					description:
						'Wij herstellen uw smartphone. Dit kan gaan van een software probleem tot een hardware probleem.'
				}
			]
		},
		{
			title: 'Over ons',
			description:
				'Wij zijn een jong en dynamisch bedrijf dat zich specialiseert in het herstellen van computers en smartphones. Daarnaast maken wij ook websites op maat.',
			subInfoItems: [
				{
					title: 'Computer herstellingen',
					description:
						'Wij herstellen uw computer of laptop. Dit kan gaan van een software probleem tot een hardware probleem.'
				},
				{
					title: 'Smartphone herstellingen',
					description:
						'Wij herstellen uw smartphone. Dit kan gaan van een software probleem tot een hardware probleem.'
				}
			]
		}
	]
</script>

<!--Swiper-->
<header class="mb-[8rem] overflow-hidden">
	<HeaderSwiper {images} />
</header>
<!--Cards-->

<section class="wrapper mb-[8rem]">
	<div class="mb-[4rem] grid h-[300px] grid-cols-3 gap-[4rem] bg-transparent">
		{#each ActionCardData as actionCard}
			<ActionCard cardData={actionCard} />
		{/each}
	</div>
</section>
<!--Services-->

<section class="wrapper mb-[8rem]">
	<Saos once={true} animation={'from-left 1.4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="mb-[12rem] flex w-full items-center">
			<div class="mr-[6rem] flex w-[50%]">
				<img
					src={pc}
					alt="Computer herstellingen"
					class="h-[350px] w-full rounded-lg object-cover drop-shadow-md"
				/>
			</div>
			<InfoItem infoItemData={infoItemData[0]} />
		</div>
	</Saos>
	<Saos once={true} animation={'from-right 1.4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="mb-[4rem] flex w-full items-center">
			<InfoItem infoItemData={infoItemData[0]} />
			<div class="mr-[6rem] flex w-[50%]">
				<img
					src={coding}
					alt="Webdesign"
					class="h-[350px] w-full rounded-lg object-cover drop-shadow-md"
				/>
			</div>
		</div>
	</Saos>
</section>
<!--Contact Form-->
<section class="wrapper mb-[8rem]">
	<h2 class="font-suisse text-4xl">Vragen? Contacteer ons!</h2>
	<ContactForm data={data.form} />
</section>

<style lang="postcss">
	@keyframes -global-from-left {
		0% {
			transform: rotateX(50deg) translateX(-200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}

	@keyframes -global-from-right {
		0% {
			transform: rotateX(50deg) translateX(200vw) skewX(-50deg);
			opacity: 1;
		}
		100% {
			transform: rotateX(0deg) translateX(0) skewX(0deg);
			opacity: 1;
		}
	}
</style>
