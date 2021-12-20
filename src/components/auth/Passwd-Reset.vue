<template>
  <div class="password-reset">
    <h1>TEST</h1>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="text-center">
            <i class="fa fa-lock"></i>
            Reset Password
          </h1>
          <p class="text-center">
            Enter your email address and we will send you instructions on how to
            reset your password.
          </p>
          <b-form @submit="onSubmit">
            <b-form-group
              label="Email"
              label-for="email"
              description="Please enter your email"
            >
              <b-form-input
                id="email"
                type="email"
                required
                autocomplete="email"
                name="email"
                placeholder="Email"
                v-model="email"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary" class="w-100">
              Reset Password
            </b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      error: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      axios
        .post(`${process.env.VUE_APP_URI}/auth/requestreset`, {
          email: this.email
        })
        .then(res => {
          this.error = res.data.message;
          this.email = "";
        });
      this.error = "";
    }
  }
};
</script>
