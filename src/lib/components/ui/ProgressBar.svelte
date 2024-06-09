<script lang="ts">
	export let title = '';
	export let value;
	export let backClass = 'rounded-[999px]';
	export let className = 'bg-slate-900 dark:bg-slate-900';
	export let titleClass = 'text-base font-normal';
	export let striped = true;
	export let animate = true;
</script>

<div class="relative">
	{#if title}
		<span class="block text-slate-500 tracking-[0.01em] mb-2 {titleClass}">
			{title}
		</span>
	{/if}

	{#if !$$slots.default}
		<div
			class="flex flex-col text-center whitespace-nowrap justify-center h-full progress-bar {className}
        {striped ? 'stripes' : ''} {animate ? 'animate-stripes' : ''} rounded-full"
			style="width: {value}%"
		>
			<span class="h-2 text-[10px] text-white font-bold">&nbsp;</span>
		</div>
	{:else}
		<div class="w-full overflow-hidden bg-opacity-10 flex progress {backClass}">
			<slot />
		</div>
	{/if}
</div>
