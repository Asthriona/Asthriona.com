<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <div v-if="message">
            <b-alert show :variant="variant">{{ message }}</b-alert>
          </div>
          <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group id="input-group-1" label="Title:" label-for="title">
              <b-form-input
                id="title"
                v-model="form.title"
                type="text"
                placeholder="Post Title"
                :value="title"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Description:"
              label-for="description"
            >
              <b-form-input
                id="description"
                v-model="form.description"
                type="text"
                placeholder="Post Description"
                value="description"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label="Post:" label-for="Post">
              <b-form-textarea
                id="Post"
                v-model="form.markdown"
                placeholder="whats on your mind?"
                rows="10"
                max-rows="6"
              ></b-form-textarea>

              <b-form-group id="input-group-1" label="Image:" label-for="img">
                <b-form-input
                  id="img"
                  v-model="form.img"
                  type="text"
                  placeholder="Image Link"
                  required
                ></b-form-input>
              </b-form-group>
            </b-form-group>
            <b-form-checkbox
              id="checkbox-1"
              v-model="form.hidden"
              name="checkbox-1"
              unchecked-value="false"
            >
              Hide the post
            </b-form-checkbox>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "EditPosts",
  data() {
    return {
      message: "",
      isAdmin: "",
      postId: "",
      postSlug: "",
      title: "",
      form: {
        title: "",
        description: "",
        markdown: "",
        img: "",
        hidden: ""
      }
    };
  },
  async mounted() {
    axios
      .get(process.env.VUE_APP_URI + "/auth/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        this.username = res.data.username;
        this.isAdmin = res.data.isAdmin;
      });
    await axios
      .get(`${process.env.VUE_APP_URI}/ashblog/post/${this.$route.params.slug}`)
      .then(res => {
        const article = res.data.data.article;
        this.title = article.title;
        this.form.title = article.title;
        this.form.description = article.description;
        this.form.markdown = article.markdown;
        this.form.img = article.img;
        this.form.hidden = article.hidden;
        this.postId = article._id;
        this.postSlug = article.slug;
      });
    document.title = `Asthriona - Edit ${this.form.title}`;
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await axios
        .post(
          process.env.VUE_APP_URI + "/ashblog/post/edit/" + this.postId,
          this.form
        )
        .then(res => {
          if (res.status != 200)
            return (this.message = `Yikes! An error happened \n ${res.statusText}`);
          this.$router.push(`/blog/${this.postSlug}`);
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      (this.form.title = ""),
        (this.form.description = ""),
        (this.form.markdown = ""),
        (this.form.img = "");
    }
  }
};
</script>
