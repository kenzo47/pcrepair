<script lang="ts">
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import websiteIcon from '$lib/assets/icons/website.svg'

	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import webdesign from '$lib/assets/images/webdesign.jpg'
	import LinkButton from '$lib/components/LinkButton.svelte'
	import ServiceItem from '$lib/components/webdesign/ServiceItem.svelte'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
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
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Intro + Choices-->
<section class="wrapper mb-[8rem]">
	<div class="grid grid-cols-3 gap-[4rem]">
		<ServiceItem data={serviceItemData[0]} />
		<ServiceItem data={serviceItemData[1]} />
		<ServiceItem data={serviceItemData[2]} />
		<!-- {#each centerInfoCardData as centerInfoCard (centerInfoCard.title)}
			<CenterInfoCard data={centerInfoCard} />
		{/each} -->
	</div>
</section>
