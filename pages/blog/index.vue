<template>
    <!-- Hero Section -->
    <div class="relative h-64 md:h-80 overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
            <div class="absolute inset-0 backdrop-blur-sm"></div>
        </div>
        <div class="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Blog
            </h1>
            <p class="text-xl text-gray-200 max-w-2xl">
                Thoughts, tutorials, and tales from my journey through tech, cars, anime, and everything in between.
            </p>
        </div>
    </div>

    <!-- Content Section -->
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Categories/Filters -->
        <div class="mb-12 flex flex-wrap gap-2">
            <button 
                v-for="category in categories" 
                :key="category.name"
                :class="[
                    'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                    category.active 
                        ? 'bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white border border-purple-500/20' 
                        : 'text-gray-400 hover:text-white border border-gray-800 hover:border-purple-500/20'
                ]"
                @click="toggleCategory(category)"
            >
                {{ category.name }}
            </button>
        </div>

        <!-- Search Bar -->
        <div class="mb-12">
            <div class="relative max-w-xl">
                <input 
                    type="text" 
                    v-model="searchQuery"
                    placeholder="Search posts..." 
                    class="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-gray-300 
                           placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 
                           transition-all duration-200"
                />
                <Icon 
                    name="heroicons:magnifying-glass-20-solid" 
                    class="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500"
                />
            </div>
        </div>

        <!-- Posts Grid -->
        <div v-if="filteredPosts.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ThePost :posts="filteredPosts" />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center py-12">
            <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900/50 mb-4">
                <Icon name="heroicons:document-text" class="h-8 w-8 text-gray-400" />
            </div>
            <h3 class="text-xl font-semibold text-white mb-2">No posts found</h3>
            <p class="text-gray-400">Try adjusting your search or filters to find what you're looking for.</p>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMorePosts" class="text-center mt-12">
            <button 
                @click="loadMore"
                class="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                       border border-purple-500/20 text-white font-medium hover:from-purple-500/20 
                       hover:to-pink-500/20 transition-all duration-200"
            >
                Load More Posts
            </button>
        </div>
    </main>
</template>

<script setup>
// Posts data
const { data: posts } = await useAsyncData('posts', () => 
    queryContent('/blog').where({ published: true }).find()
)

// Search and filtering
const searchQuery = ref('')
const postsPerPage = ref(10)
const currentPage = ref(1)

// Example categories - you can modify these based on your actual categories
const categories = ref([
    { name: 'All', active: true },
    { name: 'Tech', active: false },
    { name: 'Cars', active: false },
    { name: 'Anime', active: false },
    { name: 'Projects', active: false },
])

// Toggle category selection
const toggleCategory = (category) => {
    if (category.name === 'All') {
        categories.value.forEach(cat => cat.active = cat.name === 'All')
    } else {
        const allCategory = categories.value.find(cat => cat.name === 'All')
        if (allCategory) allCategory.active = false
        category.active = !category.active
        
        // If no categories are selected, activate 'All'
        if (!categories.value.some(cat => cat.active)) {
            allCategory.active = true
        }
    }
}

// Filter posts based on search and categories
const filteredPosts = computed(() => {
    let filtered = posts.value || []
    
    // Apply search filter
    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase()
        filtered = filtered.filter(post => 
            post.title?.toLowerCase().includes(query) || 
            post.description?.toLowerCase().includes(query)
        )
    }
    
    // Apply category filter
    const activeCategories = categories.value.filter(cat => cat.active)
    if (!activeCategories.find(cat => cat.name === 'All')) {
        filtered = filtered.filter(post => 
            activeCategories.some(cat => 
                post.categories?.includes(cat.name.toLowerCase())
            )
        )
    }
    
    // Apply pagination
    return filtered.slice(0, currentPage.value * postsPerPage.value)
})

// Check if there are more posts to load
const hasMorePosts = computed(() => {
    const totalPosts = posts.value?.length || 0
    return currentPage.value * postsPerPage.value < totalPosts
})

// Load more posts
const loadMore = () => {
    currentPage.value++
}

// SEO
useHead({
    title: 'Blog - Asthriona',
    meta: [
        {
            name: 'description',
            content: 'Explore articles about technology, cars, anime, and more. Join me on my journey through various interests and projects.'
        }
    ]
})
</script>