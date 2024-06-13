// @ts-nocheck
import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load = async ({ url }: Parameters<LayoutServerLoad>[0]) => {
  if (url.pathname === "/") {
    throw redirect(303, "/login");
  }
};
