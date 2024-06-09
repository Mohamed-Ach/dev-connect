<script lang="ts">
	// ** Import Icons
	import IconCalendar from '@tabler/icons-svelte/IconCalendar.svelte';
	import IconFilter from '@tabler/icons-svelte/IconFilter.svelte';

	export let title;
</script>

<div class="flex justify-between flex-wrap items-center mb-6">
	<h4
		class="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4"
	>
		{title}
	</h4>
	<div class="flex sm:space-x-4 space-x-2 sm:justify-end items-center rtl:space-x-reverse">
		<div
			class="date-btn inline-flex btn btn-md whitespace-nowrap space-x-2 rtl:space-x-reverse cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900"
		>
			<span class="text-lg">
				<IconCalendar stroke={1.8} size={18} />
			</span>
			<span>Weekly</span>
		</div>
		<div
			class="date-btn inline-flex btn btn-md whitespace-nowrap space-x-2 rtl:space-x-reverse cursor-pointer bg-white dark:bg-slate-800 dark:text-slate-300 btn-md h-min text-sm font-normal text-slate-900"
		>
			<span class="text-lg">
				<IconFilter stroke={1.8} size={18} />
			</span>
			<span>Select date</span>
		</div>
	</div>
</div>
