<script lang="ts">
	let lists = [
		{
			id: 1,
			image: 'http://localhost:5173/api/images/users/male-placeholder.png',
			title: 'Amet minim mollit non deserunt ullam.',
			isDone: false
		},
		{
			id: 2,
			image: 'http://localhost:5173/api/images/users/female-placeholder.png',
			title: 'Amet minim mollit non deserunt ullam.',
			isDone: false
		},
		{
			id: 3,
			image: 'http://localhost:5173/api/images/users/male-placeholder.png',
			title: 'Amet minim mollit non deserunt ullam.',
			isDone: false
		},
		{
			id: 4,
			image: 'http://localhost:5173/api/images/users/female-placeholder.png',
			title: 'Amet minim mollit non deserunt ullam.',
			isDone: false
		},
		{
			id: 5,
			image: 'http://localhost:5173/api/images/users/male-placeholder.png',
			title: 'Amet minim mollit non deserunt ullam.',
			isDone: false
		},
		{
			id: 6,
			image: 'http://localhost:5173/api/images/users/female-placeholder.png',
			title: 'Amet minim mollit non deserunt ullam.',
			isDone: false
		}
	];

	const deleteItem = (id: number) => {
		lists = lists.filter((item) => item.id !== id);
	};

	// ** Import Icons
	import IconPencil from '@tabler/icons-svelte/IconPencil.svelte';
	import IconTrash from '@tabler/icons-svelte/IconTrash.svelte';
	import CheckBox from '../ui/CheckBox.svelte';
</script>

<div>
	<ul class="divide-y divide-slate-100 dark:divide-slate-700 -mx-6 -mb-6">
		{#each lists as item}
			<li class="flex items-center px-6 space-x-4 py-4 rtl:space-x-reverse">
				<div class="flex-none flex space-x-2 items-center rtl:space-x-reverse">
					<CheckBox
						id="edit"
						name="edit"
						label=""
						value={item.isDone}
						on:click={() => (item.isDone = !item.isDone)}
					/>
					<div
						class={`${item.isDone ? 'opacity-20' : 'opacity-100'} h-8 w-8 rounded-full text-white`}
					>
						<img src={item.image} alt="" class="block w-full h-full object-cover rounded-full" />
					</div>
				</div>
				<div class={`flex-1 flex ${item.isDone ? 'line-through dark:text-white' : ''}`}>
					<span class="flex-1 text-sm text-slate-600 dark:text-slate-300">
						{item.title.slice(0, 20) + '...'}
					</span>
					<span class="flex-none space-x-2 text-base text-secondary-500 rtl:space-x-reverse">
						{#if !item.isDone}
							<button type="button">
								<IconPencil stroke={1.8} size={18} />
							</button>
						{/if}
						<button
							type="button"
							on:click={() => deleteItem(item.id)}
							class="transition duration-150 hover:text-danger-500"
						>
							<IconTrash stroke={1.8} size={18} />
						</button>
					</span>
				</div>
			</li>
		{/each}
		<li class="flex items-center px-6 space-x-4 py-4 rtl:space-x-reverse">
			<div class="flex-none flex space-x-2 items-center rtl:space-x-reverse"></div>
		</li>
	</ul>
</div>
