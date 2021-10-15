<template>
  <div class="Fuck U Rise!">
    <b-container>
      <b-row>
        <b-col cols="3"></b-col>
        <b-col>
          <b-form @submit="onSubmit" @reset="onReset">
            <div v-if="error">
              <b-alert show :variant="error">
                <h4 class="alert-heading">Message</h4>
                <p>{{ message }} <br /></p>
              </b-alert>
            </div>
            <div v-if="banned">
              <b-alert show :variant="error">
                <h4 class="alert-heading">Banned.</h4>
                <p>
                  Your account was associated with a Terms of Service violation
                  of the follow category:
                  <i>Other Terms of Service violation.</i> As result we have
                  issued an indefinite suspension from using all sites services.
                  <br />
                  For futher information please read
                  <a href="/blog/banned">This article</a>.
                </p>
              </b-alert>
            </div>
            <label for="text-email">email</label>
            <b-form-input
              id="email"
              label="email"
              v-model="form.email"
              description="Enter your Email"
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
            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger" class="resetBtn"
              >Reset</b-button
            >
          </b-form>
        </b-col>
        <b-col cols="3"></b-col>
      </b-row>
    </b-container>
    <!-- <center>
      <h1>Logins are temporary disabled.</h1>
    </center> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: "",
      message: "",
      banned: ""
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      axios
        .post(process.env.VUE_APP_URI + "/auth/login", this.form, {
          withCredentials: true
        })
        .then(
          res => {
            if (res.status == 401) {
              (this.error = "danger"),
                (this.message = "ERROR: Email or password are incorrect");
            }
            if (res.status == 200) {
              if (res.data.isBanned == true) {
                this.banned = true;
                return;
              }
              if (res.data.VerifiedEmail == false) {
                (this.error = "danger"),
                  (this.message =
                    "You need to verify your email! if you don't get the email or you cant verify because of an error please contact support@asthriona.com");
                return null;
              } else {
                this.error = res.data.error;
                this.message = res.data.message;
                this.form.email = "";
                this.form.password = "";
                this.$router.push("/user");
              }
            }
          },
          err => {
            this.error = "danger";
            this.message = "Email or password are incorrect";
            return err;
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
