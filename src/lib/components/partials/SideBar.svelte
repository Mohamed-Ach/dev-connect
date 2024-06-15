<script lang="ts">
	// ** Import Icons
	import IconChevronRight from '@tabler/icons-svelte/IconChevronRight.svelte';
	import IconSearch from '@tabler/icons-svelte/IconSearch.svelte';

	// ** Images :
	import post1 from '$lib/images/post/side-1.jpg';
	import post2 from '$lib/images/post/side-2.jpg';
	import post3 from '$lib/images/post/side-3.png';

	const category = [
		{
			cta: 'Frontend Developer (214)'
		},
		{
			cta: 'Backend Developer (514)'
		},
		{
			cta: 'Full Stack Developer (554)'
		},
		{
			cta: 'Data Scientist (457)'
		},
		{
			cta: 'DevOps Engineer (1254)'
		},
		{
			cta: 'Machine Learning Engineer (554)'
		},
		{
			cta: 'Cybersecurity Analyst (350)'
		},
		{
			cta: 'Database Administrator (221)'
		}
	];
	const posts = [
		{
			img: post1
		},
		{
			img: post2
		},
		{
			img: post3
		}
	];
	const tags = [
		{
			title: 'Programming',
			link: '#'
		},
		{
			title: 'Software Engineering',
			link: '#'
		},
		{
			title: 'Data Science',
			link: '#'
		},
		{
			title: 'Machine Learning',
			link: '#'
		},
		{
			title: 'Cybersecurity',
			link: '#'
		},
		{
			title: 'Database Management',
			link: '#'
		},
		{
			title: 'Network Security',
			link: '#'
		}
	];

	let searchValue: string = '';
</script>

<div class="space-y-5 divide-y divide-slate-100 dark:divide-slate-700 -mx-6">
	<div class="px-6">
		<div>
			<div class="flex items-stretch inputGroup has-append">
				<div class="flex-1">
					<div class="relative fromGroup2">
						<input
							type="text"
							class="input-group-control block w-full focus:outline-none py-2"
							placeholder="Search...."
							bind:value={searchValue}
						/>
						<div
							class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2 space-x-1 rtl:space-x-reverse"
						></div>
					</div>
				</div>
				<span class="flex-none input-group-addon right"
					><div class="input-group-text h-full append-slot">
						<button
							type="button"
							class="btn btn inline-flex justify-center btn-dark dark:bg-slate-600"
							><span class="flex items-center"
								><span class=" text-[20px]">
									<IconSearch stroke={2} size={20} />
								</span><span></span></span
							></button
						>
					</div></span
				>
			</div>
		</div>
	</div>
	<div class="pt-4 px-6">
		<h4 class="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">Latest Blogs Post</h4>
		<ul class="list-item space-y-4">
			{#each posts as item}
				<li>
					<div class="flex space-x-4 rtl:space-x-reverse">
						<div class="flex-none">
							<div class="h-20 w-20">
								<img src={item.img} alt="" class="block w-full h-full" />
							</div>
						</div>
						<div class="flex-1 flex flex-col">
							<h4 class="text-sm text-slate-600 font-regular leading-5 mb-4">
								<a href="null">Lorem ipsum dolor sit amet consectetur adipiscing</a>.
							</h4>
							<span class="text-xs text-slate-400">
								<a href="null">Oct 09, 2021</a>
							</span>
						</div>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="pt-4 px-6">
		<h4 class="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">Category</h4>
		<ul class="list-item space-y-6">
			{#each category as item, i}
				<li>
					<a
						href="null"
						class="flex space-x-1 items-start leading-[1] text-sm text-slate-500 dark:text-slate-300 hover:text-slate-900 transition duration-150 rtl:space-x-reverse"
					>
						<span class="text-sm">
							<IconChevronRight stroke={2} size={16} />
						</span>
						<span>{item.cta}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
	<div class="pt-4 px-6">
		<h4 class="text-slate-600 dark:text-slate-300 text-xl font-medium mb-4">Popular tags</h4>
		<ul class="flex flex-wrap">
			{#each tags as item}
				<li class="mr-2 mb-2">
					<a
						href={item.link}
						class="text-xs font-normal text-slate-600 bg-slate-100 dark:bg-slate-600 dark:text-slate-300 py-1 px-3 rounded-full hover:bg-slate-900 hover:text-white transition duration-150"
					>
						<span>{item.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</div>
