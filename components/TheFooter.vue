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