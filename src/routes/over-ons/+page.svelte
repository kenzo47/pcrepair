<script lang="ts">
	import type { PageData } from './$types'
	import about from '$lib/assets/images/about.jpg'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import TextItem from '$lib/components/over-ons/TextItem.svelte'
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'

	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: about,
			alt: 'Over ons'
		},
		title: 'Over ons',
		description: 'Wie zijn wij?'
	}
	let overOnsHeadingData: TextItemData = {
		title: 'Reboot-IT',
		items: [
			{
				title: 'Expert in herstellingen en webontwikkeling',
				paragraph:
					'Reboot-IT, een jong bedrijf gevestigd in Scherpenheuvel-Zichem, is gespecialiseerd in het herstellen van computers, laptops, smartphones en tablets. Onze gloednieuwe onderneming, bestaande uit twee kernleden en een externe medewerker, onderscheidt zich door klanttevredenheid en service. Met expertise in webontwikkeling bieden wij een breed scala aan webgerelateerde diensten in de regio Vlaams-Brabant en Limburg.'
			},
			{
				title: 'Servicegericht en flexibel in Vlaams-Brabant en Limburg',
				paragraph:
					'Of het nu gaat om reparaties bij u thuis of in ons eigen atelier, wij passen onze dienstverlening aan de aard van het probleem aan. Voor extra gemak bieden wij een ophaal- en bezorgservice tegen een kleine meerprijs. Momenteel zonder fysieke winkel streven we ernaar om in de toekomst een locatie te openen. Bij Reboot-IT staat uw tevredenheid voorop, en wij verwelkomen de kans om u te ondersteunen met al uw technologische behoeften.'
			}
		]
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Header-->
<section class="wrapper mb-[8rem]">
	<div class="flex flex-col">
		<div class="mb-[4rem] flex flex-col items-start">
			<TextItem data={overOnsHeadingData} />
		</div>
	</div>
</section>
