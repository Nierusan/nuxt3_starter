// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve } from "path";
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  alias: {
    "@": resolve(__dirname, "/"),
  },

  devtools: { enabled: true },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
