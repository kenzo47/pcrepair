<script lang="ts">
	import type { PageData } from './$types'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'
	import type { EmployeeData } from '$lib/types/components/Employee'

	import about from '$lib/assets/images/about.jpg'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import TextItem from '$lib/components/over-ons/TextItem.svelte'
	import Employee from '$lib/components/over-ons/Employee.svelte'
	import kenzo from '$lib/assets/images/team/Kenzo.jpeg'
	import anon from '$lib/assets/images/team/anon.jpeg'
	import alicia from '$lib/assets/images/team/Alicia.jpeg'

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
	let employeeData: EmployeeData[] = [
		{
			image: {
				url: kenzo,
				alt: 'Kenzo'
			},
			name: 'Kenzo',
			function: 'Zaakvoerder',
			intro: 'Kenzo is een gepassioneerde IT-consultant met een passie voor nieuwe technologieën.',
			skills: ['Consultatie', 'Reparaties', 'Web- & softwareontwikkeling']
		},
		{
			image: {
				url: alicia,
				alt: 'Alicia'
			},
			name: 'Alicia',
			function: 'Manager',
			intro: '',
			skills: ['Reparaties', 'Webdesign', '']
		},
		{
			image: {
				url: anon,
				alt: 'anon'
			},
			name: 'Colin',
			function: 'System Engineer',
			intro:
				'Colin is verantwoordelijk voor het uitrollen van server infrastructuur voor complexe projecten.',

			skills: ['Kubernetes', 'Cloud', 'AWS']
		}
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Header-->
<section class="wrapper mb-[4rem]">
	<div class="flex flex-col">
		<div class="mb-[4rem] flex flex-col items-start">
			<TextItem data={overOnsHeadingData} />
		</div>
	</div>
</section>
<!--Team-->
<section class="wrapper mb-[8rem]">
	<h2 class="mb-[4rem] text-center font-roboto text-[3.2rem] font-medium">Ons team</h2>
	<div class="grid w-full grid-cols-2 gap-[4rem]">
		{#each employeeData as employee}
			<div class="col-span-1 w-full">
				<Employee data={employee} />
			</div>
		{/each}
	</div>
</section>
