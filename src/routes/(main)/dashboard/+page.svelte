<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';
	onMount(() => {
		if (isDark) document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	});
</script>

<div>
	<h4
		class="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4 mb-6"
	>
		Blank Page
	</h4>
	<div class="flex-none">
		<a href="/on-boarding" class="btn btn-dark btn-sm px-6"> Start On Boarding </a>
	</div>
</div>
