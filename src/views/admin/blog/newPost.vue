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
                  v-model="form.title"
                  :counter="100"
                  :rules="titleRules"
                  label="Title"
                  required
                ></v-text-field>
                <v-textarea
                  v-model="form.description"
                  :counter="0"
                  :rules="descriptionRules"
                  label="Description"
                  required
                ></v-textarea>
                <v-textarea
                  v-model="form.markdown"
                  :counter="0"
                  :rules="contentRules"
                  label="Content"
                  required
                ></v-textarea>
                <v-text-field
                  v-model="form.image"
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
                  v-model="form.keywords"
                  label="Keywords"
                  required
                ></v-combobox>
                <v-combobox
                  clearable
                  hide-selected
                  multiple
                  persistent-hint
                  small-chips
                  v-model="form.tags"
                  label="Tags"
                  required
                ></v-combobox>
                <v-switch
                  v-model="form.isPosted"
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
  name: "BlogNewPost",
  props: ["user"],
  data() {
    return {
      alert: {
        type: "",
        text: ""
      },
      form: {},
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
  created() {
    console.log(this.user);
    if (!this.user) return this.$router.push("/wp-admin#noLogin");
    if (this.user.isAdmin == false) {
      return this.$router.push("/wp-admin#NoAdmin");
    }
  },
  methods: {
    submit() {
      if (this.valid) {
        axios
          .post(
            `${process.env.VUE_APP_URI}blog/posts`,
            {
              website: "asthriona.com",
              title: this.form.title,
              description: this.form.description,
              markdown: this.form.markdown,
              image: this.form.image,
              keywords: this.form.keywords,
              tags: this.form.tags,
              isPosted: this.form.isPosted,
              authorId: this.user.id
            },
            {
              headers: {
                Authorization: localStorage.getItem("token")
              }
            }
          )
          .then(res => {
            console.log(res.data);
            this.alert.type = "success";
            this.alert.text = "Post created successfully";
            console.log(this.form.isPosted);
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
