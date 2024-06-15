<script lang="ts">
	// ** Import static data
	import { languages, technologies, categories } from '$lib/store';
	import { page } from '$app/stores';

	// ** Components
	import CheckBox from '$lib/components/ui/CheckBox.svelte';

	// ** Icons
	import IconChevronRight from '@tabler/icons-svelte/IconChevronRight.svelte';
	import IconChevronDown from '@tabler/icons-svelte/IconChevronDown.svelte';
	import IconStarFilled from '@tabler/icons-svelte/IconStarFilled.svelte';
	import IconColumns3 from '@tabler/icons-svelte/IconColumns3.svelte';
	import IconRefresh from '@tabler/icons-svelte/IconRefresh.svelte';
	import IconSearch from '@tabler/icons-svelte/IconSearch.svelte';
	import IconHeart from '@tabler/icons-svelte/IconHeart.svelte';
	import IconList from '@tabler/icons-svelte/IconList.svelte';
	import IconHome from '@tabler/icons-svelte/IconHome.svelte';
	import IconEye from '@tabler/icons-svelte/IconEye.svelte';
</script>

<div style="opacity: 1; transform: none;">
	<div class="md:mb-6 mb-4 flex space-x-3 rtl:space-x-reverse">
		<ul class="breadcrumbs">
			<li class="text-primary-500">
				<a class="text-lg" href="/dashboard">
					<IconHome stroke={1.8} size={20} />
				</a><span class="breadcrumbs-icon rtl:transform rtl:rotate-180"
					><IconChevronRight stroke={1.5} size={18} /></span
				>
			</li>
			<li class="capitalize text-slate-500 dark:text-slate-400">discover</li>
		</ul>
	</div>
	<div>
		<div class="grid grid-cols-12 gap-5">
			<div
				class="card rounded-md bg-white dark:bg-slate-800 shadow-base lg:col-span-3 lg:block hidden xs h-max col-span-12"
			>
				<main class="card-body p-6">
					<div class="merged">
						<div class="flex items-stretch inputGroup has-prepend">
							<span class="flex-none input-group-addon"
								><div class="input-group-text h-full prepend-slot">
									<IconSearch stroke={1.5} size={18} />
								</div></span
							>
							<div class="flex-1">
								<div class="relative fromGroup2">
									<input
										type="text"
										class="input-group-control block w-full focus:outline-none py-2"
										placeholder="Search"
									/>
									<div
										class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2 space-x-1 rtl:space-x-reverse"
									></div>
								</div>
							</div>
						</div>
					</div>
					<div class="space-y-6 divide-y divide-slate-200 dark:divide-slate-700">
						<div class="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
							<div
								class="text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase pt-5 pb-2"
							>
								categories
							</div>
							{#each categories.slice(0, 6) as category}
								<div class="flex justify-between space-y-1">
									<CheckBox label={category} name={category} value={false} id="all" />
									<span class="text-slate-500 dark:text-slate-500 text-xs font-normal">120</span>
								</div>
							{/each}
							<button class="text-xs font-medium text-slate-900 dark:text-slate-300 pt-1"
								>View Less</button
							>
						</div>
						<div class="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
							<div
								class="text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase pt-5 pb-2"
							>
								Languages
							</div>
							{#each languages.slice(0, 6) as language}
								<div class="flex justify-between space-y-1">
									<CheckBox label={language} name={language} value={false} id="samsung" /><span
										class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span
									>
								</div>
							{/each}

							<button class="text-xs font-medium text-slate-900 dark:text-slate-300 pt-1"
								>View Less</button
							>
						</div>
						<div class="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
							<div
								class="text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase pt-5 pb-2"
							>
								Technologies
							</div>
							{#each technologies.slice(0, 6) as technology}
								<div class="flex justify-between space-y-1">
									<CheckBox label={technology} name={technology} value={false} id="samsung" /><span
										class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span
									>
								</div>
							{/each}
						</div>
						<div class="space-y-2 ltr:-ml-6 ltr:pl-6 rtl:-mr-6 rtl:pr-6">
							<div
								class="text-slate-800 dark:text-slate-200 font-semibold text-xs uppercase pt-5 pb-2"
							>
								ratings
							</div>
							<div class="flex space-y-1">
								<CheckBox label="" name="fiveStar" value={false} id="fiveStar" />
								<span class="flex text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal ml-4"
									>(9724)</span
								>
							</div>
							<div class="flex space-y-1">
								<CheckBox label="" name="fourStar" value={false} id="fourStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-center space-x-1 text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal ml-4"
									>(9724)</span
								>
							</div>
							<div class="flex space-y-1">
								<CheckBox label="" name="threeStar" value={false} id="threeStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-center space-x-1 text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal ml-4"
									>(9724)</span
								>
							</div>
							<div class="flex space-y-1">
								<CheckBox label="" name="twoStar" value={false} id="twoStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-center space-x-1 text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal ml-4"
									>(9724)</span
								>
							</div>
							<div class="flex space-y-1">
								<CheckBox label="" name="oneStar" value={false} id="oneStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-center space-x-1 text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} color={'#FFDF00'} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal ml-4"
									>(9724)</span
								>
							</div>
						</div>
					</div>
				</main>
			</div>
			<div class="lg:col-span-9 col-span-12">
				<div>
					<div class="md:flex mb-6 md:space-y-0 space-y-4">
						<div class="flex-1 flex items-center space-x-3 rtl:space-x-reverse">
							<button
								type="button"
								class=" border dark:border-slate-700 rounded h-11 w-11 inline-flex items-center justify-center transition-all duration-200 border-slate-900 text-slate-900 dark:border-slate-300/80 dark:text-slate-200"
							>
								<IconColumns3 stroke={2} size={24} />
							</button><button
								class=" border border-slate-400 dark:border-slate-700 text-slate-400 rounded h-11 w-11 inline-flex items-center justify-center transition-all duration-200"
							>
								<IconList stroke={2} size={24} />
							</button>
						</div>
						<div
							class="flex-none sm:flex items-center sm:space-x-4 sm:rtl:space-x-reverse sm:space-y-0 space-y-2"
						>
							<div class=" flex space-x-3 rtl:space-x-reverse items-center">
								<div
									class="rounded text-sm font-normal text-[#68768A] css-b62m3t-container"
									id="hh"
								>
									<div class="select__control css-hxc95c-control">
										<div class="relative">
											<select
												class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											>
												<option>Most Relevant</option>
												<option>Most Recent</option>
												<option>Most Viewed</option>
											</select>
											<div
												class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
											>
												<IconChevronDown size={20} stroke={2} />
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class=" flex space-x-3 rtl:space-x-reverse items-center">
								<div
									class="rounded text-sm font-normal text-[#68768A] css-b62m3t-container"
									id="hh"
								>
									<div class="select__control css-hxc95c-control">
										<div class="relative">
											<select
												class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
											>
												<option>Top Rated</option>
												<option>Top Commented</option>
												<option>Top Reviewed</option>
											</select>
											<div
												class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
											>
												<IconChevronDown size={20} stroke={2} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						class="grid 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 h-max"
					>
						<div class="card rounded-md bg-white dark:bg-slate-800 shadow-base group">
							<main class="card-body p-4 rounded-md">
								<a href="/projects/view/1"
									><div
										class=" bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md"
									>
										<div class="h-[146px]">
											<img
												class="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
												src={$page.url.origin + '/api/images/projects/python.png'}
												alt="Classical Black T-Shirt Classical Black T-Shirt"
											/><span
												class="badge font-normal bg-danger-600 text-white absolute ltr:left-2 rtl:right-2 top-3"
												><span class="inline-flex items-center">New</span></span
											>
											<div
												class="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
											>
												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconHeart size={18} />
												</button>

												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconEye size={18} />
												</button><button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconRefresh size={18} />
												</button>
											</div>
										</div>
									</div></a
								>
								<div>
									<div class="flex justify-between items-center">
										<p class="text-xs text-slate-900 dark:text-slate-300 uppercase font-normal">
											Python
										</p>
										<span
											class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-xs space-x-1 rtl:space-x-reverse"
											><IconStarFilled stroke={1.5} size={14} color={'orange'} /><span>4.8</span
											></span
										>
									</div>
									<h6
										class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 truncate"
									>
										<a href="/projects/view/1">Python Project in AI, License plate detection</a>
									</h6>
									<p class="text-slate-500 dark:text-slate-500 text-[11px] font-normal mt-1.5">
										Innovative solution for ai recognition.
									</p>
									<p class="pb-4">
										<span
											class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 ltr:mr-2 rtl:mr-2"
											>16-06-2024</span
										>
									</p>
									<button
										type="button"
										class="btn btn inline-flex justify-center btn-outline-dark w-full btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700"
										><span class="flex items-center"
											><span class="ltr:mr-2 rtl:ml-2 text-sm leading-none"></span><span
												>View Details</span
											></span
										></button
									>
								</div>
							</main>
						</div>
						<div class="card rounded-md bg-white dark:bg-slate-800 shadow-base group">
							<main class="card-body p-4 rounded-md">
								<a href="/projects/view/2"
									><div
										class=" bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md"
									>
										<div class="h-[146px]">
											<img
												class="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
												src={$page.url.origin + '/api/images/projects/elixir.png'}
												alt="Classical Black T-Shirt Classical Black T-Shirt"
											/><span
												class="badge font-normal bg-danger-600 text-white absolute ltr:left-2 rtl:right-2 top-3"
												><span class="inline-flex items-center">New</span></span
											>
											<div
												class="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
											>
												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconHeart size={18} />
												</button>

												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconEye size={18} />
												</button><button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconRefresh size={18} />
												</button>
											</div>
										</div>
									</div></a
								>
								<div>
									<div class="flex justify-between items-center">
										<p class="text-xs text-slate-900 dark:text-slate-300 uppercase font-normal">
											Elixir
										</p>
										<span
											class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-xs space-x-1 rtl:space-x-reverse"
											><IconStarFilled stroke={1.5} size={14} color={'orange'} /><span>2.8</span
											></span
										>
									</div>
									<h6
										class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 truncate"
									>
										<a href="/projects/view/2">Elixir Project in AI, License plate detection</a>
									</h6>
									<p class="text-slate-500 dark:text-slate-500 text-[11px] font-normal mt-1.5">
										Innovative solution for ai recognition.
									</p>
									<p class="pb-4">
										<span
											class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 ltr:mr-2 rtl:mr-2"
											>18-06-2024</span
										>
									</p>
									<button
										type="button"
										class="btn btn inline-flex justify-center btn-outline-dark w-full btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700"
										><span class="flex items-center"
											><span class="ltr:mr-2 rtl:ml-2 text-sm leading-none"></span><span
												>View Details</span
											></span
										></button
									>
								</div>
							</main>
						</div>
						<div class="card rounded-md bg-white dark:bg-slate-800 shadow-base group">
							<main class="card-body p-4 rounded-md">
								<a href="/projects/view/3"
									><div
										class=" bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md"
									>
										<div class="h-[146px]">
											<img
												class="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
												src={$page.url.origin + '/api/images/projects/typescript.png'}
												alt="Classical Black T-Shirt Classical Black T-Shirt"
											/>
											<div
												class="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
											>
												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconHeart size={18} />
												</button>

												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconEye size={18} />
												</button><button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconRefresh size={18} />
												</button>
											</div>
										</div>
									</div></a
								>
								<div>
									<div class="flex justify-between items-center">
										<p class="text-xs text-slate-900 dark:text-slate-300 uppercase font-normal">
											Typescript
										</p>
										<span
											class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-xs space-x-1 rtl:space-x-reverse"
											><IconStarFilled stroke={1.5} size={14} color={'orange'} /><span>4.8</span
											></span
										>
									</div>
									<h6
										class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 truncate"
									>
										<a href="/projects/view/3">Typescript Project for web development</a>
									</h6>
									<p class="text-slate-500 dark:text-slate-500 text-[11px] font-normal mt-1.5">
										Innovative solution web dev
									</p>
									<p class="pb-4">
										<span
											class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 ltr:mr-2 rtl:mr-2"
											>20-05-2024</span
										>
									</p>
									<button
										type="button"
										class="btn btn inline-flex justify-center btn-outline-dark w-full btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700"
										><span class="flex items-center"
											><span class="ltr:mr-2 rtl:ml-2 text-sm leading-none"></span><span
												>View Details</span
											></span
										></button
									>
								</div>
							</main>
						</div>
						<div class="card rounded-md bg-white dark:bg-slate-800 shadow-base group">
							<main class="card-body p-4 rounded-md">
								<a href="/projects/view/4"
									><div
										class=" bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md"
									>
										<div class="h-[146px]">
											<img
												class="h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
												src={$page.url.origin + '/api/images/projects/php.png'}
												alt="Classical Black T-Shirt Classical Black T-Shirt"
											/>
											<div
												class="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
											>
												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconHeart size={18} />
												</button>

												<button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconEye size={18} />
												</button><button class="bg-white p-2.5 mb-1.5 rounded-full">
													<IconRefresh size={18} />
												</button>
											</div>
										</div>
									</div></a
								>
								<div>
									<div class="flex justify-between items-center">
										<p class="text-xs text-slate-900 dark:text-slate-300 uppercase font-normal">
											PHP
										</p>
										<span
											class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-xs space-x-1 rtl:space-x-reverse"
											><IconStarFilled stroke={1.5} size={14} color={'orange'} /><span>4.8</span
											></span
										>
									</div>
									<h6
										class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 truncate"
									>
										<a href="/projects/view/4"
											>PHP is not dead yet in 2024, Project in Laravel to build a fullstack website</a
										>
									</h6>
									<p class="text-slate-500 dark:text-slate-500 text-[11px] font-normal mt-1.5">
										PHP is not dead, is it?
									</p>
									<p class="pb-4">
										<span
											class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 ltr:mr-2 rtl:mr-2"
											>05-04-2024</span
										>
									</p>
									<button
										type="button"
										class="btn btn inline-flex justify-center btn-outline-dark w-full btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700"
										><span class="flex items-center"
											><span class="ltr:mr-2 rtl:ml-2 text-sm leading-none"></span><span
												>View Details</span
											></span
										></button
									>
								</div>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
