<template>
    <footer class="bg-slate-950 mt-16">
        <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-row">
          <p class="flex-1">
            &copy; 2019 - {{ year }} Asthriona ltd. All Right Reserved. <br />
            <span class="text-red-600 font-extrabold">THIS IS A PROTOTYPE VERSION! THINGS WILL CHANGE!</span>
        </p>
          <div class="flex flex-row justify-center gap-4 mb-4 mt-2">
            <a v-for="link in links" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer">
                <Icon :name="link.icon" size="1.5rem" class="text-gray-300" />
                <span class="sr-only">{{ link.name }}</span>
            </a>
          </div>
        </section>
        <section class="mx-auto max-w-7xl px-2 sm:px-4 lg:py-6 text-gray-300 flex flex-col">
          Feeling Generous?
            <div class="donationa-buttons flex flex-row">
              <a href="buymeacoffee.com/Asthriona" target="_blank" rel="noopener noreferrer" class="mr-4"><img class="h-8" src="https://cdn.asthriona.com/i/2024/10/%25pn_241022-191853.png" alt=""></a>
            <iframe src="https://github.com/sponsors/Asthriona/button" title="Sponsor Asthriona" height="32" width="114" style="border: 0; border-radius: 6px;"></iframe>
            </div>
        </section>
    </footer>
</template>

<script setup>
    const year = new Date().getFullYear()
    const links = [
        { name: "GitHub", href: "https://github.com/Asthriona", icon: "mdi:github" },
        { name: "Twitter", href: "https://twitter.com/Asthriona", icon: "mdi:twitter" },
        { name: "YouTube", href: "https://youtube.com/@Asthriona", icon: "mdi:youtube" },
        { name: "Instagram", href: "https://www.instagram.com/asthriona.dev/", icon: "mdi:instagram" },
    ]
</script>