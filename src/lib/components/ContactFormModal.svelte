<script lang="ts">
	import phoneIcon from '$lib/assets/icons/contact-phone.svg'
	import emailIcon from '$lib/assets/icons/email.svg'
	import userIcon from '$lib/assets/icons/user.svg'
	import { schema } from '$lib/schemas/ContactForm'
	import { superForm } from 'sveltekit-superforms/client'
	export let data
	let submission_status = ''

	const { form, errors, enhance } = superForm(data.form, {
		validators: schema,
		resetForm: true,
		onSubmit: (event) => {
			submission_status = 'submitting'
		},
		onUpdated: ({ form }) => {
			if (form.valid) {
				submission_status = 'success'
			}
		},
		delayMs: 700
	})
</script>

{#if submission_status === 'success'}
	<div
		id="contact"
		class="flex h-full w-full flex-col items-center justify-between rounded-[1.6rem] bg-off-white"
	>
		<div class="flex h-full items-center justify-center">
			<h2 class="font-roboto text-[2.6rem]">Bericht succesvol verstuurd!</h2>
		</div>
	</div>
{:else}
	<div id="contact" class="flex h-full w-full flex-col rounded-[1.6rem] bg-off-white">
		<div class=" flex h-[80px] w-full justify-center py-[2.4rem]">
			<h1 class="mb-[1rem] font-roboto text-[2.6rem]">Contactformulier</h1>
		</div>
		<form method="POST" class="flex h-full w-full flex-col items-center" use:enhance>
			<div class="w-full px-[4rem]">
				<div class="flex w-full md:flex-col">
					<div class="mb-[2rem] mr-[2rem] flex w-[250px] flex-1 flex-col rounded-2xl md:w-full">
						<label for="name">Naam</label>
						<div class="flex w-full rounded-2xl bg-subtle-gray">
							<img class="h-[36px] w-[36px] p-[1rem]" src={userIcon} alt="Naam" />
							<input
								class="rounded-2xl"
								type="text"
								name="name"
								aria-invalid={$errors.name ? 'true' : undefined}
								bind:value={$form.name}
							/>
						</div>
						{#if $errors.name}<span class="invalid">{$errors.name}</span>{/if}
					</div>
					<div class="mb-[2rem] flex w-[250px] flex-1 flex-col md:w-full">
						<label for="phone">Tel/GSM</label>
						<div class="flex w-full rounded-2xl bg-subtle-gray">
							<img class="h-[36px] w-[36px] p-[1rem]" src={phoneIcon} alt="Naam" />
							<input
								class="rounded-2xl"
								type="tel"
								name="phone"
								aria-invalid={$errors.phone ? 'true' : undefined}
								bind:value={$form.phone}
							/>
						</div>
						{#if $errors.phone}<span class="invalid">{$errors.phone}</span>{/if}
					</div>
				</div>
				<div class="mb-[2rem] flex w-full flex-col">
					<label for="email">Email adres</label>
					<div class="flex w-full rounded-2xl bg-subtle-gray">
						<img class="h-[36px] w-[36px] p-[1rem]" src={emailIcon} alt="Naam" />
						<input
							class="rounded-2xl"
							type="email"
							name="email"
							aria-invalid={$errors.email ? 'true' : undefined}
							bind:value={$form.email}
						/>
					</div>
					{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}
				</div>
				<div class="flex h-[260px] w-full flex-col md:h-[200px]">
					<label for="message">Bericht</label>
					<textarea
						class="h-full resize-none rounded-2xl"
						name="message"
						aria-invalid={$errors.message ? 'true' : undefined}
						bind:value={$form.message}
					></textarea>
					{#if $errors.message}<span class="invalid mb-[2rem]">{$errors.message}</span>{/if}
				</div>
			</div>
			<div class="ml-[1rem] flex w-full items-center px-[4rem]">
				<div class="flex items-center">
					<input
						type="checkbox"
						id="privacy"
						name="privacy"
						class="mr-[1rem] scale-125"
						bind:checked={$form.privacy}
					/>
					<label for="privacy" class="whitespace-nowrap font-roboto text-[1.6rem] font-normal"
						>Ik heb de <a class="text-azure hover:text-orange-web" href="/privacy-verklaring"
							>privacy-verklaring</a
						> gelezen en ga hiermee akkoord</label
					>
				</div>
			</div>
			{#if $errors.privacy}<span class="invalid">{$errors.privacy}</span>{/if}

			<div class="mt-[2rem] flex w-full justify-center">
				<button
					class="flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-2xl bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
					><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">Verzend</span></button
				>
			</div>
		</form>
	</div>
{/if}

<style lang="postcss">
	.invalid {
		@apply h-[5px] rounded pl-[0.2rem] font-roboto text-[1.4rem] font-bold text-error;
	}

	label {
		@apply pb-[0.2rem] pl-[0.2rem] font-roboto text-[1.6rem] font-normal;
	}

	input {
		@apply h-[36px];
	}

	input,
	textarea {
		@apply w-full border-[2px] border-transparent bg-subtle-gray p-[0.6rem] text-[1.6rem];
	}

	input:focus,
	textarea:focus {
		@apply border-[2px] border-azure outline-none;
	}

	button:hover {
		@apply scale-105 transform-gpu duration-100 ease-in-out;
	}
</style>
