<script lang="ts">
	import IconBrandGithub from '@tabler/icons-svelte/IconBrandGithub.svelte';
	import IconBrandGoogle from '@tabler/icons-svelte/IconBrandGoogle.svelte';
</script>

<ul class="flex justify-center">
	<li class="ml-2 mr-4">
		<a
			href="/github"
			class="inline-flex h-10 w-10 bg-[#000000] text-white text-2xl flex-col items-center justify-center rounded-full"
		>
			<IconBrandGithub stroke={2} />
		</a>
	</li>
	<li>
		<a
			href="/google"
			class="inline-flex h-10 w-10 bg-[#EA4335] text-white text-2xl flex-col items-center justify-center rounded-full"
		>
			<IconBrandGoogle stroke={2} />
		</a>
	</li>
</ul>
