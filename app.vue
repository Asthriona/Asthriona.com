<template>
  <div class="flex flex-col min-h-screen bg-black text-slate-400">
    <TheNavBars />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
useHead({
  link: [
    { 
      rel: 'alternate', 
      type: 'application/rss+xml', 
      title: 'Asthriona - Blog Feed (RSS)', 
      href: '/feed.xml' 
    },
    { 
      rel: 'alternate', 
      type: 'application/atom+xml', 
      title: 'Asthriona - Blog Feed (Atom)', 
      href: '/feed.atom' 
    },
    { 
      rel: 'alternate', 
      type: 'application/feed+json', 
      title: 'Asthriona - Blog Feed (JSON)', 
      href: '/feed.json' 
    }
  ]
})
</script>

<style scoped>
  .ai-be-gone {
    display: none;
  }
  .hidden {
    display: none;
  }
</style>