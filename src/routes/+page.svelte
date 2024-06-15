<script lang="ts">
	// Importing Images :
	import logoWhite from '$lib/images/logo/logo-white.svg';
	import logo from '$lib/images/logo/logo.svg';
	import ils1 from '$lib/images/svg/img-1.svg';

	import card4 from '$lib/images/all-img/card-4.png';
	import card6 from '$lib/images/all-img/card-6.png';
	import card7 from '$lib/images/all-img/card-7.png';

	import target from '$lib/images/all-img/target.png';
	import t1 from '$lib/images/users/denniz.jpg';

	// Importing Icons :
	import IconBrandFacebook from '@tabler/icons-svelte/IconBrandFacebookFilled.svelte';
	import IconBrandTwitter from '@tabler/icons-svelte/IconBrandTwitterFilled.svelte';
	import IconBrandLinkedin from '@tabler/icons-svelte/IconBrandLinkedin.svelte';
	import IconBrandGoogle from '@tabler/icons-svelte/IconBrandGoogleFilled.svelte';
	import IconChartBubbleFilled from '@tabler/icons-svelte/IconChartBubbleFilled.svelte';

	// Importing Components :
	import Assistant from '$lib/components/partials/Assistant.svelte';
	import SwitchDark from '$lib/components/tools/SwitchDark.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// Check if dark mode is enabled :
	export let data;
	let isDark: boolean = data.theme === 'dark';
	function handleThemeChange(event: CustomEvent<{ isDark: boolean }>) {
		isDark = event.detail.isDark;
	}
</script>

<div dir="ltr" class="app-warp {isDark ? 'dark' : 'light'} skin--default">
	<div class="min-h-screen">
		<div class="xl:absolute left-0 top-0 w-full">
			<div class="flex flex-wrap justify-between items-center py-6 container">
				<div>
					<a href="/">
						<img src={isDark ? logoWhite : logo} alt="" />
					</a>
				</div>
				<div class="flex justify-center items-center">
					{#if data.user}
						<Button text="Profile" link="/profile" className="btn-outline-dark btn-sm" />
					{:else}
						<Button text="Login" link="/login" className="btn-outline-dark btn-sm" />
					{/if}
					<SwitchDark {isDark} on:themeChange={handleThemeChange} ClassName="md:pl-2 pl-3" />
				</div>
			</div>
		</div>
		<div class="container">
			<div class="flex justify-between flex-wrap items-center min-h-screen">
				<div class="max-w-[500px] space-y-4">
					<div class="relative flex space-x-3 items-center text-2xl text-slate-900 dark:text-white">
						<span class="inline-block w-[25px] bg-secondary-500 h-[1px]"></span>
						<span>Hey There</span>
					</div>
					<div
						class="xl:text-[70px] xl:leading-[70px] text-4xl font-semibold text-slate-900 dark:text-white"
					>
						Where Ideas Meet Execution
					</div>
					<p class="font-normal text-slate-600 dark:text-slate-300 max-w-[400px]">
						Discover a platform tailored for creative individuals. Share your work, ignite
						inspiration, and collaborate seamlessly on projects big and small.
					</p>
					<div class="bg-white flex items-center px-3 rounded">
						<input
							type="text"
							placeholder="Enter your email"
							class="flex-1 bg-transparent h-full block w-full py-6 placeholder:text-secondary-500 text-base focus:outline-none focus:ring-0"
						/>
						<div class="flex-none">
							{#if !data.user}
								<Button text="Join Us" link="/register" className="btn-dark btn-sm px-6" />
							{:else}
								<Button text="Discover" link="/posts/browse" className="btn-dark btn-sm px-6" />
							{/if}
						</div>
					</div>
					<div class="text-sm text-slate-500 dark:text-slate-400">
						*Don’t worry we will not spam you :
					</div>
				</div>
				<div>
					<img src={ils1} alt="banner" />
				</div>
			</div>

			<hr class="border-t-2 border-black my-4" />

			<!-- Accelerate Innovation -->
			<div class="md:px-10 px-5 pt-10 pb-20 font-merriweather">
				<div class="flex flex-wrap justify-center items-center mb-10">
					<div>
						<h2 class="text-3xl font-bold italic font-merriweather text-center sm:text-4xl">
							Accelerate Innovation
						</h2>
						<p class="max-w-3xl mx-auto mt-4 text-xl text-center">
							When you join the community, you open up a world of opportunities to connect and get
							involved.
						</p>
					</div>
				</div>
				<div class="space-y-5">
					<div class="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 card-height-auto">
						<Card cardTitle="Connect" cardSubtitle="" headerSlot="">
							<div class="h-[140px] w-full mb-6">
								<img src={card4} alt="" class="block w-full h-full object-cover rounded-md" />
							</div>
							<div class="text-sm">
								Work with the largest network of independent professionals and get things done—from
								quick turnarounds to big transformations.
							</div>
							<div class="mt-4 space-x-4 rtl:space-x-reverse">
								<a href="null" class="btn-link"> Learn more </a>
								{#if !data.user}
									<a href="/register" class="btn-link"> Join us now</a>
								{:else}
									<a href="/posts/browse" class="btn-link">Discover</a>
								{/if}
							</div>
						</Card>
						<Card cardTitle="Create" cardSubtitle="" headerSlot="">
							<div class="h-[140px] w-full mb-6">
								<img src={card6} alt="" class="block w-full h-full object-cover rounded-md" />
							</div>
							<div class="text-sm">
								You can now launch your own projects and find collaborators to work with you on
								carrying it to success. it's never been easier.
							</div>
							<div class="mt-4 space-x-4 rtl:space-x-reverse">
								<a href="null" class="btn-link"> Learn more </a>
								<a href="null" class="btn-link"> Start a Project </a>
							</div>
						</Card>
						<Card cardTitle="Collaborate" cardSubtitle="" headerSlot="">
							<div class="h-[140px] w-full mb-6">
								<img src={card7} alt="" class="block w-full h-full object-cover rounded-md" />
							</div>
							<div class="text-sm">
								One of the advantages of utilizing Dev Connect is finding talent with different
								skills quickly as our needs change.
							</div>
							<div class="mt-4 space-x-4 rtl:space-x-reverse">
								<a href="null" class="btn-link"> Learn more </a>
								<a href="null" class="btn-link"> Start a Meet </a>
							</div>
						</Card>
					</div>
				</div>
			</div>
			<!-- Accelerate Innovation -->

			<hr class="border-t-2 border-black my-4" />

			<!-- Features -->
			<div class="container max-w-xl p-10 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
				<div>
					<h2 class="text-3xl font-bold italic font-merriweather text-center sm:text-5xl">
						We're experts and brand creators
					</h2>
					<p class="max-w-3xl mx-auto mt-4 text-xl text-center">
						Dev Connect enables us to differentiate ourselves from our competitors and produce
						content at a higher caliber.
					</p>
				</div>
				<div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
					<div>
						<div class="mt-4 space-y-12">
							<div class="flex">
								<div class="flex-shrink-0">
									<div class="flex items-center justify-center w-12 h-12 rounded-md text-blue-500">
										<IconChartBubbleFilled size={64} />
									</div>
								</div>
								<div class="ml-4">
									<h4 class="text-5xl font-medium italic font-merriweather">79%</h4>
									<p class="mt-4">
										Almost 4 out of 5 users have reported that dev connect had significant impact on
										their projects coming to life.
									</p>
								</div>
							</div>
							<div class="flex">
								<div class="flex-shrink-0">
									<div class="flex items-center justify-center w-12 h-12 rounded-md text-red-500">
										<IconChartBubbleFilled size={64} />
									</div>
								</div>
								<div class="ml-4">
									<h4 class="text-5xl font-medium italic font-merriweather">5M+</h4>
									<p class="mt-4">
										The platform is host to over 5 million users, and we are growing every day.
									</p>
								</div>
							</div>
							<div class="flex">
								<div class="flex-shrink-0">
									<div
										class="flex items-center justify-center w-12 h-12 rounded-md text-yellow-500"
									>
										<IconChartBubbleFilled size={64} />
									</div>
								</div>
								<div class="ml-4">
									<h4 class="text-5xl font-medium italic font-merriweather">500K</h4>
									<p class="mt-4">
										More than half a million projects have been completed on the platform, and the
										number is always growing.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div aria-hidden="true" class="mt-10 lg:mt-0">
						<img
							alt="target"
							width="600"
							height="600"
							src={target}
							class="mx-auto"
							style="color:transparent"
						/>
					</div>
				</div>
			</div>
			<!-- Features -->

			<hr class="border-t-2 border-black my-4" />

			<!-- Testimonials -->

			<div class="container lg:p-10 p-2 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
				<div>
					<h2 class="text-3xl font-bold italic font-merriweather text-center sm:text-4xl">
						We have worked with thousands of amazing people
					</h2>
					<p class="max-w-3xl mx-auto mt-4 text-xl text-center">
						We're proud to have worked with some of the best in the industry. Here's what they have
						to say about it
					</p>
				</div>
				<div class="flex justify-center items-center">
					<div class="md:w-1/2 card-height-auto">
						<Card cardTitle="" cardSubtitle="" headerSlot="">
							<div class="flex">
								<div class="flex-0 mr-6">
									<div class="author-img w-[65px] h-[88px] rounded-[40px]">
										<img src={t1} alt="testimonial" class="w-full h-full object-cover" />
									</div>
								</div>
								<div class="flex-1">
									<div class="mb-4 text-base">
										“I'm proud to have given the chance to work on this amazing project, and I will
										continue giving it my best. ”
									</div>
									<div class="space-x-5">
										<span class="inline-block font-medium text-base"> Yassine Gliouel </span>
										<span class="inline-block">Future Developer</span>
									</div>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</div>
			<!-- Testimonials -->

			<hr class="border-t-2 border-black my-4" />
		</div>
		<div class="bottom-0 w-full">
			<div class="container">
				<div class="md:flex justify-between items-center flex-wrap space-y-4 py-6">
					<div>
						<ul class="flex md:justify-start justify-center space-x-3">
							<li>
								<a href="https://www.facebook.com" class="social-link">
									<IconBrandFacebook size={18} />
								</a>
							</li>
							<li>
								<a href="https://www.x.com" class="social-link">
									<IconBrandTwitter size={18} />
								</a>
							</li>
							<li>
								<a href="https://www.linkedin.com" class="social-link">
									<IconBrandLinkedin stroke={2} size={18} />
								</a>
							</li>
							<li>
								<a href="https://www.google.com" class="social-link">
									<IconBrandGoogle size={18} />
								</a>
							</li>
						</ul>
					</div>
					<div>
						<ul class="flex md:justify-start justify-center space-x-3">
							<li>
								<a
									href="null"
									class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
								>
									Privacy policy
								</a>
							</li>
							<li>
								<a
									href="null"
									class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
								>
									Faq
								</a>
							</li>
							<li>
								<a
									href="null"
									class="text-slate-500 dark:text-slate-400 text-sm transition duration-150 hover:text-slate-900"
								>
									Email us
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<Assistant />
