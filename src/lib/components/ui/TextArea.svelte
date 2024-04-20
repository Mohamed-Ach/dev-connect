<script lang="ts">
	import IconInfoCircle from '@tabler/icons-svelte/IconInfoCircle.svelte';

	export let label: string = '';
	export let placeholder: string = '';
	export let classLabel: string = 'form-label';
	export let className: string = '';
	export let name: string;
	export let readonly: boolean = false;
	export let error: any = '';
	export let disabled: boolean = false;
	export let id: string;
	export let horizontal: boolean = false;
	export let validate: string = '';
	export let msgTooltip: boolean = false;
	export let description: string = '';
	export let cols: number = 30;
	export let row: number = 3;
	export let onChange: any = '';
</script>

<div
	class="fromGroup {error ? 'has-error' : ''} {horizontal ? 'flex' : ''} {validate
		? 'is-valid'
		: ''}"
>
	{#if label}
		<label
			for={id}
			class="block capitalize {classLabel} {horizontal
				? 'flex-0 mr-6 md:w-[100px] w-[60px] break-words'
				: ''}"
		>
			{label}
		</label>
	{/if}
	<div class="relative {horizontal ? 'flex-1' : ''}">
		{#if name}
			<textarea
				class="{error ? 'has-error' : ''} form-control py-2 {className}"
				{placeholder}
				{readonly}
				{disabled}
				{id}
				{cols}
				rows={row}
				on:change={onChange}
			></textarea>
		{:else}
			<textarea
				class="{error ? 'has-error' : ''} form-control py-2 {className}"
				{placeholder}
				{readonly}
				{disabled}
				{id}
				{cols}
				rows={row}
				on:change={onChange}
			></textarea>
		{/if}

		<div
			class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2 space-x-1 rtl:space-x-reverse"
		>
			{#if error}
				<span class="text-danger-500">
					<IconInfoCircle stroke={1.5} />
				</span>
			{/if}
			{#if validate}
				<span class="text-success-500">
					<IconInfoCircle stroke={1.5} />
				</span>
			{/if}
		</div>
	</div>
	{#if error}
		<div
			class="mt-2 {msgTooltip
				? 'inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded'
				: 'text-danger-500 block text-sm'}"
		>
			{error.message}
		</div>
	{/if}
	{#if validate}
		<div
			class="mt-2 {msgTooltip
				? 'inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded'
				: 'text-success-500 block text-sm'}"
		>
			{validate}
		</div>
	{/if}
	{#if description}
		<span class="input-description">{description}</span>
	{/if}
</div>
