<script lang="ts">
	const year: number = new Date().getFullYear();
</script>

<footer class:custom-class={true} class="static">
	<div class="site-footer px-6 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-300 py-4">
		<div class="grid md:grid-cols-2 grid-cols-1 md:gap-5">
			<div class="text-center ltr:md:text-start rtl:md:text-right text-sm">
				&copy; {year} Dev Connect, All rights Reserved
			</div>
			<div class="ltr:md:text-right rtl:md:text-end text-center text-sm">
				Hand-crafted & Made by{' '}
				<a
					href="https://github.com/Mohamed-Ach"
					target="_blank"
					class="text-primary-400 font-semibold"
				>
					Mohamed Ach
				</a>
			</div>
		</div>
	</div>
</footer>
