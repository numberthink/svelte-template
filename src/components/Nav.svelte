<script>
	import { MainMenuConfig } from '../stores/config.js';
	import MobileMenu from '../components/MobileMenu.svelte';
	import { page } from '$app/stores';
	
</script>

<nav class="bg-gray-800 relative w-full z-20 h-20 border-b border-gray-500 backdrop-blur bg-opacity-60">
	<MobileMenu />
	<div
		id="navBar"
		class="flex w-full h-full
	items-center justify-between px-4 md:px-8 max-w-4xl mx-auto text-gray-200"
	>
		<ul id="navMainMenu" class="ml-[0rem] flex">
			{#each $MainMenuConfig.options as menuOption}
			{#if !menuOption?.hidden}
				<li>
					<a
						class="hover:text-gray-200 hover:bg-black relative z-10 hidden rounded-lg
                p-1 sm:px-3 sm:py-2 md:inline-block md:text-lg hover:underline"
						class:font-semibold={$page.url.pathname.slice(0,Math.max(menuOption.href.length,2)) == menuOption.href}
						href={menuOption.href}>{menuOption.name}</a
					>
				</li>
			{/if}
			{/each}
		</ul>
	</div>
</nav>