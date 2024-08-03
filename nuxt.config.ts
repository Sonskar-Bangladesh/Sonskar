import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "src",
  serverDir: "server",

  css: ["primeicons/primeicons.css", "~/assets/css/tailwind.css"],

  modules: ["@primevue/nuxt-module", "@nuxtjs/supabase", "@nuxtjs/tailwindcss"],

  primevue: {
    options: {
      ripple: true,
      inputVariant: "filled",
      theme: {
        preset: Aura,
        options: {
          prefix: "p",
          darkModeSelector: "system",
          cssLayer: false,
        },
      },
    },
  },

  supabase: {
    redirectOptions: {
      login: "/admin/login",
      callback: "/admin",
      include: ["/admin(/*)?"],
      cookieRedirect: false,
    },
  },
});
