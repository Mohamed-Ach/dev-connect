<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	// ** Import Components :
	import IconMoon from '@tabler/icons-svelte/IconMoon.svelte';
	import IconSun from '@tabler/icons-svelte/IconSun.svelte';

	export let isDark: boolean;
	export let ClassName: string = '';

	const dispatch = createEventDispatcher();

	const changeMode = () => {
		const updatedIsDark = !isDark;
		isDark = !isDark;
		dispatch('themeChange', { isDark: updatedIsDark });

		if (isDark) {
			document.body.classList.add('dark');
			document.cookie = 'theme=dark; path=/';
		} else {
			document.body.classList.remove('dark');
			document.cookie = 'theme=light; path=/';
		}
		console.log(isDark);
	};
</script>

<span class={ClassName}>
	<!-- svelte-ignore missing-declaration -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="lg:h-[32px] lg:w-[32px] lg:bg-slate-100 lg:dark:bg-slate-900 dark:text-white text-slate-900 cursor-pointer rounded-full text-[20px] flex flex-col items-center justify-center border-1 border-black-900 border-solid"
		on:click={changeMode}
	>
		{#if isDark}
			<IconSun stroke={1.5} size={20} />
		{:else}
			<IconMoon stroke={1.5} size={20} />
		{/if}
	</div>
</span>
