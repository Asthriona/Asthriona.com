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
      <b-row>
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
                ><b-icon v-if="author.isVerified == true" icon="patch-check" id="tooltip-verified" ></b-icon>
                <b-icon id="tooltip-dev" icon="wrench" v-if="author.isAdmin == true"></b-icon>
                <b-tooltip target="tooltip-dev" triggers="hover">
                  Developper
                </b-tooltip>
                <b-tooltip target="tooltip-verified" triggers="hover">
                  Verified
                </b-tooltip>
              </span>
            </h2>
            <p class="authorDesc">{{ author.description }}</p>
          </div>
        </b-col>
      </b-row>
      <br />
      <b-row>
        <div class="comments" v-if="user == null">
          <h1>Comments are disabled for this article.</h1>
        </div>
        <div class="comments" v-else>
          <div class="user">
            <img :src="user.pp" :alt="user.username" /> {{ user.username }}
          </div>
          <form action="/Ashblog/comment/post" method="post">
            <label for="comment">Your comment:</label>
            <input type="text" name="comment" id="comment" />
            <button disabled="disabled">Submit</button>
          </form>
        </div>
        <!-- <b-col cols="8">
          <div class="comment" v-for="comments in comment" :key="comments.username">
            <b-img left :src="comments.avatar" height="50px" rounded="circle" alt=""></b-img> <h3 class="comUsername"> - {{ comments.username}} <small><b-icon v-if="comments.isVerified == true" icon="patch-check" id="tooltip-verified"></b-icon><b-icon id="tooltip-dev" icon="wrench" v-if="comments.isAdmin == true"></b-icon></small></h3> <br>
            {{comments.text}}
          </div>
        </b-col> -->
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "PostShow",
  data() {
    return {
      post: null,
      user: null,
      comment: [
        {
          username: "Asthriona",
          isVerified: true,
          isAdmin: false,
          avatar: 'https://cdn.nishikino.xyz/asthriona/ProfilePict/asthriona.gif',
          text: "Waw! best post i've ever read! Incrediblblblblblble!",
          time: Date.now()
        },
        {
          username: "RiseDev",
          isVerified: false,
          isAdmin: true,
          avatar: 'https://pbs.twimg.com/profile_images/1338904649907253249/MnYcLS0v_400x400.jpg',
          text: "Dayum!1!",
          time: Date.now()
        },
        {
          username: "Some Poggers",
          isVerified: false,
          isAdmin: false,
          avatar: 'https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/04/SjzBDRI3.jpg',
          text: "fuck me",
          time: Date.now()
        },
        {
          username: "Lights",
          isVerified: false,
          isAdmin: false,
          avatar: 'https://pbs.twimg.com/profile_images/1366239469347635202/Ssu53nH7_400x400.jpg',
          text: "oh my...",
          time: Date.now()
        },
        {
          username: "Deadmau5",
          isVerified: true,
          isAdmin: false,
          avatar: 'https://pbs.twimg.com/profile_images/1296188634404737031/RUJOD0mL_400x400.jpg',
          text: "WAW this post broke the cube... again!",
          time: Date.now()
        },
      ],
      author: {
        profilePict:
          "https://cdn.nishikino.xyz/asthriona/ProfilePict/asthriona.gif",
        username: "Asthriona",
        description:
          "People call me 'Cool kid' Because I know code, video editing, and I'm the best tank of <Eternal Vengeance>. But don't let them fool you! I'm not cool :D",
        isVerified: true,
        isAdmin: false
      }
    };
  },
  mounted() {
    document.title = "Asthriona - Blog";
    axios
      .get(
        `${process.env.VUE_APP_URI}/ashblog/post/${this.$route.params.slug}`,
        { withCredentials: true }
      )
      .then(response =>
        response
          ? (this.post = response.data.data.article)
          : { title: "Error! API seems to be down :/" }
      );
  },
  methods: {
    logs() {
      console.log(this.post);
    }
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
.AuthorName,
.authorDesc {
  margin-left: 7.5rem !important;
}
.comment{
  display: block;
  background: #18181b;
  padding: 10px;
  margin-block: 10px;
  border-style: solid;
  border-color: #007bff;
  border-width: 1px;
  border-radius: 10px;
}
.comUsername{
  display: block;
  position: relative;
  margin-right: 10px;
  margin-top: 1px;
}
</style>
