<script lang="ts">
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { SectionHeadingDescriptionData } from '$lib/types/components/SectionHeadingDescription'
	import type { CenterInfoCardData } from '$lib/types/components/CenterInfoCard'
	import type { HoverInfoItemData } from '$lib/types/components/HoverInfoItem'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import SectionHeadingDescription from '$lib/components/hersteldienst/SectionHeadingDescription.svelte'
	import pcrepair from '$lib/assets/images/pcrepair.jpg'
	import CenterInfoCard from '$lib/components/hersteldienst/CenterInfoCard.svelte'
	import LinkButton from '$lib/components/LinkButton.svelte'
	import HoverInfoItem from '$lib/components/hersteldienst/HoverInfoItem.svelte'
	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: pcrepair,
			alt: 'Herstellingen'
		},
		title: 'Herstellingen',
		description: 'Informatie over onze herstellingen en diensten.',
		url: '#'
	}
	let pcRepairHeading: SectionHeadingDescriptionData = {
		title: 'Computer & laptop herstellingen',
		description: [
			'U kan terecht bij ons voor herstellingen en onderhoud van alle merken en types van computers, ook als deze niet bij ons zijn aangekocht.',
			'We voeren een gratis diagnose uit en contacteren u wanneer er kosten aan verbonden zijn.',
			'Na uw goedkeuring voeren we reparaties uit in ons eigen atelier of bij u thuis.'
		]
	}

	let phoneRepairHeading: SectionHeadingDescriptionData = {
		title: 'Smartphone & tablet herstellingen',
		description: [
			'Wij repareren (bijna) alle merken en modellen smartphones en tablets met uitzondering van Apple toestellen.',
			"U kan bij ons terecht voor het vervangen van uw scherm, batterij, oplaadpoort, camera's, speakers, microfoon, ...",
			'Ook software problemen zoals een traag toestel of een update die niet lukt kunnen wij oplossen.'
		]
	}

	let centerInfoCardData: CenterInfoCardData[] = [
		{
			image: {
				url: pcrepair,
				alt: 'Computer reparaties'
			},
			title: 'Comprehensive Diagnostics for Accurate Problem Identification1',
			description:
				'Our skilled technicians use advanced tools and techniques to accurately identify and diagnose issues with your PC.'
		},
		{
			image: {
				url: pcrepair,
				alt: 'Computer reparaties'
			},
			title: 'Comprehensive Diagnostics for Accurate Problem Identification2',
			description:
				'Our skilled technicians use advanced tools and techniques to accurately identify and diagnose issues with your PC.'
		},
		{
			image: {
				url: pcrepair,
				alt: 'Computer reparaties'
			},
			title: 'Comprehensive Diagnostics for Accurate Problem Identification3',
			description:
				'Our skilled technicians use advanced tools and techniques to accurately identify and diagnose issues with your PC.'
		}
	]

	let hoverInfoItemData: HoverInfoItemData[] = [
		{
			title: 'Screen Repairs',
			description:
				'Our expert technicians specialize in smartphone repair services, including screen repairs, battery replacements, and resolving software issues. We provide reliable and efficient solutions to ensure your device is back in optimal condition.'
		},
		{
			title: 'Battery Replacements',
			description:
				'We offer professional battery replacement services for smartphones of all brands. Our skilled technicians use high-quality batteries to ensure long-lasting performance and reliability.'
		},
		{
			title: 'Software Issues',
			description:
				"If you're experiencing any software issues with your smartphone, our team is here to help. We have the expertise to diagnose and fix various software problems, ensuring smooth and seamless operation."
		}
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--PC Repairs-->
<section class="wrapper mb-[8rem]">
	<div class="mb-[2rem]">
		<SectionHeadingDescription data={pcRepairHeading} />
	</div>
	<div class="mb-[4rem] flex">
		<LinkButton data={{ text: 'Maak afspraak', url: '#', target: '_self' }} />
	</div>
	<div class="grid grid-cols-3 gap-[4rem]">
		{#each centerInfoCardData as centerInfoCard (centerInfoCard.title)}
			<CenterInfoCard data={centerInfoCard} />
		{/each}
	</div>
</section>
<!--Smartphone/Tablet Repairs-->
<section class="wrapper mb-[8rem]">
	<div class="mb-[2rem]">
		<SectionHeadingDescription data={phoneRepairHeading} />
	</div>
	<div class="mb-[6rem]">
		<LinkButton data={{ text: 'Maak afspraak', url: '#', target: '_self' }} />
	</div>
	<div class="flex">
		<div class="mr-[6rem] flex h-[400px] flex-1 items-center">
			<img
				src={pcrepair}
				alt=""
				class="w-full min-w-[400px] rounded-lg object-contain drop-shadow-md transition-all duration-150 hover:scale-[1.01] hover:cursor-pointer hover:border-2 hover:border-orange-web"
			/>
		</div>
		<div class="flex flex-1 flex-col items-center justify-center">
			{#each hoverInfoItemData as hoverInfoItem (hoverInfoItem.title)}
				<HoverInfoItem data={hoverInfoItem} />
			{/each}
		</div>
	</div>
</section>
