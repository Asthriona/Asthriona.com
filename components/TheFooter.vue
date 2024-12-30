<template>
  <footer class="bg-black border-t border-gray-800 mt-16">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <!-- Brand Section -->
        <div class="space-y-4">
          <NuxtImg height="32" width="56" format="svg" quality="40"
            src="https://cdn.asthriona.com/static/Asthriona-SL.svg" alt="Asthriona Ltd." class="h-8 w-auto" />
          <p class="text-gray-400 text-sm">
            Exploring technology, sharing knowledge, and building the future.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :to="item.href" class="text-gray-400 hover:text-white transition-colors duration-200">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h3 class="text-white font-semibold mb-4">Connect</h3>
          <div class="grid grid-cols-3 gap-4">
            <a v-for="link in links" :key="link.name" :href="link.href" target="_blank" rel="noopener noreferrer"
              class="group flex items-center text-gray-400 hover:text-white transition-colors duration-200">
              <Icon :name="link.icon"
                class="h-5 w-5 mr-2 transform transition-transform duration-200 group-hover:scale-110" />
              <span class="text-sm">{{ link.name }}</span>
            </a>
          </div>
        </div>

        <!-- Support Section -->
        <div>
          <h3 class="text-white font-semibold mb-4">Support My Work</h3>
          <div class="space-y-4">
            <a href="buymeacoffee.com/Asthriona" target="_blank" rel="noopener noreferrer"
              class="block w-fit transform transition-transform duration-200 hover:scale-105">
              <img class="h-8" src="https://cdn.asthriona.com/i/2024/10/%25pn_241022-191853.png"
                alt="Buy Me a Coffee" />
            </a>
            <iframe src="https://github.com/sponsors/Asthriona/button" title="Sponsor Asthriona" height="32" width="114"
              style="border: 0; border-radius: 6px;" />
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-gray-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <!-- Copyright -->
          <div class="text-gray-400 text-sm">
            &copy; 2019 - {{ year }} Asthriona ltd. All Rights Reserved.
          </div>

          <!-- Version Badge -->
          <div class="relative group">
            <div class="px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 
           border border-purple-500/20 text-purple-400 text-xs font-medium">
              PROTOTYPE VERSION
            </div>
            <!-- Tooltip -->
            <div class="absolute left-1/2 -translate-x-1/2 -top-10 w-max px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded shadow-lg 
           opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Things may change at any time as I see fit.
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Anime', href: '/anime' },
]

const links = [
  { name: "GitHub", href: "https://github.com/Asthriona", icon: "mdi:github" },
  { name: "BlueSky", href: "https://bsky.app/profile/asthriona.bsky.social", icon: "fa6-brands:bluesky" },
  { name: "Twitter", href: "https://twitter.com/Asthriona", icon: "mdi:twitter" },
  { name: "YouTube", href: "https://youtube.com/@Asthriona", icon: "mdi:youtube" },
  { name: "Instagram", href: "https://www.instagram.com/asthriona.dev/", icon: "mdi:instagram" },
]
</script>