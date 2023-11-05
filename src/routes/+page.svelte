<script>
	import { page } from '$app/stores';
	// @ts-ignore
	import { formatData, timeAgo } from '$lib';
	import Card from '$lib/components/Card.svelte';
	import WhyCard from '$lib/components/WhyCard.svelte';
	import { onMount } from 'svelte';
	import StatsCard from '$lib/components/StatsCard.svelte';
	import SectionSide from '$lib/components/SectionSide.svelte';
	import SectionCenter from '$lib/components/SectionCenter.svelte';
	import CommodityCard from '$lib/components/CommodityCard.svelte';
	import Slider from '$lib/components/Slider.svelte';
	const stats = [
		{ name: 'Pendapatan', value: 1500000, dataType: 'currency' },
		{ name: 'Populasi', value: 7500000, dataType: 'integer' },
		{ name: 'Luas Lahan', value: 50000, dataType: 'area' }
	];

	export let data;

	const news = data.news.data;

	onMount(() => {});
</script>

<section class="relative bg-center bg-no-repeat bg-cover bg-blend-multiply">
	<Slider />
	<div id="hero-text" class="bg-black bg-opacity-50 absolute right-0 top-0 left-0 bottom-0">
		<div class="py-12 px-4 mx-auto max-w-screen-xl text-center lg:py-24 md:py-12 lg:px-12">
			<a
				href="https://peraturan.bpk.go.id/Details/245214/perda-prov-jambi-no-3-tahun-2023"
				target="_blank"
				class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
			>
				<span
					class="text-xs bg-gradient-to-tr from-primary-500 to-primary-700 rounded-full text-white px-4 py-1.5 mr-3"
					>insentif</span
				>
				<span class="text-sm font-medium leading-3 md:leading-normal"
					>PERDA Prov Jambi Nomor 3 Tahun 2023</span
				>
				<svg
					class="ml-2 w-5 h-5"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/></svg
				>
			</a>
			<article>
				<h1
					class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
				>
					Jambi: Destinasi Investasi yang Menjanjikan
				</h1>
				<p
					class="mb-8 text-xl font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
				>
					Menawarkan Peluang Investasi Melimpah Berkat Kekayaan Alam di Lokasi Strategis sebagai
					Pusat Transit Utama untuk Transportasi dan Logistik, dengan Dukungan Kebijakan Investasi
					yang Memudahkan Investor.
				</p>
			</article>
			<div
				class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
			>
				<a
					href={`/contact`}
					class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-600 focus:ring-4 focus:ring-primary-700 dark:focus:ring-primary-900"
				>
					<span class="material-symbols-outlined mr-2"> Call </span>
					Hubungi Kami
				</a>
				<a
					href="https://oss.go.id"
					target="_blank"
					class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center rounded-lg border border-white text-white hover:bg-white hover:bg-opacity-30 focus:ring-2 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
				>
					Ajukan Izin
					<span class="material-symbols-outlined mr-2"> arrow_forward </span>
				</a>
			</div>
		</div>
	</div>
</section>
<SectionSide
	title="Selamat Datang Jambi Invesment Center"
	description="Invest Jambi adalah portal untuk mengeksplorasi peluang investasi yang menarik di Provinsi Jambi, Indonesia. Kami menyajikan berbagai informasi terkini tentang sektor-sektor unggulan, potensi pertumbuhan, dan dukungan pemerintah daerah untuk investor. Temukan peluang bisnis yang menjanjikan di Jambi di sini!"
>
	<img
		class="rounded-lg aspect-video w-full object-cover"
		src="https://wartanews.co/wp-content/uploads/2017/03/Kantor-Gubernur-Provinsi-Jambi.jpg"
		alt="kantor gubernur jambi"
	/>
</SectionSide>
<SectionCenter
	title="Sekilas Provinsi Jambi"
	cta={{
		text: 'Lihat Infomasi Lengkap',
		href: 'https://bappeda.jambiprov.go.id/Profil/Detail/27/Jambi-Selayang-Pandang'
	}}
	backgroundColor="bg-primary-50"
>
	<div class="grid md:grid-cols-4 grid-cols-2 gap-6">
		{#each stats as s}
			<StatsCard title={s.name} value={formatData(s.value, s.dataType)} />
		{/each}
	</div>
</SectionCenter>
<SectionSide
	title="Komoditas Perkebunan Ungulan"
	description="Jambi menawarkan kesempatan luar biasa untuk investasi di sektor perkebunan. Dengan iklim yang ideal, tanah subur, dan sumber daya alam yang melimpah, Anda dapat menjadi bagian dari industri agribisnis yang berkembang dengan pesat. "
>
	<div class="grid md:grid-cols-2 gap-4">
		{#each [0, 0, 0, 0, 0] as v}
			<CommodityCard name="karet" imageUrl="images/rubber.webp">
				<div class="text-center leading-4 mb-2">
					<p class="font-semibold text-sm text-white">Production :</p>
					<p class="font-bold text-white">31,03 ribu Ton (2021)</p>
				</div>
				<div class="text-center leading-4 mb-2">
					<p class="font-semibold text-sm text-white">Luas Areal :</p>
					<p class="font-bold text-white">407,1 ribu Hektar (2021)</p>
				</div>
				<div class="text-center leading-4 mb-2">
					<p class="font-semibold text-sm text-white">Sentra Produksi :</p>
					<p class="font-bold text-white">Kabupaten Muaro Jambi, Kabupaten Sarolangun</p>
				</div>
			</CommodityCard>
		{/each}
	</div>
</SectionSide>
<SectionSide
	title="Destinasi Pariwisata Ungulan"
	description="Jambi menawarkan beragam tujuan wisata menawan yang menawarkan pengalaman unik bagi para pelancong. Dari keajaiban alam hingga landmark budaya, Anda dapat menjelajahi warisan yang kaya dan keindahan pemandangan Provinsi Jambi."
	side="right"
>
	<div class="grid md:grid-cols-2 gap-4">
		{#each [0, 0, 0, 0, 0] as v}
			<CommodityCard name="Gunung Kerinci" imageUrl="images/kerinci.webp">
				<div class="text-center leading-4 mb-2">
					<p class="font-semibold text-sm text-white">Perkiraan Pengunjung :</p>
					<p class="font-bold text-white">31,03 ribu Pengunjung/pertahun</p>
				</div>
				<div class="text-center leading-4 mb-2">
					<p class="font-semibold text-sm text-white">Locations</p>
					<p class="font-bold text-white">Kab Kerinci</p>
				</div>
			</CommodityCard>
		{/each}
	</div>
</SectionSide>
<SectionCenter
	title="Kenapa Memilih Jambi"
	description="Tiga Alasan Untuk Investasi Di jambi"
	backgroundColor="bg-primary-50"
>
	<div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0">
		<WhyCard
			title="Kekayaan Alam yang Melimpah"
			description="Jambi menawarkan peluang investasi yang menggiurkan di sektor pertanian dan pariwisata berkat sumber daya alamnya yang melimpah, termasuk kelapa sawit, karet, kelapa dalam, kayu manis, dan kopi."
			icon="forest"
		/>
		<WhyCard
			title="Lokasi Yang Strategis"
			description="Terletak di pusat Pulau Sumatera, Jambi menjadi salah satu titik transit kunci untuk transportasi dan logistik antara pulau Sumatera dan pulau-pulau lainnya di Indonesia, Didorong dengan infrastruktur yang berkembang dengan pesat."
			icon="where_to_vote"
		/>
		<WhyCard
			title="Dukungan Pemerintah"
			description="Pemerintah Provinsi Jambi berkomitmen untuk meningkatkan iklim investasi dengan menyediakan insentif, fasilitas, dan perizinan yang lebih mudah, serta dukungan dalam pengembangan proyek, menciptakan peluang berharga bagi para investor."
			icon="gavel"
		/>
	</div>
</SectionCenter>
<SectionSide
	title="Infrastruktur"
	description="Berbagai Infrastrukur Di Provinsi Jambi Yang Akan Menunjang Bisnis Anda"
>
	<div class="grid gap-6 lg:grid-cols-2">
		<CommodityCard name="Bandara Suthan Thaha" imageUrl="images/bandara_STS.jpg">
			<div class="text-center leading-4 mb-2">
				<span class="material-symbols-outlined text-white"> location_on </span>
				<p class="font-bold text-white">
					Jl. Soekarno Hatta, Kel. Eka Jaya, Kec. Jambi Selatan, Kota Jambi, Jambi, 36139
				</p>
			</div>
		</CommodityCard>
		<CommodityCard name="Bandara Muara Bungo" imageUrl="images/bandara_muara_bungo.jpg">
			<div class="text-center leading-4 mb-2">
				<span class="material-symbols-outlined text-white"> location_on </span>
				<p class="font-bold text-white">
					Kel. Sungai Buluh, Kec. Rimbo Tengah, Kab. Bungo, Jambi, 37211
				</p>
			</div>
		</CommodityCard>
		<CommodityCard name="Bandara Depati Parbo" imageUrl="images/bandara_depati_parbo.jpg">
			<div class="text-center leading-4 mb-2">
				<span class="material-symbols-outlined text-white"> location_on </span>
				<p class="font-bold text-white">
					Desa Angkasa Pura, Kel. Hiang Tinggi, Kec. Sitinjau Laut, Kab. Kerinci, Jambi, 37171
				</p>
			</div>
		</CommodityCard>
		<CommodityCard name="Pelabuhan Talang Duku" imageUrl="images/pelabuhan_talang_duku.jpeg">
			<div class="text-center leading-4 mb-2">
				<span class="material-symbols-outlined text-white"> location_on </span>
				<p class="font-bold text-white">Jl. Raya Talang Dukuh Km. 9 Ma, Sebo</p>
			</div>
		</CommodityCard>
	</div>
</SectionSide>
<SectionCenter
	title="Berita Terkini"
	description="Informasi Terkini Tentang Investasi Di Provinsi Jambi"
	cta={{ text: 'Lihat Semua Berita', href: `/news` }}
	backgroundColor="bg-primary-50"
>
	<div class="grid gap-6 lg:grid-cols-2">
		{#each news as news, v}
			{#if v == 0}
				<Card
					imageUrl={'images/kerinci.webp'}
					title={news.title}
					id={news.slug}
					category={news.category.name}
					datePosted={timeAgo(news.created_at)}
					isHorizontal={false}
					shareButton={true}
				/>
			{:else}
				<Card
					imageUrl={'images/kerinci.webp'}
					title={news.title}
					id={news.slug}
					category={news.category.name}
					datePosted={timeAgo(news.created_at)}
					isHorizontal={true}
					shareButton={true}
				/>
			{/if}
		{/each}
	</div>
</SectionCenter>
