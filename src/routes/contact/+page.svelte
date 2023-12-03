<script lang="ts">
	import type { HeaderImageData } from '$lib/types/components/HeaderImage'
	import type { ServiceItemData } from '$lib/types/components/ServiceItem'
	import type { PageData } from './$types'
	import ContactForm from '$lib/components/ContactFormModal.svelte'
	import contact from '$lib/assets/images/contact.jpg'
	import HeaderImage from '$lib/components/HeaderImage.svelte'
	import emailIcon from '$lib/assets/icons/email.svg'
	import clockIcon from '$lib/assets/icons/clock.svg'
	import locationIcon from '$lib/assets/icons/location.svg'
	import supportIcon from '$lib/assets/icons/support.svg'
	import ServiceItem from '$lib/components/ServiceItem.svelte'
	export let data: PageData

	let imageSwiperData: HeaderImageData = {
		image: {
			url: contact,
			alt: 'Contact'
		},
		title: 'Contact',
		description: 'Hoe kan u ons bereiken?'
	}
	let contactItemData: ServiceItemData[] = [
		{
			icon: {
				url: locationIcon,
				alt: 'Locatie'
			},
			title: 'Locatie',
			description: ['Galissenstraat 1 bus 8', '3270 Scherpenheuvel-Zichem', 'België']
		},
		{
			icon: {
				url: emailIcon,
				alt: 'Contact'
			},
			title: 'Contact',
			description: ['email: info@reboot-it.be', 'tel: +32494356021']
		},
		{
			icon: {
				url: clockIcon,
				alt: 'Openingsuren'
			},
			title: 'Bereikbaarheid',
			description: 'Elke dag van 10u tot 22u behalve woensdag.'
		},
		{
			icon: {
				url: supportIcon,
				alt: 'Hulp op afstand'
			},
			title: 'Hulp op afstand',
			description:
				'Bent u een bestaande klant? Dan kunnen wij u in sommige gevallen helpen op afstand.',
			button: {
				url: 'https://download.teamviewer.com/download/TeamViewerQS.exe',
				text: 'Klik hier',
				target: '_self' as '_self'
			}
		}
	]
</script>

<!--Header Image-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderImage data={imageSwiperData} />
</header>
<!--Information-->
<section class="wrapper mb-[8rem]">
	<div class="grid grid-cols-4 gap-[2rem]">
		{#each contactItemData as contactItemData (contactItemData.title)}
			<ServiceItem data={contactItemData} />
		{/each}
	</div>
</section>
<!--Contact Form-->
<section class="wrapper mb-[8rem] w-full">
	<div class="mb-[4rem] flex flex-col items-center">
		<h2 class="font-roboto text-[2.2rem] font-medium">Stuur ons een bericht.</h2>
		<p class="font-roboto text-[1.6rem]">Wij antwoorden doorgaans binnen de 24 uur.</p>
	</div>
	<div class="flex justify-center">
		<ContactForm {data} />
	</div>
</section>
