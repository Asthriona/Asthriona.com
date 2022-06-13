<template>
  <b-container>
    <b-row>
      <b-col cols="12" v-if="user.isBanned == true">
        <h1 class="text-center">You'r account has been banned.</h1>
        <p>
          Your account was associated with a Terms of Service violation. As a
          result we have issued you a suspension from using any feature that
          require a login. because of this, you cannot add your website as
          friends.
        </p>
      </b-col>
      <b-col cols="12" v-else>
        <div class="text-center">
          <h1>{{ message }}</h1>
        </div>
        <div class="headText text-center">
          <h1>Friends!!!1</h1>
          <p>
            Here you can add your website as "Friend". this will automatically
            link your website on the
            <router-link to="/friends">Friend Page</router-link> on this
            website.
            <br />
            To be linked some rules applies. Your website must be: SFW (Safe for
            Work), Political oriented, Not containing any discriminatory or
            offensive content. <br />
            if I judge your website/blog is not suitable to be linked on mine I
            reserve the right to remove it and remove the right for your account
            to add it back.
          </p>
        </div>
      </b-col>
      <b-col cols="12">
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
          <h1>Friends Links submissions are temporary disabled</h1>
          <b-form-group id="name" label="Blog Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="Super Blog Name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group id="link" label="Blog link" label-for="link">
            <b-form-input
              id="link"
              v-model="form.link"
              placeholder="https://blog.exemple.com"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="desc" label="Blog Description" label-for="desc">
            <b-form-input
              id="desc"
              v-model="form.desc"
              placeholder="Description"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="img" label="Blog Image" label-for="img">
            <b-form-input
              id="img"
              v-model="form.img"
              placeholder="https://blog.exemple.com/static/logo.jpg"
              required
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" variant="primary" disabled>Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      show: true,
      message: "",
      user: {},
      form: {
        name: "",
        link: "",
        desc: "",
        img: ""
      }
    };
  },
  beforeMount() {
    axios
      .get(`${process.env.VUE_APP_URI}/user`, { withCredentials: true })
      .then(res => {
        if (res.data.isBanned == true) {
          this.show = false;
          this.user = res.data;
        }
      });
    axios
      .get(`${process.env.VUE_APP_URI}/ashblog/updatefriend`, {
        withCredentials: true
      })
      .then(res => {
        const data = res.data;
        this.form.name = data.name;
        this.form.link = data.link;
        this.form.desc = data.desc;
        this.form.img = data.img;
      });
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .post(`${process.env.VUE_APP_URI}/ashblog/friends`, this.form, {
          withCredentials: true
        })
        .then(res => {
          if (res.data.error === 200) {
            this.message = res.data.message;
          }
        })
        .catch(err => {
          this.message = err.message;
          return err;
        });
    },
    onReset(event) {
      event.preventDefault();
      this.form.name = "";
      this.form.link = "";
      this.form.desc = "";
      this.form.img = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
