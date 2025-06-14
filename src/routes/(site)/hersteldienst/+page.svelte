<script lang="ts">
	import type { CenterInfoCardData } from '$lib/types/components/CenterInfoCard'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { HoverInfoItemData } from '$lib/types/components/HoverInfoItem'
	import type { PriceCardData } from '$lib/types/components/PriceCard'
	import type { SectionHeadingDescriptionData } from '$lib/types/components/SectionHeadingDescription'

	import laptop from '$lib/assets/images/laptop_repair.jpg?enhanced'
	import pcbrands from '$lib/assets/images/pcbrands2.png?enhanced'
	import pcrepair from '$lib/assets/images/pcrepair.jpg?enhanced'
	import phonerepair from '$lib/assets/images/phonerepair.jpg?enhanced'
	import radius from '$lib/assets/images/radius.png?enhanced'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import CenterInfoCard from '$lib/components/hersteldienst/CenterInfoCard.svelte'
	import HoverInfoItem from '$lib/components/hersteldienst/HoverInfoItem.svelte'
	import PriceCard from '$lib/components/hersteldienst/PriceCard.svelte'
	import SectionHeadingDescription from '$lib/components/hersteldienst/SectionHeadingDescription.svelte'
	import Modal from '$lib/components/Modal.svelte'
	import ContactFormModal from '$lib/components/ContactFormModal.svelte'
	import type { PageData } from './$types'
	export let data: PageData

	let showModal = false

	let imageSwiperData: HeaderImageData = {
		image: {
			url: pcrepair,
			alt: 'Herstellingen'
		},
		title: 'Herstellingen',
		description: 'Informatie over onze herstellingen en diensten.',
		section: 'prices',
		buttonText: 'Prijzen'
	}
	let pcRepairHeading: SectionHeadingDescriptionData = {
		title: 'PC herstellingen',
		description: [
			'U kan terecht bij ons voor herstellingen en onderhoud van uw PC ook als deze niet bij ons is aangekocht.',
			'We voeren een gratis diagnose uit en contacteren u wanneer er bijkomende kosten zijn.',
			'Na uw goedkeuring voeren we reparaties uit in ons eigen atelier of bij u thuis indien mogelijk. ',
			'We houden u steeds op de hoogte van de status van uw herstelling en uw toestel wordt gebruiksklaar afgeleverd.'
		]
	}

	let phoneRepairHeading: SectionHeadingDescriptionData = {
		title: 'GSM/Tablet herstellingen',
		description: [
			'Wij repareren alle merken en modellen 	 en tablets met uitzondering van Apple toestellen.',
			"U kan bij ons terecht voor het vervangen van uw scherm, batterij, oplaadpoort, camera's, speakers, microfoon, ...",
			'Ook software problemen zoals een traag toestel of een update die vast loopt kunnen wij oplossen.'
		]
	}

	let priceHeading: SectionHeadingDescriptionData = {
		title: 'PC Prijzen',
		description: [
			'Wij hanteren vaste prijzen voor de meest voorkomende herstellingen.',
			'Voor herstellingen die niet in de lijst staan kan u ons steeds contacteren voor een prijsopgave.'
		]
	}

	let centerInfoCardData: CenterInfoCardData[] = [
		{
			index: 1,
			image: {
				url: pcbrands,
				alt: 'Computer merken'
			},
			title: 'Alle merken en types',
			description:
				'Met meer dan 10 jaar ervaring in het herstellen van computers en laptops kan u bij ons terecht voor alle merken en types, ongeacht waar u deze heeft aangekocht.'
		},
		{
			index: 2,
			image: {
				url: laptop,
				alt: 'Gratis diagnose'
			},
			title: 'Gratis diagnose',
			description:
				'Bent u niet zeker wat er aan de hand is met uw toestel? Wij voeren een gratis diagnose uit en contacteren u wanneer er kosten aan verbonden zijn.'
		},
		{
			index: 3,
			image: {
				url: radius,
				alt: 'Ophaal- en leverdienst'
			},
			title: 'Ophaal- en leverdienst',
			description:
				'Wij bieden een ophaal- en leverdienst aan voor herstellingen die niet ter plaatse kunnen worden uitgevoerd. Dit is zonder meerprijs in een straal van 10km rond Scherpenheuvel.'
		}
	]

	let hoverInfoItemData: HoverInfoItemData[] = [
		{
			title: 'Originele onderdelen',
			description:
				'Wij gebruiken enkel originele OEM onderdelen voor de herstelling van uw smartphone of tablet. Hierdoor kunnen wij een kwalitatieve herstelling garanderen. Helaas zijn niet alle onderdelen voor elk merk beschikbaar.'
		},
		{
			title: 'Schermen, batterijen, knopjes..',
			description:
				'Wij vervangen elk onderdeel van uw smartphone of tablet als we originele onderdelen kunne verkrijgen. Van schermen tot batterijen, knopjes, camera’s, speakers, microfoons, oplaadpoorten, ...'
		},
		{
			title: 'Software problemen',
			description:
				'Software-problemen zoals een update die vast loopt kunnen wij ook oplossen. Ook voor het overzetten van gegevens van uw oude naar uw nieuwe toestel kan u bij ons terecht.'
		}
	]

	let priceCardData: PriceCardData[] = [
		{
			index: 1,
			title: 'Onderhoud',
			price: '€ 50',
			features: [
				'Verwijderen van virussen en spyware',
				'Verwijderen van onnodige software',
				'Verwijderen van stof en vuil',
				'Volledige controle van de hardware',
				'Update van Windows en drivers',
				'Gebruiksklaar afgeleverd'
			],
			button: {
				url: '#',
				text: 'Maak afspraak',
				target: '_self' as '_self'
			}
		},
		{
			index: 2,
			title: 'Herinstallatie',
			price: '€ 70',
			features: [
				'Volledige backup van uw gegevens',
				'Herinstallatie van Windows + drivers',
				'Instellen e-mail en printer',
				'Volledige controle van de hardware',
				'Herinstallatie gewenste programma’s',
				'Gebruiksklaar afgeleverd'
			],
			button: {
				url: '#',
				text: 'Maak afspraak',
				target: '_self' as '_self'
			}
		},
		{
			index: 3,
			title: 'Upgrade',
			price: '€ 125',
			features: [
				'Back-up van uw gegevens',
				'Vervangen van harde schijf door SSD',
				'Herinstallatie van Windows op SSD',
				'Installatie Windows updates/drivers',
				'Installatie van gewenste programma’s',
				'Gebruiksklaar afgeleverd'
			],
			button: {
				url: '#',
				text: 'Maak afspraak',
				target: '_self' as '_self'
			}
		}
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--PC Repairs-->
<section id="computers" class="wrapper mb-[8rem]">
	<div class="flex flex-col">
		<div class="mb-[1.6rem] flex flex-col items-start md:items-center md:text-center">
			<SectionHeadingDescription data={pcRepairHeading} />
		</div>
		<div class="mb-[8rem] flex justify-start md:justify-center">
			<button
				on:click={() => (showModal = true)}
				class="flex h-[45px] w-[160px] cursor-pointer items-center justify-center rounded-2xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
				><span class="leading-[1.2 rem] font-roboto text-[2rem] font-bold text-white"
					>Maak afspraak</span
				></button
			>
		</div>
	</div>
	<div class="flex flex-wrap justify-center space-x-0 md:flex-col">
		<div class="flex justify-evenly space-x-4 lg:flex lg:flex-wrap lg:justify-center lg:space-x-0">
			{#each centerInfoCardData as centerInfoCard, index (centerInfoCard.index)}
				<div class={`mb-[4rem] w-1/3 lg:w-1/2 md:w-full ${index % 2 !== 0 ? 'lg:mx-auto' : ''}`}>
					<CenterInfoCard data={centerInfoCard} />
				</div>
			{/each}
		</div>
	</div>
</section>
<!--Smartphone/Tablet Repairs-->
<section id="mobiel" class="wrapper mb-[8rem]">
	<div class="flex flex-col">
		<div class="mb-[2rem] flex flex-col items-start md:items-center md:text-center">
			<SectionHeadingDescription data={phoneRepairHeading} />
		</div>
		<div class="mb-[8rem] flex justify-start md:justify-center">
			<button
				on:click={() => (showModal = true)}
				class="flex h-[45px] w-[160px] cursor-pointer items-center justify-center rounded-2xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
				><span class="leading-[1.2 rem] font-roboto text-[2rem] font-bold text-white"
					>Maak afspraak</span
				></button
			>
		</div>
	</div>
	<div class="flex lg:flex-col lg:items-center lg:justify-center">
		<div
			class="mr-[6rem] flex w-full flex-1 items-center justify-center lg:mx-auto lg:mb-[4rem] lg:w-[600px] md:w-[500px] sm:w-[400px] xs:hidden"
		>
			<enhanced:img
				src={phonerepair}
				alt=""
				class="h-auto w-full rounded-lg object-cover drop-shadow-md transition-all duration-150 hover:scale-[1.01] hover:cursor-pointer hover:border-2 hover:border-orange-web"
			/>
		</div>
		<div class="flex flex-1 flex-col items-center justify-center lg:w-full">
			{#each hoverInfoItemData as hoverInfoItem (hoverInfoItem.title)}
				<HoverInfoItem data={hoverInfoItem} />
			{/each}
		</div>
	</div>
</section>
<!--Prices-->
<section id="prices" class="wrapper mb-[8rem]">
	<div class="mb-[6rem] flex flex-col items-start md:items-center md:text-center">
		<SectionHeadingDescription data={priceHeading} />
	</div>
	<div class="flex justify-evenly space-x-4 lg:flex lg:flex-wrap lg:justify-center lg:space-x-4">
		{#each priceCardData as priceCard, index (priceCard.index)}
			<div class={`mb-[4rem] w-1/3 lg:w-[400px] ${index % 2 !== 0 ? 'lg:mx-auto' : ''}`}>
				<PriceCard data={priceCard} />
			</div>
		{/each}
	</div>
	<Modal show={showModal} on:close={() => (showModal = false)}>
		<ContactFormModal {data} />
	</Modal>
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
	</div>
</section>
