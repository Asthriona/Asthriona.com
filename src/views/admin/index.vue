<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <span class="display-1">Admin stuff</span>
        <!-- This page aint made to be pretty but functional for now, users dont see it, so I dont care :) -->
      </v-col>
      <v-col cols="12">
        <span class="headline">M A N A G M E N T</span>
        <br />
        <v-btn class="ml-4 mt-4" color="primary" to="/admin/users"
          ><v-icon class="mr-2">mdi-account-alert</v-icon>Users</v-btn
        >
        <v-btn class="ml-4 mt-4" color="primary" to="/admin/blog"
          ><v-icon class="mr-2">mdi-newspaper</v-icon>Blog</v-btn
        >
        <v-btn class="ml-4 mt-4" color="primary" disabled
          ><v-icon class="mr-2">mdi-message-bulleted</v-icon>Comments</v-btn
        >
        <v-btn class="ml-4 mt-4" color="primary" disabled
          ><v-icon class="mr-2">mdi-shield-alert</v-icon>Sanctions</v-btn
        >
        <v-btn class="ml-4 mt-4" color="primary" disabled
          ><v-icon class="mr-2">mdi-database-arrow-right</v-icon>Web-Data</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import axios from "axios";
export default {
  name: "Admin-home",
  data() {
    return {
      //
    };
  },
  methods: {
    //
  }
};
</script>

<style scoped>
/*  */
</style>
