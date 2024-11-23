<template>
  <div class="content">
    <div class="isError" v-if="isError == true">
      <div class="mt-7 max-sw-sm mx-auto text-center card">
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/403.png" v-if="errorData.status == 403" />
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/404.png" v-if="errorData.status == 404" />
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/500.png" v-if="errorData.status == 500" />
        <img class="mt-7 mx-auto w-1/2 h-1/2" src="~/assets/img/503.png" v-if="errorData.status == 503" />

        <p class="mt-7 text-3xl">{{ errorData.message }}</p>
        <a href="/"><button
            class=" mt-7 text-sm font-semibold inline-block py-2 px-4 rounded-lg text-slate-300 uppercase last:mr-0 mr-4 border border-gradient-to-r from-cyan-500 to-blue-500">Go
            home!</button></a>
      </div>
    </div>
    <!-- Main Content -->
    <div v-else class="anilist">
      <!-- Hero Section -->
      <div class="relative h-[300px] mb-24">
        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black">
          <img src="https://cdn.asthriona.com/i/2024/10/%25pn_241021-082337.jpg" alt="Profile Banner"
            class="w-full h-full object-cover opacity-60" />
        </div>

        <!-- Profile Info -->
        <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 flex flex-col items-center">
          <img src="https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png" alt="Profile Picture"
            class="w-32 h-32 rounded-full border-4 border-cyan-500 shadow-lg shadow-cyan-500/20" />
          <div class="mt-4 text-center">
            <h1 class="text-3xl font-bold text-white">Asthriona</h1>
            <a href="https://anilist.co/user/Asthriona/"
              class="text-lg text-cyan-400 hover:text-cyan-300 transition-colors">
              @Asthriona↗
            </a>
          </div>
        </div>
      </div>

      <!-- Main Container -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Header -->
        <div class="text-center mb-16 space-y-6">
          <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Anime List
          </h1>
          <p class="text-gray-300 max-w-2xl mx-auto">
            This is a list of anime I'm currently watching, or things I have already watched.
            I keep my Anilist profile updated as if it was a religious obligation
            <span class="font-bold text-white">I... LOVE... STATS!</span>
          </p>

          <!-- Navigation -->
          <nav class="flex justify-center gap-4 pt-6">
            <a v-for="section in ['Currently Watching', 'Finished', 'Paused', 'Dropped']" :key="section"
              :href="`#${section.toLowerCase().replace(' ', '-')}`"
              class="px-4 py-2 rounded-lg bg-slate-900/50 text-cyan-400 hover:bg-slate-800 transition-all duration-300">
              {{ section }}
            </a>
          </nav>
        </div>

        <!-- Sections -->
        <!-- Currently Watching Section -->
        <section id="currently-watching" class="mb-20">
          <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
            <span class="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Currently Watching
            </span>
            <span class="text-lg text-gray-400">({{ currentAnimeList.length }})</span>
          </h2>

          <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="anime in currentAnimeList" :key="anime.media.title.native"
              class="group bg-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/10">
              <a :href="`https://anilist.co/anime/${anime.media.id}`" target="_blank">
                <!-- Image Container -->
                <div class="relative aspect-[3/4] overflow-hidden">
                  <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                  <div
                    class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <!-- Badges -->
                  <div class="absolute top-3 right-3 flex gap-2">
                    <div v-if="anime.score"
                      class="bg-blue-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white font-bold flex items-center gap-1">
                      <Icon name="mdi-star" class="text-yellow-300" />
                      {{ anime.score }}
                    </div>
                    <div v-if="FavArray.includes(anime.media.id)"
                      class="bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                      <Icon name="mdi-heart" />
                    </div>
                  </div>
                </div>

                <!-- Content -->
                <div class="p-5 space-y-4">
                  <!-- Titles -->
                  <div>
                    <h3 class="text-lg font-bold text-white line-clamp-1 mb-1">
                      {{ anime.media.title.native }}
                    </h3>
                    <p class="text-sm text-gray-400 line-clamp-1">
                      {{ anime.media.title.english }}
                    </p>
                  </div>

                  <!-- Progress -->
                  <div class="space-y-2">
                    <div class="flex justify-between text-sm text-gray-400">
                      <span>Progress</span>
                      <span>{{ anime.progress }}/{{ anime.media.episodes }}</span>
                    </div>
                    <div class="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        class="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-300"
                        :style="{ width: `${(anime.progress / anime.media.episodes) * 100}%` }" />
                    </div>
                  </div>

                  <!-- Next Episode -->
                  <div v-if="anime.media.nextAiringEpisode"
                    class="text-sm text-gray-400 bg-slate-800/50 rounded-lg p-3">
                    <p class="flex items-center justify-between">
                      <span>Next: Ep {{ anime.media.nextAiringEpisode.episode }}</span>
                      <span class="text-cyan-400">
                        {{ formatTimeUntilAiring(anime.media.nextAiringEpisode.timeUntilAiring) }}
                      </span>
                    </p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </section>

        <!-- FINISHED new and improved -->
        <section id="finished" class="mb-20">
          <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
            <span class="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Completed
            </span>
            <span class="text-lg text-gray-400">({{ animeHistory.length }})</span>
          </h2>

          <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="anime in animeHistory" :key="anime.media.title.romaji"
              class="group bg-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/10">
              <!-- Image Container -->
              <div class="relative aspect-[3/4] overflow-hidden">
                <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <!-- Badges -->
                <div class="absolute top-3 right-3 flex gap-2">
                  <div v-if="anime.score"
                    class="bg-blue-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white font-bold flex items-center gap-1">
                    <Icon name="mdi-star" class="text-yellow-300" />
                    {{ anime.score }}
                  </div>
                  <div v-if="FavArray.includes(anime.media.id)"
                    class="bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                    <Icon name="mdi-heart" />
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5 space-y-4">
                <div>
                  <h3 class="text-lg font-bold text-white line-clamp-1 mb-1">
                    {{ anime.media.title.native }}
                  </h3>
                  <p class="text-sm text-gray-400 line-clamp-1">
                    {{ anime.media.title.english }}
                  </p>
                </div>

                <div class="space-y-1 text-sm text-gray-400">
                  <p class="flex justify-between">
                    <span>Started:</span>
                    <span>{{ formatDate(anime.startedAt) }}</span>
                  </p>
                  <p class="flex justify-between">
                    <span>Completed:</span>
                    <span>{{ formatDate(anime.completedAt) }}</span>
                  </p>
                  <p class="flex justify-between">
                    <span>Episodes:</span>
                    <span>{{ anime.media.episodes }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
        <!-- PAUSED NEW -->
        <section id="paused" class="mb-20">
          <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
            <span class="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Anime I need to get back to
            </span>
            <span class="text-lg text-gray-400">({{ pausedAnimeList.length }})</span>
          </h2>

          <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="anime in pausedAnimeList" :key="anime.media.title.romaji"
              class="group bg-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/10">
              <!-- Image Container -->
              <div class="relative aspect-[3/4] overflow-hidden">
                <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <!-- Badges -->
                <div class="absolute top-3 right-3 flex gap-2">
                  <div v-if="anime.score"
                    class="bg-blue-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white font-bold flex items-center gap-1">
                    <Icon name="mdi-star" class="text-yellow-300" />
                    {{ anime.score }}
                  </div>
                  <div v-if="FavArray.includes(anime.media.id)"
                    class="bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                    <Icon name="mdi-heart" />
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5 space-y-4">
                <div>
                  <h3 class="text-lg font-bold text-white line-clamp-1 mb-1">
                    {{ anime.media.title.native }}
                  </h3>
                  <p class="text-sm text-gray-400 line-clamp-1">
                    {{ anime.media.title.english }}
                  </p>
                </div>

                <div class="space-y-1 text-sm text-gray-400">
                  <p class="flex justify-between">
                    <span>Started:</span>
                    <span>{{ formatDate(anime.startedAt) }}</span>
                  </p>
                  <p class="flex justify-between">
                    <span>Completed:</span>
                    <span>{{ formatDate(anime.completedAt) }}</span>
                  </p>
                  <p class="flex justify-between">
                    <span>Episodes:</span>
                    <span>{{ anime.media.episodes }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>


        <!-- Dropped Anime -->
        <section id="dropped" class="mb-20">
          <h2 class="text-2xl font-bold mb-8 flex items-center gap-3">
            <span class="bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent">
              Dropped
            </span>
            <span class="text-lg text-gray-400">({{ droppedAnimeList.length }})</span>
          </h2>

          <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <li v-for="anime in droppedAnimeList" :key="anime.media.title.romaji"
              class="group bg-slate-900/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300 hover:scale-102 hover:shadow-xl hover:shadow-blue-500/10">
              <!-- Image Container -->
              <div class="relative aspect-[3/4] overflow-hidden">
                <img :src="anime.media.coverImage.large" :alt="anime.media.title.native"
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <!-- Badges -->
                <div class="absolute top-3 right-3 flex gap-2">
                  <div v-if="anime.score"
                    class="bg-blue-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white font-bold flex items-center gap-1">
                    <Icon name="mdi-star" class="text-yellow-300" />
                    {{ anime.score }}
                  </div>
                  <div v-if="FavArray.includes(anime.media.id)"
                    class="bg-red-500/90 backdrop-blur-sm px-3 py-1 rounded-full text-white">
                    <Icon name="mdi-heart" />
                  </div>
                </div>
              </div>

              <!-- Content -->
              <div class="p-5 space-y-4">
                <div>
                  <h3 class="text-lg font-bold text-white line-clamp-1 mb-1">
                    {{ anime.media.title.native }}
                  </h3>
                  <p class="text-sm text-gray-400 line-clamp-1">
                    {{ anime.media.title.english }}
                  </p>
                </div>

                <div class="space-y-1 text-sm text-gray-400">
                  <p class="flex justify-between">
                    <span>Started:</span>
                    <span>{{ formatDate(anime.startedAt) }}</span>
                  </p>
                  <p class="flex justify-between">
                    <span>Completed:</span>
                    <span>{{ formatDate(anime.completedAt) }}</span>
                  </p>
                  <p class="flex justify-between">
                    <span>Episodes:</span>
                    <span>{{ anime.media.episodes }}</span>
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </div>
      <!-- Footer Navigation -->
      <div class="fixed bottom-4 left-0 right-0 flex justify-between px-4 text-xs text-gray-400">
        <div class="flex gap-3">
          <a v-for="link in ['Currently Watching', 'Finished', 'Paused', 'Dropped']" :key="link"
            :href="`#${link.toLowerCase().replace(' ', '-')}`"
            class="text-cyan-400 hover:text-cyan-300 transition-colors">
            {{ link }}
          </a>
        </div>
        <p>
          All data and media from
          <a href="https://anilist.co/user/asthriona" target="_blank" rel="noopener noreferrer"
            class="text-cyan-400 hover:text-cyan-300 transition-colors">
            Anilist
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';

let isError;
let errorData;
// Fetch the anime data from the API
const { data } = await useAsyncData('animeList', async () => {
  const response = await $fetch('/api/anilist');
  // Check for API errors and set custom error message
  if (response.errors) {
    isError = true;
    errorData = response.errors[0]
  } else {
    const animeList = response?.data?.MediaListCollection?.lists.filter((_, index) => index !== 3).flatMap(list => list.entries);
    const userFavorites = response?.data?.User?.favourites?.anime?.nodes || [];

    return {
      animeList,
      user: {
        favorites: userFavorites
      }
    };
  }
});

const userFavorites = data?.value.user.favorites;
const FavArray = []
// Get a list of ID from the fav list: 
userFavorites.forEach(a => {
  if (!userFavorites) return;
  FavArray.push(a.id);
});

// Process the data: filter for currently watching and history
const currentAnimeList = data?.value.animeList
  .filter(entry => entry.status === 'CURRENT')
  .sort((a, b) => {
    const aIsAiring = a.media.nextAiringEpisode ? 1 : 0;
    const bIsAiring = b.media.nextAiringEpisode ? 1 : 0;

    if (aIsAiring === bIsAiring) {
      // If both are either airing or not, sort by progress
      return b.progress - a.progress;
    }

    // Prioritize airing anime first
    return bIsAiring - aIsAiring;
  });
const animeHistory = data?.value.animeList
  ?.filter(entry => entry.status === 'COMPLETED')
  ?.sort((a, b) => {
    // Convert the completedAt object into a Date object for sorting
    const dateA = new Date(a.completedAt.year, a.completedAt.month - 1, a.completedAt.day);
    const dateB = new Date(b.completedAt.year, b.completedAt.month - 1, b.completedAt.day);

    return dateB - dateA;
  });
const pausedAnimeList = data?.value.animeList.filter(entry => entry.status === 'PAUSED');
const droppedAnimeList = data?.value.animeList.filter(entry => entry.status === 'DROPPED');

// Helper function to format the date
const formatDate = (date) => {
  if (!date.year) return 'N/A';
  return `${date.year}-${date.month || '??'}-${date.day || '??'}`;
};

function formatTimeUntilAiring(seconds) {
  if (seconds <= 0) {
    return 'Airing now';
  }

  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (days > 0) {
    return `In ${days} day${days > 1 ? 's' : ''}`;
  }

  if (hours > 0) {
    return `In ${hours} hour${hours > 1 ? 's' : ''}`;
  }

  if (minutes > 0) {
    return `In ${minutes} minute${minutes > 1 ? 's' : ''}`;
  }

  // I don't this this will work, bit just in case, it will show "Airing now!" for 20 minutes.
  if (seconds <= 20 * 60) {
    return 'Airing now';
  }

  return 'In less than a minute';
}

</script>

<style scoped>
.content {
  background-color: rgb(0, 0, 0);
  min-height: 100vh;
}

/* Add a subtle gradient animation to the cards on hover */
.group:hover {
  background: linear-gradient(45deg,
      rgba(59, 130, 246, 0.1),
      rgba(34, 211, 238, 0.1));
}
</style>