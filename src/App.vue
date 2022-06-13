<template>
  <div id="app">
    <div class="logic" v-if="AsthrionaIsDead == true">
      <Nishikino />
      <AsthrionaIsDead />
      <TheHeader />
      <router-view />
      <TheFooter />
    </div>
    <div class="logic" v-else>
      <Nishikino />
      <TheHeader :user="user" />
      <router-view :user="user" />
      <TheFooter />
    </div>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Nishikino from "./components/Nishikino";
import AsthrionaIsDead from "./components/AsthrionaIsDead";
import axios from "axios";
export default {
  components: {
    TheHeader,
    TheFooter,
    Nishikino,
    AsthrionaIsDead
  },
  data() {
    return {
      AsthrionaIsDead: false,
      maintenance: false,
      user: {}
    };
  },
  beforeMount() {
    // get user
    const token = localStorage.getItem("token");
    if (!token) {
      this.user = null;
    }
    axios
      .get(`${process.env.VUE_APP_URI}login/whoami`, {
        headers: { Authorization: token }
      })
      .then(res => {
        this.user = res.data.user;
      });
    axios
      .get(`${process.env.VUE_APP_URI_V1}admin/asthriona`)
      .then(res => {
        const data = res.data;
        if (data.isLiving == true) {
          this.AsthrionaIsDead = false;
        } else {
          this.AsthrionaIsDead = true;
        }
      })
      .catch(error => {
        return error;
      });
  }
};
</script>

<style>
html body {
  background-color: #212226;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cccccc;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.SiteTitle {
  margin-top: 5%;
  margin-bottom: 5%;
}
.SiteTitle .MainLine {
  font-family: Asthriona;
  font-size: 4.5rem;
}

::-moz-selection {
  color: white;
  background: #d86100;
}

::selection {
  color: white;
  background: #d86100;
}
</style>
