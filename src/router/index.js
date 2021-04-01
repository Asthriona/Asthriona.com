import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/blog.vue";
import PostShow from "../views/_postShow.vue";
import Login from "../views/admin/login.vue";
import Admin from "../views/admin/adminHome.vue";
import NewPost from "../views/admin/newPost.vue";
import EditPost from "../views/admin/EditPost.vue";
import UserProfile from "../views/admin/UserProfile.vue";
import Server from "../views/Server.vue";

Vue.use(VueRouter);

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
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin/newPost",
    name: "NewPost",
    component: NewPost
  },
  {
    path: "/admin/editPost/:slug",
    name: "EditPost",
    component: EditPost
  },
  {
    path: "/admin/userprofile",
    name: "UserProfile",
    component: UserProfile
  },
  {
    path: "/server",
    name: "Server",
    component: Server
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
