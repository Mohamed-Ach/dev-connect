<script lang="ts">
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		if (data.status === 200) {
			setTimeout(() => {
				window.location.href = '/login';
			}, 3000);
		}
	});
</script>

<div class="main-page-wrapper">
	<div class="error-page-content d-flex align-items-center justify-content-center">
		<div class="container">
			<i
				class="fas {data.status === 200 ? 'fa-check-circle' : 'fa-times-circle'}"
				style="font-size: 5rem; color: {data.status === 200
					? '#0b66ff'
					: 'crimson'}; margin-bottom: 7% !important;"
			/>
			<div class="row">
				<div class="col-xxl-6 col-lg-7 m-auto">
					<h2>{data.response}</h2>
					<p class="me-xxl-5 ms-xxl-5">
						{data.message}
					</p>
					{#if data.status === 200}
						<a href="/login" class="btn-eight">Login</a>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
