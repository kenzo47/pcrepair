<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client'
	export let data

	const { form, enhance } = superForm(data.form)
</script>

<section class="wrapper">
	<div class="flex flex-col items-center justify-center px-[1.5rem] py-[4rem]">
		<form
			method="POST"
			class="flex w-full flex-col items-center justify-center border border-solid border-subtle-gray"
			use:enhance
		>
			<label for="name">Name</label>
			<input type="text" name="name" bind:value={$form.name} />
			<label for="phone">Phone</label>
			<input type="tel" name="phone" bind:value={$form.phone} />
			<label for="email">Email</label>
			<input type="email" name="email" bind:value={$form.email} />
			<label for="message">Message</label>
			<textarea
				class="mb-[1rem] h-[100px] w-[600px] border border-solid border-black"
				name="message"
				bind:value={$form.message}
			></textarea>

			<div>
				<button
					class="flex h-[40px] w-[120px] cursor-pointer items-center justify-center rounded-xl border border-solid border-alice-blue bg-gradient-top-right px-[1rem] py-[0.6rem] text-center"
					><span class="leading-[1.2 rem] text-[2rem] font-bold text-white">Verzend</span></button
				>
			</div>
		</form>
	</div>
</section>

<style lang="postcss">
	label {
		font-family: 'Suisse Intl', sans-serif;
		font-weight: 500;
		font-size: 1.4rem;
	}

	input {
		border: solid 1px black;
		width: 600px;
		margin-bottom: 1rem;
	}

	input,
	textarea {
		font-family: 'Suisse Intl', sans-serif;
		font-weight: 300;
		font-size: 1.4rem;
	}
</style>
