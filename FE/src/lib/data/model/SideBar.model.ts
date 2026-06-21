export type SideBarModelMenu = {
	title: string;
	icon: string;
	url?: string;
	items?: SideBarModelMenu[];
};

export const sideBarModelMenu = [
	{
		title: "Dashboard",
		icon: "fa-solid fa-chart-pie",
		url: "/dashboard",
	},
	{
		title: "Transactions",
		icon: "fa-solid fa-money-bill-transfer",
		url: "/transactions",
	},
	{
		title: "Master Data",
		icon: "fa-solid fa-server",
		items: [
			{
				title: "Categories",
				icon: "fa-solid fa-money-bill-transfer",
				url: "/categories",
			},
			{
				title: "Integrations",
				icon: "fa-solid fa-code-merge",
				url: "/integrations",
			},
		],
	},
	{
		title: "Utility",
		icon: "fa-solid fa-toolbox",
		items: [
			{
				title: "Progress Tracker",
				icon: "fa-solid fa-bars-progress",
				url: "/categories",
			},
		],
	},
];
