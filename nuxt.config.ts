// nuxt.config.js
import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxtjs/color-mode", "@nuxt/image", "@nuxtjs/pwa"],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    classPrefix: "",
    classSuffix: "",
    storageKey: "app-theme",
  },
  pwa: {
    manifest: {
      name: 'Parceiros - GriloBet',
      short_name: 'GriloBet',
      start_url: '/',
      display: 'standalone',
      background_color: '#00d223',
      theme_color: '#00d223'
    }
  }
});
