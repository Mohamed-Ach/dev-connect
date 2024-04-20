<script lang="ts">
	import { MultiSelect } from 'svelte-multiselect';
	import { fade, fly } from 'svelte/transition';
	import { cubicIn } from 'svelte/easing';
	import { page } from '$app/stores';

	// ** Import icons :
	import IconArrowNarrowRight from '@tabler/icons-svelte/IconArrowNarrowRight.svelte';

	// Import images :
	import onBoarding from '$lib/images/all-img/on-boarding.png';
	import logoWhite from '$lib/images/logo/logo-white.svg';
	import logo from '$lib/images/logo/logo.svg';

	import TextInput from '$lib/components/ui/TextInput.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import TextArea from '$lib/components/ui/TextArea.svelte';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';

	// ** Section navigation :
	let currentSection: number = 4;
	let previousSection: number = 0;

	const ui_lib1 = [
		'Javascript',
		'Typescript',
		'Python',
		'Java',
		'C++',
		'C#',
		'Ruby',
		'PHP',
		'Swift',
		'Kotlin',
		'Rust',
		'Go',
		'Scala',
		'Perl',
		'Lua',
		'Haskell',
		'Erlang',
		'Clojure',
		'F#',
		'R',
		'Dart',
		'Julia',
		'Groovy',
		'Objective-C',
		'Shell',
		'PowerShell',
		'SQL',
		'HTML',
		'CSS',
		'SASS',
		'LESS',
		'SCSS',
		'Stylus',
		'PostCSS',
		'GraphQL'
	];
	const ui_lib2 = [
		'TailwindCSS',
		'Bootstrap',
		'Materialize',
		'Bulma',
		'Ant Design',
		'Chakra UI',
		'Material UI',
		'Semantic UI',
		'Foundation',
		'UIKit',
		'Flutter',
		'React',
		'Vue',
		'Angular',
		'Svelte',
		'Ember',
		'Backbone',
		'Meteor',
		'Polymer',
		'Aurelia',
		'Mithril',
		'Preact',
		'Alpine.js',
		'Stimulus',
		'Marko',
		'Solid.js',
		'Blitz.js',
		'Nuxt.js',
		'Next.js',
		'Gatsby',
		'Sapper',
		'Gridsome',
		'Astro',
		'Redwood.js',
		'AngularJS',
		'jQuery',
		'Lodash',
		'Underscore',
		'Moment.js',
		'Day.js',
		'Luxon',
		'date-fns',
		'Ramda',
		'RxJS',
		'Redux',
		'MobX',
		'Vuex',
		'Apollo',
		'Relay',
		'React Query',
		'SWR',
		'Zustand',
		'Recoil',
		'Jotai',
		'Redux Toolkit',
		'Easy Peasy',
		'Overmind',
		'MobX State Tree',
		'XState',
		'React Hook Form',
		'Formik',
		'Yup',
		'Zod',
		'Joi',
		'Superstruct',
		'Ajv',
		'Yup',
		'Zod',
		'Joi',
		'Superstruct',
		'Ajv',
		'React Router',
		'Reach Router',
		'Next.js Router',
		'Vue Router',
		'Nuxt.js Router'
	];
	const ui_lib3 = [
		'Computer Science',
		'Software Engineering',
		'Web Development',
		'Mobile Development',
		'Game Development',
		'Data Science',
		'Machine Learning',
		'Artificial Intelligence',
		'Cybersecurity',
		'Cloud Computing',
		'DevOps',
		'Blockchain',
		'Internet of Things',
		'Big Data',
		'Quantum Computing',
		'Augmented Reality',
		'Virtual Reality',
		'Embedded Systems',
		'Robotics',
		'Natural Language Processing',
		'Computer Vision',
		'Human-Computer Interaction',
		'User Experience Design',
		'User Interface Design',
		'Frontend Development',
		'Backend Development',
		'Fullstack Development',
		'Database Management',
		'Network Engineering',
		'Systems Administration',
		'IT Support',
		'Technical Writing',
		'Technical Training',
		'Project Management',
		'Product Management',
		'Quality Assurance',
		'Software Testing',
		'Software Architecture',
		'Software Development',
		'Software Maintenance',
		'Software Deployment',
		'Software Documentation',
		'Software Licensing',
		'Software Compliance',
		'Software Security',
		'Software Auditing',
		'Software Monitoring',
		'Software Optimization',
		'Software Debugging',
		'Software Performance',
		'Software Scalability',
		'Software Reliability',
		'Software Resilience',
		'Software Recovery',
		'Software Backup',
		'Software Restoration',
		'Software Migration',
		'Software Integration',
		'Software Interoperability',
		'Software Portability',
		'Software Usability',
		'Software Accessibility',
		'Software Inclusivity',
		'Software Diversity',
		'Software Equity',
		'Software Ethics',
		'Software Governance',
		'Software Regulation',
		'Software Compliance',
		'Software Auditing',
		'Software Monitoring',
		'Software Optimization',
		'Software Debugging',
		'Software Performance',
		'Software Scalability',
		'Software Reliability',
		'Software Resilience',
		'Software Recovery',
		'Software Backup',
		'Software Restoration',
		'Software Migration',
		'Software Integration',
		'Software Interoperability',
		'Software Portability',
		'Software Usability',
		'Software Accessibility',
		'Software Inclusivity',
		'Software Diversity',
		'Software Equity',
		'Software Ethics',
		'Software Governance',
		'Software Regulation',
		'Software Compliance',
		'Software Auditing',
		'Software Monitoring',
		'Software Optimization',
		'Software Debugging',
		'Software Performance',
		'Software Scalability',
		'Software Reliability',
		'Software Resilience',
		'Software Recovery',
		'Software Backup',
		'Software Restoration',
		'Software Migration',
		'Software Integration',
		'Software Interoperability',
		'Software Portability',
		'Software Usability',
		'Software Accessibility',
		'Software Inclusivity',
		'Software Diversity',
		'Software Equity',
		'Software Ethics'
	];
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

					{#if currentSection === 1}
						<section
							id="section-1"
							in:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250, delay: 200 }}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Tell us about yourself
							</h2>
							<div class="mt-8 flex w-full flex-col pb-8">
								<div class="relative mb-4">
									<input class="peer hidden" id="radio_1" type="radio" name="radio" checked />
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
									<input class="peer hidden" id="radio_2" type="radio" name="radio" />
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
										<input
											id="terms"
											name="terms"
											type="checkbox"
											class="h-6 w-6 shrink-0 accent-gray-900"
											checked
										/>
										<span id="terms-description" class="text-sm dark:text-slate-400 text-gray-600"
											>I agree to the <a class="underline" href="/privacy">Terms and Conditions</a>.
											Learn about our Privacy Policy and our measures to keep your data safe and
											secure.</span
										>
									</label>
								</div>

								<button
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
					{:else if currentSection === 2}
						<section
							id="section-2"
							in:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250, delay: 200 }}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Experience and Skills
							</h2>
							<div class="mt-8 flex w-full flex-col pb-8">
								<TextInput
									label="Choose a title for your profile :"
									className="mb-4"
									name="FullName"
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
										placeholder="Select languages..."
										options={ui_lib1}
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
										placeholder="Select technologies..."
										options={ui_lib2}
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
										placeholder="Select Interests..."
										options={ui_lib3}
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
										on:click={() => {
											currentSection--;
											previousSection = currentSection;
										}}
										class="px-5 mr-5 my-2 rounded-md bg-gray-500 py-3 font-medium text-white"
									>
										Previous</button
									>
									<button
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
					{:else if currentSection === 3}
						<section
							id="section-3"
							in:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250, delay: 200 }}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
						>
							<h2 class="font-merriweather text-3xl font-bold text-gray-700">
								Goals and Expectations
							</h2>
							<div class="mt-8 flex w-full flex-col pb-8">
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

								<TextArea
									label="What features or resources would you like to see on the platform?"
									className="mb-4"
									id="feedback"
									name="feedback"
									placeholder="Type Here..."
									row={3}
								/>

								<div class="flex justify-end items-end">
									<button
										on:click={() => {
											currentSection--;
											previousSection = currentSection;
										}}
										class="px-5 mr-5 my-2 rounded-md bg-gray-500 py-3 font-medium text-white"
									>
										Previous</button
									>
									<button
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
					{:else if currentSection === 4}
						<section
							id="section-4"
							in:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250, delay: 200 }}
							out:fly={{ x: currentSection > previousSection ? 50 : -50, duration: 250 }}
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
										on:click={() => {
											currentSection--;
											previousSection = currentSection;
										}}
										class="px-5 mr-5 my-2 rounded-md bg-gray-500 py-3 font-medium text-white"
									>
										Previous</button
									>
									<a
										href="/profile"
										class="px-5 my-2 rounded-md bg-gray-900 py-3 font-medium text-white"
									>
										Go to Profile</a
									>
								</div>
							</div>
						</section>
					{/if}
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
