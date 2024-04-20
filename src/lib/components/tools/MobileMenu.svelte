<script lang="ts">
	// ** Import Images :
	import logoCWhite from '$lib/images/logo/logo-c-white.svg';
	import logoC from '$lib/images/logo/logo-c.svg';

	// ** Import Icons :
	import IconX from '@tabler/icons-svelte/IconX.svelte';

	export let width: number;
	export let isDark: boolean;
	let mobileMenu: boolean = false;
	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	const toggleMobileMenu = () => {
		mobileMenu = !mobileMenu;
		console.log(mobileMenu);
	};
</script>

<div
	class="className={width < breakpoints.xl && mobileMenu
		? 'left-0 visible opacity-100 z-[9999]'
		: 'left-[-300px] invisible opacity-0 z-[-999]'} fixed top-0 bg-white dark:bg-slate-800 shadow-lg h-full w-[248px]"
>
	<div
		class="logo-segment flex justify-between items-center bg-white dark:bg-slate-800 z-[9] h-[85px] px-4"
	>
		<a href="/">
			<div class="flex items-center space-x-4">
				<div class="logo-icon">
					<img src={isDark ? logoC : logoCWhite} alt="" />
				</div>
				<div>
					<h1 class="text-xl font-semibold text-slate-900 dark:text-slate-100">DashCode</h1>
				</div>
			</div>
		</a>
		<button
			type="button"
			on:click={toggleMobileMenu}
			class="cursor-pointer text-slate-900 dark:text-white text-2xl"
		>
			<IconX stroke={1.5} />
		</button>
	</div>

	<div
		class={`h-[60px] absolute top-[80px] nav-shadow z-[1] w-full transition-all duration-200 pointer-events-none`}
	></div>
	<!-- <SimpleBar class="sidebar-menu px-4 h-[calc(100%-80px)]" bind:this={scrollableNodeRef}>
		<Navmenu {menus} /> -->
	<!-- </SimpleBar> -->
</div>
