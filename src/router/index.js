import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Blog from "../views/blog.vue";
import PostShow from "../views/_postShow.vue";
import Login from "../views/admin/login.vue";
import Admin from "../views/admin/adminHome.vue";
import Register from "../views/admin/Register.vue";
import NewPost from "../views/admin/newPost.vue";

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
    path: "/admin/Register",
    name: "Register",
    component: Register
  },
  {
    path: "/admin/newPost",
    name: "NewPost",
    component: NewPost
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
