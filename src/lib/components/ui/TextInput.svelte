<script lang="ts">
	// ** Components
	import IconInfoCircle from '@tabler/icons-svelte/IconInfoCircle.svelte';
	import IconEyeOff from '@tabler/icons-svelte/IconEyeOff.svelte';
	import IconEye from '@tabler/icons-svelte/IconEye.svelte';

	export let placeholder: string = 'Add placeholder';
	export let classLabel: string = 'form-label';
	export let msgTooltip: boolean = false;
	export let required: boolean = false;
	export let hasIcon: boolean = false;
	export let className: string = '';
	export let horizontal: boolean;
	export let description: string;
	export let isMask: boolean;
	export let label: string;
	export let validate: any;
	export let name: string;
	export let type: string;
	export let error: any;
	export let id: string;

	let open = false;
	const handleOpen = () => {
		open = !open;
	};
</script>

<div
	class="fromGroup {error ? 'has-error' : ''}
		   {horizontal ? 'flex' : ''}"
>
	{#if label}
		<label
			for={id}
			class={`block capitalize ${classLabel}  ${
				horizontal ? 'flex-0 mr-6 md:w-[100px] w-[60px] break-words' : ''
			}`}
		>
			{label}
		</label>
	{/if}
	<div class={`relative ${horizontal ? 'flex-1' : ''}`}>
		{#if name && !isMask}
			<input
				type={type === 'password' && open === true ? 'text' : type}
				class={`${error ? ' has-error' : ' '} form-control py-2 ${className}  `}
				on:input={validate}
				{placeholder}
				{id}
				{name}
				{required}
			/>
		{:else if !name && !isMask}
			<input
				type={type === 'password' && open === true ? 'text' : type}
				class={`form-control py-2 ${className}`}
				on:input={validate}
				{placeholder}
				{id}
				{name}
				{required}
			/>
			<!-- {:else if name && isMask}
			<Cleave
				bind:this={register(name)}
				{placeholder}
				{options}
				class={`${error ? ' has-error' : ' '} form-control py-2 ${className}  `}
				on:focus={onFocus}
				{id}
				{readonly}
				{disabled}
				on:change={onChange}
			/>
		{:else if !name && isMask}
			<Cleave
				{placeholder}
				{options}
				class={`${error ? ' has-error' : ' '} form-control py-2 ${className}  `}
				on:focus={onFocus}
				{id}
				{readonly}
				{disabled}
				on:change={onChange}
			/> -->
		{/if}

		<div
			class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2 space-x-1 rtl:space-x-reverse"
		>
			{#if hasIcon}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span class="cursor-pointer text-secondary-500" on:click={handleOpen}>
					{#if open && type === 'password'}
						<IconEye stroke={1.5} />
					{:else if !open && type === 'password'}
						<IconEyeOff stroke={1.5} />
					{/if}
				</span>
			{/if}

			{#if error}
				<span class="text-danger-500">
					<IconInfoCircle stroke={1.5} />
				</span>
			{/if}
		</div>
	</div>

	{#if error}
		<div
			class={` mt-2 ${
				msgTooltip
					? ' inline-block bg-danger-500 text-white text-[10px] px-2 py-1 rounded'
					: ' text-danger-500 block text-sm'
			}`}
		>
			{error}
		</div>
	{/if}
	{#if description}
		<span class="input-description">{description}</span>
	{/if}
</div>
