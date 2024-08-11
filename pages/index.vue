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
                I'm Asthriona, You can call me <i class="text-white">Makoto</i>, but most of my English speaking friends call me "<i class="text-white">Mako</i>".
                I'm a Full-Stack JS developper, who like to pick-up any sorts of skills, such as anything related to
                cars, and computer science.
                As a programer, I'm self-taught. I went to school for networking and datacenter management.
            </p>
            <p class="text-lg py-2">
                I have other hobbies and things I like, yet again obviously cars, since this is a very wide subject, but
                also anime, music, I can also enjoy some fine TV Shows and movies.
                Meaning that I make this website as a hobby and for simple online presence, I really like the
                "<i class="text-white">old-school</i>" internet, whene it was filled with small blogs,
                and places to share our daily lives and hobbies. In here I might share programing tips, Anime/TV Show/Movies review,
                but also try to keep the "project" page updated with my latests
                project, and dev-logs.
            </p>
        </div>
        <img src="https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png" alt="me"
            class="w-1/2 h-1/2 md:max-w-sm p8 mx-auto rounded">
    </section>
    <section>
        <h2 class="text-3xl font-bold mt-8">Latest Blog Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ThePost :posts="posts" />
        </div>
    </section>
</template>

<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
    queryContent('/blog')
        .sort({ publishedDate: 1 })
        .limit(3)
        .find()
)
// This is only testing, Need to be check with some card validator. 
useSeoMeta({
    title: 'Asthriona',
    ogTitle: 'Asthriona',
    description: 'Welcome to my personal Website! Click to learn more!',
    ogDescription: 'Welcome to my personal Website! Click to learn more!',
    ogImage: 'https://pbs.twimg.com/profile_images/1767869339519111168/KtnuMyuQ_400x400.jpg',
    twitterCard: 'summary_large_image',
})
</script>
