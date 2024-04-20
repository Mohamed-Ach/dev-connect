<script lang="ts">
	import { onMount } from 'svelte';

	// Importing Images :
	import logoCWhite from '$lib/images/logo/logo-c-white.svg';
	import logoWhite from '$lib/images/logo/logo-white.svg';
	import logoC from '$lib/images/logo/logo-c.svg';
	import logo from '$lib/images/logo/logo.svg';

	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	// Check if dark mode is enabled :
	export let isDark: boolean;
	let width: number = 1920;
	onMount(() => {
		if (isDark) document.body.classList.add('dark');
		else document.body.classList.remove('dark');
		const handleResize = () => {
			width = window.innerWidth;
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});
</script>

<div>
	<a href="/">
		{#if width >= breakpoints.xl}
			<img src={isDark ? logoWhite : logo} alt="" />
		{:else}
			<img src={isDark ? logoCWhite : logoC} alt="" />
		{/if}
	</a>
</div>
