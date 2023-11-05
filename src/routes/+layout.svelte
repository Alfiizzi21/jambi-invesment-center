<script>
	import Header from '$lib/components/Header.svelte';
	import { fade } from 'svelte/transition';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	const ctaSection = {
		title: 'Ayo mulai meraih peluang investasi di Jambi!',
		description:
			'Kami telah merancang berbagai insentif dan skema investasi yang dirancang khusus untuk memikat para calon investor. Mari bergabung dengan kami dan manfaatkan kesempatan ini untuk meraih kesuksesan investasi di Jambi!',
		callUs: 'Hubungi Kami',
		OSS: 'Ajukan Perizinan'
	};

	export let data;
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
	/>
</svelte:head>
<Header />
{#key data.url}
	<main
		id="main"
		class="min-h-screen mx-auto"
		in:fade={{ duration: 300, delay: 300 }}
		out:fade={{ duration: 300 }}
	>
		<slot />
	</main>
{/key}
<section class="bg-primary-900 dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="max-w-screen-md">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
				{ctaSection.title}
			</h2>
			<p class="mb-8 font-light sm:text-xl text-gray-100">
				{ctaSection.description}
			</p>
			<div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
				<a
					href="/contact"
					class="inline-flex items-center justify-center px-4 py-2.5 text-base text-center text-primary-900 font-semibold bg-primary-50 rounded-lg hover:bg-primary-200 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
				>
					<span class="material-symbols-outlined mr-2"> Call </span>
					{ctaSection.callUs}
				</a>
				<a
					href="https://oss.go.id/"
					class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center border rounded-lg bg-white bg-opacity-0 hover:bg-opacity-10 focus:ring-4 focus:ring-gray-100 text-white border-white dark:hover:bg-gray-700"
				>
					{ctaSection.OSS}
					<span class="material-symbols-outlined mr-2"> arrow_forward </span>
				</a>
			</div>
		</div>
	</div>
</section>
<Footer />
