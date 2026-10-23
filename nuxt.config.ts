// https://nuxt.com/docs/api/configuration/nuxt-config
const baseUrl = "https://asthriona.com";

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
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/sitemap",
    "nuxt-feedme",
  ],
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

<<<<<<< HEAD
  /*
   * TODO: Pre-production tests.
   * I have no idea how all of this shit works, and if the RSS readers or whatever will get the right links to access the pages as it only shows /blog/[post] in the feeds.
   * So yeah. To be tested.
   */

=======
>>>>>>> e2c5df5e8445c298898d65d74cea512ed39a992f
  feedme: {
    defaults: {
      common: true,
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
<<<<<<< HEAD
        replace: [[/^(?=\/)/.toString(), baseUrl]],
        charset: "utf-8",
      },
      routes: {
        // Define the individual format mappings with their customized properties explicitly:
        "/feed.atom": {
          type: "atom1",
          feed: { title: "Asthriona - Blog Feed" },
        },
        "/feed.json": {
          type: "json1",
          feed: { title: "Asthriona - Blog Feed" },
        },
        "/feed.xml": {
          type: "rss2",
          feed: { title: "Asthriona - Blog Feed" },
        },
=======
        replace: [[/^(?=\/)/.toString(), "https://asthriona.com"]],
        charset: "utf-8",
      },
      routes: {
        "/feed.atom": { type: "atom1", feed: { title: "Asthriona - Blog Feed" } },
        "/feed.json": { type: "json1", feed: { title: "Asthriona - Blog Feed" } },
        "/feed.xml": { type: "rss2", feed: { title: "Asthriona - Blog Feed" } },
>>>>>>> e2c5df5e8445c298898d65d74cea512ed39a992f
      },
    },
  },
});
