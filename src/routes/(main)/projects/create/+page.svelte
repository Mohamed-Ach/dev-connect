<script lang="ts">
	// ** Importing Components
	import TextInput from '$lib/components/ui/TextInput.svelte';
	import TextArea from '$lib/components/ui/TextArea.svelte';
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '$lib/components/ui/Button.svelte';

	// ** Import Static Data :
	import { languages, technologies, categories } from '$lib/store';
	import MultiSelect from 'svelte-multiselect';
	import { page } from '$app/stores';

	// Check if dark mode is enabled :
	let isDark: boolean = $page.data.theme === 'dark';

	let imageUrl: string = '';

	function handleFileChange(event: any) {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();
			reader.onload = (e) => {
				if (e.target && e.target.result) {
					imageUrl = e.target.result.toString();
				}
			};
			reader.readAsDataURL(file);
		}
	}
</script>

<div class="grid xl:grid-cols-2 gap-5">
	<Card cardTitle="Create Projects">
		<div class="space-y-3">
			<TextInput
				label="Project Name*"
				id="pn"
				name="pn"
				type="text"
				placeholder="Management dashboard "
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
					Select the programming languages you're intending to work with :
				</label>
				<!-- Select -->
				<MultiSelect
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
					Select the technologies you're intending to work with
				</label>
				<!-- Select -->
				<MultiSelect
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
					Choose categories that best describe your project:
				</label>
				<!-- Select -->
				<MultiSelect
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
			<TextArea
				id="description"
				name="description"
				label="Project description"
				placeholder="Type here"
			/>
		</div>
	</Card>
	<div class="space-y-5">
		<Card cardTitle="Choose Thumbnail">
			<div class="space-y-2">
				<input type="file" name="thumbnail" accept="image/*" on:change={handleFileChange} />

				<div class="flex justify-center items-center">
					{#if imageUrl}
						<img src={imageUrl} alt="Thumbnail Preview" class="max-w-full block rounded-md mb-6" />
					{:else}
						<img
							src={$page.url.origin + '/api/images/projects/placeholder.png'}
							alt="Thumbnail Placeholder"
							class="max-w-full block rounded-md mb-6"
						/>{/if}
				</div>

				<Button text="Submit" className="btn-dark" />
			</div>
		</Card>
	</div>
</div>

<style>
	input[type='file'] {
		outline: none;
		padding: 4px;
		margin: -4px;
	}

	input[type='file']:focus-within::file-selector-button,
	input[type='file']:focus::file-selector-button {
		outline: 2px solid #0964b0;
		outline-offset: 2px;
	}

	input[type='file']::before {
		top: 16px;
	}

	input[type='file']::after {
		top: 14px;
	}

	input[type='file'] {
		position: relative;
	}

	input[type='file']::file-selector-button {
		width: 136px;
		color: transparent;
	}

	input[type='file']::before {
		position: absolute;
		pointer-events: none;
		left: 50px;
		color: #0964b0;
		content: 'Choose';
		top: 10px;
	}

	input[type='file']::after {
		position: absolute;
		pointer-events: none;
		left: 16px;
		height: 20px;
		width: 20px;
		content: '';
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%230964B0'%3E%3Cpath d='M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zM7 9l1.41 1.41L11 7.83V16h2V7.83l2.59 2.58L17 9l-5-5-5 5z'/%3E%3C/svg%3E");
	}

	input[type='file']::file-selector-button {
		border-radius: 4px;
		padding: 0 16px;
		height: 40px;
		cursor: pointer;
		background-color: white;
		border: 1px solid rgba(0, 0, 0, 0.16);
		box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
		margin-right: 16px;
		transition: background-color 200ms;
	}

	input[type='file']::file-selector-button:hover {
		background-color: #f3f4f6;
	}

	input[type='file']::file-selector-button:active {
		background-color: #e5e7eb;
	}
</style>
