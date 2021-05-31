<template>
  <div class="newPost">
    <div>
      <h1>New Posts</h1>
    </div>
    <div class="blogPost" v-if="isAdmin == true">
      <b-container>
        <b-row>
          <b-col>
            <b-form @submit="onSubmit" @reset="onReset">
              <b-form-group id="input-group-1" label="Title:" label-for="title">
                <b-form-input
                  id="title"
                  v-model="form.title"
                  type="text"
                  placeholder="Post Title"
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
                value="true"
                unchecked-value="false"
              >
                Hide the post
              </b-form-checkbox>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>

            <!-- THIS IS FOR LATER USE WHEN I FOUND OUT HOW TO RENDER MARKDOWN HERE 
                <b-card class="mt-3" bg-variant="dark" text-variant="white" header="Preview">
              <h3>{{form.title}}</h3>
              <strong> {{form.description}} </strong>
              <p>
                  {{form.markdown}}
              </p>
            </b-card> -->
            <h4 v-if="form.img" class="mt-4">Image Preview</h4>
            <b-img :src="form.img" v-if="form.img" class="mt-4"></b-img>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div class="Not allowed" v-else>
      <b-container>
        <b-row>
          <b-col>
            <h2>Heya!</h2>
            <p>
              Im really sorry but you are not admin on my blog nor Nishikino
              Networks. <br />
              Only those person can write/edit/delete posts on my blog. <br />
              if you are looking for the posts you liked or your profile please
              <router-link to="/user">click here</router-link> or
              <router-link to="/blog">click here</router-link> to get back to
              the lists of posts
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "NewPost",
  data() {
    return {
      username: "",
      isAdmin: "",
      form: {
        title: "",
        description: "",
        markdown: "",
        img: "",
        hidden: "true"
      }
    };
  },
  async mounted() {
    document.title = "Asthriona - New Post";
    await axios
      .get(process.env.VUE_APP_URI + "/auth/user", {
        withCredentials: true
      })
      .then(res => {
        this.username = res.data.username;
        this.isAdmin = res.data.isAdmin;
      });
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault();
      await axios
        .post(process.env.VUE_APP_URI + "/ashblog/post/new", this.form, {
          withCredentials: true
        })
        .then(this.$router.push("/user"));
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
