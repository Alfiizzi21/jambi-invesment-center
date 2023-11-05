<script>
	// @ts-nocheck

	import { goto, onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fade, fly } from 'svelte/transition';

	let currentPath = '';
	let isFlagShow = true;
	let isNavShow = true;
	let isSearchShow = false;
	let screenWidth = 0;

	let IsMobile = false;

	const navs = [
		{
			text: 'beranda',
			path: '/',
			isActive: false
		},
		{
			text: 'berita',
			path: '/news',
			isActive: false
		},
		{
			text: 'galeri',
			path: '/galery',
			isActive: false
		},
		{
			text: 'kontak',
			path: '/contact',
			isActive: false
		}
	];

	onNavigate(() => {
		// @ts-ignore
		currentPath = location.pathname.match(/\/[^\/]*/)[0];

		if (IsMobile) {
			isNavShow = false;
		}
		isSearchShow = false;
	});

	onMount(() => {
		screenWidth = window.screen.width;
		// @ts-ignore
		IsMobile = screenWidth < 1024;
		if (IsMobile) {
			isNavShow = false;
		}
		currentPath = location.pathname.match(/\/[^\/]*/)[0];
	});
</script>

<header>
	<nav class="bg-white lg:shadow-fuchsia-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
		<div
			class="grid grid-cols-2 lg:grid-cols-3 flex-wrap justify-between items-center mx-auto max-w-screen-xl"
		>
			<a href="/" class="flex items-center">
				<img src="/logo.webp" class="mr-2 h-12 sm:h-9" alt="JIH Logo" />
				<span class="self-center leading-3 text-xl font-semibold whitespace-nowrap dark:text-white"
					>Jambi Invesment Center</span
				>
			</a>
			<div class="flex justify-end items-center gap-2 lg:order-2">
				<!-- <div class="group flex h-fit">
					{#if isFlagShow}
						<label in:fade={{ delay: 500 }} for="lang" class="flex bg-white">
							<img class="rounded" src="/icons/{$locale}.webp" width="32" height="32" alt="flag" />
						</label>
					{/if}
					<select
						bind:value={$locale}
						on:blur={() => (isFlagShow = true)}
						on:focus={() => (isFlagShow = false)}
						on:change={changeLang}
						id="lang"
						class="focus:ml-2 py-1 bg-gray-50 transition-all duration-500 opacity-0 focus:opacity-100 focus:w-12 w-0 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
					>
						{#each $locales as locale}
							<option selected={locale == 'id' ? 'selected' : ''} value={locale}>{locale}</option>
						{/each}
					</select>
				</div> -->

				<button
					on:click={() => (isSearchShow = !isSearchShow)}
					data-collapse-toggle="search-toggle"
					type="button"
					class=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="search-toggle"
					aria-expanded="false"
				>
					<span class="material-symbols-outlined"> search </span>
				</button>

				<button
					on:click={() => (isNavShow = !isNavShow)}
					data-collapse-toggle="mobile-menu-2"
					class=" inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="mobile-menu-2"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					{#if isNavShow}
						<span class="material-symbols-outlined"> close </span>
					{:else}
						<span class="material-symbols-outlined"> menu </span>
					{/if}
				</button>
			</div>
			{#if isNavShow}
				<div
					transition:fly={{ x: -screenWidth, duration: 500 }}
					class="justify-between items-center w-full lg:flex lg:w-auto col-span-2 lg:col-span-1 text-center lg:justify-self-center lg:order-1"
					id="mobile-menu-2"
				>
					{#key currentPath}
						<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
							{#each navs as nav}
								<li>
									<a
										href={nav.path}
										class={currentPath == nav.path
											? 'block py-2 capitalize pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
											: 'block py-2 capitalize pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
										aria-current="page">{nav.text}</a
									>
								</li>
							{/each}

							<!-- <li>
								<a
									href="/news"
									class={currentPath == '/news'
										? 'block py-2 capitalize pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
										: 'block py-2 capitalize pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
									aria-current="page">{$_('page.news.nav')}</a
								>
							</li>
							<li>
								<a
									href="/galery"
									class={currentPath == '/galery'
										? 'block py-2 capitalize pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
										: 'block py-2 capitalize pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
									aria-current="page">{$_('page.galery.nav')}</a
								>
							</li>
							<li>
								<a
									href="/contact"
									class={currentPath == '/contact'
										? 'block py-2 capitalize pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white'
										: 'block py-2 capitalize pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700'}
									aria-current="page">{$_('page.contact.nav')}</a
								>
							</li> -->
						</ul>
					{/key}
				</div>
			{/if}
			{#if isSearchShow}
				<div
					transition:fly={{ x: -screenWidth, duration: 500 }}
					class="justify-between items-center col-span-2 lg:col-span-3 w-full lg:order-3 py-2"
					id="mobile-menu-2"
				>
					<form class="flex items-center max-w-md mx-auto" action="/search">
						<label for="search" class="sr-only">Search</label>
						<div class="relative w-full">
							<input
								type="search"
								id="search"
								name="keyword"
								class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Search ..."
								required
							/>
						</div>
						<button
							type="submit"
							class="p-2.5 ml-2 text-sm font-medium text-white bg-primary-700 rounded-lg border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							<svg
								class="w-4 h-4"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 20 20"
							>
								<path
									stroke="currentColor"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
								/>
							</svg>
							<span class="sr-only">Search</span>
						</button>
					</form>
				</div>
			{/if}
		</div>
	</nav>
</header>
