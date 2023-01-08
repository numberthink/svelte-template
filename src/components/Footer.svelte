<script>
	import { FooterMenuConfig } from '../stores/config.js';
</script>
<style>
    .twoColumns {
        @apply grid-cols-2;
    }
</style>
<div
	id="footerWrapper"
	class="backdrop-blur bg-opacity-70 bg-gray-800 relative mt-12 min-w-full "
>
	<footer class="relative mx-auto flex max-w-2xl flex-col items-center justify-center">
		<hr class=" my-0 border-1 border-gray-600 mb-8 w-full" />
		<div class="grid w-full grid-cols-1 gap-4 px-4 pb-16 text-center sm:px-8"
        class:twoColumns={$FooterMenuConfig.columns.length==2}>
			{#each $FooterMenuConfig.columns as footerColumn}
				<ul class="flex flex-col space-y-4">
					{#each footerColumn.items as footerRow}
						<li>
							{#if footerRow.type == 'route'}
								<a class="text-gray-400 hover:text-gray-200 hover:underline" href={footerRow.href}
									>{footerRow.name}</a
								>
							{:else if footerRow.type == 'link'}
								<a
									class="text-gray-400 hover:text-gray-200 hover:underline"
									target="_blank"
									rel="noopener noreferrer"
									href={footerRow.href}>{footerRow.name}</a
								>
							{/if}
						</li>
					{/each}
				</ul>
			{/each}
		</div>
	</footer>
</div>