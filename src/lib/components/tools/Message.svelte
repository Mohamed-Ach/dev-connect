<script lang="ts">
	// ** Import Components :
	import MessageIcon from '../ui/MessageIcon.svelte';
	import Dropdown from '../ui/Dropdown.svelte';

	// ** Import Icons :

	// ** Import Images :
	import user1 from '$lib/images/all-img/user.png';
	import user2 from '$lib/images/all-img/user2.png';
	import user3 from '$lib/images/all-img/user3.png';
	import user4 from '$lib/images/all-img/user4.png';

	const newMessage = [
		{
			title: 'Wade Warren',
			desc: 'Hi! How are you doing?.....',
			active: true,
			hasNotification: true,
			notification_count: 1,
			image: user1,
			link: '#'
		},
		{
			title: 'Savannah Nguyen',
			desc: 'Hi! How are you doing?.....',
			active: false,
			hasNotification: false,
			image: user2,
			link: '#'
		},
		{
			title: 'Ralph Edwards',
			desc: 'Hi! How are you doing?.....',
			active: false,
			hasNotification: true,
			notification_count: 8,
			image: user3,
			link: '#'
		},
		{
			title: 'Cody Fisher',
			desc: 'Hi! How are you doing?.....',
			active: true,
			hasNotification: false,
			image: user4,
			link: '#'
		}
	];
</script>

<Dropdown classMenuItems="md:w-[335px] w-min top-[58px]" childComponent={MessageIcon}>
	<div class="flex justify-between px-4 py-4 border-b border-slate-100 dark:border-slate-600">
		<div class="text-sm text-slate-800 dark:text-slate-200 font-medium leading-6">Messages</div>
		<div class="text-slate-800 dark:text-slate-200 text-xs md:text-right">
			<a href="/chat" class="underline"> View all </a>
		</div>
	</div>
	<div class="divide-y divide-slate-100 dark:divide-slate-800">
		{#each newMessage as item}
			<div>
				<div
					class="text-slate-600 dark:text-slate-300 block w-full px-4 py-2 text-sm cursor-pointer"
				>
					<div class="flex ltr:text-left rtl:text-right space-x-3 rtl:space-x-reverse">
						<div class="flex-none">
							<div class="h-8 w-8 bg-white dark:bg-slate-700 rounded-full relative">
								<span
									class={`${
										item.active ? 'bg-secondary-500' : 'bg-green-500'
									} w-[10px] h-[10px] rounded-full border border-white dark:border-slate-700  inline-block absolute right-0 top-0`}
								></span>
								<img
									src={item.image}
									alt=""
									class="block w-full h-full object-cover rounded-full border hover:border-white border-transparent"
								/>
							</div>
						</div>
						<div class="flex-1">
							<div class="text-slate-800 dark:text-slate-300 text-sm font-medium mb-1">
								{item.title}
							</div>
							<div class="text-xs hover:text-[#68768A] text-slate-600 dark:text-slate-300 mb-1">
								{item.desc}
							</div>
							<div class="text-slate-400 dark:text-slate-400 text-xs">3 min ago</div>
						</div>
						{#if item.hasNotification}
							<div class="flex-0">
								<span
									class="h-4 w-4 bg-danger-500 border border-white rounded-full text-[10px] flex items-center justify-center text-white"
								>
									{item.notification_count}
								</span>
							</div>
						{/if}
					</div>
				</div>
			</div>
		{/each}
	</div>
</Dropdown>
