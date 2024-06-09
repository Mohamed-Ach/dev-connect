<script lang="ts">
	// ** Import Icons
	import IconCalculator from '@tabler/icons-svelte/IconCalculator.svelte';
	import IconChartPie from '@tabler/icons-svelte/IconChartPie.svelte';
	import IconClock from '@tabler/icons-svelte/IconClock.svelte';
	import IconMenu from '@tabler/icons-svelte/IconMenu.svelte';

	const statistics = [
		{
			title: 'Total Task',
			count: '64',
			bg: 'bg-info-500',
			text: 'text-info-500',
			percent: '25.67% ',
			icon: IconMenu
		},
		{
			title: 'Completed',
			count: '45',
			bg: 'bg-warning-500',
			text: 'text-warning-500',
			percent: '8.67%',
			icon: IconChartPie
		},
		{
			title: 'Hours',
			count: '190',
			bg: 'bg-primary-500',
			text: 'text-primary-500',
			percent: '1.67% ',
			icon: IconClock
		},
		{
			title: 'Spendings',
			count: '$3,564',
			bg: 'bg-success-500',
			text: 'text-success-500',
			percent: '11.67% ',
			icon: IconCalculator
		}
	];
</script>

{#each statistics as item}
	<div class="{item.bg} rounded-md p-4 bg-opacity-[0.15] dark:bg-opacity-50 text-center">
		<div
			class={`${item.text} mx-auto h-10 w-10 flex flex-col items-center justify-center rounded-full bg-white text-2xl mb-4`}
		>
			<svelte:component this={item.icon} />
		</div>
		<span class="block text-sm text-slate-600 font-medium dark:text-white mb-1">
			{item.title}
		</span>
		<span class="block mb- text-2xl text-slate-900 dark:text-white font-medium">
			{item.count}
		</span>
	</div>
{/each}
