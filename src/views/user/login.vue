/* eslint-disable */
<template>
  <div>
    <h3>
      <ul>
        <li @click="comp = '1'"><b-icon icon="person-fill"></b-icon> Login</li>
        |
        <li @click="comp = '2'">
          <b-icon icon="person-check-fill"></b-icon> Register
        </li>
      </ul>
    </h3>
    <loginComp v-if="comp == '1'" />
    <RegisterComp v-if="comp == '2'" />
  </div>
</template>

<script>
import loginComp from "../../components/auth/login";
import RegisterComp from "../../components/auth/register";
export default {
  name: "Login",
  data() {
    return {
      comp: "1"
    };
  },
  components: {
    loginComp,
    RegisterComp
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
