<template>
  <div>
    <b-container>
      <b-row>
        <h1 v-if="message">Info: {{ message }}</h1>
        <b-col cols="12" class="text-center">
          <h1>USER PROFILE</h1>
        </b-col>
        <b-col cols="6">
          <h3>user infos</h3>
          <h4>avatar:</h4>
          <br />
          <img :src="avatar" class="rounded" height="200px" alt="your avatar" />

          <ul class="userData">
            <li>userId: {{ id }}</li>
            <li>Username: {{ username }}</li>
            <li>e-mail: {{ email }}</li>
            <li>Verified: {{ verified }}</li>
            <li>Admin: {{ admin }}</li>
          </ul>
        </b-col>
        <b-col cols="6">
          <h3>UPDATE USERS DATA</h3>
          <b-form @submit="onSubmit">
            <label for="avatar">Avatar</label> <br />
            <b-form-input
              id="avatar"
              class="mb-2 mr-sm-2 mb-sm-0"
              name="avatar"
              :placeholder="
                avatar ? avatar : 'https://cdn.asthriona.com/user/avatar.png'
              "
              v-model="new_avatar"
            ></b-form-input>
            <small
              ><i
                >You cannot upload an avatar here for now, please upload it
                somewhere else and past the link here.</i
              ></small
            >
            <br />
            <label for="username">Username</label>
            <b-form-input
              id="username"
              class="mb-2 mr-sm-2 mb-sm-0"
              name="username"
              :placeholder="username ? username : 'USERNAME'"
              v-model="new_username"
            >
            </b-form-input>
            <b-button type="submit" variant="primary">Save</b-button>
          </b-form>
          <small
            ><i
              >I'm actually working on the profile feature, its sadly pretty low
              in the road map, but soon you will be able to change pretty much
              everything and see a real profile page. If you need to change your
              email, please send me an email with the new one at
              <a href="mailto:Support@asthrion.com">Support@Asthriona.com</a>
              <br />
              Also I do not accept Verification request, those are given by me
              or the Nishikino Networks Teams. No need to send me an email to
              get verified.</i
            ></small
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UserProfile",
  data() {
    return {
      avatar: "",
      new_avatar: "",
      new_username: "",
      username: "",
      admin: "",
      verified: "",
      email: "",
      id: "",
      message: ""
    };
  },
  async beforeMount() {
    await axios
      .get(`${process.env.VUE_APP_URI}/user`, { withCredentials: true })
      .then(user => {
        const data = user.data;
        this.avatar = data.avatar;
        this.username = data.username;
        this.id = data.userId;
        this.verified = data.isVerified;
        this.admin = data.isAdmin;
        this.email = data.email;
      });
  },
  methods: {
    onSubmit(event) {
    event.preventDefault();
      axios
        .post(
          `${process.env.VUE_APP_URI}/user`,
          {
            username: this.new_username,
            avatar: this.new_avatar
          },
          { withCredentials: true }
        )
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

<style scoped>
.userData {
  margin-top: 2rem;
  list-style-type: "❯ ";
  color: aliceblue !important;
}
</style>
