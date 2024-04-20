<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	// ** Import Components :
	import MobileMenu from '$lib/components/tools/MobileMenu.svelte';
	import Footer from '$lib/components/partials/Footer.svelte';
	import Header from '$lib/components/partials/Header.svelte';

	// import { onMount } from 'svelte';
	// import { useRouter } from 'svelte-routing';
	// import { ToastContainer } from 'react-toastify';

	/*
	import Footer from '@/components/partials/header.svelte';
	import Sidebar from '@/components/partials/sidebar.svelte';
	import Settings from '@/components/partials/settings.svelte';
	*/

	// import useWidth from '@/hooks/useWidth.js';
	// import useSidebar from '@/hooks/useSidebar.js';
	// import useContentWidth from '@/hooks/useContentWidth.js';
	// import useMenulayout from '@/hooks/useMenulayout.js';
	// import useMenuHidden from '@/hooks/useMenuHidden.js';
	// import Footer from '@/components/partials/footer.svelte';
	// import useMobileMenu from '@/hooks/useMobileMenu.js';
	// import useMonoChrome from '@/hooks/useMonoChrome.js';

	/*
	import MobileMenu from '@/components/partials/sidebar/MobileMenu.svelte';
	import MobileFooter from '@/components/partials/footer/MobileFooter.svelte';
	import Breadcrumbs from '@/components/ui/Breadcrumbs.svelte';
	import Loading from '@/components/Loading.svelte';
	*/

	// import { useSelector } from 'react-redux';
	// import useRtl from '@/hooks/useRtl.js';
	// import useDarkMode from '@/hooks/useDarkMode.js';
	// import useSkin from '@/hooks/useSkin.js';
	// import useNavbarType from '@/hooks/useNavbarType.js';
	// import { motion, AnimatePresence } from 'framer-motion';

	// export let children;

	// const router = useRouter();
	// const { isAuth } = useSelector((state) => state.auth);

	// onMount(() => {
	// 	if (!isAuth) {
	// 		router.push('/');
	// 	}
	// });

	// const { width, breakpoints } = useWidth();
	// const [collapsed] = useSidebar();
	// const [isRtl] = useRtl();
	// const [isDark] = useDarkMode();
	// const [skin] = useSkin();
	// const [navbarType] = useNavbarType();
	// const [isMonoChrome] = useMonoChrome();
	// const [contentWidth] = useContentWidth();
	// const [menuType] = useMenulayout();
	// const [menuHidden] = useMenuHidden();
	// const [mobileMenu, setMobileMenu] = useMobileMenu();

	// // header switch class
	// const switchHeaderClass = () => {
	// 	if (menuType === 'horizontal' || menuHidden) {
	// 		return 'ltr:ml-0 rtl:mr-0';
	// 	} else if (collapsed) {
	// 		return 'ltr:ml-[72px] rtl:mr-[72px]';
	// 	} else {
	// 		return 'ltr:ml-[248px] rtl:mr-[248px]';
	// 	}
	// };

	// // location
	// const location = $location.pathname;

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';
	let width = 1920;
	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	function handleThemeChange(event: CustomEvent<{ isDark: boolean }>) {
		isDark = event.detail.isDark;
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
</script>

<div dir="ltr" class="app-warp {isDark ? 'dark' : 'light'} skin--default has-floating">
	<Header {isDark} on:themeChange={handleThemeChange} />
	<!-- <ToastContainer /> -->
	<!-- {#if menuType === 'vertical' && width > breakpoints.xl && !menuHidden}
		<Sidebar />
	{/if} -->
	<MobileMenu {width} {isDark} />
	<!--
	{#if $width < $breakpoints.xl && mobileMenu}
		<div
			class="overlay bg-slate-900/50 backdrop-filter backdrop-blur-sm opacity-100 fixed inset-0 z-[999]"
			on:click={() => setMobileMenu(false)}
		></div>
	{/if}

	<Settings />
	<div
		class={`content-wrapper transition-all duration-150 ${
			$width > 1280 ? switchHeaderClass() : ''
		}`}
	>
		<div class="page-content page-min-height">
			<div class={contentWidth === 'boxed' ? 'container mx-auto' : 'container-fluid'}>
				<motion.div
					key={location}
					initial="pageInitial"
					animate="pageAnimate"
					exit="pageExit"
					transition={{
						type: 'tween',
						ease: 'easeInOut',
						duration: 0.5
					}}
				>
					<svelte:component this={Breadcrumbs} />
					<suspense>
						<slot />
					</suspense>
				</motion.div>
			</div>
		</div>
	</div>
	{#if $width < $breakpoints.md}
		<MobileFooter />
	{/if}
	{#if $width > $breakpoints.md}
	{/if} -->
	<div class="page-content page-min-height">
		<div class="container-fluid">
			<slot />
		</div>
	</div>
	<Footer />
</div>
