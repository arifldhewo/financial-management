// src/routes/+page.server.ts
import { redirect } from "@sveltejs/kit";

export const load = () => {
	redirect(302, "/dashboard");
};
