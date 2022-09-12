<template>
  <div>
    <div class="banner" v-if="user.profileBanner">
      <v-img position="center" height="400px" :src="user.profileBanner"></v-img>
    </div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <v-avatar size="200">
              <v-img class="avatar" :src="user.avatar"></v-img>
            </v-avatar>
          </div>
        </v-col>
        <v-col cols="12" class="text-center">
          <h1>
            {{ user.displayName }}
            <v-icon> {{ user.selectedBadge }} </v-icon>
          </h1>
          <v-icon>mdi-format-quote-open</v-icon>
          {{ user.description }}
        </v-col>
        <v-col cols="12" class="accountName d-flex justify-center">
          <h3>
            <v-icon>mdi-account</v-icon>
            {{ user.username }}#{{ user.discriminator }}
          </h3>
        </v-col>
        <v-col cols="12" class="accountName d-flex justify-center">
          <v-btn color="primary" class="mr-4 mb-4" disabled>
            <v-icon>mdi-account-edit</v-icon> Edit Profile</v-btn
          >
          <v-btn class="ml-4 mb-4" color="error" @click="logout">
            <v-icon>mdi-account-off</v-icon> Logout</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: ["user"],
  data() {
    return {
      //
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      window.location.href = "/";
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
