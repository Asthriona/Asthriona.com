<template>
  <b-container>
    <b-row v-if="loading == true">
      <b-col cols="12">
        <h4>About the Author:</h4>
      </b-col>
      <b-col cols="md-11 xs-12">
        <div class="img-text">
          <h2 class="AuthorName">
            <b-skeleton
              variant="dark"
              animation="fade"
              width="15%"
            ></b-skeleton>
            <span
              ><b-icon
                v-if="author.isVerified == true"
                icon="patch-check"
                id="tooltip-verified"
              ></b-icon>
              <b-icon
                id="tooltip-dev"
                icon="wrench"
                v-if="author.isAdmin == true"
              ></b-icon>
              <b-tooltip target="tooltip-dev" triggers="hover">
                Developper
              </b-tooltip>
              <b-tooltip target="tooltip-verified" triggers="hover">
                Verified
              </b-tooltip>
            </span>
          </h2>
          <p class="authorDesc">
            <b-skeleton
              variant="dark"
              animation="fade"
              width="85%"
            ></b-skeleton>
            <b-skeleton
              variant="dark"
              animation="fade"
              width="70%"
            ></b-skeleton>
            <b-skeleton
              variant="dark"
              animation="fade"
              width="75%"
            ></b-skeleton>
          </p>
        </div>
      </b-col>
    </b-row>
    <b-row v-if="loading == false">
      <b-col cols="12">
        <h4>About the Author:</h4>
      </b-col>
      <b-col cols="md-11 xs-12">
        <b-img
          left
          :src="
            author.profilePict ||
              'https://cdn.nishikino.xyz/asthriona/ProfilePict/default.jpg'
          "
          height="100px"
          class="rounded"
        ></b-img>
        <div class="img-text">
          <h2 class="AuthorName">
            {{ author.username }}
            <span
              ><b-icon
                v-if="author.isVerified == true"
                icon="patch-check"
                id="tooltip-verified"
              ></b-icon>
              <b-icon
                id="tooltip-dev"
                icon="wrench"
                v-if="author.isAdmin == true && author.isVerified == false"
              ></b-icon>
              <b-tooltip target="tooltip-dev" triggers="hover">
                Developper
              </b-tooltip>
              <b-tooltip target="tooltip-verified" triggers="hover">
                Verified
              </b-tooltip>
            </span>
          </h2>
          <p class="authorDesc">Twitter: Asthriona, Instagram: @Asthrionaa</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["user", "postId", "authorId"],
  data() {
    return {
      loading: true,
      author: {
        profilePict:
          "https://cdn.nishikino.xyz/asthriona/ProfilePict/asthriona.gif",
        username: "",
        description: "",
        isVerified: false,
        isAdmin: false
      }
    };
  },
  mounted() {
    setTimeout(this.refreshAuthor, 1000);
  },
  methods: {
    refreshAuthor() {
      this.loading = true;
      axios
        .get(`${process.env.VUE_APP_URI_V1}user/author/${this.authorId}`)
        .then(res => {
          const data = res.data;
          if (data.error == 404) {
            this.author.username = "Error: Author Data not found...";
            this.author.profilePict = data.avatar;
            this.author.description = "Null";
            this.author.isVerified = data.isVerified;
            this.author.isAdmin = data.isAdmin;
            return (this.loading = false);
          } else {
            this.author.username = data.username;
            this.author.profilePict = data.avatar;
            this.author.description = "Null";
            this.author.isVerified = data.isVerified;
            this.author.isAdmin = data.isAdmin;
            return (this.loading = false);
          }
        });
    }
  }
};
</script>

<style scoped>
.AuthorName,
.authorDesc {
  margin-left: 7.5rem !important;
}
</style>
