<script lang="ts">
	export let count = 1;
	let items = Array.from({ length: count });
</script>

<div class="w-full bg-white dark:bg-slate-700 shadow-base p-6 rounded-md">
	<table class="animate-pulse w-full border-separate border-spacing-4 table-fixed">
		<thead>
			<tr>
				<th scope="col">
					<div class="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
				</th>
				<th scope="col">
					<div class="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
				</th>
				<th scope="col">
					<div class="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
				</th>
				<th scope="col">
					<div class="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
				</th>
				<th scope="col">
					<div class="h-4 bg-[#C4C4C4] dark:bg-slate-500"></div>
				</th>
			</tr>
		</thead>
		<tbody class="table-group-divider">
			{#each items as _}
				<tr>
					<td>
						<div class="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
					</td>
					<td>
						<div class="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
					</td>
					<td>
						<div class="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
					</td>
					<td>
						<div class="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
					</td>
					<td>
						<div class="h-2 bg-[#C4C4C4] dark:bg-slate-500"></div>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
