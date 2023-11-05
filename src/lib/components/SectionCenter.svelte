<script lang="ts">
	import { onMount } from 'svelte';

	export let title: string;
	export let description: string | undefined = undefined;
	export let cta: { href: string; text: string } | undefined = undefined;
	export let backgroundColor: string = 'bg-white';

	let bodyElement: HTMLElement;
	let observer: IntersectionObserver;

	if (typeof IntersectionObserver !== 'undefined') {
		observer = new IntersectionObserver((enteries) => {
			enteries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove('translate-y-40', 'opacity-0');
				}
			});
		});
	}
	$: if (bodyElement != undefined) {
		observer.observe(bodyElement);
	}
</script>

<section class="{backgroundColor} dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto container sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
			<h2
				class="mb-2 capitalize text-center text-3xl tracking-tight font-extrabold text-primary-900 dark:text-white"
			>
				{title}
			</h2>
			{#if description !== undefined}
				<p class="text-gray-700 text-center text-lg indent-5 mb-4">
					{description}
				</p>
			{/if}

			{#if cta !== undefined}
				<a
					href={cta.href}
					class="flex gap-2 justify-center capitalize text-primary-950 font-semibold text-lg items-center"
					>{cta.text}
					<span class="material-symbols-outlined"> trending_flat </span>
				</a>
			{/if}
		</div>
		<div
			bind:this={bodyElement}
			class="opacity-0 translate-y-40 delay-150 transition-all duration-700"
		>
			<slot />
		</div>
	</div>
</section>
