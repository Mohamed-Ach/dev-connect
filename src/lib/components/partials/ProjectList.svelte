<script lang="ts">
	// ** Import Components :
	import Dropdown from '$lib/components/ui/Dropdown.svelte';
	import GridComponent from '../ui/GridComponent.svelte';
	import ProgressBar from '../ui/ProgressBar.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// ** Import Icons :
	import IconChevronRight from '@tabler/icons-svelte/IconChevronRight.svelte';
	import IconChevronLeft from '@tabler/icons-svelte/IconChevronLeft.svelte';
	import IconTrash from '@tabler/icons-svelte/IconTrash.svelte';
	import IconEdit from '@tabler/icons-svelte/IconEdit.svelte';
	import IconEye from '@tabler/icons-svelte/IconEye.svelte';
	import { goto } from '$app/navigation';

	export let projects;

	let totalPages = Math.ceil(projects.length / 10);
	let canPreviousPage = totalPages > 1;
	let currentPage = 1;
	let previousPage = () => {
		currentPage = currentPage - 1;
	};
	let columns = [
		{
			Header: 'Name',
			isSorted: false,
			isSortedDesc: false
		},
		{
			Header: 'Start Date',
			isSorted: false,
			isSortedDesc: false
		},
		{
			Header: 'End Date',
			isSorted: false,
			isSortedDesc: false
		},
		{
			Header: 'Assignee',
			isSorted: false,
			isSortedDesc: false
		},
		{
			Header: 'Status',
			isSorted: false,
			isSortedDesc: false
		},
		{
			Header: 'Action',
			isSorted: false,
			isSortedDesc: false
		}
	];
</script>

<Card noBorder>
	<div class="md:flex justify-between items-center mb-6">
		<h4 class="card-title">Project List</h4>
	</div>
	<div class="overflow-x-auto -mx-6">
		<div class="inline-block min-w-full align-middle">
			<div class="overflow-hidden">
				<table class="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
					<thead class="bg-slate-100 dark:bg-slate-700">
						<tr>
							{#each columns as column}
								<th scope="col" class="table-th">
									{column.Header}
									<span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
						{#each projects as project}
							<tr class="even:bg-slate-100 dark:even:bg-slate-700">
								<td class="table-td flex items-center space-x-4 rtl:space-x-reverse"
									><div class="flex-none mr-2">
										<div
											class="h-10 w-10 rounded-full text-lg bg-blue-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"
										>
											{project.name.charAt(0) + project.name.charAt(1)}
										</div>
									</div>
									<span class="text-sm font-semibold"> {project.name}</span></td
								>
								<td class="table-td">{project.startDate}</td>
								<td class="table-td">{project.endDate}</td>
								<td class="table-td">
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
								</td>
								<td class="table-td">
									<div
										class="ltr:text-left rtl:text-left text-xs text-slate-600 dark:text-slate-300 mb-1 font-medium"
									>
										{project.progress}%
									</div>
									<ProgressBar value={project.progress} className="bg-primary-500" />
								</td>
								<td class="table-td">
									<Dropdown classMenuItems=" w-[130px]" open={false} childComponent={GridComponent}>
										<div>
											<a href="view">
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
											<a href="edit">
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
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div class="md:flex md:space-y-0 space-y-5 justify-between mt-6 items-center">
		<div class="flex items-center space-x-3 rtl:space-x-reverse">
			<span class="flex space-x-2 rtl:space-x-reverse items-center">
				<span class="text-sm font-medium text-slate-600 dark:text-slate-300">Go</span>
				<span>
					<input value={1} type="number" class="form-control py-2" style="width: 50px" />
				</span>
			</span>
			<span class="text-sm font-medium text-slate-600 dark:text-slate-300">
				<span>Page 1 of {totalPages}</span>
			</span>
		</div>
		<ul class="flex items-center space-x-3 rtl:space-x-reverse">
			<li class="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
				<button
					class:opacity-50={canPreviousPage}
					class:cursor-not-allowed={!canPreviousPage}
					on:click={previousPage}
					disabled={!canPreviousPage}
				>
					<IconChevronLeft stroke={1.8} />
				</button>
			</li>

			{#each Array.from({ length: totalPages }, (_, pageIdx) => {
				const page = pageIdx * 10;
				return page;
			}) as pageIdx}
				<li>
					<button
						aria-current="page"
						class="{pageIdx === currentPage
							? 'bg-slate-900 dark:bg-slate-600 dark:text-slate-200 text-white font-medium'
							: 'bg-slate-100 dark:text-slate-400 text-slate-900 font-normal'} 
                                text-sm
                                rounded
                                leading-[16px]
                                flex
                                h-6
                                w-6
                                items-center
                                justify-center
                                transition-all
                                duration-150"
						on:click={() => goto('/' + pageIdx)}
					>
						{pageIdx + 1}
					</button>
				</li>
				<li class="text-xl leading-4 text-slate-900 dark:text-white rtl:rotate-180">
					<button
						class:opacity-50={currentPage === totalPages}
						class:cursor-not-allowed={!(currentPage === totalPages)}
						on:click={() => goto('/' + currentPage + 1)}
						disabled={!(currentPage === totalPages)}
					>
						<IconChevronRight stroke={1.8} />
					</button>
				</li>
			{/each}
		</ul>
	</div>
</Card>
