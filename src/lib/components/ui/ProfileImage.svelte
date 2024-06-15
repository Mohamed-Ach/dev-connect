<script lang="ts">
	import IconChevronDown from '@tabler/icons-svelte/IconChevronDown.svelte';
	import { page } from '$app/stores';

	export let propValue;
</script>

<div class="flex items-center">
	<div class="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
		<div class="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
			{#if propValue.user && propValue.user.avatar}
				<img
					src={$page.url.origin + '/api/images/users/' + propValue.user.avatar}
					alt="Avatar"
					class="block w-full h-full object-cover rounded-full"
				/>
			{:else if propValue.user && propValue.user.sex === 'M'}
				<img
					src={$page.url.origin + '/api/images/users/male-placeholder.png'}
					alt="Avatar"
					class="block w-full h-full object-cover rounded-full"
				/>
			{:else}
				<img
					src={$page.url.origin + '/api/images/users/female-placeholder.png'}
					alt="Avatar"
					class="block w-full h-full object-cover rounded-full"
				/>
			{/if}
		</div>
	</div>
	<div
		class="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap"
	>
		<span class="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
			{#if propValue.user}
				{propValue.user.firstName + ' '} {propValue.user.lastName}
			{/if}
		</span>
		<span class="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
			<IconChevronDown stroke={1.25} />
		</span>
	</div>
</div>
