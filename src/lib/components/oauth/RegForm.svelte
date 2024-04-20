<script lang="ts">
	import { goto } from '$app/navigation';
	import Checkbox from '../ui/CheckBox.svelte';
	import Textinput from '../ui/TextInput.svelte';
</script>

<form class="space-y-5">
	<Textinput
		name="email"
		label="email"
		type="email"
		placeholder=" Enter your email"
		error={null}
		id="email"
		horizontal={false}
		validate={null}
		isMask={false}
		msgTooltip={false}
		description=""
		hasicon={false}
	/>
	<Textinput
		name="password"
		label="passwrod"
		type="password"
		placeholder=" Enter your password"
		error={null}
		id="password"
		horizontal={false}
		validate={null}
		isMask={false}
		msgTooltip={false}
		description=""
		hasicon={false}
	/>
	<Textinput
		name="re-password"
		label="Confirm passwrod"
		type="password"
		placeholder="Re-enter your password"
		error={null}
		id="re-password"
		horizontal={false}
		validate={null}
		isMask={false}
		msgTooltip={false}
		description=""
		hasicon={false}
	/>
	<Checkbox
		id="accept-our-terms"
		name="acceptOurTerms"
		label="You accept our Terms and Conditions and Privacy Policy"
		disabled={false}
		value={false}
	/>
	<a href="/login" class="btn btn-dark block w-full text-center"> Create an account </a>
</form>
