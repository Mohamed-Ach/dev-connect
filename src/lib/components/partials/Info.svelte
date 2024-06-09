<script lang="ts">
	import IconBrandFacebookFilled from '@tabler/icons-svelte/IconBrandFacebookFilled.svelte';
	import IconBrandGithubFilled from '@tabler/icons-svelte/IconBrandGithubFilled.svelte';
	import IconBrandXFilled from '@tabler/icons-svelte/IconBrandXFilled.svelte';

	const socials = [
		{
			name: 'facebook',
			link: '#',
			icon: IconBrandFacebookFilled
		},
		{
			name: 'twitter',
			link: '#',
			icon: IconBrandXFilled
		},
		{
			name: 'github',
			link: '#',
			icon: IconBrandGithubFilled
		}
	];
	import user1 from '$lib/images/users/denniz.jpg';

	let user = {
		avatar: user1,
		fullName: 'Denniz Ozarcan',
		role: 'Developer'
	};
</script>

<div class="h-full p-6">
	<h4 class="text-xl text-slate-900 font-medium mb-8">About</h4>
	<div class="h-[100px] w-[100px] rounded-full mx-auto mb-4">
		<img src={user.avatar} alt="" class="block w-full h-full object-cover rounded-full" />
	</div>
	<div class="text-center">
		<h5 class="text-base text-slate-600 dark:text-slate-300 font-medium mb-1">{user.fullName}</h5>
		<h6 class="text-xs text-slate-600 dark:text-slate-300 font-normal">{user.role}</h6>
	</div>
	<ul
		class="list-item mt-5 space-y-4 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6"
	>
		<li class="flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
			<div class="flex space-x-2 items-start rtl:space-x-reverse">
				<span>Location</span>
			</div>
			<div class="font-medium">Bangladesh</div>
		</li>
		<li class="flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
			<div class="flex space-x-2 items-start rtl:space-x-reverse">
				<span>Members since</span>
			</div>
			<div class="font-medium">April 2024</div>
		</li>
		<li class="flex justify-between text-sm text-slate-600 dark:text-slate-300 leading-[1]">
			<div class="flex space-x-2 items-start rtl:space-x-reverse">
				<span>Language</span>
			</div>
			<div class="font-medium">Hebrew</div>
		</li>
	</ul>
	<ul
		class="list-item space-y-3 border-b border-slate-100 dark:border-slate-700 pb-5 -mx-6 px-6 mt-5"
	>
		{#each socials as slink}
			<li class="text-sm text-slate-600 dark:text-slate-300 leading-[1]">
				<button class="flex space-x-2 rtl:space-x-reverse">
					<svelte:component this={slink.icon} stroke={1} size={18} />
					<span class="capitalize font-normal text-slate-600 dark:text-slate-300">{slink.name}</span
					>
				</button>
			</li>
		{/each}
	</ul>
</div>
