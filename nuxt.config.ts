// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  image: {
    provider: 'netlify',
    domains: ["cdn.asthriona.com"]
  },
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
      title: "Asthriona",
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt/icon', '@nuxt/content', "@nuxt/image", '@nuxt/content'],
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark"
        }
      }
    }
  }

})