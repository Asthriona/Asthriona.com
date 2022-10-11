<template>
  <div class="Profil">
    <div
      class="banner"
      v-if="user.profileBanner"
      :style="`background:url(${user.profileBanner});`"
    ></div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="d-flex justify-center">
            <v-avatar size="200">
              <v-img
                :src="user.avatar"
                class="avatarBanned"
                v-if="user.isBanned"
              ></v-img>
              <v-img :src="user.avatar" v-else></v-img>
            </v-avatar>
          </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <h1>
            {{ user.displayName }}
            <v-icon> {{ user.selectedBadge }} </v-icon>
          </h1>
        </v-col>
        <v-col cols="12" class="text-center" v-if="user.description != null">
          <v-icon>mdi-format-quote-open</v-icon>
          {{ user.description }}
        </v-col>
        <v-col cols="12" class="accountName d-flex justify-center">
          <h3>
            <v-icon>mdi-account</v-icon>
            {{ user.username }}#{{ user.discriminator }}
          </h3>
        </v-col>
        <v-col cols="12" class="d-flex justify-center"> </v-col>
        <!-- Admin Widget -->
        <div class="admin d-flex justify-center" v-if="myself.isAdmin">
          <AdminWidget :user="user" :myself="myself" />
        </div>
      </v-row>
      <v-row>
        <v-col cols="12">
          <span class="text-center display-1">
            Latest post by {{ user.displayName }}
            <v-icon size="30">{{ user.selectedBadge }}</v-icon>
          </span>
          <UserPostComp :userId="user" />
        </v-col>
        <v-col cols="12">
          <span class="text-center display-1">
            Latest comments by {{ user.displayName }}
            <v-icon size="30">{{ user.selectedBadge }}</v-icon>
          </span>
          <UserComments :userId="user" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
import AdminWidget from "../../components/Admin/profileWidget.vue";
import UserPostComp from "../../components/users/userPosts.vue";
import UserComments from "../../components/users/userComments.vue";
export default {
  name: "UserProfile",
  components: {
    AdminWidget,
    UserPostComp,
    UserComments
  },
  data() {
    return {
      user: {},
      myself: {}
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_URI}login/whoami`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        this.myself = res.data.user;
      });
    axios
      .get(
        `${process.env.VUE_APP_URI}profile/user/${this.$route.params.username}`
      )
      .then(res => {
        this.user = res.data;
      });
  }
};
</script>

<style scoped>
.banner {
  height: 400px !important;
  background-size: cover !important;
  background-position: center !important;
  background-repeat: no-repeat !important;
}
</style>
