<script>
	// @ts-nocheck

	import { goto } from '$app/navigation';
	import { timeAgo } from '$lib';

	import Card from '$lib/components/Card.svelte';

	export let data;

	const news = data.news;
</script>

<div class="relative w-full -z-10">
	<img
		src="/images/kerinci.webp "
		class="md:aspect-[3/1] lg:aspect-[4/1] w-full aspect-square absolute object-cover -z-20"
		alt=""
	/>
	<div
		class="aspect-square md:aspect-[3/1] lg:aspect-[4/1] w-full bg-black -z-10 absolute opacity-50"
	/>
</div>
<section class="bg-transparent dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
			<h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white">Berita</h2>
			<p class="font-light text-gray-50 sm:text-xl">
				Informasi Terkini Tentang Investasi Di Provinsi Jambi
			</p>
		</div>
		<div class="grid gap-8 lg:grid-cols-3 md:grid-cols-2 mb-8 lg:mb-16">
			{#each news.data as news}
				<Card
					imageUrl="images/kerinci.webp"
					title={news.title}
					id={news.slug}
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, fuga consequatur perferendis consectetur libero qui ratione? Dignissimos facere numquam tempore."
					category={news.category.name}
					datePosted={timeAgo(news.created_at)}
					isHorizontal={false}
					shareButton={true}
				/>
			{/each}
		</div>
		<!-- <nav class="flex justify-center" aria-label="Page navigation example ">
			<ul class="flex items-center -space-x-px h-10 text-base">
				{#key news.links}
					{#each news.links as link, i}
						{#if i == 0}
							<li>
								<button
									on:click={() => (link.url != null ? goto(getSearchParams(link.url)) : ' ')}
									disabled={link.url == null}
									class="flex items-center disabled:cursor-not-allowed disabled:bg-slate-200 justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>
									<span class="sr-only">Previous</span>
									<svg
										class="w-3 h-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M5 1 1 5l4 4"
										/>
									</svg>
								</button>
							</li>
						{:else if i == news.links.length - 1}
							<li>
								<button
									on:click={() => (link.url != null ? goto(getSearchParams(link.url)) : ' ')}
									disabled={link.url == null}
									class="flex items-center disabled:cursor-not-allowed disabled:bg-slate-200 justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
								>
									<span class="sr-only">Next</span>
									<svg
										class="w-3 h-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 6 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 9 4-4-4-4"
										/>
									</svg>
								</button>
							</li>
						{:else if link.active}
							<li>
								<button
									on:click={() => (link.url != null ? goto(getSearchParams(link.url)) : ' ')}
									aria-current="page"
									disabled
									class="z-10 flex items-center justify-center px-4 h-10 leading-tight text-primary-600 border border-gray-300 bg-primary-50 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
									>{link.label}</button
								>
							</li>
						{:else if i <= news.current_page + 2 && i >= news.current_page - 2}
							<li>
								<button
									on:click={() => (link.url != null ? goto(getSearchParams(link.url)) : ' ')}
									class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
									>{link.label}</button
								>
							</li>
						{/if}
					{/each}
				{/key}
			</ul>
		</nav> -->
		<!-- <div class="flex flex-col items-center">
			<span class="text-sm text-gray-700 dark:text-gray-400">
				Menampilkan Halaman <span class="font-semibold text-gray-900 dark:text-white"
					>{newsList.meta.pagination.page}</span
				>
				Dari
				<span class="font-semibold text-gray-900 dark:text-white">
					{newsList.meta.pagination.pageCount}
				</span>Halaman
			</span>
			<div class="inline-flex mt-2 xs:mt-0">
				<button
					disabled={currentPage <= 1}
					class="flex items-center justify-center disabled:bg-gray-500 px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					<svg
						class="w-3.5 h-3.5 mr-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M13 5H1m0 0 4 4M1 5l4-4"
						/>
					</svg>
					Sebelumnya
				</button>
				<button
					disabled={currentPage >= newsList.meta.pagination.pageCount}
					class="flex items-center disabled:bg-gray-500 justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
					Selanjutnya
					<svg
						class="w-3.5 h-3.5 ml-2"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</button>
			</div>
		</div> -->
	</div>
</section>
