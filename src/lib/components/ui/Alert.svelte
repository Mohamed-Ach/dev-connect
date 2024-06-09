<script lang="ts">
	import IconX from '@tabler/icons-svelte/IconX.svelte';

	export let className: string = 'alert-dark';
	export let dismissible: boolean = true;
	// export let toggle: boolean;
	export let label: string;
	export let icon: any = false;

	let isShow = true;
	const handleDestroy = () => {
		isShow = false;
	};
</script>

<div>
	{#if isShow}
		<div class="alert {className}">
			<div class="flex items-start space-x-3 rtl:space-x-reverse">
				{#if icon}
					<div class="flex-0 text-[22px]">
						<svelte:component this={icon} stroke={1.5} />
					</div>
				{/if}
				<div class="flex-1">{label}</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				{#if dismissible}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<!-- svelte-ignore a11y-no-static-element-interactions -->
					<div class="flex-0 text-2xl cursor-pointer" on:click={handleDestroy}>
						<IconX stroke={1.5} />
					</div>
				{/if}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->

				<!-- {#if toggle}
					<div class="flex-0 text-2xl cursor-pointer" on:click={toggle}>
						<IconX stroke={1.5} />
					</div>
				{/if} -->
			</div>
		</div>
	{/if}
</div>
