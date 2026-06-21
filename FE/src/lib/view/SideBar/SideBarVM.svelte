<script lang="ts" module>
	import { type SideBarUIState } from "./SideBarUIState";
	import { sideBarModelMenu } from "$lib/data/model/SideBar.model";

	export class SideBarVM {
		ui = $state<SideBarUIState>({
			menus: sideBarModelMenu,
			isExpand: false,
			openMenu: null,
		});

		toggleSideBar() {
			this.ui.isExpand = !this.ui.isExpand;
		}

		getToggleSidebarState() {
			return this.ui.isExpand;
		}

		toggleSubMenu(title: string) {
			this.ui.openMenu = this.ui.openMenu === title ? null : title;
		}

		getToggleSubMenuState(title: string) {
			return this.ui.openMenu === title;
		}
	}
</script>
