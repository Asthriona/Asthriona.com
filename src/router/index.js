import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/blog.vue";
import PostShow from "../views/_postShow.vue";
import Login from "../views/user/login.vue";
import Admin from "../views/user/userHome.vue";
import NewPost from "../views/user/newPost.vue";
import EditPost from "../views/user/EditPost.vue";
import UserProfile from "../views/user/UserProfile.vue";
import Server from "../views/Server.vue";
import Friends from "../views/Friends.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "PostShow",
    component: Blog
  },
  {
    path: "/blog/:slug",
    name: "blog",
    component: PostShow
  },
  {
    path: "/user",
    name: "Admin",
    component: Admin
  },
  {
    path: "/user/login",
    name: "Login",
    component: Login
  },
  {
    path: "/user/newPost",
    name: "NewPost",
    component: NewPost
  },
  {
    path: "/user/editPost/:slug",
    name: "EditPost",
    component: EditPost
  },
  {
    path: "/user/userprofile",
    name: "UserProfile",
    component: UserProfile
  },
  {
    path: "/server",
    name: "Server",
    component: Server
  },
  {
    path: "/friends",
    name: "Friends",
    component: Friends
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
