<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// importing images :
	import logo from '$lib/images/logo/logo.svg';
	import logoWhite from '$lib/images/logo/logo-white.svg';

	// importing components :
	import Social from '$lib/components/partials/Social.svelte';
	import RegForm from '$lib/components/oauth/RegForm.svelte';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';
	onMount(() => {
		if (isDark) document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	});
</script>

<div class="auth-box h-full flex flex-col justify-center">
	<div class="mobile-logo text-center mb-6 lg:hidden block">
		<a href="/">
			<img src={isDark ? logoWhite : logo} alt="" class="mx-auto" />
		</a>
	</div>
	<div class="text-center 2xl:mb-10 mb-5">
		<h4 class="font-medium">Sign up</h4>
		<div class="text-slate-500 dark:text-slate-400 text-base">
			Create an account to start using Dev Connect
		</div>
	</div>
	<RegForm />
	<div class="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
		<div
			class="absolute inline-block bg-white dark:bg-slate-800 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 dark:text-slate-400 font-normal"
		>
			Or continue with
		</div>
	</div>
	<div class="max-w-[242px] mx-auto mt-8 w-full">
		<Social />
	</div>
	<div
		class="max-w-[225px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-6 uppercase text-sm"
	>
		Already registered?
		<a href="/login" class="text-slate-900 dark:text-white font-medium hover:underline">
			Sign In
		</a>
	</div>
</div>
