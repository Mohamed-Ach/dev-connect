<script lang="ts">
	import Button from '$lib/components/ui/Button.svelte';
	import Card from '$lib/components/ui/Card.svelte';

	let rooms: number = 1;
</script>

<div class="flex items-start justify-start flex-col mb-10 mt-5">
	<button
		class="btn btn-dark btn-sm px-6"
		on:click={() => {
			rooms++;
		}}
	>
		Create a new Room
	</button>
</div>

<div class="grid grid-cols-3 gap-4">
	{#each Array.from({ length: rooms }, (_, i) => i) as room}
		<Card
			cardTitle={`Room ${room + 1}`}
			cardSubtitle="This is a real-time chat"
			className="w-80 custom-class bg-white"
		>
			<Button
				link="/chat/room/b1b5b2f4-0b13-4b03-83ca-b9e86ec6d66e"
				text="Join Room"
				className="btn btn-dark btn-sm px-6"
			/>
		</Card>
	{/each}
</div>
