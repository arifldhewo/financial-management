<script lang="ts">
	import { SideBarVM } from "./SideBarVM.svelte";

	let vm = new SideBarVM();
</script>

<aside class="h-full gap-4 bg-blue-400">
	<div>
		<h1 class="flex items-center p-5 text-center font-bold text-blue-950">
			<i class="fa-solid fa-money-bills mr-1 w-5"></i>
			Financial Management
		</h1>
	</div>
	<hr />
	{#each vm.ui.menus as menu}
		{#if menu.items}
			<div class="relative z-10 p-3 pl-10 transition-colors hover:rounded-2xl hover:bg-amber-50/10">
				<div class="z-20 flex items-center gap-2">
					<i class="{menu.icon} w-6"></i>
					<h1 class="text-xl">{menu.title}</h1>
					<button
						aria-label="button-expand-menu"
						class="cursor-pointer"
						onclick={() => vm.toggleSubMenu(menu.title)}
					>
						<i
							class="fa-solid fa-angle-down w-6 transition-transform
							duration-200 {vm.getToggleSubMenuState(menu.title) ? 'rotate-180' : ''}"
						>
						</i>
					</button>
				</div>

				{#if vm.getToggleSubMenuState(menu.title)}
					{#each menu.items as item}
						<a
							href={item.url}
							class="mt-2 ml-5 flex items-center gap-1 rounded-xl p-2 transition-colors hover:bg-amber-50/10"
						>
							<i class="{item.icon} w-6"></i>
							<span>{item.title}</span>
						</a>
					{/each}
				{/if}
			</div>
		{:else}
			<a href={menu.url} class="block">
				<div
					class="relative z-10 p-3 pl-10 transition-colors hover:rounded-2xl hover:bg-amber-50/10"
				>
					<div class="z-20 flex items-center gap-2">
						<i class="{menu.icon} w-6"></i>
						<h1 class="text-xl">{menu.title}</h1>
					</div>
				</div>
			</a>
		{/if}
	{/each}
</aside>
