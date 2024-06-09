<script lang="ts">
	export let user: {
		avatar: string;
		fullName: string;
	};
</script>

<div>
	<header>
		<div class="flex px-6 pt-6">
			<div class="flex-1">
				<div class="flex space-x-3 rtl:space-x-reverse">
					<div class="flex-none">
						<div class="h-10 w-10 rounded-full">
							<img src={user.avatar} alt="" class="w-full h-full object-cover rounded-full" />
						</div>
					</div>
					<div class="flex-1 text-start">
						<span class="block text-slate-800 dark:text-slate-300 text-sm font-medium mb-[2px]">
							{user.fullName}
							<span class="status bg-success-500 inline-block h-[10px] w-[10px] rounded-full ml-3"
							></span>
						</span>
						<span class="block text-slate-500 dark:text-slate-300 text-xs font-normal">
							Available
						</span>
					</div>
				</div>
			</div>
		</div>
	</header>
</div>
