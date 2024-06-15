<script lang="ts">
	// ** Import libraries :
	import { MultiSelect } from 'svelte-multiselect';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { page } from '$app/stores';

	// ** Import Static Data :
	import { languages, technologies, categories } from '$lib/store';

	// ** Import icons :
	import IconArrowNarrowRight from '@tabler/icons-svelte/IconArrowNarrowRight.svelte';
	import IconWoman from '@tabler/icons-svelte/IconWoman.svelte';
	import IconMan from '@tabler/icons-svelte/IconMan.svelte';

	// ** Import images :
	import onBoarding from '$lib/images/all-img/on-boarding.png';
	import logoWhite from '$lib/images/logo/logo-white.svg';
	import logo from '$lib/images/logo/logo.svg';

	// ** Import components :
	import TextInput from '$lib/components/ui/TextInput.svelte';
	import TextArea from '$lib/components/ui/TextArea.svelte';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';
	import { applyAction, enhance } from '$app/forms';

	// ** Section navigation :
	let currentSection: number = 1;
	let previousSection: number = 0;
	let gender = '';
</script>

<div class={isDark ? 'dark' : 'light'}>
	<div class="flex w-screen flex-wrap text-slate-800 dark:bg-slate-800 bg-white overflow-hidden">
		<div class="flex w-full flex-col md:w-1/2">
			<div class="flex justify-center pt-6 md:justify-start md:pl-12">
				<a href="/"> <img src={isDark ? logoWhite : logo} alt="logo" class="mb-10" /></a>
			</div>
			<div
				class="my-auto md:px-0 px-5 mx-auto flex flex-col justify-center pt-4 md:justify-start lg:w-[34rem]"
			>
				<div class="flex w-full flex-col rounded-2xl bg-grey px-2 sm:px-14">
					<div class="mx-auto w-full max-w-md pb-16 px-8 sm:px-0">
						<div class="relative">
							<div class="absolute left-0 top-2 h-0.5 w-full bg-white" aria-hidden="true">
								<div class="absolute h-full w-1/3 bg-gray-900"></div>
								<!-- change to w-2/3 for next step -->
								<div
									class="left absolute left-1/3 h-full w-1/3 bg-gradient-to-r from-gray-900"
								></div>
								<!-- change to left-1/2 for next step -->
							</div>
							<ul class="relative flex w-full justify-between">
								{#each Array(4) as _, i}
									<li class="text-left" transition:fade={{ delay: 500, easing: cubicIn }}>
										<button
											class="flex h-5 w-5 items-center justify-center rounded-full {currentSection ===
											i + 1
												? 'bg-gray-600 ring ring-gray-600 ring-offset-2"'
												: currentSection > i + 1
													? 'bg-gray-600'
													: 'bg-gray-300'}  text-xs font-semibold text-white"
											on:click={() => {
												previousSection = currentSection;
												currentSection = i + 1;
											}}>{i + 1}</button
										>
									</li>
								{/each}
							</ul>
						</div>
					</div>
					<form
						class="space-y-4"
						method="POST"
						use:enhance={() => {
							return async ({ result }) => {
								await applyAction(result);
							};
						}}
					>
						<section
							id="section-1"
							in:fly={{
								x: currentSection > previousSection ? 50 : -50,
								duration: 250,
								delay: 200
							}}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
							hidden={currentSection !== 1}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Tell us about yourself
							</h2>
							<div class="mt-8 flex w-full flex-col pb-8">
								<div class="relative mb-4">
									<input
										class="peer hidden"
										id="radio_1"
										type="radio"
										name="userType"
										value="student"
										checked
									/>
									<span
										class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 dark:bg-slate-100/80 bg-white peer-checked:border-gray-900"
									></span>
									<label
										class="flex cursor-pointer flex-col rounded-2xl border border-gray-300 dark:bg-slate-100/80 p-4 pr-8 sm:pr-16"
										for="radio_1"
									>
										<span class="mb-2 text-lg font-semibold">Computer Science Student</span>
										<p class="text-sm sm:text-base">
											I'm currently enrolled in a computer science program or related field of
											study.
										</p></label
									>
								</div>
								<div class="relative mb-4">
									<input
										class="peer hidden"
										id="radio_2"
										type="radio"
										name="userType"
										value="hobbyist"
									/>
									<span
										class="absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 dark:bg-slate-100/80 bg-white peer-checked:border-gray-900"
									></span>
									<label
										class="flex cursor-pointer flex-col rounded-2xl border border-gray-300 dark:bg-slate-100/80 p-4 pr-8 sm:pr-16"
										for="radio_2"
									>
										<span class="mb-2 text-lg font-semibold">Computer Science Hobbyist</span>
										<p class="text-sm sm:text-base">
											Self-taught or learning through online resources, tutorials, and personal
											projects
										</p>
									</label>
								</div>
								<div class="my-4 space-y-3">
									<label for="terms" class="flex space-x-4">
										<h4 class="font-merriweather text-xl font-bold text-gray-700">You are a</h4>
									</label>
									<div class="flex align-center space-x-4 items-center">
										<div class="flex items-center mb-4">
											<input
												id="male"
												name="gender"
												type="radio"
												value="M"
												class="hidden"
												bind:group={gender}
											/>
											<label for="male" class="flex items-center cursor-pointer">
												<span
													class="cors w-4 h-4 inline-block mr-2 border border-gray-400 rounded-full"
												></span>
												<IconMan stroke={2} size={24} />
												<span class="text-gray-700">Male</span>
											</label>
										</div>
										<div class="flex items-center mb-4">
											<input
												id="female"
												name="gender"
												type="radio"
												value="F"
												class="hidden"
												bind:group={gender}
											/>
											<label for="female" class="flex items-center cursor-pointer">
												<span
													class="cors w-4 h-4 inline-block mr-2 border border-gray-400 rounded-full"
												></span>
												<IconWoman stroke={2} size={24} />
												<span class="text-gray-700">Female</span>
											</label>
										</div>
									</div>
								</div>

								<button
									type="button"
									on:click={() => {
										currentSection++;
										previousSection = currentSection;
									}}
									class="my-2 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
								>
									Next <span>&NonBreakingSpace; </span>
									<IconArrowNarrowRight stroke={2} size={24} />
								</button>
							</div>
						</section>

						<section
							id="section-2"
							in:fly={{
								x: currentSection > previousSection ? 50 : -50,
								duration: 250,
								delay: 200
							}}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
							hidden={currentSection !== 2}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Experience and Skills
							</h2>
							<div class="mt-8 flex w-full flex-col pb-8">
								<TextInput
									label="Choose a title for your profile :"
									className="mb-4"
									name="title"
									error={false}
									validate={false}
									isMask={false}
									id="h_Fullname"
									type="text"
									placeholder="Title..."
									description=""
									horizontal={false}
								/>
								<div class="mb-4">
									<label for="select languages" class="form-label">
										Select the programming languages you're familiar with :
									</label>
									<!-- Select -->
									<MultiSelect
										name="languages"
										placeholder="Select languages..."
										options={languages}
										ulOptionsStyle=""
										liOptionStyle=""
										liSelectedStyle="background-color: #000; color: #fff;"
										style=""
										ulSelectedStyle="color: #fff; font-size: 0.9rem; padding: .2rem;"
										inputStyle="color: {isDark
											? 'white'
											: 'black'}; padding-top: .25rem; padding-bottom: .25rem;"
									/>
									<!-- Select -->
								</div>

								<div class="mb-4">
									<label for="select languages" class="form-label">
										Select the technologies you're most familiar with
									</label>
									<!-- Select -->
									<MultiSelect
										name="technologies"
										placeholder="Select technologies..."
										options={technologies}
										ulOptionsStyle=""
										liOptionStyle=""
										liSelectedStyle="background-color: #000; color: #fff;"
										style=""
										ulSelectedStyle="color: #fff; font-size: 0.9rem; padding: .2rem;"
										inputStyle="color: {isDark
											? 'white'
											: 'black'}; padding-top: .25rem; padding-bottom: .25rem;"
									/>
									<!-- Select -->
								</div>
								<div class="mb-4">
									<label for="select languages" class="form-label">
										Select your Areas of Interest or Specialization :
									</label>
									<!-- Select -->
									<MultiSelect
										name="categories"
										placeholder="Select Interests..."
										options={categories}
										ulOptionsStyle=""
										liOptionStyle=""
										liSelectedStyle="background-color: #000; color: #fff;"
										style=""
										ulSelectedStyle="color: #fff; font-size: 0.9rem; padding: .2rem;"
										inputStyle="color: {isDark
											? 'white'
											: 'black'}; padding-top: .25rem; padding-bottom: .25rem;"
									/>
									<!-- Select -->
								</div>
								<div class="flex justify-end items-end mb-4">
									<button
										type="button"
										on:click={() => {
											currentSection--;
											previousSection = currentSection;
										}}
										class="px-5 mr-5 my-2 rounded-md bg-gray-500 py-3 font-medium text-white"
									>
										Previous</button
									>
									<button
										type="button"
										on:click={() => {
											currentSection++;
											previousSection = currentSection;
										}}
										class="px-5 my-2 rounded-md bg-gray-900 py-3 font-medium text-white"
									>
										Next</button
									>
								</div>
							</div>
						</section>

						<section
							id="section-3"
							in:fly={{
								x: currentSection > previousSection ? 50 : -50,
								duration: 250,
								delay: 200
							}}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
							hidden={currentSection !== 3}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Goals and Expectations
							</h2>
							<div class="mt-8 flex w-full flex-col pb-8">
								<TextArea
									label="Tell us about yourself and your background (Bio):"
									name="bio"
									className="mb-4"
									id="feedback"
									placeholder="Type Here..."
									row={4}
								/>

								<TextInput
									label="What are your goals for using this platform? (e.g., learning new skills, helping others, finding friends, etc...)"
									className="mb-4"
									name="goals"
									error={false}
									validate={false}
									isMask={false}
									id="h_Fullname"
									type="text"
									placeholder="Type Here..."
									description=""
									horizontal={false}
								/>

								<TextInput
									label="Are there any specific challenges or problems you're looking to solve?"
									className="mb-4"
									name="goals"
									error={false}
									validate={false}
									isMask={false}
									id="h_Fullname"
									type="text"
									placeholder="Type Here..."
									description=""
									horizontal={false}
								/>

								<div class="flex justify-end items-end">
									<button
										type="button"
										on:click={() => {
											currentSection--;
											previousSection = currentSection;
										}}
										class="px-5 mr-5 my-2 rounded-md bg-gray-500 py-3 font-medium text-white"
									>
										Previous</button
									>
									<button
										type="button"
										on:click={() => {
											currentSection++;
											previousSection = currentSection;
										}}
										class="px-5 my-2 rounded-md bg-gray-900 py-3 font-medium text-white"
									>
										Next</button
									>
								</div>
							</div>
						</section>

						<section
							id="section-4"
							in:fly={{
								x: currentSection > previousSection ? 50 : -50,
								duration: 250,
								delay: 200
							}}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
							hidden={currentSection !== 4}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Congratulations! You're all set.
							</h2>
							<div class="flex flex-col justify-center items-center">
								<span class="text-8xl my-6">🎉</span>
								<p class="text-lg text-gray-600 dark:text-white">
									You've successfully completed the on-boarding process. You can now go to your
									profile to fill in all of you personal details and start exploring the platform.
								</p>
							</div>
							<div class="mt-8 flex w-full flex-col pb-28">
								<div class="flex justify-end items-end">
									<button
										type="button"
										on:click={() => {
											currentSection--;
											previousSection = currentSection;
										}}
										class="px-5 mr-5 my-2 rounded-md bg-gray-500 py-3 font-medium text-white"
									>
										Previous</button
									>
									<button
										type="submit"
										class="px-5 my-2 rounded-md bg-gray-900 py-3 font-medium text-white"
									>
										Go to Profile</button
									>
								</div>
							</div>
						</section>
					</form>
				</div>
			</div>
		</div>
		<div
			class="relative hidden h-screen select-none flex-col justify-center dark:bg-slate-900 bg-slate-100/80 bg-gradient-to-br md:flex md:w-1/2"
		>
			<div class="px-8 text-slate-700 dark:text-white xl:w-[40rem]">
				<p class="text-4xl font-merriweather font-semibold leading-10">
					Join the <span class="whitespace-nowrap py-2 text-blue-600">Member-Owned</span> tech society
					now.
				</p>
			</div>
			<img class="w-full max-w-3xl object-cover" alt="on-boarding" src={onBoarding} />
		</div>
	</div>
</div>

<style>
	input:checked + label span.cors {
		background-color: #1f2937;
		border-color: #1f2937;
	}

	label span {
		transition:
			background-color 0.2s,
			border-color 0.2s;
	}
</style>
