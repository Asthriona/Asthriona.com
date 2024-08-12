<template>
    <div class="mt-7 max-sw-sm mx-auto text-center card">
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/403.png" v-if="error.statusCode== 403" />
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/404.png" v-if="error.statusCode== 404" />
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/500.png" v-if="error.statusCode== 500" />
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/503.png" v-if="error.statusCode== 503" />
        <!-- <p class="mt-7 text-7xl font-bold" v-else>{{ error.statusCode }}</p> -->
        
        <p class="mt-7 text-6xl">Oops.</p>
        <p class="mt-7">{{ error.message }}</p>
        <a href="/"><button class=" mt-7 text-sm font-semibold inline-block py-2 px-4 rounded-lg text-slate-300 uppercase last:mr-0 mr-4 border border-gradient-to-r from-cyan-500 to-blue-500">Go home!</button></a>
    </div>
</template>

<script setup>
    defineProps(['error'])
</script>

<style>
    html, body {
        background-color: #000!important;
        color: rgb(148 163 184)
    }
</style>