<template>
  <v-app dark>
    <TheHeader />
    <v-main>
      <router-view />
    </v-main>
    <TheFooter />
  </v-app>
</template>

<script>
import TheHeader from "@/components/PageComp/TheHeader.vue";
import TheFooter from "@/components/PageComp/TheFooter.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
    // BanComp,
  },
  data: () => ({
    //
  }),
  created() {
    // dark mode by default
    this.$vuetify.theme.dark = true;
    // get user data from backend
    axios
      .get(`${process.env.VUE_APP_URI}login/whoami`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        if (res.data.msg == "Invalid token") {
          return (this.user = null);
        }
        if (!res.data.user) {
          this.user = null;
        }
        if (res.data.user) {
          this.user = res.data.user;
        }
      })
      .catch(() => {
        this.user = null;
      });
  }
};
</script>
