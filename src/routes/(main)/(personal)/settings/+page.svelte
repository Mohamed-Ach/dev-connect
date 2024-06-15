<script lang="ts">
	// ** Importing Components
	import TextInput from '$lib/components/ui/TextInput.svelte';
	import TextArea from '$lib/components/ui/TextArea.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	// ** Import Static Data :
	import { languages, technologies, categories } from '$lib/store';
	import MultiSelect from 'svelte-multiselect';
	import { page } from '$app/stores';

	// ** Importing Icons :
	import IconCircleDashedCheck from '@tabler/icons-svelte/IconCircleDashedCheck.svelte';
	import IconAlertTriangle from '@tabler/icons-svelte/IconAlertTriangle.svelte';
	import IconUpload from '@tabler/icons-svelte/IconUpload.svelte';

	// Check if dark mode is enabled :
	import { applyAction, enhance } from '$app/forms';
	import Alert from '$lib/components/ui/Alert.svelte';
	let isDark: boolean = $page.data.theme === 'dark';
	let avatarName: string = '';
	let imageUrl: string = '';
	export let form: any;
	export let data;

	async function handleFileChange(event: any) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target && e.target.result) {
					imageUrl = e.target.result.toString();
				}
			};
			reader.readAsDataURL(file);
			avatarName = await uploadAvatar(file);
		}
	}

	function triggerFileInput() {
		const fileInput = document.getElementById('fileInput') as HTMLInputElement;
		if (fileInput) {
			fileInput.click();
		}
	}

	async function uploadAvatar(file: any) {
		const formData = new FormData();
		formData.append('image', file);

		const response = await fetch('/api/images/users', {
			method: 'POST',
			body: formData
		});

		if (!response.ok) {
			console.log('not ok');
		}

		const result = await response.json();
		return result.name;
	}
</script>

<form
	enctype="multipart/form-data"
	id="upload-form"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<div class="grid xl:grid-cols-2 gap-5">
		<Card cardTitle="Modify Personal Settings">
			<div class="space-y-3">
				<TextInput
					label="First Name"
					value={data.userData?.firstName}
					id="pn"
					name="firstName"
					type="text"
					placeholder="Type here..."
					horizontal={false}
					description=""
					isMask={false}
					validate={true}
					required={true}
					hasIcon={true}
					className="custom-class"
					error=""
				/>
				<TextInput
					label="Last Name"
					value={data.userData?.lastName}
					id="pn"
					name="lastName"
					type="text"
					placeholder="Type here... "
					horizontal={false}
					description=""
					isMask={false}
					validate={true}
					required={true}
					hasIcon={true}
					className="custom-class"
					error=""
				/>
				<TextInput
					label="Email"
					value={data.userData?.email}
					id="pn"
					name="pn"
					type="text"
					placeholder="Type here... "
					horizontal={false}
					description=""
					isMask={false}
					validate={true}
					required={true}
					hasIcon={true}
					className="custom-class"
					error=""
					readonly
				/>
				<TextInput
					label="User Title"
					value={data.userData?.title}
					id="pn"
					name="title"
					type="text"
					placeholder="Type here... "
					horizontal={false}
					description=""
					isMask={false}
					validate={true}
					required={true}
					hasIcon={true}
					className="custom-class"
					error=""
				/>
				<div class="mb-4">
					<label for="select languages" class="form-label">
						Select the programming languages relevant to you :
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
						Select the technologies relevant to you :</label
					>
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
						Choose categories that best describe your Interests:
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
			</div>
		</Card>
		<div class="space-y-5">
			<Card cardTitle="Choose Your Avatar">
				<div class="space-y-2">
					<input
						type="file"
						accept="image/*"
						on:change={handleFileChange}
						class="hidden"
						id="fileInput"
					/>
					<input type="text" name="avatar" bind:value={avatarName} class="hidden" hidden />

					<div class="flex justify-center items-center">
						<div class="profile-box flex-none md:text-start text-center">
							<div class="md:flex items-end md:space-x-6 rtl:space-x-reverse">
								<div class="flex-none">
									<div
										class="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative"
									>
										{#if imageUrl}
											<img
												src={imageUrl}
												alt="Thumbnail Preview"
												class="w-full h-full object-cover rounded-full"
											/>
										{:else if data.userData?.avatar}
											<img
												src={$page.url.origin + '/api/images/users/' + data.userData.avatar}
												alt="Thumbnail Placeholder"
												class="w-full h-full object-cover rounded-full"
											/>
										{:else if data.userData?.sex === 'M'}
											<img
												src={$page.url.origin + '/api/images/users/male-placeholder.png'}
												alt="Thumbnail Placeholder"
												class="w-full h-full object-cover rounded-full"
											/>
										{:else}
											<img
												src={$page.url.origin + '/api/images/users/female-placeholder.png'}
												alt="Thumbnail Placeholder"
												class="w-full h-full object-cover rounded-full"
											/>
										{/if}

										<button
											type="button"
											on:click={triggerFileInput}
											class="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
										>
											<IconUpload stroke={1.5} />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<TextArea
						name="bio"
						id="description"
						label="Edit your personal bio"
						placeholder="Type here"
						row={8}
						value={data.userData?.bio}
					/>

					<button
						type="submit"
						class="btn-dark my-8 px-4 flex items-center justify-center rounded-md bg-gray-900 py-3 font-medium text-white"
						>Save Info
					</button>

					{#if form?.error}
						<Alert
							dismissible
							icon={IconAlertTriangle}
							className=" light-mode alert-danger"
							label={form.error}
						/>
					{/if}
					{#if form?.success}
						<Alert
							dismissible
							icon={IconCircleDashedCheck}
							className=" light-mode alert-success"
							label={form.success}
						/>
					{/if}
				</div>
			</Card>
		</div>
	</div>
</form>
