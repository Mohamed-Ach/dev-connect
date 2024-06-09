<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let contact;
	const { fullName, avatar, status, lastmessage, unredmessage } = contact;

	const dispatch = createEventDispatcher();

	function openChat(arg0: any) {
		throw new Error('Function not implemented.');
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="block w-full py-5 focus:ring-0 outline-none cursor-pointer group transition-all duration-150 hover:bg-slate-100 dark:hover:bg-slate-600 dark:hover:bg-opacity-70"
>
	<!-- on:click={() => {
		dispatch(
			openChat({
				contact,
				activechat: true
			})
		);
	}} -->
	<div class="flex space-x-3 px-6 rtl:space-x-reverse">
		<div class="flex-none">
			<div class="h-10 w-10 rounded-full relative">
				<span
					class={`status ring-1 ring-white inline-block h-[10px] w-[10px] rounded-full absolute -right-0 top-0
                        ${status === 'active' ? 'bg-success-500' : 'bg-secondary-500'}`}
				></span>
				<img src={avatar} alt="" class="block w-full h-full object-cover rounded-full" />
			</div>
		</div>
		<div class="flex-1 text-start flex">
			<div class="flex-1">
				<span class="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]">
					{fullName}
				</span>
				<span class="block text-slate-600 dark:text-slate-300 text-xs font-normal">
					{lastmessage.slice(0, 14) + '...'}
				</span>
			</div>
			<div class="flex-none ltr:text-right rtl:text-end">
				<span class="block text-xs text-slate-400 dark:text-slate-400 font-normal"> 12:20 pm </span>
				{#if unredmessage > 0}
					<span
						class="inline-flex flex-col items-center justify-center text-[10px] font-medium w-4 h-4 bg-[#FFC155] text-white rounded-full"
					>
						{unredmessage}
					</span>
				{/if}
			</div>
		</div>
	</div>
</div>
