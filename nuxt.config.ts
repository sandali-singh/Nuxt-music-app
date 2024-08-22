// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  alias: {
    // "@": resolve(__dirname, "/"),
    assets: "/<rootDir>/assets",
  },

  devtools: { enabled: true },
  css: [
    "~/assets/css/main.css",
    "@mdi/font/css/materialdesignicons.min.css",
    "vue3-carousel/dist/carousel.css",
  ],
  build: {
    transpile: ["vue3-carousel"], // Add this if you're using vue3-carousel
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["vue3-carousel-nuxt"],
});
