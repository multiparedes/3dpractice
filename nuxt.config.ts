// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "@nuxtjs/i18n"],
  plugins: ["@/plugins/Iconify.js"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  app: {
    head: {
      title: "Personal portafolio",
    },
  },
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
