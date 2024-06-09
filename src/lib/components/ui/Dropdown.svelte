<script lang="ts">
	import { createEventDispatcher, onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	import IconUser from '@tabler/icons-svelte/IconUser.svelte';

	export let wrapperClass = 'inline-block';
	export let labelClass = 'label-class-custom';
	export let classMenuItems = 'mt-2 w-[220px]';
	export let childComponent: any = null;

	export let items: any = [
		{
			label: 'Action',
			link: '#',
			icon: true,
			active: true,
			hasDivider: true
		},
		{
			label: 'Another action',
			link: '#',
			icon: true,
			active: false,
			hasDivider: false
		},
		{
			label: 'Something else here',
			link: '#',
			icon: true,
			active: false,
			hasDivider: false
		}
	];
	export let classItem = 'px-4 py-2';
	export let className = '';

	const dispatch = createEventDispatcher();

	function handleClick(item: {
		label: string;
		link: string;
		icon: boolean;
		active: boolean;
		hasDivider: boolean;
	}) {
		dispatch('click', item);
	}

	export let open: boolean;

	const handleClickOutside = (event: MouseEvent) => {
		const target = event.target as HTMLElement;
		const relativeAncestor = target.closest('.relative');

		if (!relativeAncestor) {
			open = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
	});

	const hasChild = !!$$slots.default;
</script>

<div class={`relative ${wrapperClass}`}>
	<div class={`block w-full ${className}`}>
		<button
			class="block w-full"
			on:click={() => {
				open = !open;
			}}
		>
			{#if childComponent}
				<div class={labelClass}>
					<svelte:component this={childComponent} />
				</div>
			{/if}
		</button>
		<div
			in:fade
			out:fade
			class="absolute ltr:right-0 rtl:left-0 origin-top-right border border-slate-100
                rounded bg-white dark:bg-slate-800 dark:border-slate-700 shadow-dropdown z-[9999]
                {classMenuItems} {open ? '' : 'hidden'}"
		>
			<div>
				{#if hasChild}
					<slot />
				{:else}
					{#each items as item}
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div>
							<!-- svelte-ignore missing-declaration -->
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<div
								class={`${
									item.active
										? 'hover:bg-slate-400 bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50'
										: 'text-slate-600 dark:text-slate-300'
								} block     ${
									item.hasDivider ? 'border-t border-slate-100 dark:border-slate-700' : ''
								}`}
								on:click={() => handleClick(item)}
							>
								{#if item.link}
									<a href={item.link} class={`block ${classItem}`}>
										{#if item.icon}
											<div class="flex items-center">
												<span class="block text-xl ltr:mr-3 rtl:ml-3">
													<IconUser stroke={1.25} />
												</span>
												<span class="block text-sm">{item.label}</span>
											</div>
										{:else}
											<span class="block text-sm">{item.label}</span>
										{/if}
									</a>
								{:else}
									<div class={`block cursor-pointer ${classItem}`}>
										{#if item.icon}
											<div class="flex items-center">
												<span class="block text-xl ltr:mr-3 rtl:ml-3">
													<IconUser stroke={1.25} />
												</span>
												<span class="block text-sm">{item.label}</span>
											</div>
										{:else}
											<span class="block text-sm">{item.label}</span>
										{/if}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
</div>
