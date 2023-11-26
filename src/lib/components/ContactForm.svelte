<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
	export let data

	const { form, enhance, errors } = superForm(data.form)
</script>

<div id="contact" class="flex h-full w-full flex-col items-center justify-center">
	<h1 class="my-[2rem] font-roboto text-[2.6rem]">Contactformulier</h1>
	<form method="POST" class="flex w-[600px] flex-col items-center justify-center" use:enhance>
		<div>
			<div class="flex sm:flex-col">
				<div class="mb-[2rem] mr-[2rem] flex w-[250px] flex-1 flex-col">
					<label for="name">Naam</label>
					<input
						type="text"
						name="name"
						aria-invalid={$errors.name ? 'true' : undefined}
						bind:value={$form.name}
					/>
					{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
				</div>
				<div class="mb-[2rem] flex w-[250px] flex-1 flex-col">
					<label for="phone">Tel/GSM</label>
					<input
						type="tel"
						name="phone"
						aria-invalid={$errors.phone ? 'true' : undefined}
						bind:value={$form.phone}
					/>
					{#if $errors.phone}<span class="invalid">{$errors.phone}</span>{/if}
				</div>
			</div>
			<div class="mb-[2rem] flex w-full flex-col">
				<label for="email">Email adres</label>
				<input
					type="email"
					name="email"
					aria-invalid={$errors.email ? 'true' : undefined}
					bind:value={$form.email}
				/>
				{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
			</div>
			<div class="mb-[2rem] flex h-[260px] w-full flex-col">
				<label for="message">Bericht</label>
				<textarea
					class="mb-[1rem] h-full resize-none"
					name="message"
					aria-invalid={$errors.message ? 'true' : undefined}
					bind:value={$form.message}
				></textarea>
				{#if $errors.message}<span class="invalid">{$errors.message}</span>{/if}
			</div>
		</div>
		<div>
			<button
				class="mb-[2rem] flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
				><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">Verzend</span></button
			>
		</div>
	</form>
</div>

<style lang="postcss">
	.invalid {
		@apply pl-[0.2rem] font-roboto text-[1.4rem] text-error;
	}

	label {
		@apply pb-[0.2rem] pl-[0.2rem] font-roboto text-[1.6rem] font-normal;
	}

	input,
	textarea {
		@apply w-full rounded-2xl border-[2px] border-transparent p-[0.8rem] text-[1.6rem];
	}

	input:focus,
	textarea:focus {
		@apply border-[2px] border-orange-web outline-none;
	}

	#contact {
		background-color: #2a2a72;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%233A86FF'/%3E%3Cstop offset='1' stop-color='%232A2A72'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%23FFA400' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23FFA400' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
		background-attachment: fixed;
		background-size: 100% 100%; /* Stretch to fill */
		background-position: center;
	}

	button:hover {
		@apply scale-105 transform-gpu duration-100 ease-in-out;
	}
</style>
