<template>
  <div>
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
      <hr />
      <b-row>
        <b-col cols="12">
          <h4>About the Author:</h4>
        </b-col>
        <b-col cols="md-11 xs-12">
          <b-img
            left
            :src="author.profilePict || 'https://cdn.nishikino.xyz/asthriona/ProfilePict/default.jpg'"
            height="100px"
            class="rounded"
          ></b-img>
          <div class="img-text">
            <h2 class="AuthorName">
              {{ author.username }}
              <span
                ><b-icon
                  v-if="author.isVerified == true"
                  icon="patch-check"
                ></b-icon>
                <b-icon icon="wrench" v-if="author.isAdmin == true"></b-icon
              ></span>
            </h2>
            <p class="authorDesc">{{ author.description }}</p>
          </div>
        </b-col>
      </b-row>
      <br>
      <b-row>
        <div class="comments" v-if="user == null">
          <h1>You need to be logged in to post a comment.</h1>
        </div>
        <div class="comments" v-else>
          <div class="user">
            <img :src="user.pp" :alt="user.username" /> {{ user.username }}
          </div>
          <form action="/Ashblog/comment/post" method="post">
            <label for="comment">Your comment:</label>
            <input type="text" name="comment" id="comment" />
            <button disabled="disabled">Submit</button>
          </form>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostShow",
  data() {
    return {
      post: null,
      user: null,
      author: {
        profilePict:
          "https://cdn.nishikino.xyz/asthriona/ProfilePict/asthriona.gif",
        username: "Asthriona",
        description:
          "People call me 'Cool kid' Because I know code, video editing, and I'm the best tank of <Eternal Vengeance>. But don't let them fool you! I'm not cool :D",
        isVerified: true,
        isAdmin: false
      }
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
.AuthorName,
.authorDesc {
  margin-left: 7.5rem !important;
}
</style>
