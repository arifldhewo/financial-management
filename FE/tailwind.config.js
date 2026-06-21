// tailwind.config.js
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Roboto", "system-ui", "sans-serif"], // override default sans
			},
		},
	},
};
