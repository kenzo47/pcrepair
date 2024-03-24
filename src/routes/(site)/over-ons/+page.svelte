<script lang="ts">
	import type { EmployeeData } from '$lib/types/components/Employee'
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'

	import about from '$lib/assets/images/about.jpg?enhanced'
	import anon from '$lib/assets/images/team/anon.png?enhanced'
	import kenzo from '$lib/assets/images/team/kenzo.jpg?enhanced'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import Employee from '$lib/components/over-ons/Employee.svelte'
	import TextItem from '$lib/components/over-ons/TextItem.svelte'

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
					'Reboot-IT is een jong bedrijf gevestigd in Scherpenheuvel-Zichem dat gespecialiseerd is in het herstellen van computers, laptops, smartphones en tablets. Onze hersteldienst die momenteel uit twee leden bestaat onderscheidt zich door klanttevredenheid en service. Wij bieden ook een breed scala aan webgerelateerde diensten aan, van simpelere websites tot klantportalen en ERP systemen op maat.'
			},
			{
				title: 'Servicegericht en flexibel in Vlaams-Brabant en Limburg',
				paragraph:
					'Voor extra gemak bieden wij een ophaal- en bezorgservice aan. Momenteel zonder fysieke winkel streven we ernaar om in de toekomst een locatie te openen om u nog beter van dienst te kunnen zijn. '
			},
			{
				title: 'Onze missie',
				paragraph:
					'Onze missie is om de beste service te bieden aan onze klanten. Uw tevredenheid staat voorop en wij zijn pas tevreden als u dat ook bent.'
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
			function: 'Herstellingen & Webontwikkeling',
			intro:
				"Kenzo is een gepassioneerde IT'er met een passie voor nieuwe technologieën. Klantgerichtheid en kwaliteit staan bij hem centraal.",
			skills: ['Consultatie', 'Reparaties', 'Web- & softwareontwikkeling']
		},
		{
			image: {
				url: anon,
				alt: 'Alicia'
			},
			name: 'Alicia',
			function: 'Administratie & Herstellingen',
			intro:
				'Alicia beheert de administratie en is mede-verantwoordelijk voor reparaties en webdesign. Er is geen enkele uitdaging die ze uit de weg gaat.',
			skills: ['Administratie', 'Reparaties', 'Webdesign']
		}
		// {
		// 	image: {
		// 		url: anon,
		// 		alt: 'anon'
		// 	},
		// 	name: 'Colin',
		// 	function: 'System Engineer',
		// 	intro:
		// 		'Colin is verantwoordelijk voor het uitrollen van server infrastructuur voor complexe projecten.',

		// 	skills: ['Kubernetes', 'Cloud', 'AWS']
		// }
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Information-->
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
	<div class="grid w-full grid-cols-2 gap-[4rem] md:grid-cols-1">
		{#each employeeData as employee}
			<div class="col-span-1 w-full">
				<Employee data={employee} />
			</div>
		{/each}
	</div>
</section>
