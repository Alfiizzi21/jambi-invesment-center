<script>
	export let name = 'name';
	export let imageUrl = '/images/kerinci.webp';
</script>

<div class="group aspect-video overflow-hidden relative rounded-md">
	<img class="w-full object-cover aspect-video" src={imageUrl} alt="" />
	<div
		class="bg-primary-700 bg-opacity-80 flex justify-center items-center absolute h-10 right-0 left-0 bottom-0"
	>
		<h3 class="text-xl font-bold capitalize text-white">{name}</h3>
	</div>
	<div
		class="opacity-0 bg-opacity-80 bg-primary-700 group-hover:opacity-100 transition-all duration-700 p-4 absolute top-0 right-0 left-0 bottom-0"
	>
		<slot />
	</div>
</div>
