<template>
  <div class="about">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <v-avatar size="300px">
            <v-img
              src="https://cdn.nishikino.xyz/asthriona/ProfilePict/mako.png"
              alt="Asthriona Profile Picture"
              class="MakoAvatar"
            ></v-img>
          </v-avatar>
          <br />
          <div class="name mb-4">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <span class="display-3" v-bind="attrs" v-on="on"
                  >Makoto "Asthriona" Kobayashi</span
                >
              </template>
              <span>まこと「アスリオナ」こばやし</span>
            </v-tooltip>
          </div>
          <v-spacer class="mt-4 mb-4"></v-spacer>
          <v-col cols="12" class="mt-4">
            <div class="display-1 text-left">Welcome to my Website!</div>
            <div class="intro-content">
              <span class="text-left"
                >Hi! I'm Makoto, a {{ age }} years old developper</span
              >
              <span class="intro">
                <br />
                I'm a full-stack developer, and I'm currently working on serval
                project like Yukiko, This website, and a game for Rainboom
                Studio. Living in between Japan and france, I'll move to UK in a
                few months for a while and then hopefully definitively to Japan.
                I love japanese culture and learning the language. When I'm not
                working on code, I use to work on cars, but sadly my last car
                got wrecked. so for now outside of work, i'm just doing more
                work, playing video games, watching anime, and learning new
                things.
              </span>
            </div>
            <div class="projects mt-4">
              <span>
                I have a bunch of project cars in mind, but most of them I cannot talk about just yet! you will have to wait a bit longer :) all
                I can say is most of them will be drift build! gotta get better
                at it soon! (*•̀ᴗ•́*)و ̑̑
              </span>
            </div>
            <div class="video-games mt-4">
              <span>
                About video games, with 20+ years of experience, I can say I
                have some skills. Mostly when talking about racing sim. I always
                manage to get on top of any leaderboard very quickly. I think the
                funniest part is when I beat my friends on their own tracks In
                real life. You know? Video games is not real life, but the
                result endup being the same! Sup Thony? ( ͡° ͜ʖ ͡°)
              </span>
            </div>
          </v-col>
        </v-col>
        <b-col cols="12">
          <table>
            <thead>
              <tr class="text-center">
                <h2>
                  >_ Makoto.data
                  <span class="blink">▋</span>
                </h2>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>Makoto "Asthriona" Kobayashi</td>
              </tr>
              <tr>
                <td>Included features:</td>
                <td>
                  Anoying, Sleep depraved, Hypersomnia, Ability to code, Brain
                  Dead sometimes.
                </td>
              </tr>
              <tr>
                <td>Favorite Anime:</td>
                <td>
                  Angel Beats, Charlotte, Toradora, Black Bullet, To Your Eternity, Steins;Gate, Hitoribocchi no Marumaruseikatsu
                </td>
              </tr>
              <tr>
                <td>Work:</td>
                <td>
                  Curently working as Developper for
                  <a
                    href="https://team.yukiko.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Yukiko Dev Team</a
                  >
                </td>
              </tr>
              <tr>
                <td>Computer Gears:</td>
                <td>
                  <ul class="aboutLists">
                    <li><b>Custom Build</b></li>
                    <li>AMD Ryzen 1500X OC 4.0Ghz</li>
                    <li>Nvidia GTX 1050 OC</li>
                    <li>16GB DDR4 RAM</li>
                    <li><b>Pre built Asus Laptop</b></li>
                    <li><b>Keyboard:</b></li>
                    <li>Leopold FC900R PD</li>
                    <li>Custom Keycaps US/JP layout</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td>Car List:</td>
                <td>
                  <ul class="aboutLists">
                    <li>
                      <i>[Húshén] Rx7 FD3S</i>
                    </li>
                    <li>
                      <i>[Húxiān] Rx7 FC3S</i>
                    </li>
                    <li>
                      <i>[Nekomata] BMW M4 2020</i>
                    </li>
                    <li>
                      <i>[Yoruichi v1.1] Citroën C5 Gen 3</i>
                    </li>
                    <li>
                      <strike style="color:red;"
                        >[Yoruichi] Citroën C5 Gen 3</strike
                      >
                    </li>
                    <li>
                      <strike>[Izanagi] Nissian Silvia S15</strike>
                    </li>
                    <li>
                      <strike style="color:red;"
                        >[Húwáng] BMW M4 (2014, Drift Build)</strike
                      >
                    </li>
                  </ul>
                  <strike>Stike = sold // not owned anymore </strike> <br />
                  <span style="color:red;">Stike + red = Totaled</span>
                </td>
              </tr>
              <tr>
                <td>Favorite Color:</td>
                <td>Orange, Black, Purple</td>
              </tr>
              <tr>
                <td>Spoken Language:</td>
                <td>French, English, Japanese (learning)</td>
              </tr>
              <tr>
                <td>Language I plan to learn:</td>
                <td>Chinese, Korean</td>
              </tr>
              <tr>
                <td>Coding Language:</td>
                <td>HTML, CSS, JS, GO, C, C++, C#</td>
              </tr>
            </tbody>
          </table>
        </b-col>
        <b-col cols="12" class="mt-4">
          <table class="mt-4">
            <thead>
              <tr class="text-center">
                <h2>
                  >_ Makoto.website.data
                  <span class="blink">▋</span>
                </h2>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Front End</th>
                <th>Vue.js 3, Webpack, Vuetify, core-js, PWA</th>
              </tr>
              <tr></tr>
              <tr>
                <th>Hosting</th>
                <th>Cloudflare, Nishikino Network, Scaleway, Digital Ocean</th>
              </tr>
              <tr></tr>
              <tr>
                <th>Back End</th>
                <th>Node.js, Express, MongoDB, Socket.IO</th>
              </tr>
              <tr>
                <th>DNS</th>
                <th>Cloudflare</th>
              </tr>
              <tr>
                <th>Cache</th>
                <th>Nishikino Network</th>
              </tr>
              <tr>
                <th>CDN</th>
                <th>Nishikino Network</th>
              </tr>
            </tbody>
          </table>
        </b-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      age: 0
    };
  },
  methods: {
    getAge() {
      setInterval(() => {
        let time =
          (new Date() - new Date(840844800000)) /
          (1000 * 60 * 60 * 24 * 365.25);
        this.age = time.toString().substring(0, 12);
      }, 50);
    }
  },
  mounted() {
    this.getAge();
  },
  beforeMount() {
    document.title = "Asthriona - About";
  },
  metaInfo: {
    meta: [
      // twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Asthriona" },
      { name: "twitter:title", content: "Asthriona - About" },
      {
        name: "twitter:description",
        content:
          "Full-Stack dev | Maker of @YukikoApp | Japan/car Enthusiast. | Like: Miku. / Dislike: The world. | Links: http://bio.link/asthriona | pfp @lgisdead"
      },
      {
        name: "twitter:image",
        content:
          "https://cdn.nishikino.xyz/asthriona/blog/static/Fh6EIPrm_400x400.jpg"
      }
    ]
  }
};
</script>

<style scoped>
.blink {
  animation: blink-animation 1s steps(5, start) infinite;
  -webkit-animation: blink-animation 1s steps(5, start) infinite;
}
@keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
@-webkit-keyframes blink-animation {
  to {
    visibility: hidden;
  }
}
ul li {
  text-decoration: none;
  list-style-type: "⇒ ";
}
.aboutLists {
  text-decoration: none;
  list-style-type: "&#8658;";
}
table {
  border-collapse: separate;
  border: solid black 1px;
  border-radius: 6px;
  -moz-border-radius: 6px;
}
td,
th {
  padding: 15px;
}
table,
td,
th {
  border: 1px solid white;
}
a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: #d86100;
}
</style>
