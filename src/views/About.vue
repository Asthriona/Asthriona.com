<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <b-img
            src="https://cdn.nishikino.xyz/asthriona/ProfilePict/mako.png"
            rounded="circle"
            alt="Asthriona Profile Picture"
            height="200px"
            class="MakoAvatar"
          ></b-img>
          <h1 class="display-4">Makoto "Asthriona" Kobayashi</h1>
          <p>
            <b>Welcome to my Website!</b> <br />
            I am Asthriona, or Makoto, call me as you wish. I'm a full-stack
            developer, and I'm currently working on serval project like Yukiko,
            This website, and a game for
            <a
              href="https://raunboomStudio.com"
              target="_blank"
              rel="noopener noreferrer"
              >Rainboom Studio</a
            >. Living in between Japan and france, I'll move to UK in a few
            months for a while and then hopefully definitively to Japan. I love
            japanese culture and learning the language. When I'm not working on
            code, I use to work on cars, but sadly my last car got wreked. so
            for now outside of work, i'm just doing more work, playing video
            games, watching anime, and learning new things.
            <br />
            <!-- I'm a
            big fan of the japanese culture, and learning the language. When not
            coding, I like to work on cars, Drifting is in my blood. Also Video
            games, I play those since I'm able to hold a controler, or use a
            mouse as my first game was Minesweeper on Windows 95. -->
          </p>
          <p>
            I have a bunch of project cars in mind, but most of them cannot be
            releaved just yet! you will have to wait a bit longer :) <br />
            all I can say is most of them will be drift build! gotta get better
            at it soon! (*•̀ᴗ•́*)و ̑̑
          </p>
          <p>
            About video games, with 20+ years of experience, I can say I have
            some skills. Mostly when talking about racing sim. I always manage
            to get on top of any leaderboard very quick. I think the funniest
            part is when I beat my friends on their own tracks In real life.<br />
            You know? Video games is not real life, but the result endup being
            the same ( ͡° ͜ʖ ͡°)
          </p>
        </b-col>
        <b-col cols="12">
          <table>
            <thead>
              <tr class="text-center">
                <h2>Who is Makoto?</h2>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>Makoto "Asthriona" Ng</td>
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
                  Angel Beats, Charlotte, Toradora, Black Bullet,DARLING in tde
                  FRANXX, Steins;Gate, Hitoribocchi no Marumaruseikatsu
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
                    <li>AMD Ryzen 1500X</li>
                    <li>x2 Nvidia GTX 1050</li>
                    <li>32GB DDR4 RAM</li>
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
                      <i>[Húxiān] Rx7 FC3S (Project)</i>
                    </li>
                    <li>
                      <strike>[Yoruichi] Citroën C5 Gen 3</strike>
                    </li>
                    <li>
                      <strike>[Izanagi] Nissian Silvia S15</strike>
                    </li>
                    <li>
                      <strike>[Húwáng] BMW M4 (2014, Drift Build)</strike>
                    </li>
                  </ul>
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
                <h2>Website Sources</h2>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Front End</th>
                <th>Vue.js 3, Webpack, Boostrap Vue, core-js</th>
              </tr>
              <tr></tr>
              <tr>
                <th>Hosting</th>
                <th>Cloudflare, Nishikino Network</th>
              </tr>
              <tr></tr>
              <tr>
                <th>Back End</th>
                <th>Node.js, Express, MongoDB, Mongoose</th>
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
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  beforeMount() {
    document.title = "Asthriona - About";
  }
};
</script>

<style scoped>
ul li {
  text-decoration: none;
  list-style-type: "=> ";
}
.aboutLists {
  text-decoration: none;
  list-style-type: "=>";
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
