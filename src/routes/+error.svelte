<script lang="ts">
	import { page } from '$app/stores';

	import errorImage from '$lib/images/all-img/404.svg';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';
</script>

<div class={isDark ? 'dark' : ''}>
	<div
		class="overflow-hidden bg-slate-100 min-h-screen flex flex-col justify-center items-center text-center dark:bg-slate-900"
	>
		<img src={errorImage} alt="" />
		<div class="max-w-[546px] mx-auto w-full mt-12">
			<h4 class="text-slate-900 mb-4">Page not found</h4>
			<div class="dark:text-white text-base font-normal mb-10">
				The page you are looking for might have been removed had its name changed or is temporarily
				unavailable.
			</div>
		</div>
		<div class="max-w-[300px] mx-auto w-full">
			<a href="/" class="btn btn-dark dark:bg-slate-800 block text-center"> Go to homepage </a>
		</div>
	</div>
</div>
