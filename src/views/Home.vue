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
      <div class="masterhead">
        <b-row class="vh-100" align-v="center">
          <div class="headinStuff">
            <h1 class="tridi">Asthriona</h1>
            <br />
            <b-col cols="12" class="text-center">
              <h3 class="void">
                {{ random[Math.round(Math.random() * random.length)] }}
              </h3>
            </b-col>
            <h3 class="tridi2">
              <a
                href="https://twitter.com/asthriona"
                target="_blank"
                rel="noopener noreferrer"
                ><b-icon icon="twitter" variant="dark"></b-icon
              ></a>
              ●
              <a
                href="https://instagram.com/asthrionaa"
                target="_blank"
                rel="noopener noreferrer"
                ><b-icon icon="instagram" variant="dark"></b-icon
              ></a>
              ●
              <a
                href="https://github.com/asthriona"
                target="_blank"
                rel="noopener noreferrer"
                ><b-icon icon="github" variant="dark"></b-icon
              ></a>
            </h3>
          </div>
        </b-row>
      </div>
    </b-container>
    <b-container>
      <b-row>
        <div class="content text-left">
          <div class="who">
            <b-col cols="12" offset-lg="1"><h1>Who am I?</h1></b-col>
            <b-col cols="12" offset-lg="2">
              <p>
                I'm mostly working on personal Project Like Yukiko, Freyja,
                Watcher, Loky, Asthriona networks. <br />
                Playing video games is also a big part of my life since i'm able
                to hold a controler. <br />
                i've got promoted admin of Eternal Veangeance, wich is a WoW
                Guilds and comunity around gaming in general. <br />
                I'm their main tank (M+ player 92th thank of Maggi in S4), But
                also managing part of the guild events, and official developper.
                <br />
                In the real world I'm a Network Engineer and kinda lost
                developper, Still learning. <br />
              </p>
            </b-col>
          </div>
          <div class="who">
            <b-col cols="12" offset-lg="1">
              <h1>What I do everyday</h1>
            </b-col>
            <b-col cols="12" offset-lg="2">
              <p>
                I'm mostly working on personal Project Like Yukiko, Freyja,
                Watcher, Loky, Asthriona networks. <br />
                Playing video games is also a big part of my life since i'm able
                to hold a controler. <br />
                i've got promoted admin of Eternal Veangeance, wich is a WoW
                Guilds and comunity around gaming in general. <br />
                I'm their main tank (M+ player 92th thank of Maggi in S4), But
                also managing part of the guild events, and official developper.
                <br />
                In the real world I'm a Network Engineer and kinda lost
                developper, Still learning. <br />
              </p>
            </b-col>
          </div>
          <div class="who">
            <b-col cols="12" offset-lg="1">
              <h1>Works</h1>
            </b-col>
            <b-col cols="12">
              <!-- THE WALL CARD -->
              <div class="column">
                <b-card
                  bg-variant="dark"
                  title="The Wall"
                  img-src="https://cdn.nishikino.xyz/asthriona/TheWallAsh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 10rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    WoW Guild Website<br />
                    > Express.js
                  </b-card-text>
                </b-card>
              </div>
              <!-- YUKIKO CARD -->
              <div class="column">
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
                    Public Discord bot <br />
                    > Discord.js
                  </b-card-text>
                </b-card>
              </div>
              <!-- ANIMEFM CARD -->
              <div class="column">
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
                    japan Web Radio<br />
                    > Vue & Azuracast
                  </b-card-text>
                </b-card>
              </div>
              <!-- Asthriona CARD -->
              <div class="column">
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
                    Personal Website<br />
                    > VueJS
                  </b-card-text>
                </b-card>
              </div>
              <!-- Cloudsde Radio CARD -->
              <div class="column">
                <b-card
                  bg-variant="dark"
                  title="Cloudsdale Radio"
                  img-src="https://cdn.nishikino.xyz/asthriona/CRAsh.webp"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="min-width: 10rem;"
                  class="mb-2"
                >
                  <b-card-text>
                    My Little Pony WebRadio<br />
                    > Express.js
                  </b-card-text>
                </b-card>
              </div>
            </b-col>
          </div>
          <div class="who">
            <b-col cols="12" offset-lg="1">
              <h1>World of Warcraft</h1>
            </b-col>
            <b-col cols="12" offset-lg="2">
              <p>
                This game became a big part of my life, I play since end of
                Burning Crusade.<br />
                My oldest archivement is [WoW's 5th Anniversary]<br />
                I mainly play Death Knight Level 120 called Mâkoto on
                Magtheridon.<br />
                Also play a second "Main" character called "Alestra" It's a
                space goat Pladin (I like paladin) and gearing up a Druid
                restauration called "Maryy"<br />
              </p>
            </b-col>
          </div>
          <div class="who">
            <b-col cols="12" offset-lg="1">
              <h1>Contact</h1>
            </b-col>
            <b-col cols="12" offset-lg="2">
              <ul>
                <li>
                  Twitter:
                  <a href="https://twitter.com/asthriona">@Asthriona</a>
                </li>
                <br />
                <li>Discord: Asthriona#9604</li>
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
                  Email:
                  <a href="mailto:ping@asthriona.com">ping@Asthriona.com</a>
                </li>
                <br />
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
export default {
  name: "Home",
  data() {
    return {
      allBackgroundImages,
      random: [
        "Poggu!",
        "Poggy!",
        "Pog!",
        "Kappa",
        "TriHard",
        "PogChamp",
        "4Head",
        "cmonbruh",
        "LUL",
        "OmegaLuL",
        "hahaa",
        "/*This line is disabled*/",
        '<h1 class="headline" style="text-transform: uppercase;">this text is huge<h1>',
        'console.log("hello world!")',
        "im a twitch creep :)",
        "Hello from Speedtest.net!",
        "Trump has been banned from our platform",
        "Welcome to 2020 Season 2!",
        "You can now play 2020 as luigi",
        "Click here to cancel your subscription to 2021",
        "Website goes BRRRRRR!"
      ]
    };
  },
  beforeMount() {
    document.title = "Asthriona";
  },
  computed: {
    backgroundImage() {
      var bg = Math.floor(Math.random() * 5) + 1;
      return {
        backgroundImage: `${this.allBackgroundImages[bg]}`
      };
    }
  },
  methods: {
    logs() {
      console.log(this.backgroundImage);
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
  margin-top: 10rem;
}
.column {
  float: left;
  width: 20%;
  margin-bottom: 16px;
  padding: 0 8px;
}
</style>
