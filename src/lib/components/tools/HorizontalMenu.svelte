<script lang="ts">
	// ** Icons
	import IconBrandSafari from '@tabler/icons-svelte/IconBrandSafari.svelte';
	import IconUsersGroup from '@tabler/icons-svelte/IconUsersGroup.svelte';
	import IconFolderPlus from '@tabler/icons-svelte/IconFolderPlus.svelte';
	import IconCopyPlus from '@tabler/icons-svelte/IconCopyPlus.svelte';
	import IconFolders from '@tabler/icons-svelte/IconFolders.svelte';
</script>

<div class="main-menu">
	<ul>
		<li>
			<a href="/posts/browse" class="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
				<span class="icon-box">
					<IconUsersGroup stroke={1.5} />
				</span>
				<div class="text-box">Forum</div>
			</a>
		</li>
		<li>
			<a href="/projects" class="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
				<span class="icon-box">
					<IconFolders stroke={1.5} />
				</span>
				<div class="text-box">Projects</div>
			</a>
		</li>
		<li>
			<a href="/discover" class="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
				<span class="icon-box">
					<IconBrandSafari stroke={1.5} />
				</span>
				<div class="text-box">Discover</div>
			</a>
		</li>
		<li>
			<a href="/projects/create" class="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
				<span class="icon-box">
					<IconFolderPlus stroke={1.5} />
				</span>
				<div class="text-box">Launch Project</div>
			</a>
		</li>
		<li>
			<a href="/posts/create" class="flex flex-1 items-center space-x-[6px] rtl:space-x-reverse">
				<span class="icon-box">
					<IconCopyPlus stroke={1.5} />
				</span>
				<div class="text-box">Create Post</div>
			</a>

			<!-- {#if item.child}
					<ul class="sub-menu">
						{#each item.child as childItem}
							<li>
								<a href={childItem.link} class="flex space-x-2 items-start rtl:space-x-reverse">
									<IconHome stroke={1.5} />
									<span class="leading-[1]">{childItem.title}</span>
								</a>
							</li>
						{/each}
					</ul>
				{/if} -->

			<!-- {#if item.megamenu}
					<div class="rt-mega-menu">
						<div class="flex flex-wrap space-x-8 justify-between rtl:space-x-reverse">
							{#each item.megamenu as m_item, m_i}
								<div>
									<div
										class="text-sm font-medium text-slate-900 dark:text-white mb-2 flex space-x-1 items-center"
									>
										<span> {m_item.megamenutitle}</span>
									</div>
									{#each m_item.singleMegamenu as ms_item, ms_i}
										<a
											href={ms_item.m_childlink}
											class="flex items-center space-x-2 text-[15px] leading-6 rtl:space-x-reverse"
										>
											<span
												class="h-[6px] w-[6px] rounded-full border border-slate-600 dark:border-white inline-block flex-none {location ===
												ms_item.m_childlink
													? ' bg-slate-900 dark:bg-white'
													: ''}"
											></span>
											<span
												class="capitalize {location === ms_item.m_childlink
													? ' text-slate-900 dark:text-white font-medium'
													: 'text-slate-600 dark:text-slate-300'}"
											>
												{ms_item.m_childtitle}
											</span>
										</a>
									{/each}
								</div>
							{/each}
						</div>
					</div>
				{/if} -->
		</li>
	</ul>
</div>
