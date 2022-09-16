<template>
  <div class="TheHeader">
    <v-app-bar app color="primary" dark>
      <router-link to="/">
        <div class="d-flex align-center">
          <v-img
            alt="Asthriona Logo"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="https://cdn.asthriona.com/i/2022/04/Asthriona%20logo%20black.png"
            width="300"
          />
        </div>
      </router-link>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn text> <v-icon>mdi-home</v-icon> Home </v-btn>
      </router-link>
      <router-link to="/blog">
        <v-btn text> <v-icon>mdi-book-open-blank-variant</v-icon> Blog </v-btn>
      </router-link>
      <router-link to="/about">
        <v-btn text> <v-icon>mdi-information-outline</v-icon> About </v-btn>
      </router-link>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text dark v-bind="attrs" v-on="on">
            Other Stuff
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in otherItems" :key="index">
            <router-link :to="item.link">
              <v-list-item-title>
                <v-icon>{{ item.icon }}</v-icon>
                {{ item.title }}</v-list-item-title
              >
            </router-link>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-spacer></v-spacer>

      <div class="users" v-if="!user">
        <router-link :to="{ name: 'Login', params: { comp: 'login' } }">
          <v-btn icon target="_blank" text>
            <v-icon>mdi-account</v-icon>
          </v-btn>
        </router-link>
        <router-link :to="{ name: 'Login', query: { register: true } }">
          <v-btn icon target="_blank" text>
            <v-icon>mdi-account-plus</v-icon>
          </v-btn>
        </router-link>
      </div>
      <div class="users" v-else>
        <router-link :to="{ name: 'Profile' }">
          <v-btn text>
            <v-avatar size="30" class="mr2">
              <v-img
                class="avatarBanned"
                :src="user.avatar"
                v-if="user.isBanned"
              ></v-img>
              <v-img class="avatar" :src="user.avatar" v-else></v-img>
            </v-avatar>
            {{ user.username }}#{{ user.discriminator }}
            <v-icon>{{ user.selectedBadge }}</v-icon>
          </v-btn>
        </router-link>
        <router-link :to="{ name: 'Admin' }" v-if="user.isAdmin">
          <v-btn text>
            <v-icon>mdi-hammer-wrench</v-icon>
          </v-btn>
        </router-link>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  props: ["user"],
  data() {
    return {
      otherItems: [
        {
          title: "Image Uploader",
          icon: "mdi-cloud-upload-outline",
          link: "https://imgup.asthriona.com/"
        },
        {
          title: "Server List",
          icon: "mdi-server-network",
          link: "/server"
        }
      ]
    };
  }
};
</script>
