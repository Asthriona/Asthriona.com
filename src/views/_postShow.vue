<template>
  <div>
    <div
      class="post-thumbnail"
      v-bind:style="{ 'background-image': 'url(' + post.img + ')' }"
    ></div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="mt-4">{{ post.title }}</h1>
          <small> {{ post.createdAt | moment("MMMM Do YYYY, h:mm a") }} </small>
          <hr />
          <div class="content" v-html="post.sanitizedHtml"></div>
        </b-col>
      </b-row>
      <hr />
      <Author :postId="post._id" :authorId="post.authorId" />
      <hr />
      <Comments :postId="post._id" :user="user" />
    </b-container>
    <small> {{ post._id ? post._id : "NULL" }}</small>
  </div>
</template>
<script>
import axios from "axios";
import Author from "../components/posts/Author.vue";
import Comments from "../components/posts/comments.vue";
export default {
  name: "PostShow",
  data() {
    return {
      post: "",
      user: ""
    };
  },
  components: {
    Author,
    Comments
  },
  async beforeMount() {
    axios
      .get(`${process.env.VUE_APP_URI}/user`, { withCredentials: true })
      .then(res => {
        this.user = res.data;
      });
    axios
      .get(
        `${process.env.VUE_APP_URI}/ashblog/post/${this.$route.params.slug}`,
        { withCredentials: true }
      )
      .then(response => {
        document.title = `Asthriona | ${response.data.data.article.title}`;
        response
          ? (this.post = response.data.data.article)
          : { title: "Error! API seems to be down :/" };
      });
  },
  methods: {
    // onSubmit(event) {
    //   event.preventDefault();
    //   axios
    //     .post(
    //       `${process.env.VUE_APP_URI}/ashblog/comment`,
    //       {
    //         postId: this.post._id,
    //         content: this.form.comment
    //       },
    //       { withCredentials: true }
    //     )
    //     .then(() => {
    //       this.comment.push({
    //         avatar: this.user.avatar,
    //         username: this.user.username,
    //         content: this.form.comment,
    //         createdAt: Date.now()
    //       });
    //     });
    // }
  }
};
</script>

<style scoped>
.post-thumbnail {
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: 50%;
}
.comment {
  display: block;
  background: #18181b;
  padding: 10px;
  margin-block: 10px;
  border-style: solid;
  border-color: #007bff;
  border-width: 1px;
  border-radius: 10px;
}
.comUsername {
  display: block;
  position: relative;
  margin-right: 10px;
  margin-top: 1px;
}
</style>
