<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	import IconChevronRight from '@tabler/icons-svelte/IconChevronRight.svelte';
	import IconHome from '@tabler/icons-svelte/IconHome.svelte';

	// let locationName = '';

	onMount(() => {
		const location = $page;

		console.log('location', location);

		// const currentMenuItem = menuItems.find((item) => item.link === location);

		// const currentChild = menuItems.find((item) =>
		// 	item.child?.find((child) => child.childlink === location)
		// );

		// if (currentMenuItem) {
		// 	setIsHide(currentMenuItem.isHide);
		// } else if (currentChild) {
		// 	setIsHide(currentChild?.isHide || false);
		// 	setGroupTitle(currentChild?.title);
		// }
	});
	export let locationName = '';
	export let groupTitle = '';
	let isHide = false;
</script>

<div class="md:mb-6 mb-4 flex space-x-3 rtl:space-x-reverse">
	{#if !isHide}
		<ul class="breadcrumbs">
			<li class="text-primary-500">
				<a href="/dashboard" class="text-lg">
					<IconHome stroke={1.5} />
				</a>
				<span class="breadcrumbs-icon rtl:transform rtl:rotate-180">
					<IconChevronRight stroke={1.5} />
				</span>
			</li>
			{#if groupTitle}
				<li class="text-primary-500">
					<button type="button" class="capitalize">
						{groupTitle}
					</button>
					<span class="breadcrumbs-icon rtl:transform rtl:rotate-180">
						<IconChevronRight stroke={1.5} />
					</span>
				</li>
			{/if}
			<li class="capitalize text-slate-500 dark:text-slate-400">
				{locationName}
			</li>
		</ul>
	{/if}
</div>
