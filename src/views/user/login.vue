/* eslint-disable */
<template>
  <div>
    <div class="LoginView" v-if="AsthrionaIsDead == false">
      <h3>
        <ul>
          <li @click="comp = '1'">
            <b-icon icon="person-fill"></b-icon> Login
          </li>
          |
          <li @click="comp = '2'">
            <b-icon icon="person-check-fill"></b-icon> Register
          </li>
        </ul>
      </h3>
      <loginComp v-if="comp == '1'" />
      <RegisterComp v-if="comp == '2'" />
    </div>
    <div class="loginView" v-else>
      <b-container>
        <b-row class="text-center">
          <b-col cols="12">
            <h1>
              <b-icon
                icon="exclamation-triangle"
                size="3x"
                class="text-danger"
              ></b-icon>
              Protocol Asthriona Is Dead Engaged.
              <b-icon
                icon="exclamation-triangle"
                size="3x"
                class="text-danger"
              ></b-icon>
              <br />
              Login and registration are disabled.
            </h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import loginComp from "../../components/auth/login";
import RegisterComp from "../../components/auth/register";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      comp: "1",
      AsthrionaIsDead: ""
    };
  },
  components: {
    loginComp,
    RegisterComp
  },
  beforeMount() {
    axios
      .get(`${process.env.VUE_APP_URI}/admin/asthriona`)
      .then(res => {
        const data = res.data;
        console.log(data);
        if (data.isLiving == true) {
          this.AsthrionaIsDead = false;
        } else {
          this.AsthrionaIsDead = true;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style scoped>
h3 {
  text-align: center;
  margin-top: 2rem;
}
li {
  list-style-type: none;
  display: inline;
  text-align: center;
  color: #007bff;
}
li:hover {
  border-bottom: 2px solid #007bff;
  cursor: pointer;
}
</style>
