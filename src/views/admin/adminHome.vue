<template>
  <div>
    <TheHeader />
    <h2 class="m-4">
      Sup {{ username }}
      <b-icon v-if="username == 'Asthriona'" icon="patch-check"></b-icon
      ><b-icon
        icon="wrench"
        v-if="isAdmin == true && username !== 'Asthriona'"
      ></b-icon>
      ?
    </h2>
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
    <b-container v-if="isAdmin == true">
      <b-row>
        <b-col lg="8" sm="12">
          <router-link to="/admin/newpost"
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
            <router-link :to="'/admin/editPost/' + posts.slug"
              ><b-button variant="warning" @click="hide"
                >Edit</b-button
              ></router-link
            >
            |
            <b-button variant="danger" @click="remove(posts)">Delete</b-button>
            |
            <b-button variant="secondary" @click="hide">Hide</b-button>
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
            The there is entirely coded by me (still in early beta, dont really
            know vue yet.) but strongly inspired by
            <a href="www.mangoya.cn" target="_blank" rel="noopener noreferrer"
              >Aimee</a
            >
            <br />
            The footer is also from them.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <TheFooter />
  </div>
</template>

<script>
import axios from "axios";
import TheHeader from "../../components/TheHeader";
import TheFooter from "../../components/TheFooter";
export default {
  name: "AdminHome",
  components: {
    TheHeader,
    TheFooter
  },
  data() {
    return {
      username: "",
      email: "",
      isAdmin: "",
      posts: "",
      message: "",
      variant: ""
    };
  },
  created() {
    if (localStorage.getItem("token") === null) {
      this.$router.push("/admin/login");
    }
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/");
    },
    remove(posts) {
      axios
        .post("https://gateway.asthriona.com/api/ashblog/", {
          slug: posts.slug
        })
        .then(res => {
          console.log(res);
          this.message = "Post deleted!";
          this.variant = "success";
          this.postUpdates();
        });
    },
    postUpdates() {
      axios
        .get("https://gateway.asthriona.com/api/ashblog/post/admin")
        .then(res => {
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
      .get("https://gateway.asthriona.com/api/auth/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        this.username = res.data.username;
        this.email = res.data.email;
        this.isAdmin = res.data.isAdmin;
      });
    axios
      .get("https://gateway.asthriona.com/api/ashblog/post/admin")
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
