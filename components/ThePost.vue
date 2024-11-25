<template>
    <div v-for="post in props.posts" :key="post.slug"
        class="bg-black rounded-lg shadow-md overslow-hidden mt-8 border border-gradient-to-r from-cyan-500 to-blue-500">
        <NuxtLink :to="post._path">
            <NuxtImg format="webp"  quality="80" :src="post.banner" alt="Blog Post cover image" class="w-full h-48 rounded object-cover object-center" />
        </NuxtLink>
        <div class="p-6">
            <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
            <p class="text-gray-400 mb-4">{{ post.description }}</p>
            <NuxtLink :to="post._path"
                class="inline-block outline hover:outline-pink-500 outline-offset-4 outline-1 bg-black text-white py-2 px-4 rounded float-right mb-4">Read
                More</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['posts'])
</script>