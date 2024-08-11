// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Asthriona"
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/content', "@nuxt/image"],
  content: {
    highlight: {
      theme: 'nord',
      preload: ['ts', 'js', 'css', 'java', 'json', 'bash', 'vue']
    }
  }
})