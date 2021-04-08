/* eslint-disable */
<template>
  <div>
    <b-container fluid class="header">
      <b-row>
        <b-col cols="12" class="SiteTitle text-center">
          <div class="mainTextBlock">
            <h1 class="MainLine">Asthriona</h1>
            <h3 class="SecondLine">Insert random line here!</h3>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container fluid>
      <b-row>
        <b-col lg="7" sm="12" offset-lg="1">
          <div class="error" v-if="errors">
            <h1>Waps! An error happened!</h1>
            <hr />
            <p>
              Aparently our server made a mess! You can retry by refreshing the
              page.<br />
              if after refreshing this message is still showing, it mean what
              should never happened happened... <br />
              <strong>The Gateway is broken! D:</strong>
            </p>
            <pre>{{ errors }}</pre>
          </div>
          <b-card
            v-for="posts in posts"
            :key="posts"
            bg-variant="#212226"
            :img-src="posts.img"
            tag="article"
            style="max-width: 100%;"
            class="mt-4 mb-4"
            img-height="200"
          >
            <router-link :to="'/blog/' + posts.slug"
              ><h1>{{ posts.title }}</h1></router-link
            >
            <small>
              {{ posts.createdAt | moment("MMMM Do YYYY, h:mm a") }}
            </small>
            <p>{{ posts.description }}</p>
            <router-link :to="'/blog/' + posts.slug">Read More</router-link>
          </b-card>
        </b-col>
        <b-col lg="3" sm="12" class="mt-4">
          <b-card
            bg-variant="#212226"
            title="Asthriona Ng"
            :img-src="avatar"
            tag="side"
            style="max-width: 100%;"
            class="mx-2 ml-4 mb-4 text-center"
          >
            <h6>Write code to change to world.</h6>
            <p>
              Hi! Im Asthriona, You can Call me Mako if you want! Im some sort
              of Web developper, I like to usefull and useles stuff, My main
              side project is Yukiko a powerfull discord bot wit lot and lot of
              feature. I do code to keep my head out of the water, and I also
              play a lot of World Of Warcraft and Valorant. Im the main Tank and
              Admin of <b>&#60;Eternal Vengeance&#62;</b>. Im also their own
              developper. I like to code to help other people and make this
              world a bit better! Im sure im nowhere near to change the world
              but I think if everyone put their own little rock in the end we
              will make a differance.
            </p>
          </b-card>
          <b-card
            bg-variant="#212226"
            title="Friends and things I use"
            tag="side"
            style="max-width: 100%;"
            class="mt-4 mx-2 ml-4 mb-4 text-center"
          >
            <p>
              <b-img
                src="https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/01/5185491.png"
                height="50%"
              ></b-img>
              <b-img
                src="https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/01/space.png"
                height="50%"
              ></b-img>
              <b-img
                src="https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/01/cf-logo-v-rgb-rev.png"
                height="50%"
              ></b-img>
            </p>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Blog",
  data() {
    return {
      posts: "",
      errors: "",
      avatar: ""
    };
  },

  async beforeMount() {
    document.title = "Asthriona - Blog";
    await axios
      .get(process.env.VUE_APP_URI + "/ashblog/post")
      .then(response => (this.posts = response.data.data.articles))
      .catch(error => (this.errors = error));
    await axios
      .get(`${process.env.VUE_APP_URI}/user/getuser?username=Asthriona`)
      .then(user => {
        console.log(user);
        this.avatar = user.data.avatar
          ? user.data.avatar
          : "https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/03/VALORANT-Win64-Shipping_050321-052513PM.png";
      });
  }
};
</script>

<style scoped>
a h1 {
  color: aliceblue;
}
a:hover h1 {
  color: aliceblue;
  text-decoration: none;
}
.card {
  background-color: #1b1b1b;
  color: aliceblue;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 123, 255, 1);
}
article .card-img {
  background-position: top;
  background-size: cover;
  object-fit: cover;
  height: 10rem;
}
pre {
  color: aliceblue;
}
.header {
  background-image: url(https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/04/blogHeader.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
