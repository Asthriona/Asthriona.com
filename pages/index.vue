<template>
    <section class="text-2xl mt-20">Hi, I'm</section>
    <section class="text-5xl font-bold">
        Asthriona
    </section>
    <section class="text-2xl">Welcome to my Website!</section>
    <section class="flex flex-col md:flex-row">
        <div class="md:w-2/4">
            <h2 class="text-3xl font-bold mt-8">Who am I?</h2>
            <p class="text-lg py-2">
                I'm Asthriona, You can call me <i class="text-white">Makoto</i>, but most of my English speaking friends
                call me "<i class="text-white">Mako</i>" (except TheJudge who likes to call me "Mako-san").
                I'm a Full-Stack JS developper, who like to pick-up any sorts of skills, such as anything related to
                cars, and computer science, lock picking, Video Games, whatever.
                As a programer, I'm self-taught. I went to school for networking and datacenter management.
            </p>
            <p class="text-lg py-2">
                I have other hobbies and things I like, yet again obviously cars, since this is a very wide subject, but
                also anime, music, I can also enjoy some fine TV Shows and movies.
                Meaning that I make this website as a hobby and for simple online presence, I really like the
                "<i class="text-white">old-school</i>" internet, when it was filled with small blogs,
                and places to share our daily lives and hobbies. In here I might share programing tips, Anime/TV
                Show/Movies review,
                but also try to keep the "project" page updated with my latests
                project, and dev-logs.
            </p>
        </div>
        <NuxtImg src="https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png" alt="Asthriona's Avatar, a female character with deep purple hairs, one eye is hidden by the hairs, and she has long pointy ears." height="384" width="384"
            fit="cover" format="webp" quality="80" class="w-1/2 h-1/2 md:max-w-sm p8 mx-auto rounded" />
    </section>
    <section>
        <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="posts.length">
            <ThePost :posts="posts" />
        </div> 
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-else>
            <h2 class="text-xl font-bold mt-8">I haven't posted anything yet!</h2>
        </div>
    </section>
</template>

<script setup>
// Get the blog shits.
const posts = await queryCollection('blog').where('published', '=', true).order('date', 'DESC').limit(3).all()
// This is only testing, Need to be check with some card validator. 
useSeoMeta({
    title: 'Asthriona',
    ogTitle: 'Asthriona',
    description: 'Welcome to my personal Website! Click to learn more!',
    ogDescription: 'Welcome to my personal Website! Click to learn more!',
    ogImage: 'https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png',
    twitterCard: 'summary_large_image',
})
// The metadata stuff for ranking and whatnot. 
useHead({
    title: "Asthriona",
    meta: [{
        name: "description",
        content: "Welcome to my personal website! Here i post about anything and everything! Come have fun with me! :)"
    }]
})
</script>