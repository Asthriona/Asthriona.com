<template>
  <div class="Footer">
    <v-footer v-bind="localAttrs" :padless="padless" dark>
      <v-card
        flat
        tile
        width="100%"
        class="lighten-1 text-center"
        color="#232323"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon.name"
            :href="icon.url"
            class="mx-4"
            icon
            dark
          >
            <v-icon size="24">
              {{ icon.name }}
            </v-icon>
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
        <v-divider></v-divider>
        <v-card-text class="white--text">
          &copy; 2019 - {{ new Date().getFullYear() }} —
          <strong>Asthriona</strong> All Right Reserved.<br />
          code Hosted on
          <a
            href="https://github.com/asthriona/asthriona.space"
            target="_blank"
            rel="noopener noreferrer"
            >GitHub</a
          >
          DNS Powered by
          <a
            href="https://Asthriona.com"
            target="_blank"
            rel="noopener noreferrer"
            >Asthriona ltd.</a
          ><br />
          Domain uptime: {{ longTime }} <br />
          <div class="foot_logo">
            <p>Operating Company</p>
            <div class="figure">
              <img
                src="https://cdn.nishikino.xyz/asthriona/icons/footLogo.png"
                alt="Asthriona Logo"
                style="width: 100%"
              />
            </div>
          </div>
          <a
            href="https://www.digitalocean.com/?refcode=b58bc1c7b403&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
            ><img
              src="https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg"
              alt="DigitalOcean Referral Badge"
          /></a>
          <a
            href="https://www.abuseipdb.com/user/130766"
            class="ml-4"
            title="AbuseIPDB is an IP address blacklist for webmasters and sysadmins to report IP addresses engaging in abusive behavior on their networks"
          >
            <img
              src="https://www.abuseipdb.com/contributor/130766.svg"
              alt="AbuseIPDB Contributor Badge"
              style="width: 200px;height: 65px;border-radius: 5px;background: #35c246 linear-gradient(rgba(255,255,255,0), rgba(255,255,255,.3) 50%, rgba(0,0,0,.2) 51%, rgba(0,0,0,0));padding: 5px;"
            />
          </a>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "The-Footer",
  data() {
    return {
      icons: [
        {
          name: "mdi-home",
          url: "/"
        },
        {
          name: "mdi-account",
          url: "/profile"
        },
        {
          name: "mdi-email",
          url: "mailto:ping@asthriona.com"
        },
        {
          name: "mdi-github",
          url: "https://github.com"
        }
        // {
        //   name: "mdi-twitter",
        //   url: "/"
        // }
      ],
      longTime: 0,
      padless: true,
      variant: "absolute"
    };
  },
  methods: {
    //Code by Aimee (http://www.mangoya.cn/#/)
    runTime() {
      //运行倒计时
      var oldTime = new Date("2022/04/05 19:09:00");
      setInterval(() => {
        const nowTime = new Date();
        const longTime = nowTime - oldTime;
        const days = parseInt(longTime / 1000 / 60 / 60 / 24, 10); //计算剩余的天数
        const hours = parseInt((longTime / 1000 / 60 / 60) % 24, 10); //计算剩余的小时
        const minutes = parseInt((longTime / 1000 / 60) % 60, 10); //计算剩余的分钟
        const seconds = parseInt((longTime / 1000) % 60, 10); //计算剩余的秒数
        this.longTime =
          days +
          " Days, " +
          hours +
          " Hours, " +
          minutes +
          " Minutes, " +
          seconds +
          " Seconds, ";
      }, 1000);
      console.log(
        "Asthriona.space\nHosted by Nishikino Networks, \nDNS by Asthriona ltd.\nCode by Asthriona \nTheme by Asthriona, Project Inspired by Aimee ('http://www.mangoya.cn') (Part of the code belong to them.)"
      );
    }
  },
  created() {
    this.runTime();
  },
  computed: {
    localAttrs() {
      const attrs = {};
      if (this.variant === "default") {
        (attrs.absolute = false), (attrs.fixed = false);
      } else {
        attrs[this.variant] = true;
      }
      return attrs;
    }
  }
};
</script>

<style scoped>
.Footer {
  margin-bottom: 400px;
}
.foot_logo {
  display: table;
  max-width: 300px;
  width: 100%;
  margin: 0 auto 12px;
}
.foot_logo p {
  display: table-cell;
  width: 9em;
  vertical-align: middle;
  font-size: 12px;
}
</style>
