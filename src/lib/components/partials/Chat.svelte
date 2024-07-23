<script lang="ts">
	// ** Fetch Messages :
	export let data;

	const { messages } = data;

	console.log(messages[0]);

	// ** Images
	import user2 from '$lib/images/users/denniz.jpg';
	import user1 from '$lib/images/users/abde.jpg';

	// ** UI Components
	import { afterUpdate, createEventDispatcher, onMount } from 'svelte';
	import ChatIcon from '$lib/components/ui/ChatIcon.svelte';
	import Dropdown from '$lib/components/ui/Dropdown.svelte';

	// ** UI Icons
	import IconMoodSmile from '@tabler/icons-svelte/IconMoodSmile.svelte';
	import IconMenu2 from '@tabler/icons-svelte/IconMenu2.svelte';
	import IconPhone from '@tabler/icons-svelte/IconPhone.svelte';
	import IconVideo from '@tabler/icons-svelte/IconVideo.svelte';
	import IconSend from '@tabler/icons-svelte/IconSend.svelte';
	import IconLink from '@tabler/icons-svelte/IconLink.svelte';
	import IconDots from '@tabler/icons-svelte/IconDots.svelte';

	let messagesContainer: HTMLDivElement | null = null;

	interface User {
		fullName: string;
		avatar: string;
		status: string;
	}
	const user: User = {
		fullName: 'Denniz Ozarcan',
		avatar: user2,
		status: 'active'
	};

	interface MessFeed {
		content: string;
		sender: string;
		img: string;
	}

	let message = '';
	let messFeed: MessFeed[] = [];
	for (const m of messages) {
		const message: MessFeed = {
			content: m.Content,
			sender: m.SenderID === 'bfc5f587-f9fa-4cec-9b7c-75931f9ea6ff' ? 'me' : 'them',
			img: 'http://localhost:5173/api/images/users/male-placeholder.png'
		};
		messFeed = [...messFeed, message];
	}

	let index = 0;
	const arr = ["Yo, What's up Bro?", 'I am good', 'I currently working on the auth feature'];

	function sendMessage() {
		if (message.trim() !== '') {
			const sentMessage: MessFeed = {
				content: message.trim(),
				sender: 'me',
				img: user1
			};
			messFeed = [...messFeed, sentMessage];
			message = '';

			setTimeout(function () {
				const receivedMessage: MessFeed = {
					content: arr[index],
					sender: 'them',
					img: user2
				};
				messFeed = [...messFeed, receivedMessage];
				message = '';

				index++;
			}, 2000);
		}
	}

	onMount(() => {
		// ** Handle Enter Key
		const textarea = document.querySelector<HTMLTextAreaElement>('textarea#message');
		if (textarea)
			textarea.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' && !e.shiftKey) {
					e.preventDefault();
					sendMessage();
				}
			});

		// ** Scroll to Bottom
		if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight;
	});

	afterUpdate(() => {
		if (messagesContainer) messagesContainer.scrollTop = messagesContainer.scrollHeight;
	});
	const chatAction = [
		{
			label: 'Remove',
			link: '#'
		},
		{
			label: 'Forward',
			link: '#'
		}
	];

	const time = () => {
		const date = new Date();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const amPm = hours >= 12 ? 'pm' : 'am';
		const hours12 = hours % 12 || 12;
		const minutesStr = minutes < 10 ? '0' + minutes : minutes;
		return hours12 + ':' + minutesStr + ' ' + amPm;
	};

	// const { activechat, openinfo, mobileChatSidebar, messFeed, user } = useSelector(
	// 	(state) => state.chat
	// );

	const dispatch = createEventDispatcher();
	const handleSendMessage = (e: any) => {
		e.preventDefault();
		if (message.trim()) {
			messFeed = [...messFeed, { content: message.trim(), sender: 'me', img: user.avatar }];
			message = '';
		}
	};

	let width = 1920;
	let breakpoints = {
		sm: 640,
		md: 768,
		lg: 1024,
		xl: 1280
	};
	onMount(() => {
		const handleResize = () => {
			width = window.innerWidth;
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	export let openInfo: boolean;
	function toggleInfo() {
		openInfo = !openInfo;
		console.log(openInfo);
		dispatch('infoToggle', { openInfo });
	}

	function toggleMobileChatSidebar(arg0: boolean): any {
		throw new Error('Function not implemented.');
	}
	function infoToggle(arg0: boolean): any {
		throw new Error('Function not implemented.');
	}
</script>

<div class="h-full">
	<header class="border-b border-slate-100 dark:border-slate-700">
		<div class="flex py-6 md:px-6 px-3 items-center">
			<div class="flex-1">
				<div class="flex space-x-3 rtl:space-x-reverse">
					{#if width <= breakpoints.lg}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<span
							on:click={() => dispatch(toggleMobileChatSidebar(true))}
							class="text-slate-900 dark:text-white cursor-pointer text-xl self-center ltr:mr-3 rtl:ml-3"
						>
							<IconMenu2 stroke={1.25} />
						</span>
					{/if}
					<div class="flex-none">
						<div class="h-10 w-10 rounded-full relative">
							<span
								class={`status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                                    ${user.status === 'active' ? 'bg-success-500' : 'bg-secondary-500'}
                                `}
							></span>
							<img src={user.avatar} alt="" class="w-full h-full object-cover rounded-full" />
						</div>
					</div>
					<div class="flex-1 text-start">
						<span
							class="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px] truncate"
						>
							{user.fullName}
						</span>
						<span class="block text-slate-500 dark:text-slate-300 text-xs font-normal">
							Active now
						</span>
					</div>
				</div>
			</div>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="flex-none flex md:space-x-3 space-x-1 items-center rtl:space-x-reverse">
				<div class="msg-action-btn">
					<IconPhone size={22} stroke={2} />
				</div>
				<div class="msg-action-btn">
					<IconVideo size={22} stroke={2} />
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<div on:click={toggleInfo} class="msg-action-btn">
					<IconDots size={22} stroke={2} />
				</div>
			</div>
		</div>
	</header>
	<div class="chat-content parent-height">
		<div
			class="msgs overflow-y-auto msg-height pt-6 space-y-6 scrollbar-webkit"
			bind:this={messagesContainer}
		>
			{#each messFeed as item}
				<div class="block md:px-6 px-4">
					{#if item.sender === 'them'}
						<div class="flex space-x-2 items-start group rtl:space-x-reverse">
							<div class="flex-none">
								<div class="h-8 w-8 rounded-full">
									<img
										src={item.img}
										alt=""
										class="block w-full h-full object-cover rounded-full"
									/>
								</div>
							</div>
							<div class="flex-1 flex space-x-4 rtl:space-x-reverse">
								<div>
									<div
										class="text-contrent p-3 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 text-slate-600 text-sm font-normal mb-1 rounded-md flex-1 whitespace-pre-wrap break-all"
									>
										{item.content}
									</div>
									<span class="font-normal text-xs text-slate-400 dark:text-slate-400">
										12:20 pm
									</span>
								</div>
								<div class="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
									<Dropdown
										open={false}
										items={chatAction}
										classMenuItems="w-[100px] top-0"
										childComponent={ChatIcon}
									/>
								</div>
							</div>
						</div>
					{/if}
					{#if item.sender === 'me'}
						<div class="flex space-x-2 items-start justify-end group w-full rtl:space-x-reverse">
							<div class="no flex space-x-4 rtl:space-x-reverse">
								<div class="opacity-0 invisible group-hover:opacity-100 group-hover:visible">
									<Dropdown
										open={false}
										items={chatAction}
										classMenuItems="w-[100px] left-0 top-0"
										childComponent={ChatIcon}
									/>
								</div>
								<div class="whitespace-pre-wrap break-all">
									<div
										class="text-contrent p-3 bg-slate-300 dark:bg-slate-900 dark:text-slate-300 text-slate-800 text-sm font-normal rounded-md flex-1 mb-1"
									>
										{item.content}
									</div>
									<span class="font-normal text-xs text-slate-400">
										{time()}
									</span>
								</div>
							</div>
							<div class="flex-none">
								<div class="h-8 w-8 rounded-full">
									<img
										src={item.img}
										alt=""
										class="block w-full h-full object-cover rounded-full"
									/>
								</div>
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
	<footer
		class="md:px-6 px-4 sm:flex md:space-x-4 sm:space-x-2 rtl:space-x-reverse border-t md:pt-6 pt-4 border-slate-100 dark:border-slate-700"
	>
		<div class="flex-none sm:flex hidden md:space-x-3 space-x-1 rtl:space-x-reverse">
			<div
				class="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full"
			>
				<IconLink stroke={1.5} />
			</div>
			<div
				class="h-8 w-8 cursor-pointer bg-slate-100 dark:bg-slate-900 dark:text-slate-400 flex flex-col justify-center items-center text-xl rounded-full"
			>
				<IconMoodSmile stroke={1.5} />
			</div>
		</div>
		<form class="flex-1 relative flex space-x-3 rtl:space-x-reverse" on:submit={handleSendMessage}>
			<div class="flex-1">
				<textarea
					bind:value={message}
					id="message"
					placeholder="Type your message..."
					class="focus:ring-0 focus:outline-0 block w-full bg-transparent dark:text-white resize-none"
				/>
			</div>
			<div class="flex-none md:pr-0 pr-3">
				<button
					class="h-8 w-8 bg-slate-900 text-white flex flex-col justify-center items-center text-lg rounded-full"
					on:click={sendMessage}
				>
					<IconSend size={18} stroke={2} />
				</button>
			</div>
		</form>
	</footer>
</div>
