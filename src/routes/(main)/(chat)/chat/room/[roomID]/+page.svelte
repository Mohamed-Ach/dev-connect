<script lang="ts">
	export let data;
	import { createEventDispatcher, onMount } from 'svelte';

	import IconSearch from '@tabler/icons-svelte/IconSearch.svelte';

	// ** Components
	import MyProfile from '$lib/components/partials/MyProfile.svelte';
	import Contacts from '$lib/components/partials/Contacts.svelte';
	import Blank from '$lib/components/partials/Blank.svelte';
	import Info from '$lib/components/partials/Info.svelte';
	import Chat from '$lib/components/partials/Chat.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	import user1 from '$lib/images/users/user-1.jpg';
	import user2 from '$lib/images/users/user-2.jpg';
	import user7 from '$lib/images/users/user-7.png';
	import abde from '$lib/images/users/abde.jpg';

	let width = 1920;

	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};

	const dispatch = createEventDispatcher();

	onMount(() => {
		const messageInput = document.querySelector<HTMLInputElement>('input[name="message"]');
		if (messageInput) {
			messageInput.focus();
		}
		const handleResize = () => {
			width = window.innerWidth;
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	let mobileChatSidebar: boolean = true;
	let activeChat: boolean = true;

	let openInfo: boolean = true;

	function handleOpenInfo(event: CustomEvent<{ openInfo: boolean }>) {
		openInfo = event.detail.openInfo;
		dispatch('infoToggle', { openInfo: event.detail.openInfo });
	}

	function toggleMobileChatSidebar(arg0: boolean): any {
		throw new Error('Function not implemented.');
	}

	const userInfo = {
		avatar: abde,
		fullName: 'Abderrahmane El Harrchy'
	};

	const searchContacts = [
		{
			fullName: 'John Doe',
			avatar: user1,
			status: 'active',
			lastmessage: "Hey there! I'm using WhatsApp",
			unredmessage: 'Hello'
		},
		{
			fullName: 'Jane Doe',
			avatar: user2,
			status: 'inactive',
			lastmessage: "Hey there! I'm using WhatsApp",
			unredmessage: 'Hello'
		},
		{
			fullName: 'Hacer Kaya',
			avatar: user7,
			status: 'active',
			lastmessage: "Hey there! I'm using WhatsApp",
			unredmessage: 'Hello'
		}
	];
</script>

<div class="flex lg:space-x-5 chat-height overflow-hidden relative rtl:space-x-reverse">
	<div
		class="transition-all duration-150 flex-none min-w-[260px]
			{width < breakpoints.lg
			? 'absolute h-full top-0 md:w-[260px] w-[200px] z-[999]'
			: 'flex-none min-w-[260px]'}
			{width < breakpoints.lg && mobileChatSidebar ? 'left-0 ' : '-left-full '}"
	>
		<Card bodyClass=" relative p-0 h-full overflow-hidden " className="h-full bg-white">
			<div class="border-b border-slate-100 dark:border-slate-700 pb-4">
				<MyProfile user={userInfo} />
			</div>
			<div class="border-b border-slate-100 dark:border-slate-700 py-1">
				<div class="search px-3 mx-6 rounded flex items-center space-x-3 rtl:space-x-reverse">
					<div class="flex-none text-base text-slate-900 dark:text-slate-400">
						<IconSearch stroke={1.5} />
					</div>
					<!-- on:change={(e) => dispatch(setContactSearch(e.target.value))} -->
					<input
						placeholder="Search..."
						class="w-full flex-1 block bg-transparent placeholder:font-normal placeholder:text-slate-400 py-2 focus:ring-0 focus:outline-none dark:text-slate-200 dark:placeholder:text-slate-400"
					/>
				</div>
			</div>
			<div class="contact-height">
				{#each searchContacts as contact}
					<Contacts {contact} />
				{/each}
			</div>
		</Card>
	</div>

	<!-- overlay -->
	{#if width < breakpoints.lg && mobileChatSidebar}
		<!-- svelte-ignore missing-declaration -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="overlay bg-slate-900 dark:bg-slate-900 dark:bg-opacity-60 bg-opacity-60 backdrop-filter
				backdrop-blur-sm absolute w-full flex-1 inset-0 z-[99] rounded-md"
			on:click={() => dispatch(toggleMobileChatSidebar(!mobileChatSidebar))}
		></div>
	{/if}

	<div class="flex-1">
		<div class="parent flex space-x-5 h-full rtl:space-x-reverse">
			<div class="flex-1">
				<Card bodyClass="p-0 h-full" className="h-full bg-white">
					{#if activeChat}
						<div class="divide-y divide-slate-100 dark:divide-slate-700 h-full">
							<Chat {data} {openInfo} on:infoChange={handleOpenInfo} />
						</div>
					{:else}
						<Blank />
					{/if}
				</Card>
			</div>

			{#if width > breakpoints.lg && openInfo && activeChat}
				<div class="flex-none w-[285px]">
					<Card bodyClass="p-0 h-full" className="h-full bg-white">
						<Info />
					</Card>
				</div>
			{/if}
		</div>
	</div>
</div>
