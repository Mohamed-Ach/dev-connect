<script lang="ts">
	// import { useState } from "svelte";
	// import Cleave from "cleave.js/react";
	// import "cleave.js/dist/addons/cleave-phone.us";

	export let type: string;
	export let label: string;
	export let placeholder: string = 'Add placeholder';
	export let classLabel: string = 'form-label';
	export let className: string = '';
	export let name: string;
	export let error: any;
	export let id: string;
	export let horizontal: boolean;
	export let validate: any;
	export let isMask: boolean;
	export let msgTooltip: boolean = false;
	export let description: string;
	export let hasicon: boolean = false;

	let open = false;
	const handleOpen = () => {
		open = !open;
	};
</script>

<div
	class={`fromGroup  ${error ? 'has-error' : ''}  ${
		horizontal ? 'flex' : ''
	}  ${validate ? 'is-valid' : ''} `}
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
			<!-- bind:this={register(name)} -->
			<input
				type={type === 'password' && open === true ? 'text' : type}
				class={`${error ? ' has-error' : ' '} form-control py-2 ${className}  `}
				{placeholder}
				{id}
			/>
		{:else if !name && !isMask}
			<input
				type={type === 'password' && open === true ? 'text' : type}
				class={`form-control py-2 ${className}`}
				{placeholder}
				{id}
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
			{#if hasicon}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span class="cursor-pointer text-secondary-500" on:click={handleOpen}>
					{#if open && type === 'password'}
						<!-- <Icon icon="heroicons-outline:eye" /> -->
					{:else if !open && type === 'password'}
						<!-- <Icon icon="heroicons-outline:eye-off" /> -->
					{/if}
				</span>
			{/if}

			{#if error}
				<span class="text-danger-500">
					<!-- <Icon icon="heroicons-outline:information-circle" /> -->
				</span>
			{/if}
			{#if validate}
				<span class="text-success-500">
					<!-- <Icon icon="bi:check-lg" /> -->
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
			{error.message}
		</div>
	{/if}

	{#if validate}
		<div
			class={` mt-2 ${
				msgTooltip
					? ' inline-block bg-success-500 text-white text-[10px] px-2 py-1 rounded'
					: ' text-success-500 block text-sm'
			}`}
		>
			{validate}
		</div>
	{/if}

	{#if description}
		<span class="input-description">{description}</span>
	{/if}
</div>
