<template>
  <v-container>
    <div class="alert" v-if="alert.type">
      <v-row>
        <v-col cols="12">
          <v-alert
            border="right"
            colored-border
            :type="alert.type"
            elevation="2"
          >
            {{ alert.text }}
          </v-alert>
        </v-col>
      </v-row>
    </div>
    <v-row>
      <!-- Blog Management Header -->
      <v-col cols="12" class="text-center">
        <span class="display-1">Blog Management</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn to="/admin/blog/new">New Post!</v-btn>
      </v-col>
      <v-col cols="12">
        <!-- display all posts -->
        <div class="no-posts text-center" v-if="!posts.lenght <= 0">
          <span class="display-1">No Posts</span>
        </div>
        <div class="posts" v-else>
          <v-col cols="12" v-for="p in posts" :key="p._id">
            <v-card>
              <v-img :src="p.image" height="200px"></v-img>
              <v-card-title>
                <span class="headline">{{ p.title }}</span>
              </v-card-title>
              <v-card-text>
                {{ p.content }}
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" :to="`/blog/${p.slug}`" text
                  >Read More</v-btn
                >
                <v-btn color="warning" :to="`/admin/blog/edit/${p.slug}`" text
                  >Edit</v-btn
                >
                <v-btn color="error" @click="PostDelete(p.slug)" text
                  >Delete</v-btn
                >
              </v-card-actions>
            </v-card></v-col
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Blog-Management",
  props: ["user"],
  data() {
    return {
      posts: [],
      alert: {
        type: "",
        text: ""
      }
    };
  },
  methods: {
    PostRead(id) {
      // TODO: get the post from the back-end and open it in a modal
      return id;
    },
    PostEdit(id) {
      // TODO: get the post from the back-end and open an editor in a modal
      return id;
    },
    PostDelete(slug) {
      // TODO: delete the post from the back-end
      console.log(slug);
      axios
        .delete(`${process.env.VUE_APP_URI}blog/posts/asthriona.com/${slug}`, {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(res => {
          if (res.data.status === 1) {
            this.alert.type = "success";
            this.alert.text = res.data.message;
            this.alert.show = true;
            this.posts = this.posts.filter(post => post.slug !== slug);
          } else {
            this.alert.type = "error";
            this.alert.text = res.data.message + "<br>" + res.data.error;
            this.alert.show = true;
            console.log(`else error: ${res.data.error}`);
          }
        })
        .catch(err => {
          this.alert.type = "error";
          this.alert.text = err.response.data.error;
          this.alert.show = true;
        });
    },
    newPost() {
      // TODO: open a modal with a form to create a new post
    }
  },
  beforeMount() {
    if (!this.user || this.user.isAdmin == false)
      return this.$router.push({ name: "Home" });
  },
  mounted() {
    document.title = "Asthriona - Blog Management";
    axios
      .get(`${process.env.VUE_APP_URI}blog/posts/asthriona.com/admin`, {
        headers: {
          Authorization: localStorage.getItem("token")
        }
      })
      .then(res => {
        const noImageCheck = res.data;
        let posts = [];
        noImageCheck.forEach(post => {
          if (!post.image.startsWith("http" || "https")) {
            post.image = "https://picsum.photos/900/250";
            posts.push(post);
          } else {
            posts.push(post);
          }
        });

        this.posts = posts;
        this.postsLoading = false;
      })
      .catch(() => {
        this.posts = [
          {
            _id: 1,
            title: "Error :c",
            content: "No posts were found.",
            img: "https://picsum.photos/900/250"
          }
        ];
      });
  }
};
</script>
