<template>
  <div>
    <b-container>
      <h1 class="text-center mt-4">Friends!!! :D</h1>
      <b-row>
        <div v-for="blog in blogs" :key="blog">
          <b-col>
            <a :href="blog.link" target="_blank" rel="noopener noreferrer">
              <b-card
                :title="blog.name"
                :img-src="blog.img"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 18rem"
                class="mb-2"
              >
                <b-card-text>
                  {{ blog.desc }}
                </b-card-text>
              </b-card>
            </a>
          </b-col>
        </div>
        <b-col cols="12" class="mb-4 text-center infos"
          ><small
            >You can add your blog here via your profile, an account is
            mendatory to be listed here. <br />
            Any inapropriate links will be removed and account might be
            banned.</small
          ></b-col
        >
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Friends!!!",
  data() {
    return {
      blogs: []
    };
  },
  beforeMount() {
    axios.get(process.env.VUE_APP_URI + "/ashblog/friends").then(res => {
      this.blogs = res.data.friends;
    });
  }
};
</script>

<style scoped>
.card {
  background-color: #1b1b1b;
  color: aliceblue;
  margin-bottom: 40px;
  border: 1px solid rgba(0, 123, 255, 1);
}
.card-img-top {
  object-fit: cover;
  height: 17.9rem;
  width: 17.9rem;
}
.infos {
  color: grey;
}
</style>
