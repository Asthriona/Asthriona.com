<template>
    <!-- Pahe header -->
      <header class="bg-black text-gray-300 p-6 mt-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <!-- Profile Image -->
      <div class="flex items-center space-x-4">
        <img 
          src="https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png" 
          alt="Profile" 
          class="w-24 h-24 rounded-full border-4 border-gray-600"
        />
        <!-- Name and Bio -->
        <div>
          <h1 class="text-3xl font-semibold">Makoto "<b>Asthriona</b>" Kobayahsi</h1>
          <p class="text-gray-400">I do the code thing, and sometimes it works.</p>
        </div>
      </div>

      <!-- Social Links -->
      <div class="space-x-4 flex">
        <a v-for="link in links" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer">
                <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
                <span class="sr-only">{{ link.name }}</span>
            </a>
      </div>
    </div>
  </header>
  <!-- Github Sponsor Link -->
  <iframe src="https://github.com/sponsors/Asthriona/button" title="Sponsor Asthriona" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>
    <section class="text-3xl mt-20">About this website</section>
    <section class="text-lg py-2">
        <h2 class="text-2xl">Licenses and Open Source Software</h2>
        <p>
            This website was built using a variety of open-source technologies, each contributing to the functionality and design you experience. Below is a list of the key software and resources used, along with their respective licenses:
        </p>
        <p class="my-8">
            <b>Vue.js</b> <br />
            Vue.js is an open-source JavaScript framework for building user interfaces and single-page applications. <br />
            License: MIT License<br />
            Link: <a href="https://github.com/vuejs/vue/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Vue.js License</a><br />
        </p>
        <p class="my-8">
            <b>Nuxt.js</b> <br />
            Nuxt.js is a powerful framework built on top of Vue.js, designed for building server-side rendered applications and static websites. <br />
            License: MIT License<br />
            Link: <a href="https://github.com/nuxt/nuxt/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">Nuxt.js License</a><br />
        </p>
        <p class="my-8">
            <b>@nuxt/content</b> <br />
            @nuxt/content is a Nuxt.js module that allows you to write in Markdown, JSON, YAML, XML, and use them as content files for your Nuxt.js application. <br />
            License: MIT License<br />
            Link: <a href="https://github.com/nuxt/content/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">@nuxt/content License</a><br />
        </p>
        <p class="my-8">
            <b>Material Design Icons</b> <br />
            Material Design Icons provide a comprehensive set of icons based on Google's Material Design guidelines. <br />
            License: SIL Open Font License 1.1<br />
            Link: <a href="https://github.com/Templarian/MaterialDesign/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">Material Design Icons License</a><br />
        </p>
        <p class="my-8">
            <b>LINE Seed Font</b> <br />
            The LINE Seed font is a highly readable, modern font designed by LY Corp. <br />
            License: SIL Open Font License 1.1<br />
            Link: <a href="https://openfontlicense.org/" target="_blank" rel="noopener noreferrer">LINE Seed Font License</a><br />
        </p>
    </section>
</template>

<script setup>
const links = [
        { name: "GitHub", href: "https://github.com/Asthriona", icon: "mdi:github" },
        { name: "Twitter", href: "https://twitter.com/Asthriona", icon: "mdi:twitter" },
        { name: "YouTube", href: "https://youtube.com/@Asthriona", icon: "mdi:youtube" },
        { name: "Instagram", href: "https://www.instagram.com/asthriona.dev/", icon: "mdi:instagram" },
    ]
</script>