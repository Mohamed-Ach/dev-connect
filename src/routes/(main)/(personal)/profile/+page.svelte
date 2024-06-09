<script>
	// ** Images :
	import user1 from '$lib/images/all-img/abde.jpg';

	// ** Icons :
	import IconSparkles from '@tabler/icons-svelte/IconSparkles.svelte';
	import IconUnlink from '@tabler/icons-svelte/IconUnlink.svelte';
	import IconCrown from '@tabler/icons-svelte/IconCrown.svelte';
	import IconStar from '@tabler/icons-svelte/IconStar.svelte';
	import IconMail from '@tabler/icons-svelte/IconMail.svelte';
	import IconEdit from '@tabler/icons-svelte/IconEdit.svelte';

	// ** Components :
	import IconMapPin from '@tabler/icons-svelte/IconMapPin.svelte';
	import BreadCrumps from '$lib/components/ui/BreadCrumps.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Badge from '$lib/components/ui/Badge.svelte';

	let profile = {
		name: 'Mohamed Achernan',
		role: 'DevOps Engineer',
		balance: '5',
		boardCard: '200',
		calendarEvents: '3200',
		email: 'mohamed.achernan219@devconnect.com',
		phone: '100%',
		location: 'Milan, IT',
		joinedDate: '16 April, 2024'
	};
</script>

<BreadCrumps groupTitle="Personal" locationName="Profile" />
<div>
	<div class="space-y-5 profile-page">
		<div
			class="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]"
		>
			<div
				class="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"
			></div>
			<div class="profile-box flex-none md:text-start text-center">
				<div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
					<div class="flex-none">
						<div
							class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
						>
							<img src={user1} alt="" class="w-full h-full object-cover rounded-full" />
							<button
								class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
							>
								<IconEdit stroke={1.5} />
							</button>
						</div>
					</div>
					<div class="flex-1">
						<div class="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
							{profile.name}
						</div>
						<div class="text-sm font-light text-slate-600 dark:text-slate-400">
							{profile.role}
						</div>
					</div>
				</div>
			</div>

			<div
				class="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4"
			>
				<div class="flex-1">
					<div class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
						{profile.balance}
					</div>
					<div class="text-sm text-slate-600 font-light dark:text-slate-300">Active Projects</div>
				</div>

				<div class="flex-1">
					<div class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
						{profile.boardCard}
					</div>
					<div class="text-sm text-slate-600 font-light dark:text-slate-300">Posts</div>
				</div>

				<div class="flex-1">
					<div class="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
						{profile.calendarEvents}
					</div>
					<div class="text-sm text-slate-600 font-light dark:text-slate-300">Connections</div>
				</div>
			</div>
		</div>
		<div class="grid grid-cols-12 gap-6">
			<div class="lg:col-span-4 col-span-12">
				<Card cardTitle="Info" cardSubtitle="" headerSlot="">
					<ul class="list space-y-8">
						<li class="flex space-x-3 rtl:space-x-reverse">
							<div class="flex-none text-2xl text-success-500 dark:text-slate-300">
								<IconCrown stroke={1.5} size={42} />
							</div>
							<div class="flex-1">
								<div
									class="uppercase font-merriweather text-xl text-success-500 dark:text-slate-300 mb-2 leading-[12px]"
								>
									SUCCESS RATE
								</div>
								<button class="font-merriweather text-3xl text-success-500 dark:text-slate-50">
									{profile.phone}
								</button>
							</div>
						</li>

						<li class="flex space-x-3 rtl:space-x-reverse">
							<div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
								<IconMail stroke={1.5} />
							</div>
							<div class="flex-1">
								<div
									class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
								>
									EMAIL
								</div>
								<a
									href={`mailto:${profile.email}`}
									class="text-base text-slate-600 dark:text-slate-50"
								>
									{profile.email}
								</a>
							</div>
						</li>
						<li class="flex space-x-3 rtl:space-x-reverse">
							<div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
								<IconMapPin stroke={1.5} />
							</div>
							<div class="flex-1">
								<div
									class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
								>
									Location
								</div>
								<div class="text-base text-slate-600 dark:text-slate-50">
									{profile.location}
								</div>
							</div>
						</li>
						<li class="flex space-x-3 rtl:space-x-reverse">
							<div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
								<IconUnlink stroke={1.5} />
							</div>
							<div class="flex-1">
								<div
									class="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
								>
									Joined DevConnect
								</div>
								<div class="text-base text-slate-600 dark:text-slate-50">
									{profile.joinedDate}
								</div>
							</div>
						</li>
						<li class="flex space-x-3 rtl:space-x-reverse">
							<div class="flex-none text-2xl text-slate-600 dark:text-slate-300">
								<IconSparkles stroke={1.5} size={42} />
							</div>
							<div class="flex-1">
								<div
									class="uppercase font-merriweather text-xl text-slate-500 dark:text-slate-300 mb-1 leading-[12px]"
								>
									Areas of Interest
								</div>
								<div class="space-xy-5 p-4">
									<Badge
										label="Computer Science"
										className="bg-slate-800 dark:bg-slate-900 text-white"
										icon={IconStar}
									/>
									<Badge
										label="Web Automation"
										className="bg-slate-800 dark:bg-slate-900 text-white"
										icon={IconStar}
									/>
									<Badge
										label="Blockchain Technology"
										className="bg-slate-800 dark:bg-slate-900 text-white"
										icon={IconStar}
									/>
									<Badge
										label="Cyber Security"
										className="bg-slate-800 dark:bg-slate-900 text-white"
										icon={IconStar}
									/>
									<Badge
										label="Artificial Intelligence"
										className="bg-slate-800 dark:bg-slate-900 text-white"
										icon={IconStar}
									/>
								</div>
							</div>
						</li>
					</ul>
				</Card>
			</div>
			<div class="lg:col-span-8 col-span-12">
				<Card cardTitle="User Overview" cardSubtitle="" headerSlot="">
					<div class="relative">
						<div class="w-full flex justify-end items-end pb-3">
							<button
								class="abosulte h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
							>
								<IconEdit stroke={1.5} />
							</button>
						</div>
						<Card
							cardTitle="About Me"
							className="ring-1 ring-secondary-500 dark:text-secondary-500"
							titleClass="text-black-500 text-2xl font-merriweather font-medium"
							noBorder
						>
							<div class="dark:text-white text-black-500 text-sm">
								I am an intermediate Python developer with over two years of experience in python
								programming language. I am an experienced and proficient web scraper using Python to
								extract very large amounts of data from various online sources such as e-commerce,
								business listings and other related data sources. <br /> My area of expertise
								include web scraping-crawling, therefore i have worked and developed a variety of
								software solutions to crawl and obtain data from websites, I have a good experience
								using the micro web framework Flask along with SQLAlchemy database to build small
								web-services and micro-sites with Bootstrap 4. <br /> My top Skills:<br /> <br />✔
								Python programming language.<br /> ✔ Web Scrapping / Web Crawling using ( Selenium
								, Scrapy, Pandas, Beautiful Soup 4 and Requests ). <br /> ✔ XML, JSON, XPath, CSV,
								Regular expressions.<br /> ✔ Google SpreadSheet and Google SpreadSheet API. <br />
								✔ Microsoft Excel.<br /> ✔ Flask Web development. <br /> ✔ Automation Services.
							</div>
						</Card>
						<div class="mt-5 w-full flex justify-end items-end">
							<button
								class="abosulte h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
							>
								<IconEdit stroke={1.5} />
							</button>
						</div>
						<Card
							cardTitle="Skills and Expertise"
							className="mt-3 ring-1 ring-secondary-500 dark:text-secondary-500"
							titleClass="text-black-500 text-2xl font-merriweather font-medium"
							noBorder
						>
							<Card cardTitle="Programming Languages">
								<div class="space-xy-5">
									<Badge
										label="C/C++"
										className="text-sm bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
									/>
									<Badge
										label="Golang"
										className="text-sm bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
									/>
									<Badge
										label="Javascript"
										className="text-sm bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
									/>
									<Badge
										label="Typescript"
										className="text-sm bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
									/>
									<Badge
										label="Python"
										className="text-sm bg-slate-800 dark:bg-slate-900 text-slate-800 dark:text-slate-400 bg-opacity-[0.12] pill"
									/>
								</div>
							</Card>
						</Card>
					</div>
				</Card>
			</div>
		</div>
	</div>
</div>
