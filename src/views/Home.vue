/* eslint-disable */
<template>
  <div class="div">
    <b-container
      class="h-100"
      v-bind:style="{
        'background-image': 'url(' + backgroundImage.backgroundImage + ')'
      }"
      fluid
    >
      <!-- <video autoplay muted loop id="bgvids" src="../assets/agent-background-generic.mp4"></video> -->
      <div class="masterhead">
        <b-row class="vh-100" align-v="center">
          <div class="headinStuff">
            <h1 class="tridi">Asthriona</h1>
            <br />
            <b-col cols="12" class="text-center">
              <h3 class="void" v-if="AsthrionaIsDead == false">
                {{ random[Math.round(Math.random() * random.length)] }}
              </h3>
              <h3 class="void" v-else>
                Error Asthriona is dead,
                <span style="color:red;">mismatch</span>.
              </h3>
            </b-col>
            <h3 class="tridi2">
              <a
                href="https://twitter.com/asthriona"
                target="_blank"
                rel="noopener noreferrer"
                ><b-icon icon="twitter" variant="light"></b-icon
              ></a>
              ●
              <a
                href="https://instagram.com/asthriona.dev"
                target="_blank"
                rel="noopener noreferrer"
                ><b-icon icon="instagram" variant="light"></b-icon
              ></a>
              ●
              <a
                href="https://github.com/asthriona"
                target="_blank"
                rel="noopener noreferrer"
                ><b-icon icon="github" variant="light"></b-icon
              ></a>
            </h3>
          </div>
        </b-row>
      </div>
    </b-container>
    <b-container>
      <b-row>
        <b-col cols="12">
          <div class="spotify">
            <h4 class="text-center">
              <b-img
                rounded="circle"
                :src="
                  img ? img : 'https://cdn.asthriona.com/static/spotify.png'
                "
                alt=""
                height="50px"
              />
              <a :href="trackURL" target="_blank" rel="noopener noreferrer">
                Now Playin: {{ title ? title : "Loading..." }} -
                {{ artist ? artist : "Loading..." }}
              </a>
              {{ updateLast() }}
            </h4>
          </div>
        </b-col>
        <p>
          <select
            class="custom-select"
            v-model="lang"
            @change="handleChange(e)"
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="fr">Francais</option>
          </select>
        </p>
        <div class="content text-left">
          <div class="who">
            <b-col cols="12" offset-lg="0"
              ><h1>{{ $t("home.who.title") }}</h1></b-col
            >
            <b-col cols="12" offset-lg="1">
              <p v-html="$t('home.who.text')"></p>
            </b-col>
          </div>
          <div class="what">
            <b-col cols="12">
              <h1>{{ $t("home.what.title") }}</h1>
            </b-col>
            <b-col cols="12" offset-lg="1">
              <p v-html="$t('home.what.text')"></p>
            </b-col>
          </div>
          <div class="works">
            <b-col cols="12">
              <h1>{{ $t("home.works.title") }}</h1>
            </b-col>
            <b-col cols="12">
              <b-card-group>
                <!-- THE WALL CARD -->
                <b-card
                  bg-variant="dark"
                  :title="$t('home.works.web.TheWall.title')"
                  img-src="https://cdn.nishikino.xyz/asthriona/TheWallAsh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 10rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    {{ $t("home.works.web.TheWall.desc") }}<br />
                    > Express.js
                  </b-card-text>
                  <b-button href="https://TheWall.ovh" variant="primary">{{
                    $t("home.works.visite")
                  }}</b-button>
                </b-card>
                <!-- YUKIKO CARD -->
                <b-card
                  bg-variant="dark"
                  title="Yukiko"
                  img-src="https://cdn.nishikino.xyz/asthriona/YukikoAsh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 10rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    {{ $t("home.works.web.Yukiko.desc") }} <br />
                    > Discord.js
                  </b-card-text>
                  <b-button href="https://yukiko.app" variant="primary">{{
                    $t("home.works.visite")
                  }}</b-button>
                </b-card>
                <!-- ANIMEFM CARD -->
                <b-card
                  bg-variant="dark"
                  title="AnimeFM"
                  img-src="https://cdn.nishikino.xyz/asthriona/AnimeFMAsh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 10rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    {{ $t("home.works.web.anime.desc") }}<br />
                    > Vue & Azuracast
                  </b-card-text>
                  <b-button
                    href="https://animefm.co"
                    variant="primary"
                    disabled
                    >{{ $t("home.works.visite") }}</b-button
                  >
                </b-card>
                <!-- Asthriona CARD -->
                <b-card
                  bg-variant="dark"
                  title="Asthriona.com"
                  img-src="https://cdn.nishikino.xyz/asthriona/AshASh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 10rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    {{ $t("home.works.web.asthriona.desc") }}<br />
                    > VueJS
                  </b-card-text>
                  <b-button href="javascript:;" variant="primary">{{
                    $t("home.works.visite")
                  }}</b-button>
                </b-card>
                <!-- Cloudsde Radio CARD -->
                <b-card
                  bg-variant="dark"
                  title="Cloudsdale Radio"
                  img-src="https://cdn.nishikino.xyz/asthriona/CRAsh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 12rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    {{ $t("home.works.web.cloudsdale.desc") }}<br />
                    > Express.js
                  </b-card-text>
                  <b-button
                    href="https://CloudsdaleRadio.com"
                    variant="primary"
                    >{{ $t("home.works.visite") }}</b-button
                  >
                </b-card>
              </b-card-group>
            </b-col>
          </div>
          <div class="wow mt-4">
            <b-col cols="12" class="mt-4">
              <h1>{{ $t("home.wow.title") }}</h1>
            </b-col>
            <b-col cols="12" offset-lg="1">
              <p v-html="$t('home.wow.text')"></p>
            </b-col>
          </div>
          <div class="contact">
            <b-col cols="12">
              <h1>{{ $t("home.contact.title") }}</h1>
            </b-col>
            <b-col cols="12" offset-lg="1">
              <ul>
                <li>
                  Twitter:
                  <a
                    href="https://twitter.com/asthriona"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@Asthriona</a
                  >
                </li>
                <br />
                <li>
                  Discord:
                  <a
                    href="https://dsc.bio/asthriona"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Asthriona#0001</a
                  >
                </li>
                <br />
                <li>
                  Mastodont:
                  <a
                    href="https://mstdn.jp/@Asthriona"
                    target="_blank"
                    rel="noopener noreferrer"
                    >@Asthriona@mstdn.jp</a
                  >
                </li>
                <br />
                <li>
                  {{ $t("home.contact.email") }}:
                  <a href="mailto:ping@asthriona.com">ping@Asthriona.com</a>
                </li>
                <br />
                <li>
                  GPG:
                  <a
                    href="/pubkey.txt"
                    target="_blank"
                    rel="noopener noreferrer"
                    >0xC7D7BC3411B759FE</a
                  >
                  |
                  <a
                    href="http://pgp.mit.edu/pks/lookup?op=get&search=0xC7D7BC3411B759FE"
                    target="_blank"
                    rel="noopener noreferrer"
                    >[pgp.mit.edu]</a
                  >
                </li>
              </ul>
            </b-col>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import allBackgroundImages from "../assets/images/backgrounds/allbg";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      allBackgroundImages,
      title: "",
      artist: "",
      img: "",
      trackURL: "",
      lang: localStorage.getItem("lang") || "en",
      AsthrionaIsDead: false,
      random: [
        // "/*This line is disabled*/",
        // "死にたい",
        // "空に消えたい",
        // "Better keep it “just me”, It’s better that way, trust me",
        // "it’s Me, Myself and I again",
        // "Hello from Speedtest.net!",
        "Welcome to 2020 Season 3!",
        "You can now play 2021 as luigi",
        "Click here to cancel your subscription to 2022"
      ]
    };
  },
  beforeMount() {
    if (localStorage.getItem("lang") === "ja") {
      document.title = "アストリオナ";
    } else {
      document.title = "Asthriona";
    }
    if (!localStorage.getItem("lang")) {
      localStorage.setItem("lang", "en");
    }
    axios.get(`${process.env.VUE_APP_URI}/lastfm`).then(res => {
      this.title = res.data.title;
      this.artist = res.data.artist;
      this.img = res.data.img;
      this.trackURL = res.data.url;
    });
  },
  methods: {
    handleChange(e) {
      localStorage.setItem("lang", e.target.value);
      window.location.reload();
    },
    updateLast() {
      setInterval(() => {
        axios.get(`${process.env.VUE_APP_URI}/lastfm`).then(res => {
          this.title = res.data.title;
          this.artist = res.data.artist;
          this.img = res.data.img;
          this.trackURL = res.data.url;
        });
      }, 10000);
    }
  },
  computed: {
    backgroundImage() {
      var bg = Math.floor(Math.random() * 6) + 1;
      return {
        backgroundImage: `${this.allBackgroundImages[bg]}`
      };
    }
  }
};
</script>

<style scoped>
@font-face {
  font-family: Asthriona;
  src: url(../assets/font/logofont.ttf) format("truetype");
}
.tridi {
  text-align: center;
  font-family: "Asthriona";
  font-size: 5.4em;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
.tridi2 {
  text-align: center;
  font-family: "Asthriona";
  font-size: 2em;
  color: #f5f5f5;
  text-shadow: 1px 1px 1px #919191, 1px 2px 1px #919191, 1px 3px 1px #919191,
    1px 4px 1px #919191, 1px 5px 1px #919191, 1px 6px 1px #919191,
    1px 7px 1px #919191, 1px 8px 1px #919191, 1px 9px 1px #919191,
    1px 10px 1px #919191, 1px 18px 6px rgba(16, 16, 16, 0.4),
    1px 22px 10px rgba(16, 16, 16, 0.2), 1px 25px 35px rgba(16, 16, 16, 0.2),
    1px 30px 60px rgba(16, 16, 16, 0.4);
}
.headinStuff {
  width: 100%;
}
.void {
  width: 100%;
  font-size: 2rem;
  color: #f5f5f5;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
}
.masterhead {
  height: 100vh;
  min-height: 500px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0);
  z-index: -1;
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
  position: absolute;
  top: 100%;
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
.content {
  margin-top: 2rem;
}
.spotify {
  margin-top: 2rem;
}
.spotify a:link {
  color: #cccccc;
}
.spotify a:visited {
  color: #cccccc;
}
.spotify a:hover {
  color: #cccccc;
}
.spotify a:active {
  color: #cccccc;
}
.column {
  float: left;
  width: 20%;
  margin-bottom: 16px;
  padding: 0 8px;
}
#bgvids {
  z-index: -1;
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
</style>
