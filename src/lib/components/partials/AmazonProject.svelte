<script lang="ts">
	// ** Import Components :
	import Card from '$lib/components/ui/Card.svelte';
	import Button from '../ui/Button.svelte';
	import Alert from '../ui/Alert.svelte';

	// ** Import Icons :
	import { applyAction, enhance } from '$app/forms';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	export let form: any;

	export let workflow;
	$: workflowStatus = form?.workflow ? form.workflow : workflow;

	let columns = ['Name', 'Last Run', 'Last OTP', 'Assignee', 'Status', 'Action'];

	// ** Form Validation :
	let errorOTP: string = '';
	const validateOTP = (event: any) => {
		const otp = (event.target as HTMLInputElement).value;
		const regex = /^\d{5,7}$/;
		if (!regex.test(otp)) {
			errorOTP = 'Invalid OTP format';
		} else {
			errorOTP = '';
		}
	};

	function formatDate(date: string) {
		const options = {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric'
		};
		return new Date(date).toLocaleDateString('en-US', options as Intl.DateTimeFormatOptions);
	}

	let loading = false;

	// ** OTP Timer :
	const remainingTime = writable(0);

	// Function to calculate the remaining time
	function calculateTimeRemaining() {
		const currentTime = Date.now();
		const targetTime = new Date(workflowStatus.triggeredAt).getTime() + 60 * 1000;
		return Math.max(0, Math.floor((targetTime - currentTime) / 1000));
	}

	// Update the remaining time on mount and every second
	onMount(() => {
		const updateRemainingTime = () => {
			remainingTime.set(calculateTimeRemaining());
		};

		// Update immediately and then every second
		updateRemainingTime();
		const interval = setInterval(updateRemainingTime, 1000);

		// Clear the interval when the component is destroyed
		return () => clearInterval(interval);
	});
</script>

<Card noBorder>
	<div class="md:flex justify-between items-center mb-6">
		<h4 class="card-title">Project List</h4>
	</div>
	<div class="overflow-x-auto -mx-6">
		<div class="inline-block min-w-full align-middle">
			<div class="overflow-hidden">
				<table class="min-w-full divide-y divide-slate-100 table-fixed dark:divide-slate-700">
					<thead class="bg-slate-100 dark:bg-slate-700">
						<tr>
							{#each columns as column}
								<th scope="col" class="table-th">
									{column}
								</th>
							{/each}
						</tr>
					</thead>
					<tbody class="bg-white divide-y divide-slate-100 dark:bg-slate-800 dark:divide-slate-700">
						<tr class="even:bg-slate-100 dark:even:bg-slate-700">
							<td class="table-td flex items-center space-x-4 rtl:space-x-reverse"
								><div class="flex-none mr-2">
									<div
										class="h-10 w-10 rounded-full text-lg bg-blue-100 text-slate-900 dark:bg-slate-600 dark:text-slate-200 flex flex-col items-center justify-center font-normal capitalize"
									>
										{workflowStatus.name.charAt(0) + workflowStatus.name.charAt(1)}
									</div>
								</div>
								<span class="text-sm font-semibold"> {workflowStatus.name}</span></td
							>
							<td class="table-td">{formatDate(workflowStatus.triggeredAt)}</td>
							<td class="table-td">{workflowStatus.lastSavedOTP}</td>
							<td class="table-td">
								<div class="flex justify-start -space-x-1.5 rtl:space-x-reverse">
									<div class="h-6 w-6 rounded-full ring-1 ring-slate-100">
										<img
											src="{$page.url.origin}/api/images/users/female-placeholder.png"
											alt="assignee"
											class="w-full h-full rounded-full"
										/>
									</div>
									<div class="h-6 w-6 rounded-full ring-1 ring-slate-100">
										<img
											src="{$page.url.origin}/api/images/users/male-placeholder.png"
											alt="assignee"
											class="w-full h-full rounded-full"
										/>
									</div>

									<div
										class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-300 text-xs ring-2 ring-slate-100 dark:ring-slate-700 rounded-full h-6 w-6 flex flex-col justify-center items-center"
									>
										+2
									</div>
								</div>
							</td>
							<td class="table-td">
								<Button
									type="button"
									text={workflowStatus.status}
									className="{workflowStatus.status === 'Running'
										? 'btn-success'
										: 'btn-secondary'} btn-sm cursor-auto"
									disabled={workflowStatus.status !== 'Running'}
								/>
							</td>
							<td class="table-td"
								><form
									action="?/launch"
									method="post"
									on:submit={() => (loading = true)}
									use:enhance={() => {
										return async ({ result }) => {
											await applyAction(result);
											loading = false;
										};
									}}
								>
									<Button
										type="button"
										text="Launch"
										className="btn-primary btn-sm w-28"
										isLoading={loading}
										disabled={workflowStatus.status === 'Running'}
									/>
								</form>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="flex items-center justify-center mx-auto">
					{#if form?.error1}
						<Alert dismissible className=" light-mode alert-danger" label={form.error1} />
					{/if}
				</div>

				<div class="md:flex md:space-y-0 space-y-5 justify-center mt-6 items-center">
					<div>
						<form
							method="post"
							action="?/submit"
							class={workflowStatus.status !== 'Running' ? 'hidden' : ''}
							transition:fade={{ duration: 300 }}
							use:enhance={() => {
								return async ({ result, formElement }) => {
									await applyAction(result);
									formElement.reset();
								};
							}}
						>
							<div class="flex-1">
								<div class="relative fromGroup2">
									<label for="otp" class="block capitalize form-label w-128"
										>Enter the otp after you have received it*
										<span class="text-blue-600">
											{#if $remainingTime > 0}
												(Estimated Time: {$remainingTime}s)
											{:else}
												check your phone for the OTP
											{/if}
										</span>
									</label>
								</div>
							</div>
							<div class="flex items-stretch inputGroup has-append">
								<div class="flex-1">
									<div class="relative fromGroup2">
										<input
											type="text"
											name="otp"
											class="{errorOTP
												? 'border-red-600 focus:border-red-600'
												: ''} input-group-control block w-full focus:outline-none py-2"
											placeholder="Enter The OTP code here"
											on:input={validateOTP}
											required
										/>
										<div
											class="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2 space-x-1 rtl:space-x-reverse"
										></div>
									</div>
								</div>
								<span class="flex-none input-group-addon right"
									><div class="input-group-text h-full append-slot">
										<button
											type="submit"
											disabled={errorOTP ? true : false}
											class="btn btn inline-flex {errorOTP
												? 'cursor-not-allowed'
												: ''} justify-centerbtn-outline-dark bg-slate-900 text-white"
											><span class="flex items-center"><span>Submit</span></span></button
										>
									</div></span
								>
							</div>
							{#if errorOTP}
								<div class="mt-2 text-danger-500 block text-sm">
									{errorOTP}
								</div>
							{/if}
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="flex items-center justify-center mx-auto mt-5">
			{#if form?.error2}
				<Alert dismissible className=" light-mode alert-danger" label={form.error2} />
			{/if}

			{#if form?.success}
				<Alert dismissible className=" light-mode alert-success" label={form.success} />
			{/if}
		</div>
	</div>
</Card>
