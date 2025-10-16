import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  modules: ["@nuxt/fonts", "nuxt-schema-org", "@nuxtjs/plausible"],
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
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    families: [
      { name: "Poppins", provider: "google", weight: 400 },
      { name: "Poppins", provider: "google", weight: 700 },
    ],
  },
  plausible: {
    proxy: true,
    apiHost: "https://plausible.ghostbyte.dev",
    autoOutboundTracking: true,
    domain: "daniebeler.com"
  }
});