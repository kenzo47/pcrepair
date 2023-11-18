<script lang="ts">
	export let infoItemData
	import phone from '$lib/assets/images/phone.jpg'
</script>

<div class="flex items-center">
	<div class="mr-[4rem] flex w-[50%] flex-col">
		<div class="mb-[6rem]">
			<h2 class="font-suisse text-4xl font-medium">
				Experience personalized website design services tailored to your needs.
			</h2>
			<p>
				Our team of experts will create a stunning website that represents your brand and engages
				your audience.
			</p>
		</div>
		<div class="flex gap-[4rem]">
			<div class="flex flex-col">
				<h3>50% off</h3>
				<p>Get a professional website that stands out from the competition.</p>
			</div>
			<div class="flex flex-col">
				<h3>50% off</h3>
				<p>Boost your online presence with our expert website design services.</p>
			</div>
		</div>
	</div>

	<div class="flex w-[50%]">
		<img src={phone} alt="" class="h-[400px] w-full object-cover" />
	</div>
</div>

<style lang="postcss">
	h3 {
		font-family: 'Suisse Intl', sans-serif;
		font-weight: 500;
		font-size: 1.8rem;
	}
	p {
		font-family: 'Suisse Intl', sans-serif;
		font-weight: 500;
		font-size: 1.4rem;
	}
</style>
