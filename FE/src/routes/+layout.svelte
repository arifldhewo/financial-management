<script lang="ts">
	import "./layout.css";
	import favicon from "$lib/assets/favicon.svg";
	import SideBar from "$lib/view/SideBar/SideBarPage.svelte";

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="bg-slate-900">
	<div class="grid h-screen grid-cols-[240px_1fr]">
		<!-- Sidebar -->
		<SideBar />

		<main class="h-full overflow-y-auto p-5">
			{@render children()}
		</main>
	</div>
</div>
