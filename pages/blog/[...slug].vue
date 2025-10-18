<template>
<NuxtImg format="webp" quality="80" fit="cover" :src="data.meta.banner" class="banner-img mx-auto max-w-7xl rounded-lg h-64 w-full object-cover" :alt="`${data.title}'s cover image.'`" />
<h1 class="text-4xl mt-8 mb-8">{{ data.title }}</h1>
 
    <ContentRenderer :value="data" />

</template>

<script setup>
console.log("HELLO!!!")
const route = useRoute()
console.log(route.path)
const { data } = await useAsyncData(route.path, () => {
    return queryCollection('blog').path(route.path).first()
})

console.log(data)


// The metadata stuff for ranking and whatnot. 
useHead({
    title: `Asthriona - ${data.title}`,
    meta: [{
        name: "description",
        content: data.description
    }]
})
// This is only testing, Need to be check with some card validator. 
useSeoMeta({
    title: `Asthriona - ${data.title}`,
    ogTitle: `Asthriona - ${data.title}`,
    description: data.description,
    ogDescription: data.description,
    ogImage: "https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/main/ResponseCode/503%20ServiceUnavailable.png",
    twitterCard: 'summary_large_image',
})
</script>

<style>
pre {
    margin-top: 10px;
    background: #282c34 !important;
    border-radius: 8px !important;
    padding: 1em !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
    overflow-x: auto !important;
    font-size: 1rem !important;
    line-height: 1.6 !important;
}
</style>