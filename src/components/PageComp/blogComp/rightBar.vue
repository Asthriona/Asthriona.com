<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-img
            src="https://pbs.twimg.com/profile_images/1523324400245825537/zQiBhAZV_400x400.jpg"
          ></v-img>
          <v-card-title>Makoto "Asthriona" Kobayashi</v-card-title>
          <v-card-subtitle>Founder of Asthriona</v-card-subtitle>
          <v-card-text>
            <p>
              Hi! I'm Asthriona, or you can call me Makoto. I'm some sort of web
              developer, I like to code usefull or useless stuff, in the end I
              allways end up with something usefull. My main side project is
              Yukiko a powerfull discord bot with lot and lot of feature. I do
              code to keep my head out of the water, and I also play a lot of
              World Of Warcraft, Valorant and Sim Racing. I'm the main Tank and
              Admin of
              <b>&#60;Eternal Vengeance&#62;</b>. I'm also their own developper.
              I like to code to help other people and make this world a bit
              better! I'm sure I'm nowhere near to change the world but I think
              if everyone put their own little rock in the end we will make a
              differance.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Friends, Partner and things I use</v-card-title>
          <v-card-text>
            <span class="parthner" v-for="p in parthners" :key="p.name">
              <a :href="p.url" target="_blank" rel="noopener noreferrer">
                <img :src="p.logo" :alt="`${p.name}'s logo'`" />
              </a>
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>My Socials</v-card-title>
          <v-card-text>
            <v-btn
              v-for="s in socials"
              :key="s.name"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
              icon
              dark
            >
              <v-icon dark>{{ s.icon }}</v-icon>
            </v-btn>
            <v-btn href="https://line.me/ti/p/FOBYHR9htn" icon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-line"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"
                />
              </svg>
            </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- <v-col cols="12">
        <v-card>
          <v-card-title>My Github Stats</v-card-title>
          <v-card-text>
            <img
              src="https://github-readme-stats.vercel.app/api?username=asthriona&show_icons=true&theme=dark"
              alt="My Github Stats"
            />
          </v-card-text>
        </v-card>
      </v-col> -->
      <v-col cols="12">
        <v-card class="text-center">
          <v-card-title>Like the blog?</v-card-title>
          <v-card-text>
            <span class="display-1" style="cursor:pointer;">
              <v-icon color="red" size="100px">mdi-heart</v-icon>
            </span>
            <br />
            <span class="display-1">
              {{ Math.floor(Math.random() * 999) + 1 }}69 Likes so far!
            </span>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- A -->
      <v-col cols="12" class="text-end">
        <v-img
          @click="gura()"
          src="https://i.pinimg.com/originals/9f/75/74/9f75747a2dfb40c7f153d54faad41ea7.png"
          height="50px"
          contain
        ></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "RightBar",
  data() {
    return {
      parthners: [
        {
          name: "Scaleway",
          url: "https://scaleway.com",
          logo:
            "https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/01/5185491.png"
        },
        {
          name: "Cloudflare",
          url: "https://cloudflare.com",
          logo:
            "https://asthriona.s3.fr-par.scw.cloud/ShareX/2021/01/cf-logo-v-rgb-rev.png"
        },
        {
          name: "Speedtest",
          url: "https://asthriona.speedtest.net",
          logo: "https://cdn.asthriona.com/i/2021/10/speedtestLogo.png"
        },
        {
          name: "Unreal Engine",
          url: "https://unrealengine.com",
          logo:
            "https://cdn.nishikino.xyz/global/UE_Logo_horizontal_unreal-engine_white.svg"
        },
        {
          name: "DigitalOcean",
          url: "https://digitalocean.com",
          logo: "https://cdn.nishikino.xyz/global/DO_Logo_horizontal_white.svg"
        }
      ],
      socials: [
        {
          name: "Twitter",
          url: "https://twitter.com/asthriona",
          icon: "mdi-twitter"
        },
        {
          name: "Github",
          url: "https://github.com/asthriona",
          icon: "mdi-github"
        },
        {
          name: "Youtube",
          url: "https://youtube.com/asthriona",
          icon: "mdi-youtube"
        },
        {
          name: "Twitch",
          url: "https://twitch.tv/asthriona",
          icon: "mdi-twitch"
        },
        {
          name: "Instagram",
          url: "https://instagram.com/asthriona",
          icon: "mdi-instagram"
        },
        {
          name: "Email",
          url: "mailto:ping@asthriona.com",
          icon: "mdi-email"
        }
      ]
    };
  },
  methods: {
    gura() {
      var audio = new Audio(
        "https://cdn.nishikino.xyz/asthriona/blog/static/gawr-gura-a.wav"
      );
      audio.play();
    }
  }
};
</script>

<style scoped>
.parthner {
  display: inline-block;
  margin: 10px;
}
.parthner img {
  height: 40px !important;
}
</style>
