<script lang="ts">
	import { fade } from 'svelte/transition';
	let isCardHover: boolean;
	export let icon: string;
	export let title: string;
	export let description: string;
</script>

<div
	class="group bg-white lg:h-28 transition-all duration-700 lg:hover:h-44 rounded relative shadow-md p-4 lg:py-6"
>
	<!-- Header -->
	<div
		class="h-24 z-10 mb-2 bg-primary-50 group-hover:shadow lg:absolute right-2 left-2 top-2 lg:group-hover:-translate-y-20 duration-500 rounded transition-transform"
	>
		<div
			class="flex mx-auto shadow justify-center items-center mb-2 w-24 h-12 rounded-b bg-gradient-to-tr from-primary-500 to-primary-700 lg:h-12"
		>
			<span class="text-white w-6 h-6 dark:text-primary-300 material-symbols-outlined">
				{icon}
			</span>
		</div>
		<h3 class="mb-2 text-center text-xl font-semibold dark:text-white">
			{title}
		</h3>
	</div>
	<p
		class="text-gray-700 overflow-hidden dark:text-gray-400 delay-200 h-full lg:opacity-0 group-hover:opacity-100 z-0 transition-all"
	>
		{@html description}
	</p>
</div>
