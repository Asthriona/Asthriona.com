<template>
    <main class="min-h-screen bg-black text-gray-300 px-4 md:px-8 lg:px-16 py-12 font-sans">
        <!-- Hero Section -->
        <section class="max-w-6xl mx-auto space-y-2 md:space-y-4">
            <p class="text-2xl md:text-3xl text-purple-400">Hi, I'm</p>
            <h1 class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Asthriona
            </h1>
            <p class="text-2xl md:text-3xl text-gray-400">Welcome to my Website!</p>
        </section>

        <!-- About Section -->
        <section class="max-w-6xl mx-auto mt-16 md:mt-24 flex flex-col md:flex-row gap-12">
            <div class="md:w-3/5 space-y-6">
                <h2 class="text-3xl md:text-4xl font-bold text-white">
                    <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Who am I?</span>
                </h2>
                <div class="space-y-4">
                    <p class="text-lg leading-relaxed">
                        I'm Asthriona, but you can call me <span class="text-white font-medium">Makoto</span> or <span class="text-white font-medium">Mako</span> (except TheJudge who prefers "Mako-san").
                        As a self-taught Full-Stack JS developer, I'm passionate about expanding my skillset across various domains - from cars to computer science, lock picking to video games.
                        My formal education is in networking and datacenter management.
                    </p>
                    <p class="text-lg leading-relaxed">
                        Beyond coding, I'm an enthusiast of many things - particularly cars, anime, music, and quality TV shows and movies.
                        This website is my tribute to the <span class="text-white font-medium">old-school</span> internet era,
                        when personal blogs and hobby sharing were the norm. Here, you'll find programming insights,
                        entertainment reviews, project updates, and dev-logs chronicling my latest adventures.
                    </p>
                </div>
            </div>
            <div class="md:w-2/5 flex items-start justify-center">
                <div class="relative group">
                    <div class="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                    <img 
                        format="webp" 
                        src="https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png" 
                        alt="me" 
                        class="relative rounded-lg shadow-2xl w-full object-cover transform transition duration-500 hover:scale-[1.01]"
                    />
                </div>
            </div>
        </section>

        <!-- Blog Section -->
        <section class="max-w-6xl mx-auto mt-16 md:mt-24">
            <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">
                <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Latest Blog Posts</span>
            </h2>
            <div v-if="posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ThePost :posts="posts" />
            </div>
            <div v-else class="bg-gray-900 rounded-lg p-8 text-center">
                <h3 class="text-xl font-bold text-gray-300">No posts yet!</h3>
                <p class="text-gray-400 mt-2">Check back soon for new content.</p>
            </div>
        </section>
    </main>
</template>

<script setup>
const { data: posts } = await useAsyncData("latest-posts", () =>
    queryContent('/blog')
        .where({ published: true })
        .sort({ publishedDate: -1 })
        .limit(3)
        .find()
)

useSeoMeta({
    title: 'Asthriona - Full-Stack Developer & Tech Enthusiast',
    ogTitle: 'Asthriona - Full-Stack Developer & Tech Enthusiast',
    description: 'Welcome to my personal website! Developer, car enthusiast, and anime fan sharing insights on programming, entertainment, and more.',
    ogDescription: 'Welcome to my personal website! Developer, car enthusiast, and anime fan sharing insights on programming, entertainment, and more.',
    ogImage: 'https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png',
    twitterCard: 'summary_large_image',
})

useHead({
    title: "Asthriona - Full-Stack Developer & Tech Enthusiast",
    meta: [{
        name: "description",
        content: "Welcome to my personal website! Developer, car enthusiast, and anime fan sharing insights on programming, entertainment, and more."
    }]
})
</script>

<style>
.animate-gradient {
    background-size: 200% 200%;
    animation: gradient 8s ease infinite;
}

@keyframes gradient {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>