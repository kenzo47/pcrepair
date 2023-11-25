<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
	export let data

	const { form, enhance } = superForm(data.form)
</script>

<section class="wrapper">
	<div class="flex w-full flex-col items-center justify-center">
		<h1 class="mb-[2rem] font-roboto text-[2.6rem]">Contactformulier</h1>
		<form method="POST" class="flex w-[600px] flex-col items-center justify-center" use:enhance>
			<div>
				<div class="flex sm:flex-col">
					<div class="mr-[2rem] flex w-[250px] flex-1 flex-col">
						<label for="name">Naam</label>
						<input type="text" name="name" bind:value={$form.name} />
					</div>
					<div class="flex w-[250px] flex-1 flex-col">
						<label for="phone">Tel/GSM</label>
						<input type="tel" name="phone" bind:value={$form.phone} />
					</div>
				</div>
				<div class="flex w-full flex-col">
					<label for="email">Email adres</label>
					<input type="email" name="email" bind:value={$form.email} />
				</div>
				<div class="mb-[2rem] flex h-[220px] w-full flex-col">
					<label for="message">Bericht</label>
					<textarea class="mb-[1rem] h-full resize-none" name="message" bind:value={$form.message}
					></textarea>
				</div>
			</div>
			<div>
				<button
					class="flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
					><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">Verzend</span></button
				>
			</div>
		</form>
	</div>
</section>

<style lang="postcss">
	label {
		@apply pb-[0.2rem] pl-[0.2rem] font-roboto text-[1.6rem] font-normal;
	}

	input {
		@apply mb-[2rem];
	}

	input,
	textarea {
		@apply w-full rounded-2xl bg-subtle-gray p-[0.8rem] active:border-orange-web;
	}
</style>
