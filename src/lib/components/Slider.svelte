<script>
	import { browser } from "$app/environment";
    import Carousel from "svelte-carousel";
	import { slide } from "svelte/transition";
	const slides = [
		{ src: '/images/kerinci.webp' },
		{ src: '/images/rubber.webp' },
		{ src: '/images/palm_oil.webp' },
		{ src: '/images/coconut.webp' },
		{ src: '/images/coffee.webp' },
		{ src: '/images/arecanut.webp' },
		{ src: '/images/cinnamon.webp' }
	];
    /**
	 * @type {Carousel}
	 */
    let carousel; // for calling methods of the carousel instance
    const handleNextClick = () => {
      carousel.goToNext();
    };
  </script>
  {#if browser}
  <Carousel
      bind:this={carousel}
      autoplay
      autoplayDuration={3000}
      autoplayProgressVisible
  >
      {#each slides as slide}
            <img class="lg:aspect-[22/9] md:aspect-video aspect-[9/16] w-full object-cover" src="{slide.src}" alt="">
      {/each}
      <div slot="prev">
        <!-- -->
      </div>
      <div slot="next">
        <!-- -->
      </div>
        <div slot="dots">
        <!-- -->
      </div>
  </Carousel>    
  {/if}

  