<script>
	import { page } from '$app/stores';
	import ShareButton from './ShareButton.svelte';
	const host = $page.url.protocol + '//' + $page.url.host;

	/**@type {string|false}*/
	export let imageUrl = false;
	export let id = 1;
	export let title = ' ';
	/**@type {string|false}*/
	export let description = false;
	export let category = ' ';
	export let datePosted = ' ';
	/**@type {boolean}*/
	export let isHorizontal = true;
	export let shareButton = false;
</script>

{#if isHorizontal}
	<article
		class="p-4 md:flex bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
	>
		{#if imageUrl}
			<img
				src={imageUrl}
				class="md:w-[25%] lg:w-[20%] rounded-lg aspect-video md:aspect-square object-cover w-full mb-4 md:mb-0 md:mr-4"
				alt=""
			/>
		{/if}

		<div class="w-full">
			<div class="flex justify-between items-center mb-4 text-gray-500">
				<span
					class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
				>
					{category}
				</span>
				<span class="text-sm">{datePosted}</span>
			</div>
			<h3 class="mb-2 text-xl leading-5 font-bold tracking-tight text-gray-800 dark:text-white">
				<a href="{host}/news/{id}">{title}</a>
			</h3>
			{#if description}
				<p class="mb-2 font-light leading-4 text-gray-500 dark:text-gray-400">{description}</p>
			{/if}
			<div class="flex justify-between items-center">
				<a
					href="{host}/news/{id}"
					class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
				>
					Read more
					<svg
						class="ml-2 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
				{#if shareButton}
					<ShareButton {title} url="{host}/news/{id}" />
				{/if}
			</div>
		</div>
	</article>
{:else}
	<article
		class="p-4 md:flex lg:block bg-white row-span-3 rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
	>
		{#if imageUrl}
			<img
				src={imageUrl}
				class="md:w-[25%] lg:w-full rounded-lg aspect-video md:aspect-square lg:aspect-video object-cover w-full mb-4 md:mb-0 lg:mb-4 md:mr-4"
				alt=""
			/>
		{/if}

		<div class="w-full">
			<div class="flex justify-between items-center mb-4 text-gray-500">
				<span
					class="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800"
				>
					{category}
				</span>
				<span class="text-sm">{datePosted}</span>
			</div>
			<h3 class="mb-2 text-xl leading-5 font-bold tracking-tight text-gray-800 dark:text-white">
				<a href="{host}/news/{id}">{title}</a>
			</h3>
			{#if description}
				<p class="mb-2 font-light leading-4 text-gray-500 dark:text-gray-400">{description}</p>
			{/if}
			<div class="flex justify-between items-center">
				<a
					href="{host}/news/{id}"
					class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
				>
					Read more
					<svg
						class="ml-2 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
						><path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/></svg
					>
				</a>
				{#if shareButton}
					<ShareButton {title} url="{host}/news/{id}" />
				{/if}
			</div>
		</div>
	</article>
{/if}
