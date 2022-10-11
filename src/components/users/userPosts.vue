<template>
  <div class="userPosts">
    <v-container>
      <v-row>
        <v-col cols="12" v-if="posts.length">
          <v-col cols="12" v-for="post in posts" :key="post.title">
            <v-card elevation="2" class="mt-2 mb-2">
              <v-img height="100" :src="post.image"></v-img>
              <v-card-title>
                {{ post.title }}
              </v-card-title>
              <v-card-text>
                {{ post.description }}
              </v-card-text>
              <v-card-actions>
                <v-btn text @click="readPost(post.slug)">
                  Read more
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-col>
        <v-col cols="12" v-else>
          <h1>{{ userId.displayName }} has no post.</h1>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserPostsComp",
  props: ["userId"],
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    console.log(this.userId.userId);
    axios
      .get(`${process.env.VUE_APP_URI}profile/posts/${this.userId.userId}`)
      .then(res => {
        this.posts = res.data;
        this.postsLoading = false;
      });
  }
};
</script>
