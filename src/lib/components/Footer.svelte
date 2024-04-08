<script lang="ts">
	import facebookLogo from '$lib/assets/icons/socials/facebook.svg'
	import linkedInLogo from '$lib/assets/icons/socials/linkedin.svg'
	import * as config from '$lib/config'
</script>

<footer class="flex w-full justify-center bg-subtle-gray p-8">
	<div class="flex flex-col">
		<div class="mb-[1rem] flex justify-center">
			<div class="mr-[1rem]">
				<a
					href="https://www.linkedin.com/company/rebootit-be/"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:bg-azure-dark flex items-center justify-center transition-all duration-300 ease-in-out"
				>
					<img
						src={linkedInLogo}
						alt="LinkedIn Logo"
						class="h-[30px] grayscale filter transition-all duration-300 ease-in-out hover:filter-none"
					/>
				</a>
			</div>
			<div class="">
				<a
					href="https://www.facebook.com/rebootitbe"
					target="_blank"
					rel="noopener noreferrer"
					class="hover:bg-azure-dark flex items-center justify-center transition-all duration-300 ease-in-out"
				>
					<img
						src={facebookLogo}
						alt="Facebook Logo"
						class="h-[30px] grayscale filter transition-all duration-300 ease-in-out hover:filter-none"
					/>
				</a>
			</div>
		</div>
		<div class="flex justify-center">
			<p class="font-roboto text-[1.4rem]"><a href="/privacy-verklaring">Privacyverklaring</a></p>
		</div>
		<p class="font-roboto text-[2rem]">
			{config.title} &copy {new Date().getFullYear()} – Design by
			<a href="/webdesign">{config.title}</a>
		</p>
	</div>
</footer>
