<template>
  <div class="loginComp">
    <v-container>
      <v-row align="center" justify="center">
        <v-col xl="5" xs="12" v-if="error.type">
          <v-alert :type="error.type">
            <p>{{ error.message }}</p>
          </v-alert>
        </v-col>
        <v-col cols="12" v-if="error.type"></v-col>
        <v-col xl="5" xs="12">
          <v-form @submit="login">
            <v-text-field
              label="Email"
              v-model="email"
              autofocus
              :rules="[v => !!v || 'Email is required']"
            ></v-text-field>
            <v-text-field
              label="Password"
              v-model="password"
              :rules="[v => !!v || 'Password is required']"
              :append-icon="PWDdisplay ? 'mdi-eye' : 'mdi-eye-off'"
              :type="PWDdisplay ? 'text' : 'password'"
              @click:append="PWDdisplay = !PWDdisplay"
              @keydown.enter="login"
            ></v-text-field>
            <v-btn
              color="primary"
              @click="login"
              :disabled="!email || !password"
            >
              Login
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "LoginComp",
  data() {
    return {
      PWDdisplay: false,
      email: "",
      password: "",
      error: {
        message: "",
        type: ""
      }
    };
  },
  methods: {
    login(event) {
      event.preventDefault();
      axios
        .post(`${process.env.VUE_APP_URI}login/login`, {
          email: this.email,
          password: this.password
        })
        .then(res => {
          localStorage.setItem("token", res.data.token);
          return (window.location.href = "/");
        })
        .catch(err => {
          this.error.type = "error";
          this.error.message = err.response.data.message;
        });
    }
  }
};
</script>
