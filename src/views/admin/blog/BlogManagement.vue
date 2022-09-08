<template>
  <v-container>
    <v-row>
      <!-- Blog Management Header -->
      <v-col cols="12" class="text-center">
        <span class="display-1">Blog Management</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-btn href="/admin/blog/new" @click="NewPost">New Post!</v-btn>
      </v-col>
      <v-col cols="12">
        <!-- display all posts -->
        <div class="no-posts text-center" v-if="!posts.lenght <= 0">
          <span class="display-1">No Posts</span>
        </div>
        <div class="posts" v-else>
          <v-col cols="12" v-for="p in posts" :key="p._id">
            <v-card>
              <v-img :src="p.img" height="200px"></v-img>
              <v-card-title>
                <span class="headline">{{ p.title }}</span>
              </v-card-title>
              <v-card-text>
                {{ p.content }}
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click="PostRead(p._id)" text
                  >Read More</v-btn
                >
                <v-btn color="primary" @click="PostEdit(p._id)" text
                  >Edit</v-btn
                >
                <v-btn color="primary" @click="PostDelete(p._id)" text
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
  data() {
    return {
      posts: []
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
    PostDelete(id) {
      // TODO: delete the post from the back-end
      return id;
    },
    newPost() {
      // TODO: open a modal with a form to create a new post
    }
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
