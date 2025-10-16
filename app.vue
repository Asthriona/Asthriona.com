<template>
  <div class="flex flex-col min-h-screen bg-black text-slate-400">
    <TheNavBars />
    <main class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 grow items-start w-full">
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<style scoped>
  .ai-be-gone {
    display: none;
  }
  .hidden {
    display: none;
  }
</style>