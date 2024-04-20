<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { goto } from '$app/navigation';

	// ** Import Components :
	import Dropdown from '../ui/Dropdown.svelte';
	import ProfileImage from '../ui/ProfileImage.svelte';

	// ** Import Icons :
	import IconUser from '@tabler/icons-svelte/IconUser.svelte';
	import IconSettings from '@tabler/icons-svelte/IconSettings.svelte';
	import IconLogout2 from '@tabler/icons-svelte/IconLogout2.svelte';

	let isOpen: boolean = false;
	const menuClick = (url: string) => {
		isOpen = false;
		goto(url);
	};
</script>

<Dropdown open={isOpen} childComponent={ProfileImage} classMenuItems="w-[180px] top-[58px]">
	<div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="hover:bg-slate-200 text-slate-600 dark:text-slate-300"
			on:click={() => menuClick('/profile')}
		>
			<div class="border-t border-slate-100 dark:border-slate-700 block cursor-pointer px-4 py-2">
				<div class="flex items-center">
					<span class="block text-xl ltr:mr-3 rtl:ml-3">
						<IconUser stroke={2} />
					</span>
					<span class="block text-sm">Profile</span>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="hover:bg-slate-200 text-slate-600 dark:text-slate-300"
			on:click={() => menuClick('/settings')}
		>
			<div class="border-t border-slate-100 dark:border-slate-700 block cursor-pointer px-4 py-2">
				<div class="flex items-center">
					<span class="block text-xl ltr:mr-3 rtl:ml-3">
						<IconSettings stroke={2} />
					</span>
					<span class="block text-sm">Settings</span>
				</div>
			</div>
		</div>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="hover:bg-slate-200 text-slate-600 dark:text-slate-300"
			on:click={() => menuClick('/settings')}
		>
			<div class="border-t border-slate-100 dark:border-slate-700 block cursor-pointer px-4 py-2">
				<div class="flex items-center">
					<span class="block text-xl ltr:mr-3 rtl:ml-3">
						<IconLogout2 stroke={2} />
					</span>
					<span class="block text-sm">Logout</span>
				</div>
			</div>
		</div>
	</div>
	<!-- {#each ProfileMenu as item}
		<div>
			{#if item.active}

				<div
					class="bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
					on:click={() => item.action()}
				>
					<div class="block cursor-pointer px-4 py-2">
						<div class="flex items-center">
							<span class="block text-xl ltr:mr-3 rtl:ml-3">
								<IconUser stroke={1.25} />
							</span>
							<span class="block text-sm">{item.label}</span>
						</div>
					</div>
				</div>
			{:else}
				<div class="text-slate-600 dark:text-slate-300" on:click={() => item.action()}>
					<div
						class="{item.hasDivider
							? 'border-t border-slate-100 dark:border-slate-700'
							: ''} block cursor-pointer px-4 py-2"
					>
						<div class="flex items-center">
							<span class="block text-xl ltr:mr-3 rtl:ml-3">
								<IconUser stroke={1.25} />
							</span>
							<span class="block text-sm">{item.label}</span>
						</div>
					</div>
				</div>
			{/if}
		</div>
	{/each} -->
</Dropdown>
