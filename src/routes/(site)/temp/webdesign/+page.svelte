<script lang="ts">
	import timeIcon from '$lib/assets/icons/clock.svg'
	import websiteIcon from '$lib/assets/icons/website.svg'
	import webdesign from '$lib/assets/images/webdesign.jpg'
	import ContactForm from '$lib/components/ContactFormModal.svelte'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import InfoItem from '$lib/components/InfoItem.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import ServiceItem from '$lib/components/ServiceItem.svelte'
	import type { FeatureData } from '$lib/types/components/Feature'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	import type { PriceFeatureCardData } from '$lib/types/components/PriceFeatureCard'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
	import Saos from 'saos'
	import type { PageData } from './$types'
	let showModal = false
	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: webdesign,
			alt: 'Webdesign'
		},
		title: 'Webdesign',
		description: 'Wij maken uw website op maat.',
		section: 'website'
	}

	let serviceItemData: ServiceItemData[] = [
		{
			icon: {
				url: websiteIcon,
				alt: 'Statische websites'
			},
			title: 'Eenvoudige websites',
			description:
				'Een betaalbare website op maat, waar de inhoud van de website niet (vaak) aangepast hoeft te worden.',
			button: {
				url: 'https://google.com',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Wordpress websites'
			},
			title: 'Wordpress',
			description:
				'Professionele uitstraling met veel designmogelijkheden op het vertrouwde WordPress-platform.',
			button: {
				url: '#',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Maatwerk'
			},
			title: 'Maatwerk & Webapplicaties',
			description: 'Volledig op maat gemaakte websites en webapplicaties.',
			button: {
				url: 'https://google.com',
				text: 'Lees meer',
				target: '_self' as '_self'
			}
		}
	]
	let infoItemData: InfoItemData[] = [
		{
			title: 'Webdesign',
			description:
				'Bij Reboot-IT kan u terecht voor een professionele website op maat. Wij maken websites voor zowel particulieren als bedrijven. Onze service eindigt niet na het opleveren van de website. Wij zorgen ervoor dat uw website up-to-date blijft en dat u ondersteuning krijgt.',
			subInfoItems: [
				{
					title: 'Welke soort website past bij jou?',
					description:
						'Wij maken verschillende soorten websites, elk met hun eigen voor- en nadelen. Samen kijken we welke soort website het beste bij u past.'
				},
				{
					title: 'Uitbreidbaar',
					description:
						'Wij maken websites die uitbreidbaar zijn. Zo kan u in de toekomst uw website uitbreiden met extra functionaliteiten.'
				}
			]
		}
	]
	let featureData1: FeatureData[] = [
		{
			icon: {
				url: timeIcon,
				alt: 'Time'
			},
			title: 'Oplevertijd',
			description: 'Website wordt opgeleverd binnen 4 weken na goedkeuring van ontwerp.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Feature'
			},
			title: 'Features',
			description: 'Eigen ontwerp, geschikt voor alle apparaten + zoekmachinevriendelijk.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Feature'
			},
			title: 'Features',
			description: 'Hosting, domeinnaam en e-mailadressen.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Feature'
			},
			title: 'Features',
			description: 'Contactformulier en social media integratie.'
		}
	]

	let featureData2: FeatureData[] = [
		{
			icon: {
				url: timeIcon,
				alt: 'Time'
			},
			title: 'Oplevertijd',
			description: 'Website wordt opgeleverd binnen 6 weken na goedkeuring van ontwerp.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Feature'
			},
			title: 'Features',
			description: 'Bevat alle mogelijkheden van een statische website + extra functionaliteiten.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Feature'
			},
			title: 'Features',
			description:
				'Eenvoudig zelf aan te passen d.m.v Wordpress en uitbreidbaar met extra functionaliteiten.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Feature'
			},
			title: 'Features',
			description: 'Opleiding en ondersteuning zodat u zelf uw website kan aanpassen.'
		}
	]

	let featureData3: FeatureData[] = [
		{
			icon: {
				url: timeIcon,
				alt: 'Time'
			},
			title: 'Oplevertijd',
			description: 'Varieert afhankelijk van de complexiteit van de website/applicatie.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Alt'
			},
			title: 'Features',
			description: 'Volledig op maat gemaakt en uitbreidbaar met extra functionaliteiten.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Alt'
			},
			title: 'Features',
			description: 'Kies zelf welke functionaliteiten u nodig heeft. Wij zorgen voor de rest.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Alt'
			},
			title: 'Features',
			description: 'Integratie met andere systemen en uitgebreide ondersteuning na oplevering.'
		}
	]

	let priceCardData1: PriceFeatureCardData = {
		title: 'Statische website',
		subtitle: 'Voor kleine/middelgrote bedrijven',
		price: '€ 900 - ',
		features: [
			'1-5 pagina’s',
			'Contactformulier',
			'Zoekmachinevriendelijk',
			'Email adressen',
			'1 jaar hosting',
			'1 jaar domeinnaam'
		],
		button: {
			url: 'https://google.com',
			text: 'Dit wil ik',
			target: '_self' as '_self'
		}
	}

	let priceCardData2: PriceFeatureCardData = {
		title: 'Wordpress website',
		subtitle: 'Voor kleine/middelgrote bedrijven',
		price: '€ 1200 -',
		features: [
			'1-10 pagina’s',
			'Zelf aanpasbaar',
			'Contactformulieren',
			'Zoekmachinevriendelijk',
			'Email adressen',
			'1 jaar hosting',
			'1 jaar domeinnaam',
			'1 jaar ondersteuning'
		],
		button: {
			url: 'https://google.com',
			text: 'Dit wil ik',
			target: '_self' as '_self'
		}
	}
	let priceCardData3: PriceFeatureCardData = {
		title: 'Custom',
		subtitle: 'Complexe projecten',
		price: '€ -',
		features: [
			'Volledig op maat',
			'Integraties ERP/CRM',
			'Beheerbaar via CMS',
			'SEO optimalisatie',
			'1 jaar hosting',
			'1 jaar domeinnaam',
			'1 jaar 7/7 support',
			'1 jaar updates'
		],
		button: {
			url: 'https://google.com',
			text: 'Dit wil ik',
			target: '_self' as '_self'
		}
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Choices-->
<section class="wrapper mb-[8rem]">
	<div class="grid grid-cols-3 gap-[4rem]">
		{#each serviceItemData as serviceItemData (serviceItemData.title)}
			<ServiceItem data={serviceItemData} />
		{/each}
	</div>
</section>
<!--Info Items-->
<section class="wrapper mb-[8rem]">
	<Saos once={true} animation={'from-left 1.4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="mb-[8rem] flex w-full items-center">
			<div class="mr-[6rem] flex">
				<img
					src={webdesign}
					alt="Computer herstellingen"
					class="h-[350px] w-full min-w-[300px] rounded-lg object-contain drop-shadow-md"
				/>
			</div>
			<InfoItem infoItemData={infoItemData[0]} />
		</div>
	</Saos>
</section>
<!-- 
<section class="wrapper">
	<div class="mb-[4rem] flex flex-col items-center">
		<h2 class="mb-[0.5rem] font-roboto text-[3rem] font-medium">Mogelijkheden</h2>
		<p class="font-roboto text-[1.6rem]">Onderstaande prijzen zijn slechts een indicatie.</p>
		<p class="font-roboto text-[1.6rem]">De prijs kan variëren afhankelijk van uw wensen.</p>
	</div>
</section>

	<section class="wrapper">
	<div class="flex h-full items-center justify-between">
		<div class="order-1 flex h-[500px] w-[500px] justify-start">
			<div class="flex h-full w-full flex-col justify-center">
				{#each featureData1 as featureData}  -> no unique key
					<Feature data={featureData} />
				{/each}
			</div>
		</div>
		<div class="order-2 flex h-[400px] w-[500px] justify-end">
			<PriceFeatureCard data={priceCardData1} />
		</div>
	</div>
</section>
<section class="wrapper">
	<div class="flex h-full items-center justify-between">
		<div class="order-2 flex h-[500px] w-[500px] justify-end">
			<div class="flex h-full w-full flex-col justify-center">
				{#each featureData2 as featureData} -> no unique key
					<Feature data={featureData} />
				{/each}
			</div>
		</div>
		<div class="order-1 flex h-[400px] w-[500px] justify-start">
			<PriceFeatureCard data={priceCardData2} />
		</div>
	</div>
</section>
<section class="wrapper mb-[8rem]">
	<div class="flex h-full items-center justify-between">
		<div class="order-1 flex h-[500px] w-[500px] justify-start">
			<div class="flex h-full w-full flex-col justify-center">
				{#each featureData3 as featureData}  -> no unique key
					<Feature data={featureData} />
				{/each}
			</div>
		</div>
		<div class="order-2 flex h-[400px] w-[500px] justify-end">
			<PriceFeatureCard data={priceCardData3} />
		</div>
	</div>
</section>
-->
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
			<ContactForm {data} />
		</Modal>
	</div>
</section>
