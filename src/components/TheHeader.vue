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
            <router-link to="/about"
              ><li>
                <b-icon icon="patch-question"></b-icon> About
              </li></router-link
            >
            |
            <router-link to="/admin">
              <li>
                <b-icon icon="person-circle"></b-icon> {{ username
                }}<small
                  ><b-icon
                    v-if="username == 'Asthriona'"
                    icon="patch-check"
                  ></b-icon
                  ><b-icon
                    icon="wrench"
                    v-if="isAdmin == true && username !== 'Asthriona'"
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
      error: ""
    };
  },
  mounted() {
    if (!localStorage.getItem("token")) return;
    axios
      .get("http://gateway.asthriona.com/api/auth/user", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token") }
      })
      .then(res => {
        this.username = res.data.username;
        this.email = res.data.email;
        this.isAdmin = res.data.isAdmin;
      })
      .catch(err => {
        this.error = err;
      });
  }
};
</script>

<style scoped>
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

.nav-link.nav-link.nuxt-link-exact-active {
  border-bottom: 3px solid #06c4d1 !important;
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
