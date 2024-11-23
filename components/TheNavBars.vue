<template>
  <Disclosure as="nav" class="bg-black border-b border-gray-800" v-slot="{ open }">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="relative flex h-20 items-center justify-between">
              <!-- Mobile menu button -->
              <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <DisclosureButton 
                      class="relative inline-flex items-center justify-center rounded-lg p-2 text-gray-400 
                             hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-400 
                             transition-colors duration-200"
                  >
                      <span class="sr-only">Open main menu</span>
                      <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                      <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                  </DisclosureButton>
              </div>

              <!-- Logo and Navigation -->
              <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <!-- Logo -->
                  <div class="flex flex-shrink-0 items-center">
                      <NuxtLink to="/" class="group relative">
                          <div class="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-25 transition duration-500"></div>
                          <img 
                              class="h-10 w-auto relative transform transition duration-500 group-hover:scale-105" 
                              src="https://cdn.asthriona.com/static/Asthriona-SL.svg" 
                              alt="Asthriona ltd." 
                          />
                      </NuxtLink>
                  </div>

                  <!-- Desktop Navigation -->
                  <div class="hidden sm:ml-8 sm:block">
                      <div class="flex space-x-1">
                          <NuxtLink
                              v-for="item in navigation"
                              :key="item.name"
                              :to="item.href"
                              :class="[
                                  item.current 
                                      ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white' 
                                      : 'text-gray-300 hover:text-white',
                                  'relative group rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200'
                              ]"
                          >
                              <span class="relative z-10">{{ item.name }}</span>
                              <div 
                                  class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 
                                         rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                              ></div>
                          </NuxtLink>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <!-- Mobile Navigation -->
      <DisclosurePanel class="sm:hidden">
          <div class="space-y-1 px-4 pb-3 pt-2">
              <DisclosureButton
                  v-for="item in navigation"
                  :key="item.name"
                  as="div"
              >
                  <NuxtLink
                      :to="item.href"
                      :class="[
                          item.current 
                              ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white' 
                              : 'text-gray-300 hover:text-white',
                          'block rounded-lg px-4 py-3 text-base font-medium transition-all duration-200'
                      ]"
                  >
                      {{ item.name }}
                  </NuxtLink>
              </DisclosureButton>
          </div>
      </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const route = useRoute()
const navigation = [
  { name: 'Home', href: '/', current: route.name === "index" },
  { name: 'Blog', href: '/blog', current: route.name?.includes("blog") },
  { name: 'Projects', href: '/projects', current: route.name?.includes("projects") },
  { name: 'About', href: '/about', current: route.name === "about" },
  { name: 'Anime', href: '/anime', current: route.name === "anime" },
]
</script>