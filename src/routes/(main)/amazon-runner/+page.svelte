<script lang="ts">
	// ** Importing Libraries :
	import type { ActionData } from './$types.js';
	import { onMount } from 'svelte';
	export let form: ActionData;
	export let data;

	// ** Importing Components :
	import AmazonProject from '$lib/components/partials/AmazonProject.svelte';
	import ListLoading from '$lib/components/partials/ListLoading.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	// ** Importing Icons :
	import IconFilter from '@tabler/icons-svelte/IconFilter.svelte';
	import IconList from '@tabler/icons-svelte/IconList.svelte';

	let width = 0;
	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	let filler = 'list';
	let isLoaded = false;
	let isFilter = false;

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
</script>

<div style="opacity: 1; transform: none;">
	<div class="w-full">
		<div class="flex flex-wrap justify-between items-center mb-8">
			<h4
				class="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4"
			>
				Amazon Projects
			</h4>
			<div
				class="{width < breakpoints.md
					? 'space-x-rb'
					: ''} md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse"
			>
				<Button
					text="List view"
					icon={IconList}
					actionFunction={() => (filler = 'list')}
					disabled={isLoaded}
					className="{filler === 'list'
						? 'bg-slate-900 dark:bg-slate-700 text-white'
						: 'bg-white dark:bg-slate-800 dark:text-slate-300'} h-min text-sm font-normal"
				/>
				<Button
					text="On going"
					icon={IconFilter}
					className="{isFilter
						? 'bg-slate-900 dark:bg-slate-700 text-white'
						: 'bg-white dark:bg-slate-800 dark:text-slate-300'} h-min text-sm font-normal"
				/>
			</div>
		</div>

		{#if isLoaded && filler === 'list'}
			<ListLoading count={1} />
		{/if}
		{#if filler === 'list' && !isLoaded}
			<div>
				<AmazonProject workflow={data.workflow} {form} />
			</div>
		{/if}
	</div>
</div>
