<script lang="ts">
	// ** Import Components
	import SelectMonth from '$lib/components/partials/SelectMonth.svelte';
	import TaskList from '$lib/components/partials/TaskList.svelte';
	import GroupChart from '$lib/components/ui/GroupChart.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// ** Icons
	import IconFileInvoice from '@tabler/icons-svelte/IconFileInvoice.svelte';
	import IconActivity from '@tabler/icons-svelte/IconActivity.svelte';
	import IconBasket from '@tabler/icons-svelte/IconBasket.svelte';

	const meets = [
		{
			img: '/assets/images/svg/sk.svg',
			title: 'Meeting with client',
			date: '01 Nov 2021',
			meet: 'Zoom meeting'
		},
		{
			img: '/assets/images/svg/path.svg',
			title: 'Design meeting (team)',
			date: '01 Nov 2021',
			meet: 'Skyp meeting'
		},
		{
			img: '/assets/images/svg/dc.svg',
			title: 'Background research',
			date: '01 Nov 2021',
			meet: 'Google meeting'
		},
		{
			img: '/assets/images/svg/sk.svg',
			title: 'Meeting with client',
			date: '01 Nov 2021',
			meet: 'Zoom meeting'
		}
	];

	const files = [
		{
			img: '/assets/images/icon/file-1.svg',
			title: 'Dashboard.fig',
			date: '06 June 2021 / 155MB'
		},
		{
			img: '/assets/images/icon/pdf-1.svg',
			title: 'Ecommerce.pdf',
			date: '06 June 2021 / 155MB'
		},
		{
			img: '/assets/images/icon/zip-1.svg',
			title: 'Job portal_app.zip',
			date: '06 June 2021 / 155MB'
		},
		{
			img: '/assets/images/icon/pdf-2.svg',
			title: 'Ecommerce.pdf',
			date: '06 June 2021 / 155MB'
		},
		{
			img: '/assets/images/icon/scr-1.svg',
			title: 'Screenshot.jpg',
			date: '06 June 2021 / 155MB'
		}
	];

	const activities = [
		{
			img: '/assets/images/icon/file-1.svg',
			title: 'Push Updates',
			date: '06 June 2024'
		},
		{
			img: '/assets/images/icon/pdf-1.svg',
			title: 'Re-schedules tasks',
			date: '06 June 2021 / 155MB'
		},
		{
			img: '/assets/images/icon/zip-1.svg',
			title: 'Job portal_app.zip',
			date: '01 June 2024'
		},
		{
			img: '/assets/images/icon/pdf-2.svg',
			title: 'Prepare for presentation',
			date: '25 May 2024'
		},
		{
			img: '/assets/images/icon/scr-1.svg',
			title: 'Launch new daily runs',
			date: '20 Mai 2024'
		}
	];

	// ** Import Icons
</script>

<div class="space-y-5">
	<div class="grid grid-cols-12 gap-5">
		<Card className="xl:col-span-3 col-span-12 lg:col-span-5 h-full bg-white">
			<div class="grid md:grid-cols-2 grid-cols-1 gap-4">
				<GroupChart />
			</div>
		</Card>
		<Card
			cardTitle="About project"
			className="xl:col-span-5 col-span-12 lg:col-span-7 h-full bg-white"
		>
			<div>
				<div class="text-base font-medium text-slate-800 dark:text-slate-100 mb-3">
					Background information
				</div>
				<p class="text-sm text-slate-600 dark:text-slate-300">
					The Optimistic Website Company - Amet minim mollit non deserunt ullamco est sit aliqua
					dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercita -tion veniam
					consequat sunt nostrud amet.
				</p>
				<br />
				<p class="text-sm text-slate-600 dark:text-slate-300">
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.The Optimistic
					Website Company - Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint. Velit officia consequat duis enim velit mollit. Exercita -tion veniam consequat sunt
					nostrud amet.
				</p>
				<div class="flex flex-wrap mt-8">
					<div class="xl:mr-8 mr-4 mb-3 space-y-1">
						<div class="font-semibold text-slate-500 dark:text-slate-400">Existing website</div>
						<div
							class="flex items-center space-x-2 text-xs font-normal text-primary-600 dark:text-slate-300 rtl:space-x-reverse"
						>
							<a href="www.example.com">www.example.com</a>
						</div>
					</div>
					<div class="xl:mr-8 mr-4 mb-3 space-y-1">
						<div class="font-semibold text-slate-500 dark:text-slate-400">Project brief</div>
						<div
							class="flex items-center space-x-2 text-xs font-normal text-primary-600 dark:text-slate-300 rtl:space-x-reverse"
						>
							<a href="www.example.com">www.example.com</a>
						</div>
					</div>
				</div>
				<div
					class="bg-slate-100 dark:bg-slate-700 rounded px-4 pt-4 pb-1 flex flex-wrap justify-between mt-6"
				>
					<div class="mr-3 mb-3 space-y-2">
						<div class="text-xs font-medium text-slate-600 dark:text-slate-300">Project owner</div>
						<div class="text-xs text-slate-600 dark:text-slate-300">John Doe</div>
					</div>
					<div class="mr-3 mb-3 space-y-2">
						<div class="text-xs font-medium text-slate-600 dark:text-slate-300">Budget</div>
						<div class="text-xs text-slate-600 dark:text-slate-300">$75,800</div>
					</div>
					<div class="mr-3 mb-3 space-y-2">
						<div class="text-xs font-medium text-slate-600 dark:text-slate-300">Start date</div>
						<div class="text-xs text-slate-600 dark:text-slate-300">01/11/2021</div>
					</div>
					<div class="mr-3 mb-3 space-y-2">
						<div class="text-xs font-medium text-slate-600 dark:text-slate-300">Deadline</div>
						<div class="text-xs text-warning-500">01/11/2021</div>
					</div>
				</div>
			</div>
		</Card>
		<Card cardTitle="Notes" className="xl:col-span-4 col-span-12 bg-white">
			<div class="-mx-6 custom-calender mb-6">
				<!-- <CalendarView /> -->
			</div>
			<ul class="divide-y divide-slate-100 dark:divide-slate-700">
				{#each meets.slice(0, 3) as item}
					<li class="block py-[10px]">
						<div class="flex space-x-2 rtl:space-x-reverse">
							<div class="flex-1 flex space-x-2 rtl:space-x-reverse">
								<div class="flex-none">
									<div class="h-8 w-8 rounded border">
										<IconBasket size={28} stroke={2} />
									</div>
								</div>
								<div class="flex-1">
									<span class="block text-slate-600 text-sm dark:text-slate-300 mb-1 font-medium">
										{item.title}
									</span>
									<span class="flex font-normal text-xs dark:text-slate-400 text-slate-500">
										{item.meet}
									</span>
								</div>
							</div>
							<div class="flex-none">
								<span class="block text-xs text-slate-600 dark:text-slate-400">
									{item.date}
								</span>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</Card>
	</div>
	<div class="grid xl:grid-cols-3 grid-cols-1 gap-5">
		<Card cardTitle="Task list" headerSlot={SelectMonth}>
			<TaskList />
		</Card>

		<Card cardTitle="Files" headerSlot={SelectMonth}>
			<ul class="divide-y divide-slate-100 dark:divide-slate-700">
				{#each files as item}
					<li class="block py-[8px]">
						<div class="flex space-x-2 rtl:space-x-reverse">
							<div class="flex-1 flex space-x-2 rtl:space-x-reverse">
								<div class="flex-none">
									<div class="h-8 w-8 border rounded">
										<IconFileInvoice size={28} stroke={2} />
									</div>
								</div>
								<div class="flex-1">
									<span class="block text-slate-600 text-sm dark:text-slate-300">
										{item.title}
									</span>
									<span class="block font-normal text-xs text-slate-500 mt-1">
										{item.date}
									</span>
								</div>
							</div>
							<div class="flex-none">
								<button type="button" class="text-xs text-slate-900 dark:text-white">
									Download
								</button>
							</div>
						</div>
					</li>
				{/each}
			</ul>
		</Card>

		<Card cardTitle="Activity" headerSlot={SelectMonth}>
			{#each activities as item}
				<li class="block py-[8px]">
					<div class="flex space-x-2 rtl:space-x-reverse">
						<div class="flex-1 flex space-x-2 rtl:space-x-reverse">
							<div class="flex-none">
								<div class="h-8 w-8 border rounded">
									<IconActivity size={28} stroke={2} />
								</div>
							</div>
							<div class="flex-1">
								<span class="block text-slate-600 text-sm dark:text-slate-300">
									{item.title}
								</span>
								<span class="block font-normal text-xs text-slate-500 mt-1">
									{item.date}
								</span>
							</div>
						</div>
						<div class="flex-none">
							<button type="button" class="text-xs text-slate-900 dark:text-white">
								See more
							</button>
						</div>
					</div>
				</li>
			{/each}
		</Card>
	</div>
</div>
