<script lang="ts">
	// ** Import static data
	import { languages, technologies, categories } from '$lib/store';

	// ** Components
	import CheckBox from '$lib/components/ui/CheckBox.svelte';

	// ** Icons
	import IconChevronRight from '@tabler/icons-svelte/IconChevronRight.svelte';
	import IconStarFilled from '@tabler/icons-svelte/IconStarFilled.svelte';
	import IconColumns3 from '@tabler/icons-svelte/IconColumns3.svelte';
	import IconSearch from '@tabler/icons-svelte/IconSearch.svelte';
	import IconHome from '@tabler/icons-svelte/IconHome.svelte';
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
							<div class="flex justify-between space-y-1">
								<CheckBox label="" name="fiveStar" value={false} id="fiveStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex text-yellow-400">
										<span class="flex"> <IconStarFilled stroke={1.5} size={18} /></span>
										<span class="flex"> <IconStarFilled stroke={1.5} size={18} /></span>
										<span class="flex"> <IconStarFilled stroke={1.5} size={18} /></span>
										<span class="flex"> <IconStarFilled stroke={1.5} size={18} /></span>
										<span class="flex"> <IconStarFilled stroke={1.5} size={18} /></span>
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span>
							</div>
							<div class="flex justify-between space-y-1">
								<CheckBox label="" name="fourStar" value={false} id="fourStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-start justify-start text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} />
										<IconStarFilled stroke={1.5} size={18} />
										<IconStarFilled stroke={1.5} size={18} />
										<IconStarFilled stroke={1.5} size={18} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span>
							</div>
							<div class="flex justify-between space-y-1">
								<CheckBox label="" name="threeStar" value={false} id="threeStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-start justify-start text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} />
										<IconStarFilled stroke={1.5} size={18} />
										<IconStarFilled stroke={1.5} size={18} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span>
							</div>
							<div class="flex justify-between space-y-1">
								<CheckBox label="" name="twoStar" value={false} id="twoStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-start justify-start text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} />
										<IconStarFilled stroke={1.5} size={18} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span>
							</div>
							<div class="flex justify-between space-y-1">
								<CheckBox label="" name="oneStar" value={false} id="oneStar" />
								<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
									<span class="flex items-start justify-start text-yellow-400">
										<IconStarFilled stroke={1.5} size={18} />
									</span>
								</span>
								<span class="text-slate-500 dark:text-slate-500 text-xs font-normal">9724</span>
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
								class=" border border-slate-400 dark:border-slate-700 text-slate-400 rounded h-11 w-11 inline-flex items-center justify-center transition-all duration-200 border-slate-900 text-slate-900 dark:border-slate-300/80 dark:text-slate-200"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class=" w-6 h-6 iconify iconify--heroicons"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									><path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M9 4.5v15m6-15v15m-10.875 0h15.75c.621 0 1.125-.504 1.125-1.125V5.625c0-.621-.504-1.125-1.125-1.125H4.125C3.504 4.5 3 5.004 3 5.625v12.75c0 .621.504 1.125 1.125 1.125"
									></path></svg
								></button
							><button
								class=" border border-slate-400 dark:border-slate-700 text-slate-400 rounded h-11 w-11 inline-flex items-center justify-center transition-all duration-200"
								><svg
									xmlns="http://www.w3.org/2000/svg"
									xmlns:xlink="http://www.w3.org/1999/xlink"
									aria-hidden="true"
									role="img"
									class=" w-6 h-6 iconify iconify--heroicons"
									width="1em"
									height="1em"
									viewBox="0 0 24 24"
									><path
										fill="none"
										stroke="currentColor"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="1.5"
										d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0M3.75 12h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m-.375 5.25h.007v.008H3.75zm.375 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
									></path></svg
								></button
							>
						</div>
						<div
							class="flex-none sm:flex items-center sm:space-x-4 sm:rtl:space-x-reverse sm:space-y-0 space-y-2"
						>
							<div class=" flex space-x-3 rtl:space-x-reverse items-center">
								<label for="select" class="text-sm font-normal text-[#68768A]">Show:</label>
								<div
									class="rounded text-sm font-normal text-[#68768A] css-b62m3t-container"
									id="hh"
								>
									<span id="react-select-12-live-region" class="css-1f43avz-a11yText-A11yText"
									></span><span
										aria-live="polite"
										aria-atomic="false"
										aria-relevant="additions text"
										class="css-1f43avz-a11yText-A11yText"
									></span>
									<div class="select__control css-hxc95c-control">
										<div
											class="select__value-container select__value-container--has-value css-fzpjz-Pv"
										>
											<div class="select__single-value css-1dimb5e-singleValue">Option 1</div>
											<div class="select__input-container css-13p5u8n-La" data-value="">
												<input
													class="select__input"
													autocapitalize="none"
													autocomplete="off"
													autocorrect="off"
													id="react-select-12-input"
													spellcheck="false"
													tabindex="0"
													type="text"
													aria-autocomplete="list"
													aria-expanded="false"
													aria-haspopup="true"
													role="combobox"
													value=""
													style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"
												/>
											</div>
										</div>
										<div class="select__indicators css-ho4lpy-Pv">
											<span class="select__indicator-separator css-1u9des2-indicatorSeparator"
											></span>
											<div
												class="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer"
												aria-hidden="true"
											>
												<svg
													height="20"
													width="20"
													viewBox="0 0 20 20"
													aria-hidden="true"
													focusable="false"
													class="css-tj5bde-Svg"
													><path
														d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
													></path></svg
												>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class=" flex space-x-3 rtl:space-x-reverse items-center">
								<label for="select" class="text-sm font-normal text-[#68768A]">Sort by:</label>
								<div
									class="rounded text-sm font-normal text-[#68768A] css-b62m3t-container"
									id="hh"
								>
									<span id="react-select-13-live-region" class="css-1f43avz-a11yText-A11yText"
									></span><span
										aria-live="polite"
										aria-atomic="false"
										aria-relevant="additions text"
										class="css-1f43avz-a11yText-A11yText"
									></span>
									<div class="select__control css-hxc95c-control">
										<div
											class="select__value-container select__value-container--has-value css-fzpjz-Pv"
										>
											<div class="select__single-value css-1dimb5e-singleValue">Top Rated</div>
											<div class="select__input-container css-13p5u8n-La" data-value="">
												<input
													class="select__input"
													autocapitalize="none"
													autocomplete="off"
													autocorrect="off"
													id="react-select-13-input"
													spellcheck="false"
													tabindex="0"
													type="text"
													aria-autocomplete="list"
													aria-expanded="false"
													aria-haspopup="true"
													role="combobox"
													value=""
													style="color: inherit; background: 0px center; opacity: 1; width: 100%; grid-area: 1 / 2; font: inherit; min-width: 2px; border: 0px; margin: 0px; outline: 0px; padding: 0px;"
												/>
											</div>
										</div>
										<div class="select__indicators css-ho4lpy-Pv">
											<span class="select__indicator-separator css-1u9des2-indicatorSeparator"
											></span>
											<div
												class="select__indicator select__dropdown-indicator css-1xc3v61-indicatorContainer"
												aria-hidden="true"
											>
												<svg
													height="20"
													width="20"
													viewBox="0 0 20 20"
													aria-hidden="true"
													focusable="false"
													class="css-tj5bde-Svg"
													><path
														d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
													></path></svg
												>
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
								<a href="/products/1"
									><div
										class=" bg-secondary-200 dark:rounded relative h-[191px] flex flex-col justify-center items-center mb-3 rounded-md"
									>
										<div class="h-[146px]">
											<img
												class="  h-full w-full object-contain transition-all duration-300 group-hover:scale-105"
												src="http://localhost:5173/api/images/projects/python.png"
												alt="Classical Black T-Shirt Classical Black T-Shirt"
											/><span
												class="badge font-normal bg-danger-600 text-white absolute ltr:left-2 rtl:right-2 top-3"
												><span class="inline-flex items-center">New</span></span
											>
											<div
												class="hover-box flex flex-col invisible absolute ltr:right-2 rtl:left-2 top-2 opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300"
											>
												<button class="bg-white p-2.5 mb-1.5 rounded-full"
													><svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														class="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600 iconify iconify--ph"
														width="1em"
														height="1em"
														viewBox="0 0 256 256"
														><path
															fill="currentColor"
															d="M240 102c0 70-103.79 126.66-108.21 129a8 8 0 0 1-7.58 0C119.79 228.66 16 172 16 102a62.07 62.07 0 0 1 62-62c20.65 0 38.73 8.88 50 23.89C139.27 48.88 157.35 40 178 40a62.07 62.07 0 0 1 62 62"
														></path></svg
													></button
												><button class="bg-white p-2.5 mb-1.5 rounded-full"
													><svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														class="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600 iconify iconify--ph"
														width="1em"
														height="1em"
														viewBox="0 0 256 256"
														><path
															fill="currentColor"
															d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
														></path></svg
													></button
												><button class="bg-white p-2.5 mb-1.5 rounded-full"
													><svg
														xmlns="http://www.w3.org/2000/svg"
														xmlns:xlink="http://www.w3.org/1999/xlink"
														aria-hidden="true"
														role="img"
														class="text-slate-400 dark:text-slate-400 hover:text-danger-600 dark:hover:text-danger-600 iconify iconify--jam"
														width="1em"
														height="1em"
														viewBox="-1.5 -2.5 24 24"
														><path
															fill="currentColor"
															d="m4.859 5.308l1.594-.488a1 1 0 0 1 .585 1.913l-3.825 1.17a1 1 0 0 1-1.249-.665L.794 3.413a1 1 0 1 1 1.913-.585l.44 1.441C5.555.56 10.332-1.035 14.573.703a9.381 9.381 0 0 1 5.38 5.831a1 1 0 1 1-1.905.608A7.381 7.381 0 0 0 4.86 5.308zm12.327 8.195l-1.775.443a1 1 0 1 1-.484-1.94l3.643-.909a.997.997 0 0 1 .61-.08a1 1 0 0 1 .84.75l.968 3.88a1 1 0 0 1-1.94.484l-.33-1.322a9.381 9.381 0 0 1-16.384-1.796l-.26-.634a1 1 0 1 1 1.851-.758l.26.633a7.381 7.381 0 0 0 13.001 1.25z"
														></path></svg
													></button
												>
											</div>
										</div>
									</div></a
								>
								<div>
									<div class="flex justify-between items-center">
										<p class="text-xs text-slate-900 dark:text-slate-300 uppercase font-normal">
											python
										</p>
										<span
											class="flex items-center text-slate-900 dark:text-slate-300 font-normal text-xs space-x-1 rtl:space-x-reverse"
											><svg
												xmlns="http://www.w3.org/2000/svg"
												xmlns:xlink="http://www.w3.org/1999/xlink"
												aria-hidden="true"
												role="img"
												class="text-yellow-400 iconify iconify--ph"
												width="1em"
												height="1em"
												viewBox="0 0 256 256"
												><path
													fill="currentColor"
													d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
												></path></svg
											><span>4.8</span></span
										>
									</div>
									<h6
										class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 truncate"
									>
										<a href="/products/1">Python Project in AI, License plate detection</a>
									</h6>
									<p class="text-slate-500 dark:text-slate-500 text-[11px] font-normal mt-1.5">
										innovative solution for ai recognition.
									</p>
									<p class="pb-4">
										<span
											class="text-slate-900 dark:text-slate-300 text-base font-medium mt-2 ltr:mr-2 rtl:mr-2"
											>44 Days</span
										>
									</p>
									<button
										type="button"
										class="btn btn inline-flex justify-center
    
    btn-outline-dark w-full btn-sm font-medium hover:bg-slate-900 hover:text-white dark:hover:text-white dark:hover:bg-slate-700"
										><span class="flex items-center"
											><span
												class="
       
      ltr:mr-2 rtl:ml-2
      
       text-sm leading-none
      
      "
												><svg
													xmlns="http://www.w3.org/2000/svg"
													xmlns:xlink="http://www.w3.org/1999/xlink"
													aria-hidden="true"
													role="img"
													class="iconify iconify--heroicons"
													width="1em"
													height="1em"
													viewBox="0 0 24 24"
													><path
														fill="none"
														stroke="currentColor"
														stroke-linecap="round"
														stroke-linejoin="round"
														stroke-width="1.5"
														d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007M8.625 10.5a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0m7.5 0a.375.375 0 1 1-.75 0a.375.375 0 0 1 .75 0"
													></path></svg
												></span
											><span></span>See Details</span
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
