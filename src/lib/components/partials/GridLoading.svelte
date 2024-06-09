<script lang="ts">
	export let count = 1;
	let items: any[] = Array.from({ length: count });
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
	{#each items as _}
		<div class="rounded-md bg-white dark:bg-slate-700 h-full p-6 shadow-base">
			<div class="animate-pulse">
				<header class="flex justify-between items-center space-x-6">
					<div class="flex-1 flex items-center space-x-4">
						<div class="flex-none flex space-x-2 items-center">
							<div class="h-10 w-10 rounded bg-[#C4C4C4] dark:bg-slate-500"></div>
						</div>
						<div class="flex-1 bg-[#C4C4C4] dark:bg-slate-500 h-2 rounded-full"></div>
					</div>
					<div class="flex-none">
						<div class="h-6 w-6 rounded-full bg-[#C4C4C4] dark:bg-slate-500"></div>
					</div>
				</header>
				<div class="py-6 space-y-2">
					<div class="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
					<div class="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
					<div class="h-[6px] bg-[#C4C4C4] dark:bg-slate-500"></div>
				</div>
				<div class="grid grid-cols-2 gap-5">
					<div class="space-y-2">
						<span class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
						<span class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
					</div>

					<div class="space-y-2">
						<span class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
						<span class="h-[4px] bg-[#C4C4C4] dark:bg-slate-500 block"></span>
					</div>
				</div>

				<div class="grid grid-cols-2 gap-5 mt-6">
					<div class="flex -space-x-1">
						<div class="h-6 w-6 bg-[#C4C4C4] dark:bg-slate-500 rounded-full"></div>
						<div class="h-6 w-6 bg-[#C4C4C4] dark:bg-slate-500 rounded-full"></div>
						<div class="h-6 w-6 bg-[#C4C4C4] dark:bg-slate-500 rounded-full"></div>
					</div>
					<div>
						<span
							class="h-[18px] bg-[#C4C4C4] dark:bg-slate-500 w-[130px] inline-block rounded-full"
						></span>
					</div>
				</div>
			</div>
		</div>
	{/each}
</div>
