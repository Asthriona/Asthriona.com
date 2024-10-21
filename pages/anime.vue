<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Profile Banner and Info Section -->
    <div class="relative mb-12">
      <!-- Banner Image -->
      <img src="https://cdn.asthriona.com/i/2024/10/%25pn_241021-082337.jpg" alt="Profile Banner"
        class="w-full h-48 object-cover">

      <!-- Profile Picture and Username -->
      <div class="absolute top-12 left-8 flex items-center">
        <!-- Profile Picture -->
        <img src="https://cdn.asthriona.com/i/2024/08/04853fceaae02025080e4b40392ff247.png" alt="Profile Picture"
          class="w-24 h-24 rounded-full border-4 border-white">

        <!-- Username and Profile link -->
        <div class="ml-4">
          <h1 class="text-2xl font-bold text-white">Asthriona</h1>
          <a href="https://anilist.co/user/Asthriona/" class="text-lg text-gray-200 underline">@Asthriona↗</a>
        </div>
      </div>
    </div>

    <h1 class="text-4xl font-bold text-center mb-8">My Anime List</h1>

    <h2 class="text-2xl font-bold text-center mb-8">
      Navigation:<br />
      <a class="text-sky-400 no-underline hover:underline" href="#current">Currently Watching</a> - <a
        class="text-sky-400 no-underline hover:underline" href="#history">Finished</a> - <a
        class="text-sky-400 no-underline hover:underline" href="#dropped">Dropped</a>
    </h2>

    <!-- Currently Watching List -->
    <section href="#current" id="current" class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Currently Watching ({{ currentAnimeList.length }})</h2>
      <ul v-if="currentAnimeList" class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <li v-for="anime in currentAnimeList" :key="anime.media.title.native"
          class="bg-black rounded-lg shadow-md overslow-hidden p-4 border border-gradient-to-r from-cyan-500 to-blue-500">
          <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
            class="w-full object-cover rounded-lg mb-4" />
          <p class="text-xl font-semibold">{{ anime.media.title.native }} ({{ anime.media.title.english }})</p>
          <p class="text-gray-600">Episodes: {{ anime.progress }}/{{ anime.media.episodes }} <span v-if="anime.score">|
              Score: {{ anime.score }}/10</span></p>
          <p v-if="anime.media.nextAiringEpisode !== null">Next Episode: {{ anime.media.nextAiringEpisode.episode }} ({{
            formatTimeUntilAiring(anime.media.nextAiringEpisode.timeUntilAiring) }})</p>
        </li>
      </ul>
    </section>

    <!-- Anime History -->
    <section href="#history" id="history" class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Anime History ({{ animeHistory.length }})</h2>
      <ul v-if="animeHistory" class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <li v-for="anime in animeHistory" :key="anime.media.title.romaji"
          class="bg-black rounded-lg shadow-md overslow-hidden p-4 border border-gradient-to-r from-cyan-500 to-blue-500">
          <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
            class="w-full object-cover rounded-lg mb-4" />
          <p class="text-xl font-semibold">{{ anime.media.title.romaji }} ({{ anime.media.title.english }})</p>
          <p class="text-gray-600">Start: {{ formatDate(anime.startedAt) }} - Finish: {{ formatDate(anime.completedAt)
            }}</p>
          <p class="text-gray-600">Episodes: {{ anime.media.episodes }} <span v-if="anime.score">| Score: {{ anime.score
              }}/10</span></p>
        </li>
      </ul>
    </section>

    <!-- Dropped Anime -->
    <section href="#dropped" id="dropped" class="mb-12">
      <h2 class="text-2xl text-red-50 font-semibold mb-4 dropped">Dropped</h2>
      <ul v-if="droppedAnimeList" class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <li v-for="anime in droppedAnimeList" :key="anime.media.title.native"
          class="bg-black rounded-lg shadow-md overslow-hidden p-4 border border-gradient-to-r from-cyan-500 to-blue-500">
          <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
            class="w-full object-cover rounded-lg mb-4" />
          <p class="text-xl font-semibold">{{ anime.media.title.native }} ({{ anime.media.title.english }})</p>
          <p class="text-gray-600">Episodes: {{ anime.progress }}/{{ anime.media.episodes }} <span v-if="anime.score">|
              Score: {{ anime.score }}/10</span></p>
        </li>
      </ul>
    </section>
  </div>
  <div class="fixed bottom-4 left-4 text-xs">
    <a class="text-sky-400 no-underline hover:underline" href="#current">Currently</a> -
    <a class="text-sky-400 no-underline hover:underline" href="#history">Finished</a> -
    <a class="text-sky-400 no-underline hover:underline" href="#dropped">Dropped</a>
  </div>
  <div class="fixed bottom-4 right-4 text-xs">
    <p>All data and media from <a class="text-sky-400 no-underline hover:underline"
        href="https://anilist.co/user/asthriona" target="_blank" rel="noopener noreferrer">From Anilist</a></p>
  </div>
</template>

<script setup>
import { useAsyncData } from 'nuxt/app';

// Fetch the anime data from the API
const { data } = await useAsyncData('animeList', async () => {
  const response = await $fetch('/api/anilist');
  return response?.data?.MediaListCollection?.lists.filter((_, index) => index !== 3).flatMap(list => list.entries);
});

// Process the data: filter for currently watching and history
const currentAnimeList = data?.value
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
const animeHistory = data?.value
  ?.filter(entry => entry.status === 'COMPLETED')
  ?.sort((a, b) => {
    // Convert the completedAt object into a Date object for sorting
    const dateA = new Date(a.completedAt.year, a.completedAt.month - 1, a.completedAt.day);
    const dateB = new Date(b.completedAt.year, b.completedAt.month - 1, b.completedAt.day);

    return dateB - dateA;
  });
const pausedAnimeList = data?.value?.filter(entry => entry.status === 'PAUSED');
const droppedAnimeList = data?.value?.filter(entry => entry.status === 'DROPPED');

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
.dropped {
  color: red;
}
</style>
