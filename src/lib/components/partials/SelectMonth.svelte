<script lang="ts">
	import Dropdown from '$lib/components/ui/Dropdown.svelte';

	const actions = [
		{
			name: 'Last 28 Days'
		},
		{
			name: 'Last Month'
		},
		{
			name: 'Last Year'
		}
	];
</script>

<Dropdown classMenuItems="w-[140px]" open={false}>
	<div>
		{#each actions as item}
			<div>
				<div
					class="hover:bg-secondary-500 dark:hover:bg-slate-600 dark:bg-opacity-60 hover:text-white text-slate-900 dark:text-slate-300 w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center"
				>
					<span>{item.name}</span>
				</div>
			</div>
		{/each}
	</div>
</Dropdown>
