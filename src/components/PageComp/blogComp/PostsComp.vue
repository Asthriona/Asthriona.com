<template>
  <v-container>
    <v-row>
      <div class="blogPosts" v-if="isLoading == true">
        <v-skeleton-loader
          class="mx-auto mt-4"
          :type="skeleton.card.types"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto mt-4"
          :type="skeleton.card.types"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto mt-4"
          :type="skeleton.card.types"
        ></v-skeleton-loader>
        <v-skeleton-loader
          class="mx-auto mt-4"
          :type="skeleton.card.types"
        ></v-skeleton-loader>
      </div>
      <div class="blogPosts" v-if="isLoading == false">
        <v-card v-for="p in posts" :key="p._id" class="mt-4">
          <v-img :src="p.image" height="200px" v-if="p.image"></v-img>
          <v-card-title>{{ p.title }}</v-card-title>
          <v-card-text>{{ p.description }}</v-card-text>
          <v-card-actions>
            <v-btn :href="`/blog/${p.slug}`" color="primary" text v-if="p.slug"
              >Read More</v-btn
            >
          </v-card-actions>
        </v-card>
      </div>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "BlogPosts",
  data() {
    return {
      isLoading: true,
      skeleton: {
        card: {
          types: "image, article, actions"
        }
      },
      posts: [],
      errors: ""
    };
  },
  beforeMount() {
    document.title = "Blog - Asthriona";
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      axios
        .get(`${process.env.VUE_APP_URI}blog/posts/asthriona.com`)
        .then(res => {
          this.posts = res.data;
          this.isLoading = false;
        })
        .catch(err => {
          this.posts = [
            {
              _id: "1",
              title: ":/",
              description: "No posts yet"
            }
          ];
          this.isLoading = false;
          return err;
        });
    }
  }
};
</script>
