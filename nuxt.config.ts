// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

const baseUrl = "https://asthriona.com";
const feedMeta = { title: "Asthriona - Blog Feed", link: baseUrl };

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  image: {
    provider: "netlify",
    domains: ["cdn.asthriona.com", "raw.githubusercontent.com"],
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Asthriona",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-feedme",
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  nitro: {
    externals: {
      inline: ["vue-router"],
    },
  },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: "github-dark",
        },
      },
    },
  },
  // The Sitemap shit, so when I drop Twitter I don't just drop off the face of the earth.
  site: {
    url: baseUrl,
    name: "Asthriona",
  },
  sitemap: {
    autoLastmod: true,
  },

  // FEED ME DADDY!!! (rss stuff.)
  feedme: {
    defaults: {
      common: false,
      routes: true,
      mapping: true,
      mappingTemplates: true,
    },
    feeds: {
      common: {
        revisit: "6h",
        fixDateFields: true,
        collections: ["blog"],
        templateMapping: ["", "meta", "meta.feedme"],
        mapping: [["link", "path"]],
        charset: "utf-8",
      },
      routes: {
        "/feed.atom": {
          type: "atom1",
          feed: feedMeta,
        },
        "/feed.json": {
          type: "json1",
          feed: feedMeta,
        },
        "/feed.xml": {
          type: "rss2",
          feed: feedMeta,
        },
      },
    },
  },
});
