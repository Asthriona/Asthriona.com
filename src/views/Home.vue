<template>
  <div class="home">
    <v-container fill-height fluid>
      <v-layout row wrap align-center text-center>
        <v-flex>
          <img
            src="@/assets/images/asthriona_logo.png"
            width="50%"
            alt="Asthriona Logo"
          />
          <h1>Website Unavailable - We Apologize for the Inconvenience</h1>
          <h4>
            We're currently experiencing technical difficulties and the website
            is unavailable. We're working hard to resolve the issues and will
            have the website back online as soon as possible. Thank you for your
            patience.
          </h4>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- <div class="head-banner">
      <div class="header-content">
        <v-col cols="12" class="avatar d-flex justify-center">
          <v-avatar size="250" class="mt-4" color="black">
            <v-img
              src="https://cdn.asthriona.com/i/2023/05/99f234627faa917ace3998fa29755d5b"
            ></v-img>
          </v-avatar>
        </v-col>
        <span>
          <div class="display-4 text-center font-logo text--black">
            Asthriona
          </div>
        </span>
        <span>
          <div class="display-1 text-center randomText">
            {{
              randomSubLine[Math.floor(Math.random() * randomSubLine.length)]
            }}
          </div>
        </span>
      </div>
      <div class="sns">
        <v-col cols="12" class="display-1 d-flex justify-center">
          <span v-for="sns in sns" :key="sns.name" class="ml-4">
            <v-icon size="40">{{ sns.icon }}</v-icon>
          </span>
        </v-col>
      </div>
    </div>
    <hr />
    <v-container>
      <v-row>
        <div class="page-content text-center">
          <v-col cols="12" class="whoami">
            <v-card class="p-4">
              <v-card-title class="display-1 justify-center"
                >Who am I?</v-card-title
              >
              <v-card-text>
                Hi, I'm Makoto "Asthriona" Kobayashi. Lots of my friends just
                call me Mako, feel free to do so (or Mako-san if you feel extra
                formal :)). <br />
                I'm a web developer and network engineer who enjoys messing
                around with servers and learning new things. <br />
                Sometimes I'm a race driver as well. Beating lap times has a
                little something to it that just makes me feel good. <br />
                Sometimes I also like to do community-related stuff. For
                example, I took part in r/place with the r/vtuber group. We were
                focusing on VTubers, mostly Hololive talent. Our alliances with
                other groups focused on v-shojo and Hololive memes, and
                Nijisanji made us draw a lot of VTuber art and defend them. I
                myself focused on defending "Fubuking", the fox girl on a burger
                in the banner image. <br />
                I can be super dedicated to a task if asked nicely or if I have
                any kind of interest, like placing pixels for three days
                straight with no pause. <br />
                When not putting my health on the line for Pixel wars, I code,
                watch anime or Netflix shows, read manga, and play games.
              </v-card-text>
              <br />
            </v-card>
          </v-col>
          <v-col cols="12" class="whoami">
            <v-card class="p-4">
              <v-card-title class="display-1 justify-center"
                >What I do?</v-card-title
              >
              <v-card-text
                >Mostly code to be honest, learning new things, languages and
                frameworks. <br />
                The language I main is JavaScript, but I am learning GO, C, C++,
                and pretty much whatever I can use for project. <br />
                Talking of project I am currently working on
                <a
                  href="https://yukiko.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Yukiko</a
                >, a utility Discord Bot that can help you manage your server.
                <br />
                and my own websites at the moment, trying to add feature and
                expending to avoid being bind to Social Network
                Services.</v-card-text
              >
            </v-card>
          </v-col>
        </div>
        <div class="display-1">My Works:</div>
        <v-col
          v-for="work in works"
          :key="work.title"
          xs="12"
          sm="6"
          md="6"
          lg="3"
          xl="3"
        >
          <v-card>
            <v-img :src="work.img" lazy></v-img>
            <v-card-title>{{ work.title }}</v-card-title>
            <v-card-text>{{ work.description }}</v-card-text>
            <v-card-actions>
              <v-btn
                :href="work.url"
                target="_blank"
                color="primary"
                dark
                :disabled="!work.url"
              >
                <v-icon>mdi-link</v-icon>
                Visit
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-col cols="9">
            <v-card>
              <v-card-title>Contact</v-card-title>
              <v-card-text>
                <ul class="headline">
                  <li>
                    Email:
                    <a href="mailto:ping@asthriona.com"> ping@asthriona.com</a>
                  </li>
                  <li>
                    Mastodon:
                    <a
                      href="https://mstdn.jp/@Asthriona"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @asthriona@mstdn.jp</a
                    >
                  </li>
                </ul>
              </v-card-text>
            </v-card>
          </v-col>
        </v-col>
        <v-col cols="12" class="mt-4">
          <h1 class="text-center display-1 mt-4">
            Asthriona proudly sponsors:
          </h1>
          <v-col
            cols="12"
            class="d-flex justify-space-around mb-6 mt-6 sponsor"
          >
            <img
              src="https://cdn.asthriona.com/static/good-smile-racing.png"
              height="120px"
            />
            <img
              src="https://cdn.asthriona.com/static/personal-sponsor-2022.png"
              height="120px"
            />
          </v-col>
        </v-col>
      </v-row>
    </v-container> -->
  </div>
</template>

<script>
export default {
  name: "Home-page",
  data() {
    return {
      sns: [
        {
          name: "Github",
          url: "https://github.com/Asthriona",
          icon: "mdi-github"
        }
      ],
      works: [
        {
          title: "Asthriona.com",
          img: "https://cdn.asthriona.com/i/2022/05/Asthriona.png",
          description: "My professional website",
          url: "https://asthriona.com"
        },
        {
          title: "Asthriona.space",
          img: "https://cdn.asthriona.com/i/2022/05/asthrionaSpace.png",
          description: "My personal website",
          url: "https://asthriona.space"
        },
        {
          title: "Yukiko",
          img:
            "https://cdn.asthriona.com/i/2022/05/Yukiko%20-%20Discord%20Bot.png",
          description: "A Utility Discord bot",
          url: "https://yukiko.app"
        },
        {
          title: "CablePorn",
          img: "https://cdn.asthriona.com/i/2022/05/cablePorn.png",
          description: "Automated Twitter account about organized cables",
          url: "https://twitter.com/cableporn_"
        }
        // {
        //   title: "Cable Gore",
        //   img: "https://cdn.asthriona.com/i/2022/05/cablePorn.png",
        //   description:
        //     "An automated Twitter account about dis-organized cables",
        //   url: "https://twitter.com/cablegore"
        // }
      ],
      randomSubLine: [
        "/*This line is disabled*/",
        // "死にたい",
        // "空に消えたい",
        "Better keep it “just me”, It’s better that way, trust me",
        "it’s Me, Myself and I again",
        "Hello from Speedtest.net!",
        "Welcome to 2020 Season 3!",
        "You can now play 2022 as luigi",
        "Click here to cancel your subscription to 2022"
      ]
    };
  }
};
</script>

<style scoped>
.home {
  margin-top: 200px;
}
.head-banner {
  background-image: url(https://cdn.asthriona.com/rplaceHoloBackground.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
}
.font-logo {
  font-family: "Asthriona", cursive;
  font-size: 3rem;
  font-weight: 400;
  color: #000;
  -webkit-text-stroke: 2px rgba(255, 255, 255, 0.5);
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
</style>
