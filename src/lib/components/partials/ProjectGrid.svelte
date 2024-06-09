<script lang="ts">
	import { onMount } from 'svelte';

	// ** Import Components :
	import GridComponent from '../ui/GridComponent.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import ProgressBar from '../ui/ProgressBar.svelte';

	// ** Import Icons :
	import IconClock from '@tabler/icons-svelte/IconClock.svelte';
	import IconTrash from '@tabler/icons-svelte/IconTrash.svelte';
	import IconEdit from '@tabler/icons-svelte/IconEdit.svelte';
	import IconEye from '@tabler/icons-svelte/IconEye.svelte';

	export let project;

	let start;
	let end;
	let totalDays: number;

	onMount(() => {
		start = new Date(project.startDate);
		end = new Date(project.endDate);
		const diffTime = Math.abs(Number(end) - Number(start));
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		totalDays = diffDays;
	});
</script>

<Card>
	<header class="flex justify-between items-end">
		<div class="flex space-x-4 items-center rtl:space-x-reverse">
			<div class="flex-none">
				<div
					class="h-10 w-10 rounded-md text-lg bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"
				>
					{project.name.charAt(0) + project.name.charAt(1)}
				</div>
			</div>
			<div class="font-medium text-base leading-6">
				<div class="dark:text-slate-200 text-slate-900 max-w-[160px] truncate">
					{project.name}
				</div>
			</div>
		</div>
		<div>
			<Dropdown classMenuItems=" w-[130px]" open={false} childComponent={GridComponent}>
				<div>
					<a href="projects/view/1234">
						<div
							class="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                     w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm dark:text-slate-300 last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center
                                         capitalize rtl:space-x-reverse"
						>
							<span class="text-base">
								<IconEye stroke={1.8} size={16} />
							</span>
							<span>View</span>
						</div>
					</a>
					<a href="project/edit/1234">
						<div
							class="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                     w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm dark:text-slate-300 last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center
                                         capitalize rtl:space-x-reverse"
						>
							<span class="text-base">
								<IconEdit stroke={1.8} size={16} />
							</span>
							<span>Edit</span>
						</div>
					</a>
					<a href="delete">
						<div
							class="hover:bg-slate-900 dark:hover:bg-slate-600 dark:hover:bg-opacity-70 hover:text-white
                                     w-full border-b border-b-gray-500 border-opacity-10 px-4 py-2 text-sm dark:text-slate-300 last:mb-0 cursor-pointer first:rounded-t last:rounded-b flex space-x-2 items-center
                                         capitalize rtl:space-x-reverse"
						>
							<span class="text-base">
								<IconTrash stroke={1.8} size={16} />
							</span>
							<span>Delete</span>
						</div>
					</a>
				</div>
			</Dropdown>
		</div>
	</header>
	<div class="text-slate-600 dark:text-slate-400 text-sm pt-4 pb-8">
		{project.des}
	</div>
	<div class="flex space-x-4 rtl:space-x-reverse">
		<div>
			<span class="block date-label">Start date</span>
			<span class="block date-text">{project.startDate}</span>
		</div>
		<div>
			<span class="block date-label">End date</span>
			<span class="block date-text">{project.endDate}</span>
		</div>
	</div>
	<div
		class="ltr:text-right rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"
	>
		{project.progress}%
	</div>
	<ProgressBar value={project.progress} className="bg-primary-500" />
	<div class="grid grid-cols-2 gap-4 mt-6">
		<div>
			<div class="text-slate-400 dark:text-slate-400 text-sm font-normal mb-3">Assigned to</div>
			<div class="flex justify-start -space-x-1.5 rtl:space-x-reverse">
				{#each project.assignee.slice(0, 3) as user}
					<div class="h-6 w-6 rounded-full ring-1 ring-slate-100">
						<img
							src="http://localhost:5173/api/images/users/{user.image}"
							alt="assignee"
							class="w-full h-full rounded-full"
						/>
					</div>
				{/each}
				<div
					class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"
				>
					+2
				</div>
			</div>
		</div>
		<div class="ltr:text-right rtl:text-left">
			<span
				class="inline-flex items-center space-x-1 bg-danger-500 bg-opacity-[0.16] text-danger-500 text-xs font-normal px-2 py-1 rounded-full rtl:space-x-reverse"
			>
				<span>
					<IconClock stroke={1.5} size={12} />
				</span>
				<span>{totalDays}</span>
				<span>days left</span>
			</span>
		</div>
	</div>
</Card>
