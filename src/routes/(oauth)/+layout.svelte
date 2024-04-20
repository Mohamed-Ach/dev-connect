<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const currentYear: number = new Date().getFullYear();

	// importing images :
	import logo from '$lib/images/logo/logo.svg';
	import logoWhite from '$lib/images/logo/logo-white.svg';
	import ils1 from '$lib/images/auth/ils1.svg';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';

	onMount(() => {
		if (isDark) document.body.classList.add('dark');
		else document.body.classList.remove('dark');
	});
</script>

<div dir="ltr" class="app-warp {isDark ? 'dark' : 'light'} skin--default">
	<div class="loginwrapper">
		<div class="lg-inner-column">
			<div class="left-column relative z-[1]">
				<div class="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
					<a href="/">
						<img src={isDark ? logoWhite : logo} alt="" class="mb-10" />
					</a>
					<h4>
						Unlock your Project’s
						<span class="text-slate-800 dark:text-slate-400 font-bold"> performance </span>
					</h4>
				</div>

				<div class="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
					<img src={ils1} alt="" class="h-full w-full object-contain" />
				</div>
			</div>
			<div class="right-column relative">
				<div class="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
					<slot />
					<div class="auth-footer text-center">
						&copy; Copyright {currentYear}, Dev Connect All Rights Reserved.
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
