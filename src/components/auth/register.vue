<template>
  <div>
    <!-- <b-container>
      <b-row>
        <b-col cols="3"></b-col>
        <b-col>
          <div v-if="error">
            <b-alert show variant="danger">
              <h4 class="alert-heading">Well done!</h4>
              <p>Aye! An error successfuly happened! <br /></p>
              <hr />
              <p class="mb-0">
                {{ error.message }}
              </p>
            </b-alert>
          </div>
          <div v-if="success">
            <b-alert show variant="success">
              <h4 class="alert-heading">Aye!</h4>
              <p>
                Your account {{ success }} has been created! <br />
                We sent you an email to verify your address, click the link and
                you should be able to login!
              </p>
            </b-alert>
          </div>
          <b-form @submit="onSubmit" @reset="onReset">
            <label for="text-username">Username</label>
            <b-form-input
              id="username"
              label="username"
              v-model="form.username"
              description="Enter your username"
              placeholder="Username"
            ></b-form-input>
            <label for="text-username">Email</label>
            <b-form-input
              id="email"
              label="email"
              v-model="form.email"
              description="Enter your email"
              placeholder="Email"
            ></b-form-input>
            <label for="text-password">Password</label>
            <b-form-input
              type="password"
              id="text-password"
              v-model="form.password"
              aria-describedby="password-help-block"
              placeholder="Password"
            ></b-form-input>
            <b-form-text id="password-help-block">
              Your password must be 8-20 characters long, can contain letters
              and numbers, special characters and emoji.
            </b-form-text>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger" class="resetBtn"
              >Reset</b-button
            >
          </b-form>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </b-container> -->
    <center>
      <h1>Registration are temporary disabled from this website.</h1>
      <h2>
        Please head to <a href="https://asthriona.space">Asthriona.space</a> for
        now.
      </h2>
    </center>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error: "",
      success: "",
      form: {
        username: "",
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios.post(process.env.VUE_APP_URI + "/auth/register", this.form).then(
        response => {
          this.success = response.data.username;
        },
        err => {
          this.error = err.response.data;
        }
      );
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.username = "";
      this.form.password = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  },
  mounted() {}
};
</script>

<style scoped>
.resetBtn {
  margin-left: 0.5rem;
}
.btn {
  margin-top: 0.5rem;
}
</style>
