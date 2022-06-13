<template>
  <b-container>
    <b-row v-if="user.message">
      <b-col cols="12" class="text-center mt-4">
        <h2>You need an account to post comments.</h2>
      </b-col>
    </b-row>
    <b-row v-else-if="user.isBanned == true">
      <b-col cols="12" class="text-center mt-4">
        <h2>You are banned from commenting.</h2>
      </b-col>
    </b-row>
    <b-row v-else>
      <b-col cols="12">
        <b-form @submit="onSubmit">
          <b-form-group
            id="comsContent-group"
            label="Add new comment"
            label-for="comsContent"
          >
            <b-form-textarea
              id="comsContent-group"
              v-model="comsContent"
              type="text"
              placeholder="Whats on your mind?"
              required
            >
            </b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary" disabled>Submit</b-button>
          <h1>comments are temporary disabled.</h1>
        </b-form>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <b-col cols="12">
          <div
            class="comment mt-4"
            v-for="comments in comment"
            :key="comments.username"
          >
            <h4>
              <span v-if="comments.isBanned == true">
                <b-avatar
                  :src="comments.avatar"
                  style="filter: grayscale(1);"
                ></b-avatar>
                <strike>{{ comments.username }}</strike
                >&#32;
                <b-icon icon="shield-slash-fill" id="tooltipBanned"></b-icon>
                <b-tooltip target="tooltipBanned" triggers="hover">
                  This user has been banned.
                </b-tooltip>
              </span>
              <span v-else>
                <b-avatar :src="comments.avatar"></b-avatar>
                {{ comments.username }}
                <b-icon
                  v-if="comments.isVerified == true"
                  icon="patch-check"
                ></b-icon
                ><b-icon
                  icon="wrench"
                  v-if="
                    comments.isAdmin == true && comments.isVerified == false
                  "
                ></b-icon>
              </span>
            </h4>
            <div class="com-content">{{ comments.content }}</div>
            <small class="com-date">{{
              comments.createdAt | moment("MMMM Do YYYY, h:mm a")
            }}</small>
            <hr />
          </div>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  props: ["postId", "user"],
  data() {
    return {
      loading: true,
      comment: [],
      comsContent: ""
    };
  },
  mounted() {
    setTimeout(this.getCommets, 1000);
  },
  methods: {
    getCommets() {
      axios
        .get(`${process.env.VUE_APP_URI}/ashblog/comment/${this.postId}`)
        .then(res => {
          this.comment = res.data.data.commentArray;
        });
    },
    onSubmit(event) {
      event.preventDefault();
      axios.post(
        `${process.env.VUE_APP_URI}/ashblog/comment`,
        {
          postId: this.postId,
          content: this.comsContent
        },
        { withCredentials: true }
      );
      this.comment.push({
        username: this.user.username,
        avatar: this.user.avatar,
        content: this.comsContent,
        isAdmin: this.user.isAdmin,
        isVerified: this.user.isVerified,
        isBanned: this.user.isBanned
      });
      this.comsContent = "";
    }
  }
};
</script>

<style scoped>
.com-content {
  margin-left: 45px;
}
.com-date {
  margin-left: 45px;
}
</style>
