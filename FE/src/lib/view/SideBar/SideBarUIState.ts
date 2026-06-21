import type { SideBarModelMenu } from "$lib/data/model/SideBar.model";

export type SideBarUIState = {
	menus: SideBarModelMenu[];
	isExpand: boolean;
	openMenu: string | null;
};
