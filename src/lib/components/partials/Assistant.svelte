<script lang="ts">
	import TextInput from '../ui/TextInput.svelte';
	import assistantImg from '$lib/images/all-img/assistant.png';
	import { writable } from 'svelte/store';
	import { onMount } from 'svelte';

	let mouseX = 0;
	let mouseY = 0;
	let leftEye: HTMLDivElement;
	let rightEye: HTMLDivElement;

	function handleMouseMove(event: MouseEvent) {
		mouseX = event.clientX;
		mouseY = event.clientY;
		updateEyePosition(leftEye);
		updateEyePosition(rightEye);
	}

	function updateEyePosition(eye: HTMLDivElement) {
		if (!eye) return;

		const rect = eye.getBoundingClientRect();
		const eyeCenterX = rect.left + rect.width / 2;
		const eyeCenterY = rect.top + rect.height / 2;
		const deltaX = mouseX - eyeCenterX;
		const deltaY = mouseY - eyeCenterY;
		const angle = Math.atan2(deltaY, deltaX);
		const distance = Math.min(rect.width / 4, Math.hypot(deltaX, deltaY));
		const pupil = eye.querySelector('.pupil') as HTMLDivElement;

		pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
	}

	let showMessage = false;
	const message = writable('');
	const fullMessage = 'Hi There, My name is KuriBot, your AI assistant. How can I help you?';

	function handleClick() {
		if (!showMessage) {
			showMessage = true;
			typeWriter(fullMessage, 0);
		} else {
			showMessage = false;
			message.set('');
		}
	}

	function typeWriter(text: string, index: number) {
		if (index < text.length) {
			message.update((m) => m + text.charAt(index));
			setTimeout(() => typeWriter(text, index + 1), 50);
		}
	}

	onMount(() => {
		window.addEventListener('mousemove', handleMouseMove);
		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="assistant" on:click={handleClick}>
	<div class="eye left" bind:this={leftEye}>
		<div class="pupil"></div>
	</div>
	<div class="eye right" bind:this={rightEye}>
		<div class="pupil"></div>
	</div>
	<div class="floating-image-container">
		<img src={assistantImg} alt="Assistant" class="floating-image" />
		<div class="shadow"></div>
	</div>
</div>

{#if showMessage}
	<div class="message-popup">
		{$message}

		{#if $message === fullMessage}
			<input type="text" class="text-sm" placeholder="Type your message here..." />
		{/if}
		<div class="triangle"></div>
	</div>
{/if}

<style>
	.assistant {
		position: fixed;
		bottom: 10px;
		right: 10px;
		width: 200px;
		height: 200px;
		z-index: 1000;
		display: flex;
		flex-direction: column;
		align-items: center;
		cursor: pointer;
	}

	.eye {
		position: absolute;
		width: 25px;
		height: 25px;
		background: white;
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		animation: floating 3s ease-in-out infinite;
	}

	.pupil {
		position: absolute;
		width: 10px;
		height: 10px;
		background: black;
		border-radius: 50%;
	}

	.eye.left {
		top: 60%;
		left: 33%;
	}

	.eye.right {
		top: 60%;
		right: 33%;
	}

	.floating-image-container {
		position: relative;
		margin-top: 80px; /* Adjust to position the image correctly */
		width: 100px; /* Adjust the size of the new image */
		height: 100px; /* Adjust the size of the new image */
		animation: floating 3s ease-in-out infinite;
	}

	.floating-image {
		width: 100%;
		height: 100%;
	}

	.shadow {
		position: absolute;
		top: calc(100% + 10px); /* Adjust to position the shadow correctly */
		left: 50%;
		width: 60px; /* Shadow width */
		height: 10px; /* Shadow height */
		background: rgba(0, 0, 0, 0.1);
		border-radius: 50%;
		transform: translateX(-50%);
		z-index: -1;
	}

	@keyframes floating {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}

	.message-popup {
		position: fixed;
		width: 250px;
		bottom: 150px;
		right: 120px;
		background-color: white;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		z-index: 1001;
	}

	.message-popup .triangle {
		position: absolute;
		bottom: -10px; /* Adjust to connect the triangle with the popup */
		right: 2%;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid white;
		transform: translateX(-50%);
	}

	.message-popup input[type='text'] {
		width: 100%;
		height: 30px;
		padding: 5px;
		margin-top: 10px;
		border: 1px solid #ccc;
		border-radius: 3px;
	}
</style>
