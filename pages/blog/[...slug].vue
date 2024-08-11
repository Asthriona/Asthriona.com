<template>
    <img :src="data.banner" class="banner-img mx-auto max-w-7xl rounded-lg h-64 w-full object-cover" alt="">
        <ContentRenderer :value="data" class="prose my-10 mx-auto max-w-7xl text-slate-300" />
        <div class="my-8">
            <a v-for="tag in data.tags" :key="tag" :href="`/blog/tag/${tag}`" class="text-sm font-semibold inline-block py-2 px-4 rounded-lg bg-slate-900 text-slate-300 uppercase last:mr-0 mr-4">
                <Icon name="mdi-tag" size="1.5rem" class="text-slate-300 mr-2" /> {{ tag }}
            </a>
        </div>
</template>

<script setup>
    const { path } = useRoute();
    const { data } = await useAsyncData(`content-${path}`, () => {
        return queryContent()
        .where({ _path: path })
        .findOne()
    })
</script>

<style>
.prose h1,
.prose h2 a,
.prose h3 a {
    color: #78879b !important;
}
strong {
    color: #556070 !important;
}
</style>