<template>
  <div class="blog-new-post">
    <div class="blog-new-post__header">
      <h1>New Post</h1>
    </div>
    <!-- alerts -->
    <v-container v-if="alert.type">
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
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="blog-new-post__content">
            <div class="blog-new-post__content__form">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-text-field
                  v-model="post.title"
                  :counter="100"
                  :rules="titleRules"
                  label="Title"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="post.description"
                  :counter="0"
                  :rules="descriptionRules"
                  label="Description"
                  required
                ></v-textarea>
                <v-textarea
                  v-model="post.markdown"
                  :counter="0"
                  :rules="contentRules"
                  label="Content"
                  required
                ></v-textarea>
                <v-text-field
                  v-model="post.image"
                  label="Image"
                  :rules="imgRules"
                  required
                ></v-text-field>
                <v-combobox
                  clearable
                  hide-selected
                  multiple
                  persistent-hint
                  small-chips
                  v-model="post.keywords"
                  label="Keywords"
                  required
                ></v-combobox>
                <v-combobox
                  clearable
                  hide-selected
                  multiple
                  persistent-hint
                  small-chips
                  v-model="post.tags"
                  label="Tags"
                  required
                ></v-combobox>
                <v-switch
                  v-model="post.isPosted"
                  label="Post Now?"
                  flat
                ></v-switch>
                <v-btn color="primary" @click="submit" :disabled="!valid">
                  Submit
                </v-btn>
              </v-form>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "BlogEditPost",
  props: ["user"],
  data() {
    return {
      alert: {
        type: "",
        text: ""
      },
      form: {},
      post: {},
      valid: false,
      titleRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 100) || "Title must be less than 100 characters"
      ],
      contentRules: [v => !!v || "Content is required"],
      imgRules: [v => !!v || "Image is required"],
      descriptionRules: [v => !!v || "Description is required"]
    };
  },
  beforeMount() {
    if (!this.user || !this.user.isAdmin == true)
      return this.$router.push({ name: "Home" });
    axios
      .get(
        `${process.env.VUE_APP_URI}blog/posts/asthriona.com/${this.$route.params.id}`
      )
      .then(res => {
        this.form = res.data;
        this.post = res.data;
      });
  },
  methods: {
    submit() {
      if (this.valid) {
        axios
          .put(
            `${process.env.VUE_APP_URI}blog/posts/asthriona.com/${this.post.slug}`,
            {
              website: "asthriona.com",
              title: this.post.title,
              description: this.post.description,
              markdown: this.post.markdown,
              image: this.post.image,
              keywords: this.post.keywords,
              tags: this.post.tags,
              isPosted: this.post.isPosted || false,
              authorId: this.user.id
            },
            {
              headers: {
                // get user token from local storage
                Authorization: localStorage.getItem("token")
              }
            }
          )
          .then(res => {
            this.alert.type = "success";
            this.alert.text = "Post created successfully";
            return res.data;
            //   this.$router.push('/admin/blog');
          })
          .catch(err => {
            console.log(err.response.statusText);
            this.alert.type = "error";
            this.alert.text = `Error: ${err.response.status} - ${err.response
              .data.message || err.response.statusText}`;
          });
      }
    }
  }
};
</script>
