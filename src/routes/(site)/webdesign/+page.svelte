<script lang="ts">
	import timeIcon from '$lib/assets/icons/clock.svg'
	import websiteIcon from '$lib/assets/icons/website.svg'
	import webdesign from '$lib/assets/images/webdesign.jpg?enhanced'
	import ContactForm from '$lib/components/ContactFormModal.svelte'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import InfoItem from '$lib/components/InfoItem.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import ServiceItem from '$lib/components/ServiceItem.svelte'
	import { url } from '$lib/config'
	import type { FeatureData } from '$lib/types/components/Feature'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	import type { PriceFeatureCardData } from '$lib/types/components/PriceFeatureCard'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'

	import Saos from 'saos'
	import type { PageData } from './$types'
	import SectionHeadingDescription from '$lib/components/hersteldienst/SectionHeadingDescription.svelte'
	import type { SectionHeadingDescriptionData } from '$lib/types/components/SectionHeadingDescription'
	import LinkButton from '$lib/components/LinkButton.svelte'
	import type { LinkButtonData } from '$lib/types/components/Button'
	let showModal = false
	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: webdesign,
			alt: 'Webdesign'
		},
		title: 'Webdesign',
		description: 'Wij maken uw website op maat.'
	}

	let serviceItemData: ServiceItemData[] = [
		{
			index: 1,
			icon: {
				url: websiteIcon,
				alt: 'Statische websites'
			},
			title: 'Statische websites',
			description: 'Een betaalbare website op maat, waarvan de inhoud niet (vaak) verandert. ',
			button: {
				url: url,
				text: '',
				target: '_self' as '_self'
			}
		},
		{
			index: 2,
			icon: {
				url: websiteIcon,
				alt: 'Wordpress websites'
			},
			title: 'Wordpress',
			description: 'Professionele uitstraling d.m.v het vertrouwde WordPress-platform.',
			button: {
				url: url,
				text: '',
				target: '_self' as '_self'
			}
		},
		{
			index: 3,
			icon: {
				url: websiteIcon,
				alt: 'Maatwerk'
			},
			title: 'Maatwerk & Webapplicaties',
			description: 'Volledig op maat gemaakte websites en webapplicaties.',
			button: {
				url: url,
				text: '',
				target: '_self' as '_self'
			}
		}
	]
	let infoItemData: InfoItemData[] = [
		{
			title: 'Webdesign',
			description:
				'Bij ons kan u terecht voor een professionele website op maat. Wij maken websites voor zowel particulieren als bedrijven. Onze websites zijn geschikt voor alle apparaten en zoekmachinevriendelijk.',
			subInfoItems: [
				{
					title: 'Welke soort website past bij jou?',
					description:
						'Wij maken verschillende soorten websites, elk met hun eigen sterktes. Samen kijken we welke soort website het beste bij u of uw zaak past.'
				},
				{
					title: 'Uitbreidbaar',
					description:
						"Onze websites zijn uitbreidbaar. Groeit uw onderneming? Dan kunnen we uw website uitbreiden met extra pagina's en functionaliteiten."
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
			url: url,
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
			url: url,
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
			url: url,
			text: 'Dit wil ik',
			target: '_self' as '_self'
		}
	}

	let webDesignHeading: SectionHeadingDescriptionData = {
		title: 'Webdesign',
		description: [
			'Wenst u meer informatie over de verschillende mogelijkheden en prijzen van onze webdesign diensten?',
			'Neem dan gerust contact met ons op voor een vrijblijvende offerte.',
			'Klik op de knop hieronder om contact op te nemen via het contactformulier.',
			'Wij zijn ook telefonisch bereikbaar.'
		]
	}

	let webDesignPortfolioHeading: SectionHeadingDescriptionData = {
		title: 'Realisaties',
		description: [
			'Benieuwd naar onze realisaties? Klik op de knop hieronder om enkele van onze projecten te bekijken.'
		]
	}
	let linkButtonData: LinkButtonData = {
		url: '/contact#form',
		text: 'Contacteer ons',
		target: '_self' as '_self'
	}

	let portfolioLinkButtonData: LinkButtonData = {
		url: '/portfolio',
		text: 'Realisaties',
		target: '_self' as '_self'
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Choices-->
<section class="wrapper mb-[8rem]">
	<div class="flex justify-evenly space-x-4 lg:flex lg:flex-wrap lg:justify-center lg:space-x-4">
		{#each serviceItemData as serviceItemData, index (serviceItemData.index)}
			<div class={`mb-[4rem] w-1/3 lg:w-[400px] ${index % 2 !== 0 ? 'lg:mx-auto' : ''}`}>
				<ServiceItem data={serviceItemData} />
			</div>
		{/each}
	</div>
</section>
<!--More info-->
<section class="wrapper mb-[8rem]">
	<div class="flex flex-col">
		<div class="mb-[2rem] flex flex-col items-start md:items-center md:text-center">
			<SectionHeadingDescription data={webDesignHeading} />
		</div>
		<div class="mb-[8rem] flex justify-start md:justify-center">
			<LinkButton data={linkButtonData}></LinkButton>
		</div>
	</div>
	<Modal show={showModal} on:close={() => (showModal = false)}>
		<ContactForm {data} />
	</Modal>
</section>
<!--Info Items-->
<section class="wrapper mb-[4rem] lg:mb-[4rem] md:mb-[4rem]">
	<Saos once={true} animation={'from-left 1.4s cubic-bezier(0.35, 0.5, 0.65, 0.95) both'}>
		<div class="mb-[8rem] flex lg:flex-col lg:items-center lg:justify-center">
			<div
				class="mr-[6rem] flex w-full flex-1 items-center justify-center lg:mx-auto lg:mb-[4rem] lg:w-[600px] md:w-[500px] sm:w-[400px] xs:hidden"
			>
				<enhanced:img
					src={webdesign}
					alt="Computer herstellingen"
					class="h-auto w-full rounded-lg object-cover drop-shadow-md"
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
<!--Realisaties-->
<section class="wrapper mb-[4rem]">
	<div class="flex flex-col">
		<div class="mb-[2rem] flex flex-col items-center">
			<SectionHeadingDescription data={webDesignPortfolioHeading} />
		</div>
		<div class="mb-[8rem] flex justify-center">
			<LinkButton data={portfolioLinkButtonData}></LinkButton>
		</div>
	</div>
</section>
