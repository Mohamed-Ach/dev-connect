<script lang="ts">
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

	<button class="btn btn-dark block w-full text-center"> Send recovery email </button>
</form>
