<script lang="ts">
	export let cardTitle: string = '';
	export let cardSubtitle: string = '';
	export let headerSlot: string = '';
	export let className: string = 'custom-class bg-white';
	export let bodyClass: string = 'p-6';
	export let noBorder: boolean = false;
	export let titleClass: string = 'custom-class';
</script>

<div
	class="card rounded-md dark:bg-slate-800 {noBorder
		? ' border'
		: ''} border-slate-200 dark:border-slate-700 {className}"
>
	{#if cardTitle || cardSubtitle || headerSlot}
		<header class="card-header {noBorder ? ' no-border' : ''}">
			<div>
				{#if cardTitle}
					<div class={`card-title ${titleClass}`}>{cardTitle}</div>
				{/if}
				{#if cardSubtitle}
					<div class="card-subtitle">{cardSubtitle}</div>
				{/if}
			</div>
			{#if headerSlot}
				<div class="card-header-slot">{headerSlot}</div>
			{/if}
		</header>
	{/if}
	<main class={`card-body ${bodyClass}`}><slot /></main>
</div>
