<script>
	import { MainMenuConfig } from '../stores/config.js';
	import { Settings} from '../stores/settings.js';
	import { onMount } from 'svelte';

	let menuOpen = false;
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
</script>

<div class="absolute inset-0 w-full md:hidden h-full">
	<div id="buttonWrapper" class="relative z-10 px-4 w-full h-full flex items-center justify-start">
		<label class="hover:cursor-pointer text-xl text-gray-300" for="menuToggle">&#9776</label>
	</div>
	<input
		id="menuToggle"
		type="checkbox"
		class="sr-only"
		class:js={mounted}
		bind:checked={menuOpen}
	/>

	{#if menuOpen || !mounted}
		<button
			id="menuBlocker"
			class="menu absolute left-0 top-0
		min-h-screen w-screen bg-white backdrop-blur-md bg-opacity-0"
			class:hidden={!mounted}
			on:click={() => (menuOpen = !menuOpen)}
		/>
		<ul
			id="mainMenu"
			class="menu absolute top-20 flex w-full flex-col
rounded-md text-2xl pb-8 bg-gray-800 pr-4 sm:pr-12"
			class:hidden={!mounted}
		>
			{#each $MainMenuConfig.options as menuOption}
			{#if !menuOption?.hidden || $Settings.secret.fullSite}
				<li
					class="border-gray-200 text-gray-300 border-b
font-semibold mx-8"
				>
					<a
						class="flex w-auto py-4 hover:underline hover:font-bold"
						href={menuOption.href}
						on:click={() => (menuOpen = false)}>{menuOption.name}</a
					>
				</li>
				{/if}
			{/each}
		</ul>
	{/if}
</div>

<style>
	#menuToggle:not(.js) ~ .menu {
		display: none;
	}
	#menuToggle:not(.js):checked ~ .menu {
		display: block;
	}
</style>