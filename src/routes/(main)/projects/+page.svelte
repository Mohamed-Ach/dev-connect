<script lang="ts">
	// ** Importing Libraries :
	import { onMount } from 'svelte';
	import { ToastContainer } from 'svelte-toasts';

	// ** Importing Components :
	import ProjectGrid from '$lib/components/partials/ProjectGrid.svelte';
	import ProjectList from '$lib/components/partials/ProjectList.svelte';
	import GridLoading from '$lib/components/partials/GridLoading.svelte';
	import ListLoading from '$lib/components/partials/ListLoading.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	// ** Importing Icons :
	import IconLayoutGrid from '@tabler/icons-svelte/IconLayoutGrid.svelte';
	import IconFilter from '@tabler/icons-svelte/IconFilter.svelte';
	import IconPlus from '@tabler/icons-svelte/IconPlus.svelte';
	import IconList from '@tabler/icons-svelte/IconList.svelte';

	let width = 0;
	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	let filler = 'grid';
	let isLoaded = false;
	let isFilter = false;

	const fetchedProjects = [
		{
			id: 1,
			name: 'Project 1',
			des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at.',
			startDate: '2021-09-01',
			endDate: '2021-09-30',
			status: 'on-going',
			progress: 25,
			assignee: [
				{ image: 'male-placeholder.png' },
				{ image: 'female-placeholder.png' },
				{ image: 'male-placeholder.png' }
			]
		},
		{
			id: 2,
			name: 'Project 2',
			des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at.',
			startDate: '2021-09-01',
			endDate: '2021-09-30',
			status: 'on-going',
			progress: 50,
			assignee: [
				{ image: 'male-placeholder.png' },
				{ image: 'female-placeholder.png' },
				{ image: 'male-placeholder.png' }
			]
		},
		{
			id: 3,
			name: 'Project 3',
			des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at.',
			startDate: '2021-09-01',
			endDate: '2021-09-30',
			status: 'on-going',
			progress: 75,
			assignee: [
				{ image: 'male-placeholder.png' },
				{ image: 'female-placeholder.png' },
				{ image: 'male-placeholder.png' }
			]
		},
		{
			id: 4,
			name: 'Project 4',
			des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum ligula at.',
			startDate: '2021-09-01',
			endDate: '2021-09-30',
			status: 'on-going',
			progress: 100,
			assignee: [
				{ image: 'male-placeholder.png' },
				{ image: 'female-placeholder.png' },
				{ image: 'male-placeholder.png' }
			]
		}
	];

	let projects = fetchedProjects;

	onMount(() => {
		isLoaded = true;
		setTimeout(() => {
			isLoaded = false;
		}, 1500);

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
		<ToastContainer />
		<div class="flex flex-wrap justify-between items-center mb-8">
			<h4
				class="font-medium lg:text-2xl text-xl capitalize text-slate-900 inline-block ltr:pr-4 rtl:pl-4"
			>
				Project
			</h4>
			<div
				class="{width < breakpoints.md
					? 'space-x-rb'
					: ''} md:flex md:space-x-4 md:justify-end items-center rtl:space-x-reverse"
			>
				<Button
					text="Grid view"
					icon={IconLayoutGrid}
					actionFunction={() => (filler = 'grid')}
					disabled={isLoaded}
					className="{filler === 'grid'
						? 'bg-slate-900 dark:bg-slate-700 text-white'
						: 'bg-white dark:bg-slate-800 dark:text-slate-300'} h-min text-sm font-normal"
				/>
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
					actionFunction={() => {
						isFilter = !isFilter;
						if (isFilter) projects = projects.filter((project) => project.progress < 100);
						else projects = fetchedProjects;
					}}
					className="{isFilter
						? 'bg-slate-900 dark:bg-slate-700 text-white'
						: 'bg-white dark:bg-slate-800 dark:text-slate-300'} h-min text-sm font-normal"
				/>
				<Button
					type="anchor"
					link="/projects/add"
					text="Add Project"
					icon={IconPlus}
					className="btn-dark dark:bg-slate-800 h-min text-sm font-normal"
				/>
			</div>
		</div>
		{#if isLoaded && filler === 'grid'}
			<GridLoading count={projects?.length} />
		{/if}

		{#if isLoaded && filler === 'list'}
			<ListLoading count={projects?.length} />
		{/if}

		{#if filler === 'grid' && !isLoaded}
			<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
				{#each projects as project}
					<ProjectGrid {project} />
				{/each}
			</div>
		{/if}

		{#if filler === 'list' && !isLoaded}
			<div>
				<ProjectList {projects} />
			</div>
		{/if}
	</div>
</div>
