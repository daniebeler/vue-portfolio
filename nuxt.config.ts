import tailwindcss from "@tailwindcss/vite";
import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css"],
	vite: { plugins: [tailwindcss()] },
	modules: [
		[
			"@nuxtjs/google-fonts",
			{
				families: {
					Poppins: [400, 600, 700],
					Inter: [400, 600],
				},
			},
		],
		"nuxt-schema-org",
		"@nuxtjs/plausible",
	],
	site: {
		host: "https://daniebeler.com",
	},
	app: {
		head: {
			link: [
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon-16x16.png",
				},
				{
					rel: "canonical",
					href: "https://daniebeler.com",
				},
			],
			htmlAttrs: {
				lang: "en",
			},
		},
	},
	schemaOrg: {
		defaults: false,
	},
	plausible: {
		proxy: true,
		apiHost: "https://plausible.ghostbyte.dev",
		autoOutboundTracking: true,
		domain: "daniebeler.com",
	},
});
