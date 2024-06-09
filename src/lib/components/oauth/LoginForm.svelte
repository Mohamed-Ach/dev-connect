<script lang="ts">
	// ** Importing Icons :
	import IconCircleDashedCheck from '@tabler/icons-svelte/IconCircleDashedCheck.svelte';
	import IconAlertTriangle from '@tabler/icons-svelte/IconAlertTriangle.svelte';

	// ** Importing Components :
	import Alert from '$lib/components/ui/Alert.svelte';
	import Textinput from '../ui/TextInput.svelte';
	import Checkbox from '../ui/CheckBox.svelte';
	import Button from '../ui/Button.svelte';

	// ** Importing Functions :
	import { applyAction, enhance } from '$app/forms';
	export let form: any;

	// ** Form Validation :
	let errorEmail: string = '';
	const validateEmail = (event: InputEvent) => {
		const email = (event.target as HTMLInputElement).value;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errorEmail = 'Invalid email address.';
		} else {
			errorEmail = '';
		}
	};
</script>

<form
	class="space-y-4"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<Textinput
		name="email"
		label="email"
		type="email"
		placeholder="Enter your email address..."
		error={errorEmail}
		id="email"
		horizontal={false}
		validate={validateEmail}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={false}
	/>
	<Textinput
		name="password"
		label="password"
		type="password"
		placeholder=" Enter your password..."
		error={null}
		id="password"
		horizontal={false}
		validate={null}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={true}
		required
	/>
	<div class="flex justify-between">
		<Checkbox
			id="keep-signed-in"
			disabled={false}
			label="Keep me signed in"
			value={false}
			name="keepSignedIn"
		/>
		<a
			href="/forgot-password"
			class="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
		>
			Forgot Password?
		</a>
	</div>

	<Button
		text="Sign In"
		actionFunction={() => {
			form.loading = true;
		}}
		type="button"
		className="btn btn-dark block w-full text-center"
		isLoading={form?.loading ? true : false}
		disabled={errorEmail ? true : false}
	/>

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
</form>
