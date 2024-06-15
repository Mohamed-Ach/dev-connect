<script lang="ts">
	import ckWhite from '$lib/images/icon/ck-white.svg';

	export let activeClass: string =
		'ring-black-500 bg-slate-900 dark:bg-slate-700 dark:ring-slate-700';
	export let disabled: boolean = false;
	export let required: boolean = false;
	export let value: boolean;
	export let label: string;
	export let name: string;
	export let id: string;
</script>

<label
	class={`flex items-center ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}`}
	{id}
>
	<input type="checkbox" class="hidden" {name} bind:checked={value} {id} {disabled} {required} />
	<span
		class={`h-4 w-4 border flex-none border-slate-100 dark:border-slate-800 rounded 
        inline-flex ltr:mr-3 rtl:ml-3 relative transition-all duration-150
        ${
					value
						? activeClass + ' ring-2 ring-offset-2 dark:ring-offset-slate-800'
						: 'bg-slate-100 dark:bg-slate-600 dark:border-slate-600'
				}`}
	>
		{#if value}
			<img src={ckWhite} alt="" class="h-[10px] w-[10px] block m-auto" />
		{/if}
	</span>
	<span class="text-slate-500 dark:text-slate-400 text-sm leading-6 capitalize">
		{label}
	</span>
</label>
