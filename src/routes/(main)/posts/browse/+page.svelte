<script lang="ts">
	// ** Import Components
	import SideBar from '$lib/components/partials/SideBar.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// ** Import Icons
	import IconBrandHipchat from '@tabler/icons-svelte/IconBrandHipchat.svelte';
	import IconCalendar from '@tabler/icons-svelte/IconCalendar.svelte';
	import IconShare from '@tabler/icons-svelte/IconShare.svelte';

	// ** Import Images :
	import post3 from '$lib/images/all-img/post-3.png';
	import post4 from '$lib/images/all-img/post-4.png';
	import post5 from '$lib/images/all-img/post-5.png';
</script>

<div class="lg:flex flex-wrap blog-posts lg:space-x-5 space-y-5 lg:space-y-0 rtl:space-x-reverse">
	<div class="flex-none">
		<div class="lg:max-w-[360px]">
			<Card>
				<SideBar />
			</Card>
		</div>
	</div>
	<div class="flex-1">
		<div class="grid xl:grid-cols-2 grid-cols-1 gap-5">
			<div class="xl:col-span-2 col-span-1">
				<Card>
					<div class=" h-[248px] w-full mb-6">
						<img src={post4} alt="" class=" w-full h-full object-cover" />
					</div>
					<div class="flex justify-between mb-4">
						<a href="null">
							<span
								class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
							>
								<IconCalendar stroke={2} size={16} />
								23/05/2024
							</span>
						</a>
						<div class="flex space-x-4 rtl:space-x-reverse">
							<a href="null">
								<span
									class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
								>
									<IconBrandHipchat stroke={2} size={16} />
									3
								</span>
							</a>
							<a href="null">
								<span
									class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
								>
									<IconShare stroke={2} size={16} />
									4
								</span>
							</a>
						</div>
					</div>
					<h5 class="card-title text-slate-900">
						<a href="/posts/view/1"
							>Exploring the Power of Elixir: A Modern Functional Programming Language</a
						>
					</h5>
					<div class="card-text dark:text-slate-300 mt-4 space-y-4">
						<p>
							In the ever-evolving world of programming, developers are constantly seeking languages
							that offer efficiency, scalability, and maintainability. One such language that has
							been gaining traction in recent years is Elixir. Created by José Valim in 2011...
						</p>
						<Button className="btn-outline-dark" text="Read more" link="/posts/view/1" />
					</div>
				</Card>
			</div>
			<Card>
				<div class=" h-[248px] w-full mb-6">
					<img src={post3} alt="" class=" w-full h-full object-cover" />
				</div>
				<div class="px-6 pb-6">
					<div class="flex justify-between mb-4">
						<div>
							<h5 class="card-title text-slate-900">
								<a href="/posts/view/1">Elixir</a>
							</h5>
						</div>
						<a href="/posts/view/1">
							<span
								class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
							>
								<IconCalendar stroke={2} size={16} />
								10/06/2024
							</span>
						</a>
					</div>

					<div class="card-text dark:text-slate-300 mt-4">
						<p>A new era of modern functional programming languages</p>
						<div class="mt-4 space-x-4 rtl:space-x-reverse">
							<a href="/posts/view/1" class="btn-a">Learn more</a>
						</div>
					</div>
				</div>
			</Card>
			<Card>
				<div class=" h-[248px] w-full mb-6">
					<img src={post5} alt="" class=" w-full h-full object-cover" />
				</div>
				<div class="px-6 pb-6">
					<div class="flex justify-between mb-4">
						<div>
							<h5 class="card-title text-slate-900">
								<a href="/posts/view/1">Neural Networks</a>
							</h5>
						</div>
						<a href="null">
							<span
								class="inline-flex leading-5 text-slate-500 dark:text-slate-400 text-sm font-normal"
							>
								<IconCalendar stroke={2} size={16} />
								15/06/2024
							</span>
						</a>
					</div>

					<div class="card-text dark:text-slate-300 mt-4">
						<p>Diving into the complex brain of modern generative AI and exploring ...</p>
						<div class="mt-4 space-x-4 rtl:space-x-reverse">
							<a href="/posts/view/1" class="btn-a">Learn more</a>
						</div>
					</div>
				</div>
			</Card>
		</div>
	</div>
</div>
