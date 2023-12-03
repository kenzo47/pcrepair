<script lang="ts">
	import Saos from 'saos'
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	import type { FeatureData } from '$lib/types/components/Feature'
	import type { PriceFeatureCardData } from '$lib/types/components/PriceFeatureCard'
	import Modal from '$lib/components/Modal.svelte'
	import ContactForm from '$lib/components/ContactForm.svelte'
	import Feature from '$lib/components/webdesign/Feature.svelte'
	import websiteIcon from '$lib/assets/icons/website.svg'
	import ServiceItem from '$lib/components/webdesign/ServiceItem.svelte'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import webdesign from '$lib/assets/images/webdesign.jpg'
	import InfoItem from '$lib/components/InfoItem.svelte'
	import PriceFeatureCard from '$lib/components/webdesign/PriceFeatureCard.svelte'
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
			// usps: [
			// 	'Geschikt voor kleinere websites',
			// 	'Zoekmachinevriendelijk',
			// 	'Voor bedrijven die niet vaak hun website willen aanpassen.'
			// ],
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
			// usps: [
			// 	'Geschikt voor kleine en grote websites',
			// 	'Gebruiksvriendelijk',
			// 	'Zoekmachinevriendelijk',
			// 	'Voor bedrijven die regelmatig hun website willen aanpassen.'
			// ],
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
			// usps: [
			// 	'Performant',
			// 	'Zoekmachinevriendelijk',
			// 	'Design op maat',
			// 	'Eindeloze mogelijkheden',
			// 	'Voor bedrijven die het beste willen.'
			// ],
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
	let featureData: FeatureData[] = [
		{
			icon: {
				url: websiteIcon,
				alt: 'Alt'
			},
			title: 'Key Features',
			description: 'Custom design, responsive layout, and SEO optimization included.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Alt'
			},
			title: 'Key Features',
			description: 'E-commerce integration, blog setup, and social media integration included.'
		},
		{
			icon: {
				url: websiteIcon,
				alt: 'Alt'
			},
			title: 'Key Features',
			description: 'Advanced analytics, SSL certificate, and unlimited revisions included.'
		}
	]

	let priceCardData: PriceFeatureCardData = {
		title: 'Statische website',
		subtitle: 'Voor kleine/middelgrote bedrijven',
		price: '€ 900',
		features: [
			'1-5 pagina’s',
			'Contactformulier',
			'Zoekmachinevriendelijk',
			'1 jaar hosting',
			'1 jaar domeinnaam',
			'1-5 pagina’s',
			'Contactformulier',
			'Zoekmachinevriendelijk',
			'1 jaar hosting'
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
<!--Pricing/Features-->
<section class="wrapper">
	<div class="mb-[4rem] flex flex-col items-center">
		<h2 class="mb-[0.5rem] font-roboto text-[3rem] font-medium">Mogelijkheden</h2>
		<p class="font-roboto text-[1.6rem]">
			Om u een idee te geven van de prijs, hebben we enkele pakketten samengesteld.
		</p>
		<p class="font-roboto text-[1.6rem]">Onderstaande prijzen zijn slechts een indicatie.</p>
		<p class="font-roboto text-[1.6rem]">De prijs kan variëren afhankelijk van uw wensen.</p>
	</div>
	<div class="flex h-full items-center justify-between">
		<div class="order-1 flex h-[500px] w-[500px] flex-1 flex-col justify-center">
			<!--No unique key -->
			{#each featureData as featureData}
				<Feature data={featureData} />
			{/each}
		</div>
		<div class="order-2 flex h-[400px] w-[500px] flex-1 justify-end">
			<PriceFeatureCard data={priceCardData} />
		</div>
	</div>
</section>
<section class="wrapper">
	<div class="flex h-full items-center justify-between">
		<div class="order-2 flex items-end">
			<div class="flex h-[500px] w-[500px] flex-1 flex-col justify-center">
				<!--No unique key -->
				{#each featureData as featureData}
					<Feature data={featureData} />
				{/each}
			</div>
		</div>
		<div class="order-1 flex h-[400px] w-[500px] flex-1 justify-start">
			<PriceFeatureCard data={priceCardData} />
		</div>
	</div>
</section>
<section class="wrapper mb-[8rem]">
	<div class="flex h-full items-center justify-between">
		<div class="order-1 flex h-[500px] w-[500px] flex-1 flex-col justify-center">
			<!--No unique key -->
			{#each featureData as featureData}
				<Feature data={featureData} />
			{/each}
		</div>
		<div class="order-2 flex h-[400px] w-[500px] flex-1 justify-end">
			<PriceFeatureCard data={priceCardData} />
		</div>
	</div>
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
			<ContactForm {data} />
		</Modal>
	</div>
</section>
