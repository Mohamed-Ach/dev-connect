<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	// importing images :
	import logo from '$lib/images/logo/logo.svg';
	import logoWhite from '$lib/images/logo/logo-white.svg';

	// importing components :
	import ForgotPass from '$lib/components/oauth/ForgotPass.svelte';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';
	onMount(() => {
		if (isDark) document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	});
</script>

<div class="auth-box2 flex flex-col justify-center h-full">
	<div class="mobile-logo text-center mb-6 lg:hidden block">
		<a href="/">
			<img src={isDark ? logoWhite : logo} alt="" class="mx-auto" />
		</a>
	</div>
	<div class="text-center 2xl:mb-10 mb-5">
		<h4 class="font-medium mb-4">Forgot Your Password?</h4>
		<div class="text-slate-500 dark:text-slate-400 text-base">Reset Password with Dashcode.</div>
	</div>
	<div
		class="font-normal text-base text-slate-500 dark:text-slate-400 text-center px-2 bg-slate-100 dark:bg-slate-600 rounded py-3 mb-4 mt-10"
	>
		Enter your Email and instructions will be sent to you!
	</div>

	<ForgotPass />
	<div
		class="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 2xl:mt-12 mt-8 uppercase text-sm"
	>
		Forget It,
		<a href="/login" class="text-slate-900 dark:text-white font-medium hover:underline">
			Send me Back
		</a>
		to The Sign In
	</div>
</div>
