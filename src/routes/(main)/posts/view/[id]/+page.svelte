<script>
	// ** importing components
	import SideBar from '$lib/components/partials/SideBar.svelte';
	import TextInput from '$lib/components/ui/TextInput.svelte';
	import TextArea from '$lib/components/ui/TextArea.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// ** importing icons
	import IconBrandHipchat from '@tabler/icons-svelte/IconBrandHipchat.svelte';
	import IconArrowRight from '@tabler/icons-svelte/IconArrowRight.svelte';
	import IconCalendar from '@tabler/icons-svelte/IconCalendar.svelte';
	import IconShare from '@tabler/icons-svelte/IconShare.svelte';
	import IconClock from '@tabler/icons-svelte/IconClock.svelte';

	// ** importing images
	import post4 from '$lib/images/all-img/post-4.png';
	import ins from '$lib//images/svg/ins.svg';
	import tw from '$lib//images/svg/tw.svg';
	import fb from '$lib//images/svg/fb.svg';
	import ln from '$lib//images/svg/ln.svg';
	import c1 from '$lib/images/post/c1.png';
	import c2 from '$lib/images/post/c2.png';
	import c3 from '$lib/images/post/c3.png';

	const tags = [
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
		}
	];
</script>

<div>
	<div class="lg:flex flex-wrap blog-posts lg:space-x-5 space-y-5 lg:space-y-0 rtl:space-x-reverse">
		<div class="flex-none">
			<div class="lg:max-w-[360px]">
				<Card>
					<SideBar />
				</Card>
			</div>
		</div>
		<div class="flex-1">
			<div class="grid grid-cols-1 gap-5">
				<Card>
					<div class=" h-[248px] w-full mb-6">
						<img src={post4} alt="" class=" w-full h-full object-cover" />
					</div>
					<div class="flex justify-between mb-4">
						<a href="null">
							<span
								class="inline-flex leading-5 text-slate-500 dark:text-slate-500 text-sm font-normal"
							>
								<IconCalendar stroke={2} size={16} />
								23/05/2024
							</span>
						</a>
						<div class="flex space-x-4 rtl:space-x-reverse">
							<a href="null">
								<span
									class="inline-flex leading-5 text-slate-500 dark:text-slate-500 text-sm font-normal"
								>
									<IconBrandHipchat stroke={2} size={16} />
									3
								</span>
							</a>
							<a href="null">
								<span
									class="inline-flex leading-5 text-slate-500 dark:text-slate-500 text-sm font-normal"
								>
									<IconShare stroke={2} size={16} />
									4
								</span>
							</a>
						</div>
					</div>
					<h5 class="card-title text-slate-900">
						<a href="null"
							>Exploring the Power of Elixir: A Modern Functional Programming Language</a
						>
					</h5>
					<div
						class="card-text dark:text-slate-300 mt-4 space-y-4 leading-5 text-slate-600 text-sm border-b border-slate-100 dark:border-slate-700 pb-6"
					>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip.Lorem ipsum dolor sit amet, consectetur
							adipiscing eli.
						</p>
						<p class="font-medium text-base">
							Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
							mollit anim id est laborum!
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehende rit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ulla mco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
							dolor in reprehende rit in voluptate velit esse cillum dolore eu fugiat nulla
							pariatur.
						</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididun ut labore et dolore magna aliqua. Ut enim ad minim veniam.
						</p>
					</div>
					<div class="mt-6">
						<ul class="flex items-center space-x-3 rtl:space-x-reverse">
							<li class="dark:text-slate-300">share:</li>
							<li>
								<a href="null">
									<img src={tw} alt="tw" />
								</a>
							</li>
							<li>
								<a href="null">
									<img src={fb} alt="fb" />
								</a>
							</li>
							<li>
								<a href="null">
									<img src={ln} alt="ln" />
								</a>
							</li>
							<li>
								<a href="null">
									<img src={ins} alt="ins" />
								</a>
							</li>
						</ul>
						<ul
							class="lg:flex items-center lg:space-x-3 lg:rtl:space-x-reverse mt-4 border-b border-slate-100 dark:border-slate-700 pb-6"
						>
							<li class="dark:text-slate-300">Popular tags:</li>
							{#each tags as item}
								<li>
									<a
										href="null"
										class="text-xs font-normal text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-600 py-1 px-3 rounded-full hover:bg-slate-900 hover:text-white transition duration-150"
									>
										<span>{item.title}</span>
									</a>
								</li>
							{/each}
						</ul>
						<ul class="comments mt-6 space-y-4">
							<li class="block">
								<div class="flex">
									<div class="flex-none">
										<div class="h-[56px] w-[56px] rounded-full ltr:mr-6 rtl:ml-6">
											<img
												src={c1}
												alt=""
												class="w-full block h-full object-contain rounded-full"
											/>
										</div>
									</div>
									<div class="flex-1">
										<div class="flex flex-wrap justify-between mb-2">
											<span class="text-slate-600 text-base dark:text-slate-300 font-normal">
												Marvin McKinney
											</span>

											<span
												class="text-sm text-slate-500 dark:text-slate-500 flex space-x-1 rtl:space-x-reverse items-center"
											>
												<IconClock size={16} stroke={2} />
												<span>Jun 09, 2024</span>
											</span>
										</div>
										<p class="text-sm text-slate-500 dark:text-slate-400">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
											incididun ut lab ore et dolore magna aliqua.
										</p>
										<div class="mt-2">
											<a
												href="null"
												class="flex space-x-2 items-center dark:text-slate-500 text-xs font-medium rtl:space-x-reverse"
											>
												<span>Reply</span>
												<IconArrowRight size={16} stroke={2} />
											</a>
										</div>
									</div>
								</div>
								<ul class="comments mt-4 pl-8">
									<li class="block">
										<div class="flex">
											<div class="flex-none">
												<div class="h-[56px] w-[56px] rounded-full ltr:mr-6 rtl:ml-6">
													<img
														src={c2}
														alt=""
														class="w-full block h-full object-contain rounded-full"
													/>
												</div>
											</div>
											<div class="flex-1">
												<div class="flex flex-wrap justify-between mb-2">
													<span class="text-slate-600 text-base dark:text-slate-300 font-normal">
														Marvin McKinney
													</span>

													<span
														class="text-sm text-slate-500 dark:text-slate-500 flex space-x-1 items-center rtl:space-x-reverse"
													>
														<IconClock size={16} stroke={2} />

														<span>Oct 09, 2021</span>
													</span>
												</div>
												<p class="text-sm text-slate-500 dark:text-slate-400">
													Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
													tempor incididun ut lab ore et dolore magna aliqua.
												</p>
												<div class="mt-2">
													<a
														href="null"
														class="flex space-x-2 items-center dark:text-slate-500 text-xs font-medium rtl:space-x-reverse"
													>
														<span>Reply</span>
														<IconArrowRight size={16} stroke={2} />
													</a>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</li>
							<li class="block">
								<div class="flex">
									<div class="flex-none">
										<div class="h-[56px] w-[56px] rounded-full ltr:mr-6 rtl:ml-6">
											<img
												src={c3}
												alt=""
												class="w-full block h-full object-contain rounded-full"
											/>
										</div>
									</div>
									<div class="flex-1">
										<div class="flex flex-wrap justify-between mb-2">
											<span class="text-slate-600 text-base dark:text-slate-300 font-normal">
												Marvin McKinney
											</span>

											<span
												class="text-sm text-slate-500 dark:text-slate-500 flex space-x-1 items-center rtl:space-x-reverse"
											>
												<IconClock size={16} stroke={2} />

												<span>Oct 09, 2021</span>
											</span>
										</div>
										<p class="text-sm text-slate-500 dark:text-slate-400">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
											incididun ut lab ore et dolore magna aliqua.
										</p>
										<div class="mt-2">
											<a
												href="null"
												class="flex space-x-2 items-center dark:text-slate-500 text-xs font-medium rtl:space-x-reverse"
											>
												<span>Reply</span>
												<IconArrowRight size={16} stroke={2} />
											</a>
										</div>
									</div>
								</div>
							</li>
						</ul>
						<div class="post-comments bg-slate-100 dark:bg-slate-900 p-6 rounded-md mt-6">
							<h4 class="text-lg font-medium text-slate-500 dark:text-slate-100 mb-4">
								Leave a comment
							</h4>
							<form action="#">
								<div class="grid lg:grid-cols-2 grid-cols-1 gap-3">
									<div class="lg:col-span-2">
										<TextArea
											label="Comment"
											placeholder="writte your comment"
											id="comment"
											name="comment"
										/>
									</div>
								</div>
								<div class="text-right">
									<Button text="Post comment" type="submit" className=" btn-dark mt-3 " />
								</div>
							</form>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</div>
</div>
