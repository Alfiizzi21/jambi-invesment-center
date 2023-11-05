<script lang="ts">
	export let title: string;
	export let description: string | undefined = undefined;
	export let cta: { href: string; text: string } | undefined = undefined;
	export let side: 'left' | 'right' = 'left';

	let bodyElement: HTMLElement;
	let observer: IntersectionObserver;

	if (typeof IntersectionObserver !== 'undefined') {
		observer = new IntersectionObserver((enteries) => {
			enteries.forEach((entry) => {
				if (entry.isIntersecting) {
					if (side == 'right') {
						entry.target.classList.remove('-translate-x-[50%]');
					} else {
						entry.target.classList.remove('translate-x-[50%]');
					}
					entry.target.classList.remove('opacity-0');
				}
			});
		});
	}
	$: if (bodyElement != undefined) {
		observer.observe(bodyElement);
	}
</script>

<section class="bg-white dark:bg-gray-900">
	<div
		class="py-8 px-4 mx-auto container sm:py-16 lg:px-6 space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0"
	>
		<article class={side == 'right' ? 'order-2' : ''}>
			<h2 class="mb-2 text-3xl tracking-tight font-extrabold text-primary-900 dark:text-white">
				{title}
			</h2>
			{#if description !== undefined}
				<p class="text-gray-700 text-lg indent-5 mb-4">
					{description}
				</p>
			{/if}

			{#if cta !== undefined}
				<a
					href=""
					class="flex gap-2 text-primary-950 font-semibold text-lg items-center justify-center"
					>Lihat Infografis
					<span class="material-symbols-outlined"> trending_flat </span>
				</a>
			{/if}
		</article>
		<div
			bind:this={bodyElement}
			class="{side == 'right'
				? 'order-1 -translate-x-[50%]'
				: 'translate-x-[50%]'} opacity-0 delay-150 transition-all duration-700"
		>
			<slot />
		</div>
	</div>
</section>
