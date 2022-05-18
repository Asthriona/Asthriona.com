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
      <div class="Author" v-if="AsthrionaIsDead == false">
        <Author :postId="post._id" :authorId="post.authorId" />
      </div>
      <div class="author" v-else>
        <Author :postId="post._id" :authorId="post.authorId" />
        <h1>
          Error Asthriona is dead,
          <span style="color:red;">mismatch</span>.
        </h1>
      </div>
    </b-container>
    <hr />
    <Comments :postId="post._id" :user="user" />
    <small style="color: #212226 !important;">
      {{ post._id ? post._id : "NULL" }}</small
    >
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
      user: "",
      AsthrionaIsDead: ""
    };
  },
  components: {
    Author,
    Comments
  },
  async beforeMount() {
    axios
      .get(`${process.env.VUE_APP_URI}/admin/asthriona`)
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
  metaInfo: {
    meta: [
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@asthriona" },
      {
        name: "twitter:title",
        content: `Asthriona | "Blog"`
      },
      {
        name: "description",
        content: "Oops! seens like we can't find the infos of that post"
      },
      {
        name: "twitter:image",
        content: "https://cdn.nishikino.xyz/asthriona/blog/static/Fh6EIPrm_400x400.jpg"
      }
    ]
  }
};
</script>

<style>
.content pre {
  color: #aa3f81 !important;
  background-color: #35373b;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 0;
}
.content pre code {
  color: #aa3f81 !important;
}
.content img {
  max-width: 100%;
  height: auto;
}
</style>

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
