<script>
    import { SiteConfig } from '../stores/config.js';
</script>
<svelte:head>
	<title>{$SiteConfig.title}</title>
	<link rel="canonical" href={$SiteConfig.url} />
	<meta property="og:url" content={$SiteConfig.url} />
	<meta property="og:type" content="article" />
	<meta property="og:title" content={$SiteConfig.title} />
	<meta name="Description" content={$SiteConfig.description} />
	<meta property="og:description" content={$SiteConfig.description} />
	<meta property="og:image" content={$SiteConfig.defaultOGImage} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:creator" content={'@' + $SiteConfig.twitterHandle} />
	<meta name="twitter:title" content={$SiteConfig.title} />
	<meta name="twitter:description" content={$SiteConfig.description} />
	<meta name="twitter:image" content={$SiteConfig.defaultOGImage} />
</svelte:head>
<style>
    .mainText {
        color: #FFF; /* Fallback for older browsers */
        color: hsla(160, 100%, 0%, .4);
        -webkit-text-stroke: 2px hsl(240, 80%, 40%);
    }
</style>
<div class="absolute inset-0 min-h-screen flex items-start justify-center bg-black bg-opacity-100">
    <h1 class="mainText z-10 font-bold leading-[5rem] text-[5rem] sm:text-[6rem] lg:text-[8rem] text-center p-4 mt-20 sm:mt-24 md:mt-28">{$SiteConfig.title}</h1>
</div>