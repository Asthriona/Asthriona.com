<template>
  <div class="postSwow">
    <div
      class="thumbnail"
      v-bind:style="{ 'background-image': 'url(' + post.image + ')' }"
    ></div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="headline text-center">
            <span>{{ post.title }}</span>
          </div>
          <div class="subtitle text-center">
            <i class="muted">posted {{ date }}</i>
            <br />
            <i v-if="post.updatedAt"
              >last Update:
              {{
                new Date(parseInt(post.updatedAt))
                  | moment("Do, MMMM YYYY [at] hh:mm")
              }}</i
            >
          </div>
        </v-col>
        <v-col cols="12" class="post-body">
          <div class="post-content">
            <div class="post-content-text">
              <span class="content" v-html="post.sanitizedHtml"></span>
            </div>
          </div>
        </v-col>
        <v-spacer></v-spacer>
        <hr />
        <v-col cols="12">
          <div class="author">
            <div class="headline">
              <p>About the author:</p>
            </div>
            <div class="author-img">
              <v-avatar size="100">
                <v-img :src="author.avatar"></v-img>
              </v-avatar>
              <span class="ml-4 display-1">
                <router-link class="nolink" :to="`/profile/${author.username}`">
                  {{ author.displayName }}#{{ author.discriminator }}
                  <v-icon size="50" class="mb-2">{{
                    author.selectedBadge
                  }}</v-icon>
                </router-link>
              </span>
              <br />
              <span class="ml-12 subtitle">{{ author.description }}</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div class="comments">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="headline">
              <p>post new comments</p>
              <!-- if no user -->
              <div v-if="!user">
                <p>
                  <router-link to="/login">login</router-link> to post a comment
                </p>
              </div>
              <!-- if user is banned. -->
              <v-alert
                type="error"
                class="text-center"
                v-else-if="user.isBanned"
              >
                <span class="headline">
                  <v-icon>mdi-alert-circle</v-icon>
                  <span>
                    Banned account are unable to post comments. <br />
                    Reason: {{ user.banReason }} <br />
                    Expire: {{ user.banExpired || "Never" }}
                  </span>
                </span>
              </v-alert>
              <v-form v-else-if="newCommentSent == false">
                <v-textarea
                  v-model="newComment.content"
                  label="Comment"
                  :rules="commentRules"
                ></v-textarea>
                <v-btn color="primary" type="submit" @click="submitComment">
                  Post
                </v-btn>
              </v-form>
              <v-alert type="success" class="text-center" v-else>
                <span class="headline">
                  Thanks for commenting! (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
                </span>
              </v-alert>
            </div>
          </v-col>
          <v-col cols="12">
            <div class="headline">
              <p>Comments</p>
            </div>
          </v-col>
          <div class="coms">
            <div class="nocomment headline" v-if="comments.length == 0">
              <p>be the first to comment to this post!</p>
            </div>
            <div class="comment" v-else>
              <v-col v-for="comment in comments" :key="comment.id">
                <v-avatar>
                  <v-img :src="comment.author.avatar"></v-img>
                </v-avatar>
                <span
                  :href="`/profile/${comment.author.username}`"
                  class="headline ml-2"
                  >{{ comment.author.displayName }}#{{
                    comment.author.discriminator
                  }}
                  <v-icon>{{ comment.author.selectedBadge }}</v-icon></span
                >
                <div class="comment-body ml-4 mt-4">
                  <div class="comment-body-text ml-4">
                    <span class="content" v-html="comment.content"></span>
                    <div class="admin-edit" v-if="comment.adminEdit == true">
                      <p class="admin-reason text-muted small">
                        <v-icon>mdi-alert-circle-outline</v-icon> This comment
                        has been edited by Asthriona's staff for the following
                        reason: <br />
                        <i
                          ><u class="red--text">
                            {{ comment.adminReason || "No reason provided." }}
                          </u></i
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="comment-user-action"
                  v-if="comment.author.id == user.id && user.isAdmin == false"
                >
                  <v-dialog v-model="adminDialogComEdit" width="500">
                    <template>
                      <v-btn text class="ml-4" v-bind="attrs" v-on="on"
                        >Edit</v-btn
                      >
                    </template>
                    <v-card>
                      <v-card-title>
                        <span class="headline">Edit comment as Admin</span>
                      </v-card-title>
                      <v-textarea v-model="comment.content"> </v-textarea>
                      <v-btn type="submit" @click="AdminUpdate(comment)"
                        >Submit</v-btn
                      >
                    </v-card>
                  </v-dialog>
                  <v-btn text class="ml-4">Delete.</v-btn>
                </div>
                <div class="comment-admin-action" v-if="user.isAdmin == true">
                  <v-btn text color="error" class="ml-4">Edit</v-btn>
                  <v-btn text color="error" class="ml-4">Delete.</v-btn>
                  <v-btn
                    text
                    color="success"
                    :href="`/profile/${comment.author.username}`"
                    class="ml-4"
                    >Profile.</v-btn
                  >
                </div>
              </v-col>
            </div>
          </div>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostView",
  props: ["user"],
  data() {
    return {
      post: {},
      author: {},
      comments: [],
      newComment: {},
      newCommentSent: false,
      commentRules: [v => !!v || "Comment is required"],
      adminDialogComEdit: false,
      loading: {
        post: true,
        comment: true
      },
      date: ""
    };
  },
  mounted() {
    axios
      .get(
        `${process.env.VUE_APP_URI}blog/posts/asthriona.com/${this.$route.params.slug}`
      )
      .then(res => {
        this.post = res.data;
        this.author = res.data.authorId.authorId;
        this.date = new Date(parseInt(res.data.createdAt, 10));
        this.loading.post = false;
        // Format date to display [minutes] ago or [hours] ago or [days] ago unless it's more than 7 days, then display the date
        if (this.date.getMinutes() < 60) {
          this.date = `${this.date.getMinutes()} minutes ago`;
        } else if (this.date.getHours() < 24) {
          this.date = `${this.date.getHours()} hours ago`;
        } else if (this.date.getDate() < 7) {
          this.date = `${this.date.getDate()} days ago`;
        } else {
          this.date = `${this.date.getDate()}/${this.date.getMonth() +
            1}/${this.date.getFullYear()}`;
        }
      })
      .catch(err => {
        if (err.response.status == 404) {
          this.$router.push("/404");
        } else {
          (this.post = {
            title: "Post not found...",
            content:
              "An error may have happen while trying to get this post, or it has been deleted."
          }),
            (this.author = {
              displayName: "Undefined",
              avatar: "https://i.imgur.com/XqQZQZJ.png",
              discriminator: "0000"
            });
        }
      }),
      (this.loading.comment = true);
    axios
      .get(
        `${process.env.VUE_APP_URI}blog/comments/asthriona.com/${this.$route.params.slug}`
      )
      .then(res => {
        this.comments = res.data.comments;
        this.loading.comment = false;
      });
  },
  methods: {
    submitComment(e) {
      e.preventDefault();
      if (this.newComment) {
        axios
          .post(
            `${process.env.VUE_APP_URI}blog/comments/asthriona.com/${this.$route.params.slug}`,
            {
              content: this.newComment.content
            },
            { headers: { Authorization: localStorage.getItem("token") } }
          )
          .then(() => {
            this.newCommentSent = true;
            this.loading.comment = false;
            axios
              .get(
                `${process.env.VUE_APP_URI}blog/comments/asthriona.com/${this.$route.params.slug}`
              )
              .then(res => {
                this.comments = res.data.comments;
                this.loading.comment = true;
              });
          });
      }
    },
    AdminUpdate(comment) {
      console.log(comment);
    }
  }
};
</script>

<style>
.nolink {
  color: aliceblue !important;
  text-decoration: none !important;
}
.nolink a {
  color: aliceblue;
}
.thumbnail {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat !important;
  height: 300px !important;
  width: 100% !important;
}
.content pre {
  color: #ffbbe5 !important;
  background-color: #35373b;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  margin: 10px 0;
}
.content pre code {
  color: #ffbbe5 !important;
}
.content code {
  color: #ffbbe5 !important;
}
.content img {
  max-width: 100%;
  height: auto;
}
</style>
