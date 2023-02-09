<template>
  <div class="users">
    <h1>Admin/users</h1>
    <v-container>
      <v-row>
        <v-col cols="3" v-for="user in users" :key="user.userId">
          <v-card class="mt-4 mb-4 mx-4">
            <!-- avatar -->
            <v-img>
              <v-img :src="user.avatar" aspect-ratio="1"></v-img>
            </v-img>
            <v-card-title
              >{{ user.displayName }}#{{ user.discriminator }}
              <v-icon>{{ user.selectedBadge }}</v-icon></v-card-title
            >
            <v-card-text>
              <small>@{{ user.username }}</small>
            </v-card-text>
            <v-card-action>
              <router-link :to="`/admin/users/${user.id}`">
                <v-btn color="primary" text>View</v-btn>
              </router-link>
              <router-link :to="`/profile/${user.username}`">
                <v-btn color="primary" text>Profile</v-btn>
              </router-link>
            </v-card-action>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminUsers",
  data: () => ({
    users: []
  }),
  mounted() {
    axios
      .get(`${process.env.VUE_APP_URI}admin/users`, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        this.users = res.data;
      });
  }
};
</script>
