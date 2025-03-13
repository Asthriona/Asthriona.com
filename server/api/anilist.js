export default defineEventHandler(async (event) => {
    // AniList GraphQL query
    const query = `
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
            extraLarge
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
                extraLarge
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

    return data; // Send the data to the front-end
});
