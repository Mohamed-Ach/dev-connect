<script lang="ts">
	// ** Importing Icons :
	import IconCircleDashedCheck from '@tabler/icons-svelte/IconCircleDashedCheck.svelte';
	import IconAlertTriangle from '@tabler/icons-svelte/IconAlertTriangle.svelte';

	// ** Importing Components :
	import Alert from '$lib/components/ui/Alert.svelte';
	import Checkbox from '../ui/CheckBox.svelte';
	import Textinput from '../ui/TextInput.svelte';
	import Button from '../ui/Button.svelte';

	// ** Importing Functions :
	import { applyAction, enhance } from '$app/forms';
	export let form: any;

	// ** Form Validation :
	let errorConfirmPassword: string = '';
	let errorFirstName: string = '';
	let errorLastName: string = '';
	let errorPassword: string = '';
	let errorEmail: string = '';
	$: isAnyError =
		errorFirstName || errorLastName || errorEmail || errorPassword || errorConfirmPassword;

	const validateFirstName = (event: InputEvent) => {
		const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d]/;
		const firstName = event.target as HTMLInputElement;
		if (!firstName) return;
		else if (firstName.value.length < 3 || firstName.value.length > 30)
			errorFirstName = 'First Name must be between 3 and 30 characters.';
		else if (regex.test(firstName.value))
			errorFirstName = 'First Name cannot contain numbers or special characters.';
		else errorFirstName = '';
	};

	const validateLastName = (event: InputEvent) => {
		const regex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?\d]/;
		const lastName = event.target as HTMLInputElement;
		if (!lastName) return;
		else if (lastName.value.length < 3 || lastName.value.length > 30)
			errorLastName = 'Last Name must be between 3 and 30 characters.';
		else if (regex.test(lastName.value))
			errorLastName = 'Last Name cannot contain numbers or special characters.';
		else errorLastName = '';
	};

	const validateEmail = (event: InputEvent) => {
		const email = (event.target as HTMLInputElement).value;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			errorEmail = 'Invalid email address.';
		} else {
			errorEmail = '';
		}
	};

	const validatePassword = (event: InputEvent) => {
		const password = (event.target as HTMLInputElement).value;
		if (password.length < 8) {
			errorPassword = 'Password must be at least 8 characters long.';
		} else if (!/\d/.test(password)) {
			errorPassword = 'Password must contain at least one number.';
		} else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
			errorPassword = 'Password must contain at least one special character.';
		} else {
			errorPassword = '';
		}
	};

	const validateConfirmPassword = (event: InputEvent) => {
		const password = (event.target as HTMLInputElement).value;
		const confirmPassword = (document.getElementById('password') as HTMLInputElement).value;
		if (password !== confirmPassword) {
			errorConfirmPassword = 'The two passwords do not match.';
		} else {
			errorConfirmPassword = '';
		}
	};
</script>

<form
	class="space-y-5 scrollbar-webkit"
	method="POST"
	use:enhance={() => {
		return async ({ result }) => {
			await applyAction(result);
		};
	}}
>
	<Textinput
		name="firstName"
		label="First Name"
		type="text"
		placeholder=" Enter your First Name..."
		error={errorFirstName}
		id="firstName"
		horizontal={false}
		validate={validateFirstName}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={false}
		required
	/>
	<Textinput
		name="lastName"
		label="Last Name"
		type="text"
		placeholder=" Enter your Last Name..."
		error={errorLastName}
		id="lastName"
		horizontal={false}
		validate={validateLastName}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={false}
		required
	/>
	<Textinput
		name="email"
		label="email"
		type="email"
		placeholder=" Enter your email..."
		error={errorEmail}
		id="email"
		horizontal={false}
		validate={validateEmail}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={false}
		required
	/>
	<Textinput
		name="password"
		label="password"
		type="password"
		placeholder=" Enter your password..."
		error={errorPassword}
		id="password"
		horizontal={false}
		validate={validatePassword}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={true}
		required
	/>
	<Textinput
		name="rePassword"
		label="Confirm password"
		type="password"
		placeholder="Re-enter your password..."
		error={errorConfirmPassword}
		id="rePassword"
		horizontal={false}
		validate={validateConfirmPassword}
		isMask={false}
		msgTooltip={false}
		description=""
		hasIcon={true}
		required
	/>
	<Checkbox
		id="accept-our-terms"
		name="acceptOurTerms"
		label="You accept our Terms and Conditions and Privacy Policy"
		disabled={false}
		value={false}
	/>
	<Button
		actionFunction={() => {
			form.loading = true;
		}}
		isLoading={form?.loading ? true : false}
		text="Create an account"
		type="button"
		className="btn btn-dark block w-full text-center"
		disabled={isAnyError ? true : false}
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
