<script lang="ts">
	import Saos from 'saos'
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
	import type { InfoItemData } from '$lib/types/components/InfoItem/InfoItem'
	import Feature from '$lib/components/webdesign/Feature.svelte'
	import websiteIcon from '$lib/assets/icons/website.svg'
	import ServiceItem from '$lib/components/webdesign/ServiceItem.svelte'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import webdesign from '$lib/assets/images/webdesign.jpg'
	import LinkButton from '$lib/components/LinkButton.svelte'
	import InfoItem from '$lib/components/InfoItem.svelte'
	import type { FeatureData } from '$lib/types/components/Feature'
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
			usps: [
				'Geschikt voor kleinere websites',
				'Zoekmachinevriendelijk',
				'Voor bedrijven die niet vaak hun website willen aanpassen.'
			],
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
			usps: [
				'Geschikt voor kleine en grote websites',
				'Gebruiksvriendelijk',
				'Zoekmachinevriendelijk',
				'Voor bedrijven die regelmatig hun website willen aanpassen.'
			],
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
			usps: [
				'Performant',
				'Zoekmachinevriendelijk',
				'Design op maat',
				'Eindeloze mogelijkheden',
				'Voor bedrijven die het beste willen.'
			],
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
					title: 'Welke soort website past bij mij?',
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
		<div class="mb-[12rem] flex w-full items-center">
			<div class="mr-[6rem] flex">
				<img
					src={webdesign}
					alt="Computer herstellingen"
					class="h-[350px] w-full min-w-[400px] rounded-lg object-contain drop-shadow-md"
				/>
			</div>
			<InfoItem infoItemData={infoItemData[0]} />
		</div>
	</Saos>
</section>
<!--Pricing/Features-->
<section class="wrapper mb-[8rem]">
	<div class="mb-[8rem] flex flex-col text-left">
		<h2 class="mb-[0.5rem] font-roboto text-[3rem] font-medium">Mogelijkheden</h2>
		<p class="font-roboto text-[1.6rem]">
			Om u een idee te geven van de prijs, hebben we enkele pakketten samengesteld.
		</p>
		<p class="font-roboto text-[1.6rem]">Onderstaande prijzen zijn slechts een indicatie.</p>
		<p class="font-roboto text-[1.6rem]">De prijs kan variëren afhankelijk van uw wensen.</p>
	</div>
	<div class="flex">
		<div class="flex flex-col">
			{#each featureData as featureData (featureData.title)}
				<Feature data={featureData} />
			{/each}
		</div>
	</div>
</section>
