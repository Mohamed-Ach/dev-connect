<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';

	let width = 1920;
	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	const dispatch = createEventDispatcher();
	onMount(() => {
		const handleResize = () => {
			width = window.innerWidth;
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	function toggleMobileChatSidebar(arg0: boolean): any {
		throw new Error('Function not implemented.');
	}
</script>

<div class="h-full flex flex-col items-center justify-center xl:space-y-2 space-y-6">
	<img src="/assets/images/svg/blank.svg" alt="" />
	<h4 class="text-2xl text-slate-600 dark:text-slate-300 font-medium">No message yet...</h4>

	<p class="text-sm text-slate-500 lg:pt-0 pt-4">
		{#if width > breakpoints.lg}
			<span>
				{"don't"} worry, just take a deep breath & say {'Hello'}
			</span>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
		{:else}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<span
				class="btn btn-dark cursor-pointer"
				on:click={() => dispatch(toggleMobileChatSidebar(true))}
			>
				Start Conversation
			</span>
		{/if}
	</p>
</div>
