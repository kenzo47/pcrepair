<script lang="ts">
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { TextItemData } from '$lib/types/components/TextItem/TextItem'

	import privacyPolicy from '$lib/assets/images/privacy-policy.jpg?enhanced'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import TextItem from '$lib/components/over-ons/TextItem.svelte'

	let imageSwiperData: HeaderImageData = {
		image: {
			url: privacyPolicy,
			alt: 'Privacyverklaring'
		},
		title: 'Privacyverklaring',
		description: 'Reboot-IT Privacyverklaring'
	}

	let privacyPolicyData: TextItemData = {
		title: 'Reboot-IT Privacyverklaring',
		items: [
			{
				title: 'Privacyverklaring',
				paragraph:
					'Deze privacyverklaring is van toepassing op de website www.reboot-it.be & www.rebootit.be (hierna te noemen "de website"), beheerd door Kenzo Wijnants (hierna te noemen "wij", "ons" of "onze"). Deze privacyverklaring beschrijft hoe wij persoonlijke gegevens verzamelen, gebruiken en delen die via de website worden verstrekt.'
			},
			{
				title: 'Verzamelde gegevens',
				paragraph:
					'Wij verzamelen alleen persoonlijke gegevens die vrijwillig door de gebruiker worden verstrekt via het contactformulier op onze website. Deze gegevens kunnen onder meer naam, e-mailadres, telefoonnummer en het bericht inhouden.'
			},
			{
				title: 'Doel van gegevensverzameling',
				paragraph:
					'De verzamelde persoonlijke gegevens worden uitsluitend gebruikt om te reageren op de vragen of opmerkingen die zijn ingediend via het contactformulier op onze website. Wij gebruiken deze gegevens niet voor andere doeleinden zonder expliciete toestemming van de gebruiker.'
			},
			{
				title: 'Gegevensverwerking',
				paragraph:
					'De persoonlijke gegevens die via het contactformulier worden verstrekt, worden doorgestuurd naar en verwerkt door Airtable, een derde partij die voor automatisatie en onze email flow zorgt. Wij zijn niet verantwoordelijk voor de verwerking van gegevens door Airtable en raden gebruikers aan om het privacybeleid van Airtable te raadplegen voor meer informatie over hun gegevensverwerkingspraktijken.'
			},
			{
				title: 'Geen gebruik van cookies',
				paragraph:
					'Onze website maakt geen gebruik van cookies of vergelijkbare trackingtechnologieën.'
			},
			{
				title: 'Gegevensbeveiliging',
				paragraph:
					'Wij nemen redelijke maatregelen om de persoonlijke gegevens die via onze website worden verzameld te beschermen tegen verlies, misbruik, ongeoorloofde toegang, openbaarmaking, wijziging of vernietiging.'
			},
			{
				title: 'Delen van gegevens',
				paragraph:
					'Wij delen geen persoonlijke gegevens met derden, behalve zoals hierin beschreven of wanneer vereist door de wet.'
			},
			{
				title: 'Bewaartermijn',
				paragraph:
					'Wij bewaren persoonlijke gegevens alleen zo lang als nodig is om te voldoen aan het doel waarvoor ze zijn verzameld, of zoals vereist door de wet.'
			},
			{
				title: 'Rechten van gebruikers',
				paragraph:
					'Gebruikers hebben het recht om toegang te krijgen tot hun persoonlijke gegevens, deze te corrigeren, bij te werken of te verwijderen. Gebruikers kunnen ook bezwaar maken tegen de verwerking van hun persoonlijke gegevens of verzoeken om beperking van de verwerking. Voor verzoeken met betrekking tot persoonlijke gegevens kunnen gebruikers contact met ons opnemen via de contactgegevens onderaan deze privacyverklaring.'
			},
			{
				title: 'Wijzigingen in de privacyverklaring',
				paragraph:
					'Wij behouden ons het recht voor om deze privacyverklaring op elk moment te wijzigen of bij te werken. Eventuele wijzigingen in deze privacyverklaring zullen van kracht worden zodra ze op deze pagina worden geplaatst.'
			},
			{
				title: 'Contactgegevens',
				paragraph:
					'Als u vragen heeft over deze privacyverklaring of de gegevensverwerkingspraktijken van onze website, kunt u contact met ons opnemen via info@reboot-it.be of op het nummer +32494356021.'
			},
			{
				title: 'Laatste bijgewerkt',
				paragraph: 'Dinsdag 9 april, 2024'
			}
		]
	}
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Privacy Policy-->
<section class="wrapper mb-[4rem]">
	<div class="flex flex-col">
		<div class="mb-[4rem] flex flex-col items-start">
			<TextItem data={privacyPolicyData} />
		</div>
	</div>
</section>
