<script lang="ts">
	export let title: string;
	export let value: string|number;
</script>

<div
	class="flex items-center justify-center relative max-w-sm p-4 h-28 bg-white border border-gray-200 rounded-md group shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
>
	<div
		class="bg-gradient-to-tr z-0 duration-700 from-primary-500 to-primary-700 group-hover:w-full group-hover:rounded-md transition-all absolute left-0 rounded-l-md top-0 bottom-0 w-4"
	/>
	<div class=" relative z-20">
		<h3
			class="mb-2 text-center group-hover delay-300 duration-300 group-hover:text-primary-50 transition-all text-xl font-semibold tracking-tight text-gray-800 dark:text-white"
		>
			{title}
		</h3>
		<div
			class="text-center font-bold text-primary-950 delay-300 duration-300 text-2xl transition-all group-hover:text-3xl group-hover:text-white"
		>
			{@html value}
		</div>
	</div>
</div>
