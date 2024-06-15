<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { page } from '$app/stores';

	// Importing Components :
	import HorizontalMenu from '$lib/components/tools/HorizontalMenu.svelte';
	import SwitchDark from '$lib/components/tools/SwitchDark.svelte';
	import Message from '$lib/components/tools/Message.svelte';
	import Logo from '$lib/components/tools/Logo.svelte';

	// Importing Icons :
	import IconMenu2 from '@tabler/icons-svelte/IconMenu2.svelte';
	import Profile from '../tools/Profile.svelte';

	let menuType: string = 'horizontal';
	let mobileMenu: boolean;
	let navbarType;

	const handleOpenMobileMenu = () => {
		mobileMenu = !mobileMenu;
	};

	let width = 1920;

	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	// Check if dark mode is enabled :
	export let isDark: boolean = $page.data.theme === 'dark';
	const dispatch = createEventDispatcher();

	function handleThemeChange(event: CustomEvent<{ isDark: boolean }>) {
		isDark = event.detail.isDark;
		dispatch('themeChange', { isDark: event.detail.isDark });
	}
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

	export let data;
</script>

<header class="sticky top-0 z-[999]">
	<div
		class="app-header md:px-6 px-[15px] dark:bg-slate-800 shadow-base dark:shadow-base3
	         bg-white dark:border-b dark:border-slate-700 dark:border-opacity-60
		       {menuType === 'horizontal' && width > breakpoints.xl ? 'py-1' : 'md:py-6 py-3'}"
	>
		<div class="flex justify-between items-center h-full">
			{#if menuType === 'horizontal'}
				<div class="flex items-center space-x-4 rtl:space-x-reverse">
					<Logo {isDark} />
					{#if width <= breakpoints.xl}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div
							class="cursor-pointer text-slate-900 dark:text-white text-2xl"
							on:click={handleOpenMobileMenu}
						>
							<!-- svelte-ignore missing-declaration -->
							<IconMenu2 stroke={1.25} />
						</div>
					{/if}
				</div>
			{/if}

			{#if menuType === 'horizontal' && width >= breakpoints.xl}
				<HorizontalMenu />
				<!-- <SearchModel /> -->
			{/if}

			<div class="nav-tools flex items-center lg:space-x-6 space-x-3 rtl:space-x-reverse">
				<SwitchDark {isDark} on:themeChange={handleThemeChange} />

				{#if width >= breakpoints.md}
					<Message />
					<Profile {data} />
				{/if}

				<!-- svelte-ignore a11y-click-events-have-key-events -->
				{#if width <= breakpoints.md}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div
						class="cursor-pointer text-slate-900 dark:text-white text-2xl"
						on:click={handleOpenMobileMenu}
					>
						<!-- svelte-ignore missing-declaration -->
						<IconMenu2 stroke={1.25} />
					</div>
				{/if}
			</div>
		</div>
	</div>
</header>
