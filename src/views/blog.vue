/* eslint-disable */
<template>
  <b-container fluid>
    <v-row>
      <div class="header">
        <v-col cols="12" class="SiteTitle text-center">
          <div class="mainTextBlock">
            <span class="display-4 MainLine">
              Asthriona
            </span>
            <br />
            <span class="headline SecondLine">
              A broken heart was blinded by a beautiful mind.
            </span>
            <br />
            <span class="subline" style="margin-left:25%;">
              &mdash;DEMONDICE, 2019
            </span>
          </div>
        </v-col>
      </div>
      <v-col cols="9">
        <PostsComp />
      </v-col>
      <v-col cols="3">
        <right-bar />
      </v-col>
    </v-row>
  </b-container>
</template>

<script>
import axios from "axios";
import RightBar from "../components/PageComp/blogComp/rightBar.vue";
import PostsComp from "../components/PageComp/blogComp/PostsComp.vue";
export default {
  name: "Blog-home",
  components: {
    RightBar,
    PostsComp
  },
  data() {
    return {
      posts: "",
      errors: "",
      avatar: "",
      likes: "",
      addLike: 0
    };
  },
  metaInfo: {
    title: "Asthriona | Blog",
    htmlArrts: {
      lang: "en",
      amp: true
    }
  },
  async beforeMount() {
    document.title = "Asthriona - Blog";
    await axios
      .get(process.env.VUE_APP_URI_V1 + "ashblog/post")
      .then(response => (this.posts = response.data.data.articles))
      .catch(error => (this.errors = error));
    await axios
      .get(
        `${process.env.VUE_APP_URI_V1}user/getuser?username=6167a00883e7e25adc692bf7`
      )
      .then(user => {
        this.avatar = user.data
          ? user.data
          : "https://cdn.nishikino.xyz/asthriona/ProfilePict/mako.png";
      });
    await axios
      .get(`${process.env.VUE_APP_URI_V1}ashblog/Getlikes`)
      .then(res => {
        this.likes = res.data.likes;
      });
  },
  mounted() {
    setInterval(this.sendLikes, 10000);
  },
  methods: {
    like() {
      this.addLike++;
      this.likes++;
    },
    sendLikes() {
      if (this.addLike == 0) return;
      axios
        .post(process.env.VUE_APP_URI + "/ashblog/likes", {
          likes: this.addLike
        })
        .then(() => {
          this.addLike = 0;
        });
    },
    alink() {
      var audio = new Audio(
        "https://cdn.nishikino.xyz/asthriona/blog/static/gawr-gura-a.wav"
      );
      audio.play();
    }
  }
};
</script>

<style scoped>
.header {
  background-image: url(https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/04/blogHeader.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
