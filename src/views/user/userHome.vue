<template>
  <div>
    <h2 class="m-4">
      Sup <b-avatar :src="user.avatar"></b-avatar> {{ user.username }}
      <b-icon v-if="isVerified == true" icon="patch-check"></b-icon
      ><b-icon
        icon="wrench"
        v-if="user.isAdmin == true && user.isVerified == false"
      ></b-icon>
      ?
    </h2>
    {{ user }}
    <div class="userAdminLink" v-if="user.isAdmin == true">Admin link</div>
    <router-link to="/user/userprofile">User profile</router-link> <br />
    <b-button variant="danger" class="m-4" @click="logout">logout</b-button>
    <hr />
    <b-container>
      <b-row>
        <b-col cols="8" class="text-center">
          <div v-if="message">
            <b-alert show :variant="variant">{{ message }}</b-alert>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="user.isAdmin == true">
      <b-row>
        <b-col lg="8" sm="12">
          <router-link to="/user/newpost"
            ><b-button class="mt-4" variant="primary"
              >New Post</b-button
            ></router-link
          >
          <b-card
            v-for="posts in posts"
            :key="posts"
            bg-variant="#1b1b1b"
            :title="posts.title"
            :img-src="posts.img"
            tag="article"
            style="max-width: 100%;"
            class="mt-4 mb-4"
            img-height="200"
          >
            <p>{{ posts.description }}</p>
            <router-link :to="'/blog/' + posts.slug">Read</router-link> |
            <router-link :to="'/user/editPost/' + posts.slug"
              ><b-button variant="warning" @click="hide"
                >Edit</b-button
              ></router-link
            >
            |
            <b-button variant="danger" @click="remove(posts)">Delete</b-button>
            |
            <b-button
              variant="secondary"
              v-if="posts.hidden == false"
              @click="hide"
              >Hide</b-button
            >
            <b-button variant="secondary" v-else @click="hide"
              >Un-hide</b-button
            >
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- IF NOT ADMIN! -->
    <b-container v-else>
      <b-row>
        <b-col>
          <h2>Welcome to my blog!</h2>
          <p>
            Thanks for checking my blog and creating an account on it! :3 <br />
            For now I havent add anything about profiles and stuff, but all this
            should come soon! Ill be working day and night to add them as soon
            as possible. <br />
            I will also add a RSS feed, and a like system, this page (should
            rename it profile soon too) will be used to edit your profile, see
            the posts you liked and all those things.
          </p>
          <h3>Credit:</h3>
          <p>
            As I like crediting people I took inspiration from or even code
            sometimes here we go! <br />
            This website is entirely coded by me (still in early beta, dont
            really know vue yet.) but strongly inspired by
            <a href="www.mangoya.cn" target="_blank" rel="noopener noreferrer"
              >Aimee</a
            >
            <br />
            The footer is their code.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserHome",
  props: ["user"],
  data() {
    return {};
  },
  methods: {
    logout() {
      axios.get(process.env.VUE_APP_URI + "/auth/logout", {
        withCredentials: true
      });
      location.href = "/";
    },
    remove(posts) {
      axios
        .post(
          process.env.VUE_APP_URI + "/ashblog/",
          {
            slug: posts.slug
          },
          { withCredentials: true }
        )
        .then(() => {
          this.message = "Post deleted!";
          this.variant = "success";
          this.postUpdates();
        });
    },
    postUpdates() {
      axios.get(process.env.VUE_APP_URI + "/ashblog/post/user").then(res => {
        this.posts = res.data.data.articles;
      });
    },
    hide() {
      this.message = "Not implemented yet";
      this.variant = "warning";
    }
  },
  mounted() {
    document.title = "Asthriona - Admin";

    axios
      .get(process.env.VUE_APP_URI + "/ashblog/post/admin", {
        withCredentials: true
      })
      .then(response => (this.posts = response.data.data.articles))
      .catch(error => (this.errors = error));
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
article .card-img {
  background-position: top;
  background-size: cover;
  object-fit: cover;
  height: 10rem;
}
</style>
