<template>
    <div class="h-14 bg-gradient-to-r from-cyan-500 to-fuchsia-500">
        <p class="text-white text-3xl text-center pt-2">There should be an image in here at some point.</p>
    </div>
    <h1 class="text-3xl my-8">
        Blog!
    </h1>
    Here are all my posts. Can be about anything, an idea went through my mind, and I posted it here, or I watch a
    really good anime, and I want to talk about it, or maybe I'm working on a car, and I wanna show what i've done!

    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ThePost :posts="posts" />
        {{ data }}
    </section>
</template>

<script setup>
const posts = await queryCollection('blog').where('published', '=', true).order('date', 'DESC').all()
console.log(posts)
</script>