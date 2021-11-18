<template>
  <b-container class="mt-4">
    <b-row>
      <b-col cols="12" class="text-center">
        <h1>S T A T S</h1>
      </b-col>
    </b-row>
    <b-row class="mt-4">
      <b-col cols="3">
        <b-card
          title="Users"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ NbUser }} <br />
            Users
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          title="Posts"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ NbPosts }} <br />
            Posts
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          title="Comments"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ NbComents }} <br />
            Comments
          </b-card-text>
        </b-card>
      </b-col>
      <b-col cols="3">
        <b-card
          title="Banned Users"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            {{ bannedUsers }} <br />
            banned Users
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="text-center">
        <h1>M A N A G M E N T</h1>
      </b-col>
      <b-col cols="6">
        <form>
          <label for="userBan">Ban Users</label>
          <b-form-input placeholder="UserID"></b-form-input>
          <b-button variant="danger" onclick="banUser" type="submit"
            >Submit</b-button
          >
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      NbUser: "156431",
      NbComents: "564546131",
      NbPosts: "20",
      bannedUsers: "1",
      serverOnline: [],
      serverOffline: []
    };
  },
  methods: {
    async getServerStatus() {
      await axios.get("/api/server/status").then(res => {
        this.serverOnline = res.data.online;
        this.serverOffline = res.data.offline;
      });
    }
  }
};
</script>

<style scoped>
article {
  background-color: #212226;
  color: #fff;
  text-align: center;
}
</style>
