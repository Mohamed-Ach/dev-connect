<script>
	// @ts-nocheck

	import IconSearch from '@tabler/icons-svelte/IconSearch.svelte';

	let isOpen = false;
	let query = ' ';

	function closeModal() {
		isOpen = false;
	}

	function openModal() {
		isOpen = true;
	}

	const searchList = [
		{
			id: 1,
			name: 'What is Dashcode ?'
		},
		{
			id: 2,
			name: 'Our Services'
		},
		{
			id: 3,
			name: 'Our Team'
		},
		{
			id: 4,
			name: 'Our Clients'
		},
		{
			id: 5,
			name: 'Our Partners'
		},
		{
			id: 6,
			name: 'Our Blog'
		},
		{
			id: 7,
			name: 'Our Contact'
		}
	];

	function filterSearchList() {
		return searchList.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
	}

	const active = false;
</script>

<div>
	<button
		class="flex items-center xl:text-sm text-lg xl:text-slate-400 text-slate-800 dark:text-slate-300 px-1 space-x-3 rtl:space-x-reverse"
		on:click={openModal}
	>
		<IconSearch stroke={1.5} />
		<span class="xl:inline-block hidden">Search... </span>
	</button>
</div>

<div class={!isOpen ? 'hidden' : ''}>
	<div class="fixed inset-0 z-[9999] overflow-y-auto p-4 md:pt-[25vh] pt-20" on:close={closeModal}>
		<div
			enter="ease-out duration-300"
			enterFrom="opacity-0"
			enterTo="opacity-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100"
			leaveTo="opacity-0"
		>
			<div
				class="fixed inset-0 bg-slate-900/60 backdrop-filter backdrop-blur-sm backdrop-brightness-10"
			/>
		</div>

		<div
			enter="ease-out duration-300"
			enterFrom="opacity-0 scale-95"
			enterTo="opacity-100 scale-100"
			leave="ease-in duration-200"
			leaveFrom="opacity-100 scale-100"
			leaveTo="opacity-0 scale-95"
		>
			<div>
				<div>
					<div class="relative">
						<div
							class="relative mx-auto max-w-xl rounded-md bg-white dark:bg-slate-800 shadow-2xl ring-1 ring-gray-500-500 dark:ring-light divide-y divide-gray-500-300 dark:divide-light"
						>
							<div class="flex bg-white dark:bg-slate-800 px-3 rounded-md py-3 items-center">
								<div class="flex-0 text-slate-700 dark:text-slate-300 ltr:pr-2 rtl:pl-2 text-lg">
									<IconSearch stroke={1.5} />
								</div>
								<input
									class="bg-transparent outline-none focus:outline-none border-none w-full flex-1 dark:placeholder:text-slate-300 dark:text-slate-200"
									placeholder="Search..."
									on:input={(event) => (query = event.target.value)}
								/>
							</div>
							<div
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<option class="max-h-40 overflow-y-auto text-sm py-2">
									{#if filterSearchList().length === 0 && query !== ''}
										<div>
											<div class="text-base py-2 px-4">
												<p class="text-slate-500 text-base dark:text-white">No result found</p>
											</div>
										</div>
									{/if}

									{#each filterSearchList() as item (item.id)}
										<option>
											<div
												class={`px-4 text-[15px] font-normal capitalize py-2 ${
													active
														? 'bg-slate-900 dark:bg-slate-600 dark:bg-opacity-60 text-white'
														: 'text-slate-900 dark:text-white'
												}`}
											>
												<span>{item.name}</span>
											</div>
										</option>
									{/each}
								</option>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
