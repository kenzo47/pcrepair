<script lang="ts">
	import pcIcon from '$lib/assets/icons/desktop.svg'
	import phoneIcon from '$lib/assets/icons/phone.svg'
	import webIcon from '$lib/assets/icons/website.svg'
	import pcmobo from '$lib/assets/images/pcmobo.jpg'
	import pcrepair from '$lib/assets/images/pcrepair.jpg'
	import phone from '$lib/assets/images/phone.jpg'
	import coding from '$lib/assets/images/webdesign.jpg'
	import ContactFormModal from '$lib/components/ContactFormModal.svelte'
	import InfoItem from '$lib/components/InfoItem.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import ActionCard from '$lib/components/home/ActionCard.svelte'
	import HeaderSwiper from '$lib/components/home/HeaderSwiper.svelte'
	import type { ActionCardData } from '$lib/types/components/ActionCard'
	import type { HeaderSwiperData } from '$lib/types/components/HeaderSwiper'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	import Saos from 'saos'
	import type { PageData } from './$types'

	export let data: PageData
	let showModal = false

	let imageSwiperData: HeaderSwiperData[] = [
		{
			image: {
				url: pcmobo,
				alt: 'Computer reparaties'
			},
			title: 'Computer reparaties',
			description: 'Computer traag of defect? Bekijk onze reparatie diensten.',
			button: {
				url: '/hersteldienst',
				text: 'Klik hier',
				target: '_self' as '_self'
			}
		},
		{
			image: {
				url: phone,
				alt: 'Smartphone reparaties'
			},
			title: 'Smartphone reparaties',
			description: 'Problemen of schade aan uw smartphone? Wij herstellen het voor u!',
			button: {
				url: '/hersteldienst',
				text: 'Klik hier',
				target: '_self' as '_self'
			}
		},
		{
			image: {
				url: coding,
				alt: 'Webdesign'
			},
			title: 'Webdesign',
			description: 'Website nodig? Lees meer over onze webdesign diensten.',
			button: {
				url: '/webdesign',
				text: 'Klik hier',
				target: '_self' as '_self'
			}
		}
	]

	let actionCardData: ActionCardData[] = [
		{
			image: {
				url: pcIcon,
				alt: 'Computer herstellingen'
			},
			title: 'Computer herstellingen',
			description: 'Werkt uw computer niet meer zoals het hoort? Wij helpen u graag verder!',
			button: {
				url: '/hersteldienst',
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
				url: '/hersteldienst',
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
				url: '/webdesign',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		}
	]

	let infoItemData: InfoItemData[] = [
		{
			title: 'Reparaties',
			description:
				'Bij Reboot-IT kan u rekenen op een snelle en professionele herstelling van uw computer of smartphone.',
			subInfoItems: [
				{
					title: 'Computer herstellingen',
					description: 'Wij herstellen computers en laptops, zowel software als hardware problemen.'
				},
				{
					title: 'Smartphone herstellingen',
					description:
						'Gebarsten scherm, versleten batterij of andere problemen? Vraag vrijblijvend een offerte aan.'
				}
			],
			button: {
				url: '/hersteldienst',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		},
		{
			title: 'Webdesign',
			description: 'Flexibele websites op maat. Wij maken uw website volledig naar uw wensen.',
			subInfoItems: [
				{
					title: 'Voor elk budget',
					description:
						'Een simpele website of een uitgebreide web app? Samen kijken we wat het beste bij u past.'
				}
			],
			button: {
				url: '/webdesign',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		}
	]
</script>

<!--Swiper-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderSwiper data={imageSwiperData} />
</header>
<!--Cards-->
<section class="wrapper mb-[8rem]">
	<div
		class="mb-[4rem] grid h-[300px] grid-cols-3 gap-[4rem] bg-transparent md:grid-cols-2 sm:grid-cols-1"
	>
		{#each actionCardData as actionCard (actionCard.title)}
			<ActionCard cardData={actionCard} />
		{/each}
	</div>
</section>
<!--Services-->
<section class="wrapper mb-[8rem]">
	<Saos once={true} animation={'from-left 1.4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="mb-[12rem] flex w-full items-center">
			<div class="mr-[4rem] flex">
				<img
					src={pcrepair}
					alt="Computer herstellingen"
					class="h-[350px] w-full min-w-[400px] rounded-lg object-contain drop-shadow-md sm:h-[250px] sm:min-w-[300px]"
				/>
			</div>
			<InfoItem infoItemData={infoItemData[0]} />
		</div>
	</Saos>
	<Saos once={true} animation={'from-right 1.4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="mb-[4rem] flex w-full items-center">
			<InfoItem infoItemData={infoItemData[1]} />
			<div class="mr-[4rem] flex">
				<img
					src={coding}
					alt="Webdesign"
					class="h-[350px] w-full min-w-[400px] rounded-lg object-contain drop-shadow-md sm:h-[250px] sm:min-w-[300px]"
				/>
			</div>
		</div>
	</Saos>
</section>
<!--Contact Form-->
<section class="wrapper mb-[8rem]">
	<div class="flex flex-col items-center">
		<h2 class="text-center font-roboto text-[3rem] font-semibold">Heeft u vragen?</h2>
		<p class="mb-[2rem] text-center font-roboto text-[1.6rem] font-normal">Contacteer ons hier.</p>
		<button
			on:click={() => (showModal = true)}
			class="flex h-[45px] w-[120px] cursor-pointer items-center justify-center rounded-2xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
			><span class="leading-[1.2 rem] font-roboto text-[2rem] font-bold text-white">Klik hier</span
			></button
		>
		<Modal show={showModal} on:close={() => (showModal = false)}>
			<ContactFormModal {data} />
		</Modal>
	</div>
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
