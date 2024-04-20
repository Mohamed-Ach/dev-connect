<script lang="ts">
	export let className: string = 'bg-danger-500 text-white';
	export let label: string | null;
	export let icon: any = '';

	const hasChild = !!$$slots.default;
</script>

<span class="badge {className}">
	{#if !hasChild}
		<span class="inline-flex items-center">
			{#if icon}
				<span class="inline-block ltr:mr-1 rtl:ml-1">
					<svelte:component this={icon} stroke={1.8} size={12} />
				</span>
			{/if}
			{label}
		</span>
	{/if}
	{#if hasChild}
		<span class="inline-flex items-center"><slot /></span>
	{/if}
</span>
