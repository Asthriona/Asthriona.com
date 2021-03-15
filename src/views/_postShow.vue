<template>
  <div>
    <TheHeader />
    <div
      class="post-thumbnail"
      v-bind:style="{ 'background-image': 'url(' + post.img + ')' }"
    ></div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="mt-4">{{ post.title }}</h1>
          <small> {{ post.createdAt | moment("MMMM Do YYYY, h:mm a") }} </small>
          <hr />
          <div class="content" v-html="post.sanitizedHtml"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
import TheHeader from "../components/TheHeader";
export default {
  name: "PostShow",
  components: {
    TheHeader
  },
  data() {
    return {
      post: null
    };
  },
  mounted() {
    document.title = "Asthriona - Blog";
    axios
      .get(
        `${process.env.VUE_APP_URI}/ashblog/post/${this.$route.params.slug}`,
        { withCredentials: true }
      )
      .then(response =>
        response
          ? (this.post = response.data.data.article)
          : { title: "Error! API seems to be down :/" }
      );
  },
  methods: {
    logs() {
      console.log(this.post);
    }
  }
};
</script>

<style scoped>
.post-thumbnail {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: 50%;
}
</style>
