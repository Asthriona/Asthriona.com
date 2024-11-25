---
title: "Creating a Dynamic anime page!"
description: "Are you wondering how I made my anime page? Let me Explain!"
banner: "https://cdn.asthriona.com/i/2024/11/anime-page-banner.jpg"
published: true
publishedDate: 10/25/2024
editedDate: null
tags:
  - Blog
  - development
---
# Creating a Dynamic anime page!

Hello friends!  
I've been working a lot on this website recently, getting back into development after a while, and on a project that's just for fun it's... well been fun you know?  
So what have I done? You clicked on this article, so you already know! I made myself an anime page!  
It's nothing fancy really, I just get the data from my Anilist profile. Since it's always updated (Me being a stats nerds helps a lot!)  
I took a few days to get it working, and while i'm happy with it, I really want to improve it in the near future.  
Add some features, and fix the responsiveness of the UI.  
That also helped me learn a lot about how Nuxt works. I like not having to manage an expensive army of server to serve all the data from a back-end.  
Instead nuxt takes care of it!  
  
Now, How did I make it and what was my thought process?  
**LET ME EXPLAIN!!**  
![An image in referance of Persona 5 when the player makes coffee and Sojiro explain the tast, but here represented as Neon Genesis Evangelion](https://cdn.asthriona.com/i/2024/11/letmeexplain.png)

I wanted something that simply displays all the anime I'm watching, and order them in a specific order.  
First things first, We need to query Anilist:  
I also had an idea of how I wanted things to be ordered, I'll explain that a bit later.  
After a great time of figuring things out as I never understood how GraphQL works I ended up with this:  
```js
query {
      MediaListCollection(userName: "asthriona", type: ANIME) {
        lists {
          name
          entries {
            media {
            id
              title {
                romaji
                english
                native
              }
              episodes
              coverImage {
                large
              }
              startDate {
                year
                month
                day
              }
              nextAiringEpisode {
                episode
                timeUntilAiring
              }
              status
              isFavourite
            }
            progress
            score
            status
            startedAt {
              year
              month
              day
            }
            completedAt {
              year
              month
              day
            }
          }
        }
      }
    }
```
then we need to take care of the data, I knew how it would looks like since I was figuring things out in the [Anilist GraphQL UI](https://anilist.co/graphiql).  
```js
"MediaListCollection": {
      "lists": [
        {
          "name": "Completed TV",
          "entries": [
            {
              "media": {
                "id": 6702,
                "title": {
                  "romaji": "FAIRY TAIL",
                  "english": "Fairy Tail",
                  "native": "FAIRY TAIL"
                },
                "episodes": 175,
                "coverImage": {
                  "large": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b6702-1FZrcyOB4NfH.png"
                },
                "startDate": {
                  "year": 2009,
                  "month": 10,
                  "day": 12
                },
                "nextAiringEpisode": null,
                "status": "FINISHED",
                "isFavourite": false
              },
              "progress": 175,
              "score": 7,
              "status": "COMPLETED",
              "startedAt": {
                "year": null,
                "month": null,
                "day": null
              },
              "completedAt": {
                "year": null,
                "month": null,
                "day": null
              }
            },
        },
}
```
Now we need to put all that in an object and send it to the front:  
```javascript
// This is using the back-end provided by Nuxt
export default defineEventHandler(async (event) => {
    // AniList GraphQL query
    const query = `
query {
      MediaListCollection(userName: "asthriona", type: ANIME) {
        lists {
          name
          entries {
            media {
            id
              title {
                romaji
                english
                native
              }
              episodes
              coverImage {
                large
              }
              startDate {
                year
                month
                day
              }
              nextAiringEpisode {
                episode
                timeUntilAiring
              }
              status
              isFavourite
            }
            progress  # Number of episodes you've watched
            score
            status
            startedAt {
              year
              month
              day
            }
            completedAt {
              year
              month
              day
            }
          }
        }
      }
    }
    `;

    // Make the request to AniList
    const response = await fetch('https://graphql.anilist.co', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    });

    const data = await response.json();
    // return for the front to grab.
    return data;
});

```

Alright! Great! Progress!  
Now time to get it on the front:  
```javascript
 // src/pages/anime.vue
<template>
    {{ data }}
  </template>
  
  <script setup>
  import { useAsyncData } from 'nuxt/app';  
  // Fetch the anime data from the API
  const { data } = await useAsyncData('animeList', async () => {
    const response = await $fetch('/api/anilist');
    const animeList = response?.data?.MediaListCollection?.lists.filter((_, index) => index !== 3).flatMap(list => list.entries);
    return { animeList };
  });
  </script>
  
```
In this exemple I wanted to remove a custom list that's always in 3rd position named "Best of All Time" else that would create some duplicates.  
You can also just filter the results by list names in the sorting part instead.  
Using this page, we can see what the API returns, and that it works, we get all the anime, and it's data.  
Now, time to make that looks good, but first. How do I want to get the order?  
  
First the category:  
1. Currently Watching,  
2. History of what i've finished  
3. Things I stoped for now (Many reasons to that)  
4. Dropped. (what I really didn't like.)  
  
Then for the Currently watching list I had order for each anime: (by priority)  
1. Is actively being released every week.  
2. Most watched episodes  
  
so for exemple as I write those lines I have:  
```js
["DAN DA DAN", "Blue Box", "SPY×FAMILY", "Mr. Osomatsu"]
```
In that array, we have 4 anime, 2 releasing, and 2 that are finished releasing, but I'm still watching.  
I want `DAN DA DAN` and `Blue Box` to be first, regardless of their number of episodes watched.  
Then `SPY×FAMILY` and `Mr. Osomatsu` needs to be ordered depending on the number of episodes watched, since they have finished releasing.  
`Mr. Osomatsu`: Progress: 5/25  
`SPY×FAMILY`: progress: 6/12.  
Since I've watched more episode of `SPY×FAMILY` it will be displayed in 3rd, then Mr. Osomatsu. (First and second will be `DAN DA DAN` and `Blue Box`)  
  
```javascript
// src/pages/anime.vue
// Process the data:
const currentAnimeList = data?.value.animeList
// filter for currently watching and history
  .filter(entry => entry.status === 'CURRENT')
  // Sorting as explained above.
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
```
![screenshot of the order of the anime](https://cdn.asthriona.com/i/2024/10/firefox_241025-083636.png)  
After changing the "data" in the template to "currentAnimeList" we get a smaller list with only what is currently being watched.   
this list is in the right order; now we just need to make it pretty and decide what we want to show or not.   
  
```html
<!-- src/pages/anime.vue -->

<!-- Currently Watching List -->
    <section href="#current" id="current" class="mb-12">
    <!-- Display the name of the category and the number of items in it. -->
      <h2 class="text-2xl font-semibold mb-4">Currently Watching ({{ currentAnimeList.length }})</h2>
      <!-- Create a list of those -->
      <ul v-if="currentAnimeList" class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      <!-- v-for is like a forEach loop, in JS. -->
        <li v-for="anime in currentAnimeList" :key="anime.media.title.native"
          class="bg-black rounded-lg shadow-md overflow-hidden p-4 border border-gradient-to-r from-cyan-500 to-blue-500">
          <!-- Get the anime cover and display it with the title as "alt" -->
          <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
            class="w-full object-cover rounded-lg mb-4" />
            <!-- The title in Japanese then in english between () -->
          <p class="text-xl font-semibold">{{ anime.media.title.native }} ({{ anime.media.title.english }})</p>
          <!-- Our progress/Total episodes and the score/10 (My scores are /10) -->
          <p class="text-gray-600">Episodes: {{ anime.progress }}/{{ anime.media.episodes }} <span v-if="anime.score">|
              Score: {{ anime.score }}/10</span></p>
              <!-- v-if is conditional so if the "nextAiringEpisode" is not null we display it -->
              <!-- and format the time, to make it pretty -->
          <p v-if="anime.media.nextAiringEpisode !== null">Next Episode: {{ anime.media.nextAiringEpisode.episode }} ({{
            formatTimeUntilAiring(anime.media.nextAiringEpisode.timeUntilAiring) }})</p>
        </li>
      </ul>
    </section>
```
with this instead of the "\{\{ currentAnimeList \}\}" at the top and with Tailwind, it looks pretty good already.  
Feel free to make it your own, by editing the HTML or the data shown.
![Screenshot of the result so far](https://cdn.asthriona.com/i/2024/10/explorer_241025-085713.png)  
  
I mentioned in the exemple a custom function to format the Airing time. Anilist has a funny way to display it, so here is the function:   
```javascript
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
  return 'In less than a minute';
}
```

You can add more sections with other category like "COMPLETED", "PAUSED" and "DROP" like I did.  
No need to re-do the request, just the sorting, and the html.  
This goes in the "\<script setup\>":  
```javascript
const animeHistory = data?.value.animeList
  ?.filter(entry => entry.status === 'COMPLETED')
  ?.sort((a, b) => {
    // Convert the completedAt object into a Date object for sorting
    const dateA = new Date(a.completedAt.year, a.completedAt.month - 1, a.completedAt.day);
    const dateB = new Date(b.completedAt.year, b.completedAt.month - 1, b.completedAt.day);

    return dateB - dateA;
  });
```
and this in the "\<template\>"  
```html
<section href="#history" id="history" class="mb-12">
      <h2 class="text-2xl font-semibold mb-4">Anime History ({{ animeHistory.length }})</h2>
      <ul v-if="animeHistory" class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        <li v-for="anime in animeHistory" :key="anime.media.title.romaji"
          class="bg-black rounded-lg shadow-md overslow-hidden p-4 border border-gradient-to-r from-cyan-500 to-blue-500">
          <img :src="anime.media.coverImage.large" :alt="anime.media.title.romaji"
            class="w-full object-cover rounded-lg mb-4" />
          <p class="text-xl font-semibold"> <span class="faved" v-if="FavArray.includes(anime.media.id)"><Icon name="mdi-heart" class="text-red-600" /></span>{{ anime.media.title.native }} ({{ anime.media.title.english }})</p>
          <p class="text-gray-600">Start: {{ formatDate(anime.startedAt) }} - Finish: {{ formatDate(anime.completedAt)
            }}</p>
          <p class="text-gray-600">Episodes: {{ anime.media.episodes }} <span v-if="anime.score">| Score: {{ anime.score
              }}/10</span></p>
        </li>
      </ul>
    </section>
```
On that one I also wanted to display when I started and finished the anime, so I have another function to format that time:  
```javascript
const formatDate = (date) => {
  if (!date.year) return 'N/A';
  return `${date.year}-${date.month || '??'}-${date.day || '??'}`;
};
```
And just like that now we have the history too!  
This bit will take all the anime in the "COMPLETED" section, and display it here with the total number of episodes and your score if you put one.  
  
repeat that for the others sections if you want to display them too.   
  
A late addition is the "IsFavourite". This seems not to work on the anilist API, it returns false to everything, so instead I added a User query to the   GraphQL query, and created a list of ID from my Favorited anime. 
then in the v-for i added a check to see if the Id of the anime was in the list and if yes, then just add a heart in front of the title.   
  
  
```javascript
// GraphQL query:
query {
  User(name: "asthriona") {
    favourites {
      anime {
        nodes {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          episodes
          status
        }
      }
    }
  }
      MediaListCollection(userName: "asthriona", type: ANIME) {
        lists {
          name
          entries {
            media {
            id
              title {
                romaji
                english
                native
              }
              episodes
              coverImage {
                large
              }
              startDate {
                year
                month
                day
              }
              nextAiringEpisode {
                episode
                timeUntilAiring
              }
              status
              isFavourite
            }
            progress  # Number of episodes you've watched
            score
            status
            startedAt {
              year
              month
              day
            }
            completedAt {
              year
              month
              day
            }
          }
        }
      }
    }
```

Then we need to edit the fetch a little:   
```javascript
const { data } = await useAsyncData('animeList', async () => {
  const response = await $fetch('/api/anilist');
  const animeList = response?.data?.MediaListCollection?.lists.filter((_, index) => index !== 3).flatMap(list => list.entries);
  const userFavorites = response?.data?.User?.favourites?.anime?.nodes || [];

  return {
    animeList,
    user: {
      favorites: userFavorites
    }
  };
});

const userFavorites = data?.value.user.favorites;
const FavArray = []
// Get a list of ID from the fav list: 
userFavorites.forEach(a => {
  FavArray.push(a.id);
});
```
  
And now we change the title line in all the sections:   
  
```html
<p class="text-xl font-semibold"> 
  <span class="faved" v-if="FavArray.includes(anime.media.id)">
    <Icon name="mdi-heart" class="text-red-600" />
  </span>
  {{ anime.media.title.native }} ({{ anime.media.title.english }})
</p>
```
  
And here we are finally done!   
Now you can create your own page, and make it looks like you, i made a "profile" thing at the top, with a banner and username, adding a link to the "@"
to my Anilist profile.  
I also added some "navigation" just redirecting to the same page but with a "#" at the end of the link, this will make the browser scroll down to where the ID is.   
  
Have fun with this! :)  
  
Here take a good anime song!   
it's the opening of "DAN DA DAN"  
<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6KYOlIwDHbrbeBbJEtQ0Fj?utm_source=generator" width="30%" height="120"  frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  
[DAN DA DAN on Anilist](https://anilist.co/anime/171018/DAN-DA-DAN/)  
