import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import Blog from "../views/blog.vue";
// import PostShow from "../views/_postShow.vue";
// import Login from "../views/user/login.vue";
// import Admin from "../views/admin/index.vue";
// import EditPost from "../views/admin/blog/editPost.vue";
// import UserProfile from "../views/user/UserProfile.vue";
// import Server from "../views/Server.vue";
// import Friends from "../views/Friends.vue";
// import AdminHome from "../views/admin/index.vue";
// import AdminBlog from "../views/admin/blog/BlogManagement.vue";
// import AdminBlogNew from "../views/admin/blog/newPost.vue";
// import AdminUser from "../views/admin/users/adminUsers.vue";
// import AdminProfile from "../views/admin/users/adminProfile.vue";
// import TOS from "../views/legal/tos.vue";
// import privacy from "../views/legal/privacy.vue";
// import profileView from "../views/user/profiles.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  }
  // {
  //   path: "/blog",
  //   name: "PostShow",
  //   component: Blog
  // },
  // {
  //   path: "/blog/:slug",
  //   name: "blog",
  //   component: PostShow
  // },
  // {
  //   path: "/admin",
  //   name: "Admin",
  //   component: Admin
  // },
  // {
  //   path: "/user/login",
  //   name: "Login",
  //   component: Login
  // },
  // {
  //   path: "/profile",
  //   name: "Profile",
  //   component: UserProfile
  // },
  // {
  //   path: "/profile/:username",
  //   name: "profileView",
  //   component: profileView
  // },
  // {
  //   path: "/server",
  //   name: "Server",
  //   component: Server
  // },
  // {
  //   path: "/friends",
  //   name: "Friends",
  //   component: Friends
  // },
  // {
  //   path: "/admin",
  //   name: "AdminHome",
  //   component: AdminHome
  // },
  // Admin blog routes
  // {
  //   path: "/admin/blog",
  //   name: "AdminBlog",
  //   component: AdminBlog
  // },
  // {
  //   path: "/admin/blog/new",
  //   name: "AdminBlogNew",
  //   component: AdminBlogNew
  // },
  // {
  //   path: "/admin/blog/edit/:id",
  //   name: "AdminBlogEdit",
  //   component: EditPost
  // },
  // // Admin user routes
  // {
  //   path: "/admin/users",
  //   name: "AdminUser",
  //   component: AdminUser
  // },
  // {
  //   path: "/admin/users/:id",
  //   name: "AdminProfile",
  //   component: AdminProfile
  // },
  // Legal shits
  // {
  //   path: "/tos",
  //   name: "TOS",
  //   component: TOS
  // },
  // {
  //   path: "/privacy",
  //   name: "privacy",
  //   component: privacy
  // },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
