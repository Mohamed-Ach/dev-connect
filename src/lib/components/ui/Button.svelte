<script lang="ts">
	export let text: string;
	export let isLoading: boolean = false;
	export let disabled: boolean = false;
	export let className = 'bg-primary-500 text-white';
	export let loadingClass = 'unset-classname';
	export let link: string;
</script>

<a
	href={link}
	class={`btn btn inline-flex justify-center ${
		isLoading ? ' pointer-events-none' : ''
	} ${disabled ? ' opacity-40 cursor-not-allowed' : ''} ${className}`}
>
	<span class="flex items-center">
		<span>{text}</span>
	</span>

	{#if isLoading}
		<div class="ml-2">
			<svg
				class={`animate-spin ltr:-ml-1 ltr:mr-3 rtl:-mr-1 rtl:ml-3 h-5 w-5 ${loadingClass}`}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"
				></circle>
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				></path>
			</svg>
		</div>
	{/if}
</a>
