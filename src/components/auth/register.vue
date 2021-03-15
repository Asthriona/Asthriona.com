<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="3"></b-col>
        <b-col>
          <div v-if="error">
            <b-alert show variant="danger">
              <h4 class="alert-heading">Well done!</h4>
              <p>Aye! An error successfuly happened! <br /></p>
              <hr />
              <p class="mb-0">
                {{ error }}
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
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </b-form-text>
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger" class="resetBtn"
              >Reset</b-button
            >
          </b-form>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      error: "",
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
      axios.post(process.env.VUE_APP_URI+"/auth/register", this.form).then(
        response => {
          console.log(response);
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
