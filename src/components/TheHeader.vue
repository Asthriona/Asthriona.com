<template>
  <div>
    <div class="header-nav">
      <div class="main-header">
        <nav class="main-nav">
          <ul class="nav-link">
            <router-link to="/"
              ><li><b-icon icon="house-fill"></b-icon> Home</li></router-link
            >
            <router-link to="/blog"
              ><li><b-icon icon="book"></b-icon> Blog</li></router-link
            >
            <router-link to="/friends"
              ><li><b-icon icon="newspaper"></b-icon> Friends</li></router-link
            >
            <router-link to="/about"
              ><li>
                <b-icon icon="patch-question"></b-icon> About
              </li></router-link
            >
            <li>
              <div>
                <b-dropdown
                  size="md"
                  variant="bg-transparent text-white"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template class="otherLinks" #button-content>
                    <b-icon icon="diagram3-fill"></b-icon> Other
                    <span class="sr-only">Search</span>
                  </template>
                  <b-dropdown-item href="https://imgUp.asthriona.com"
                    >Ash Img Up
                    <b-icon font-scale="0.9" icon="box-arrow-up-right"></b-icon
                  ></b-dropdown-item>
                  <b-dropdown-item href="/server">Server List</b-dropdown-item>
                  <span style="cursor: not-allowed;">
                    <b-dropdown-item href="#" disabled
                      >Gallery <i>Soon!</i>
                    </b-dropdown-item>
                  </span>
                </b-dropdown>
              </div>
            </li>
            |
            <router-link to="/user">
              <li>
                <b-avatar :src="avatar" icon="people-fill"></b-avatar>
                {{ username }}
                <small
                  ><b-icon v-if="isVerified == true" icon="patch-check"></b-icon
                  ><b-icon
                    icon="wrench"
                    v-if="isAdmin == true && isVerified == false"
                  ></b-icon
                ></small></li
            ></router-link>
          </ul>
        </nav>
      </div>
    </div>
    <div class="LoginAlert text-center" v-if="error">
      <p>
        It seems like something went wrong with your user. Please Logout and
        relog in to fix the issue.
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TheHeader",
  data() {
    return {
      username: "",
      email: "",
      isAdmin: "",
      isVerified: "",
      error: "",
      avatar: ""
    };
  },
  metaInfo: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  mounted() {
    axios
      .get(process.env.VUE_APP_URI + "/user", { withCredentials: true })
      .then(res => {
        const user = res.data;
        this.username = user.username;
        this.email = user.email;
        this.isAdmin = user.isAdmin;
        this.isVerified = user.isVerified;
        this.avatar = user.avatar;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style scoped>
.otherLinks {
  background-color: rgba(0, 0, 0, 0) !important;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: #fff;
  font-size: 1.2rem;
}
.main-header {
  width: 100% !important;
  background: #38529c !important;
  height: 4.5rem !important;
}

.main-nav {
  margin-bottom: 4.2rem;
  height: 100% !important;
}

.nav-link {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 100% !important;
  margin: 0 1rem !important;
  padding: 0.3rem !important;
}
.link-right {
  list-style: none !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex !important;
  justify-content: right !important;
  align-items: right !important;
  height: 100% !important;
  margin: 0 1rem !important;
  padding: 0.3rem !important;
}
.nav-links {
  height: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  margin: 0 1rem !important;
  padding: 0.3rem !important;
}

.router-link-exact-active {
  border-bottom: 3px solid #ffe65d !important;
}

.nav-links a {
  display: block !important;
  text-decoration: none !important;
  color: #fff !important;
}

#nav a.router-link-exact-active {
  color: #42b983 !important;
}
.LoginAlert {
  background-color: red;
  height: 25px;
}
</style>
