<template>
  <div>
    <b-container>
      <h1 class="text-center mt-4">Friends!!! :D</h1>
      <b-row>
        <b-col v-for="blog in blogs" :key="blog">
          <b-card
            :title="blog.name"
            :img-src="blog.img"
            :img-alt="`${blog.name}'s icon`"
            img-top
            tag="article"
            style="max-width: 18rem;"
            class="mb-2"
          >
            <b-card-text>
              {{ blog.desc }}
            </b-card-text>
            <b-button :href="blog.link" variant="primary">Visite</b-button>
          </b-card>
        </b-col>
        <b-col cols="12" class="mb-4 text-center infos"
          ><small
            >You can add your blog here via your profile, an account is
            mendatory to be listed here. <br />
            Any inapropriate links will be removed and account might be
            banned.</small
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Friends!!!",
  data() {
    return {
      blogs: []
    };
  },
  beforeMount() {
    axios.get(process.env.VUE_APP_URI + "/ashblog/friends").then(res => {
      this.blogs = res.data.friends;
    });
  },
  metaInfo: {
    meta: [
      // twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Asthriona" },
      { name: "twitter:title", content: "Asthriona" },
      {
        name: "twitter:description",
        content:
          "Full-Stack dev | Maker of @YukikoApp | Japan/car Enthusiast. | Like: Miku. / Dislike: The world. | Links: http://bio.link/asthriona | pfp @lgisdead"
      },
      {
        name: "twitter:image",
        content:
          "https://cdn.nishikino.xyz/asthriona/blog/static/Fh6EIPrm_400x400.jpg"
      }
    ]
  }
};
</script>

<style scoped>
.card {
  background-color: #1b1b1b;
  color: aliceblue;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 123, 255, 1);
}
.card-img-top {
  object-fit: cover;
  height: 17.9rem;
  width: 17.9rem;
}
.infos {
  color: grey;
}
</style>
