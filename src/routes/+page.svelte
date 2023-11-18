<script lang="ts">
	import type { PageData } from './$types'
	import HeaderSwiper from '$lib/components/home/HeaderSwiper.svelte'
	import pc from '$lib/assets/images/pc.jpg'
	import phone from '$lib/assets/images/phone.jpg'
	import coding from '$lib/assets/images/coding.jpg'
	import pcIcon from '$lib/assets/icons/desktop.svg'
	import phoneIcon from '$lib/assets/icons/phone.svg'
	import webIcon from '$lib/assets/icons/website.svg'
	import ActionCard from '$lib/components/home/ActionCard.svelte'
	import ContactForm from '$lib/components/ContactForm.svelte'

	export let data: PageData

	let images = [
		{ src: pc, text: 'Herstelling nodig?' },
		{ src: phone, text: 'Smartphone reparaties' },
		{ src: coding, text: 'Webdesign' }
	]

	let data1 = {
		image: {
			url: pcIcon,
			alt: 'Computer herstellingen'
		},
		title: 'Computer herstellingen',
		description: 'Werkt uw computer niet meer zoals het hoort? Wij helpen u graag verder!',
		button: {
			url: '#',
			text: 'Lees meer',
			target: '_self' as '_self'
		}
	}

	let data2 = {
		image: {
			url: phoneIcon,
			alt: 'Smartphone herstellingen'
		},
		title: 'Smartphone herstellingen',
		description: 'Problemen met uw smartphone? Gebarsten scherm? Wij herstellen het voor u!',
		button: {
			url: 'https://google.com',
			text: 'Lees meer',
			target: '_self' as '_self'
		}
	}

	let data3 = {
		image: {
			url: webIcon,
			alt: 'Webdesign'
		},
		title: 'Webdesign',
		description:
			'Wij maken uw website op maat! Van eenvoudige websites tot uitgebreide web applicaties.',
		button: {
			url: 'https://google.com',
			text: 'Lees meer',
			target: '_self' as '_self'
		}
	}
</script>

<!--Swiper-->
<header class="mb-[4rem] overflow-hidden">
	<HeaderSwiper {images} />
</header>
<!--Cards-->
<section class="wrapper">
	<div class="mb-[4rem] grid h-[300px] grid-cols-3 gap-[4rem] bg-transparent">
		<ActionCard cardData={data1} />
		<ActionCard cardData={data2} />
		<ActionCard cardData={data3} />
	</div>
</section>
<!--Contact Form-->
<section class="wrapper">
	<h2 class="font-suisse text-4xl">Vragen? Contacteer ons!</h2>
	<ContactForm data={data.form} />
</section>
