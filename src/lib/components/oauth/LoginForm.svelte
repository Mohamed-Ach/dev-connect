<script lang="ts">
	import { goto } from '$app/navigation';
	import Checkbox from '../ui/CheckBox.svelte';
	import Textinput from '../ui/TextInput.svelte';
</script>

<form class="space-y-4">
	<Textinput
		name="email"
		label="email"
		type="email"
		placeholder="Enter your email address..."
		error={null}
		id="email"
		horizontal={false}
		validate={null}
		isMask={false}
		msgTooltip={false}
		description=""
		hasicon={false}
	/>
	<!-- 
        bind:value={'email@email.com'}
		error={errors.email}
     -->
	<Textinput
		name="password"
		label="password"
		type="password"
		placeholder="Enter your password..."
		error={null}
		id="password"
		horizontal={false}
		validate={null}
		isMask={false}
		msgTooltip={false}
		description=""
		hasicon={false}
	/>
	<!-- 
        bind:value={$form.password}
		error={errors.password}
     -->
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

	<a href="/dashboard" class="btn btn-dark block w-full text-center">Sign in</a>
</form>
