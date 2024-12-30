<template>
    <div class="bg-black min-h-screen text-[#249f9c] font-mono p-4">
        <section class="text-2xl mt-20 text-[#FF69B4]">Hi, I'm</section>
        <section class="text-5xl font-bold tracking-widest animate-pulse">
            Asthriona
        </section>
        <section class="text-2xl text-[#FF69B4]">Welcome to my Website!</section>
        <section class="flex flex-col md:flex-row gap-8">
            <div class="md:w-1/2">
                <h2 class="text-3xl font-bold mt-8 text-[#FF69B4] border-l-4 border-[#FF69B4] pl-4">Who am I?</h2>
                <p class="text-lg py-2 leading-relaxed">
                    I'm Asthriona, You can call me <i class="text-[#FF69B4]">Makoto</i>, but most of my English speaking
                    friends
                    call me "<i class="text-[#FF69B4]">Mako</i>" (except TheJudge who likes to call me "Mako-san").
                    I'm a Full-Stack JS developper, who like to pick-up any sorts of skills, such as anything related to
                    cars, and computer science, lock picking, Video Games, whatever.
                    As a programer, I'm self-taught. I went to school for networking and datacenter management.
                </p>
                <p class="text-lg py-2 leading-relaxed">
                    I have other hobbies and things I like, yet again obviously cars, since this is a very wide subject,
                    but
                    also anime, music, I can also enjoy some fine TV Shows and movies.
                    Meaning that I make this website as a hobby and for simple online presence, I really like the
                    "<i class="text-[#FF69B4]">old-school</i>" internet, when it was filled with small blogs,
                    and places to share our daily lives and hobbies. In here I might share programing tips, Anime/TV
                    Show/Movies review,
                    but also try to keep the "project" page updated with my latests
                    project, and dev-logs.
                </p>
                <!-- Subtle reference to Player 67 -->
                <p class="text-xs opacity-20 hover:opacity-100 transition-opacity duration-500 mt-4">
                    "너한테 빚진 거보다 갖다 바친 게 더 많아" - #067
                </p>
            </div>
            <div class="md:w-1/2 flex flex-col items-center justify-start">
                <NuxtImg :src="profileAvatar" height="384"
                    width="384" fit="cover" format="webp" quality="80"
                    class="w-full md:max-w-md p-8 rounded-full border-4 border-[#FF69B4] hover:border-[#249f9c] transition-colors duration-300"/>
                <!-- Shapes container -->
                <div class="flex justify-center gap-12 mt-8">
                    <!-- Circle -->
                    <div
                        class="w-16 h-16 rounded-full border-4 border-[#FF69B4] hover:border-[#249f9c] transition-colors duration-300">
                    </div>
                    <!-- Triangle -->
                    <div class="w-16 h-16 relative hover:text-[#249f9c] transition-colors duration-300">
                        <div class="absolute w-0 h-0 
                            border-l-[32px] border-l-transparent
                            border-b-[56px] border-b-[#FF69B4]
                            border-r-[32px] border-r-transparent
                            hover:border-b-[#249f9c] transition-colors duration-300">
                        </div>
                    </div>
                    <!-- Square -->
                    <div
                        class="w-16 h-16 border-4 border-[#FF69B4] hover:border-[#249f9c] transition-colors duration-300">
                    </div>
                </div>
            </div>
        </section>
        <section>
            <h2 class="text-3xl font-bold mt-8 text-[#FF69B4] border-l-4 border-[#FF69B4] pl-4">Latest Blog Posts</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-if="posts.length">
                <ThePost :posts="posts" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" v-else>
                <h2 class="text-xl font-bold mt-8 text-[#FF69B4]">I haven't posted anything yet!</h2>
            </div>
        </section>
    </div>
</template>

<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
    // find post set as published
    queryContent('/blog')
        .where({ published: true })
        .sort({ publishedDate: -1 })
        .limit(3)
        .find()
)
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
const pfpArray = [
    "https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png",
    "https://cdn.asthriona.com/i/2024/12/oW2zcrM.jpeg",
    "https://cdn.asthriona.com/i/2024/12/Sung-Gi-Hoon.jpg",
    "https://cdn.asthriona.com/i/2024/12/squid-game-067-looking-up-lqtwramydrgz4ybx.webp",
]
const pfp = Math.round(Math.random() * pfpArray.length);
console.log(pfp);

let profileAvatar = pfpArray[pfp];
</script>
