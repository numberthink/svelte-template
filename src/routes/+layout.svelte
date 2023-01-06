<script>
	import '../style.css';
    import Nav from '../components/Nav.svelte';
    import Footer from '../components/Footer.svelte';






</script>

<div id="mainContentWrapper" class="bg-black bg-opacity-100">
    <div id="topFold" class="bg-black bg-opacity-100 relative min-h-screen min-w-full z-0">
        
        <Nav />
        
		<main>
			<slot />
		</main>
        
    </div>
    
    <Footer/>
</div>