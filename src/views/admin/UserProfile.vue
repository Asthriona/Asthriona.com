<template>
  <div>
    <TheHeader />
    <b-container>
      <b-row>
        <h1 v-if="message">Info: {{ message }}</h1>
        <b-col cols="12" class="text-center">
          <h1>USER PROFILE</h1>
        </b-col>
        <b-col cols="6">
          <h3>user infos</h3>
          avatar: <br />
          <img :src="avatar" class="rounded" height="200px" alt="your avatar" />
        </b-col>
        <b-col cols="6">
          <h3>UPDATE USERS DATA</h3>
          <b-form @submit="onSubmit">
            <label class="sr-only" for="avatar">Avatar</label>
            <b-form-input
              id="avatar"
              class="mb-2 mr-sm-2 mb-sm-0"
              :placeholder="
                avatar ? avatar : 'https://cdn.asthriona.com/user/avatar.png'
              "
              v-model="new_avatar"
            ></b-form-input>
            <b-button type="submit" variant="primary">Save</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import TheHeader from "../../components/TheHeader";
import axios from "axios";
export default {
  name: "UserProfile",
  components: {
    TheHeader
  },
  data() {
    return {
      avatar: "",
      new_avatar: "",
      username: "",
      message: ""
    };
  },
  async beforeMount() {
    await axios
      .get(process.env.VUE_APP_URI + "/auth/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(data => {
        this.username = data.data.username;
      });
    await axios
      .get(`${process.env.VUE_APP_URI}/user/getuser?username=${this.username}`)
      .then(user => {
        this.avatar = user.data.avatar;
      });
  },
  methods: {
    onSubmit() {
      axios
        .post(`${process.env.VUE_APP_URI}/user/postuser`, {
          username: this.username,
          avatar: this.new_avatar
        })
        .then(res => {
          this.avatar = res.data.avatar;
          this.message = res.data.message;
        });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.avatar = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
