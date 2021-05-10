<template>
  <div>
    <div class="fcontainer footBack">
      <p>
        Code hosted on
        <a href="https://github.com/Asthriona/Asthriona.com" target="_blank"
          >GitHub</a
        >. Website hosted by
        <a
          href="https://Nishikino.xyz"
          target="_blank"
          rel="noopener noreferrer"
          >Nishikino Networks</a
        >
        DNS Powered by
        <a
          href="https://Asthriona.com"
          target="_blank"
          rel="noopener noreferrer"
          >Asthriona ltd.</a
        >
      </p>
      <p>
        Domaine Uptime: <span class="uptime">{{ longTime }}</span
        ><span class="timeJump"> (●'◡'●)ﾉ♥</span>
      </p>
      <p>
        © Asthriona ltd 2019 -{{ new Date().getFullYear() }}
        <a href="https://Asthriona.com">Asthriona</a>. Theme By
        <a href="https://Asthriona.com/" target="_blank">Asthriona</a>
      </p>
      <p>
        Credit: Nako's art by
        <a
          href="http://twitter.com/lgisdead"
          target="_blank"
          rel="noopener noreferrer"
          >lgisdead</a
        >, Theme Inspired by
        <a href="http://mangoya.cn/" target="_blank" rel="noopener noreferrer"
          >Aimee</a
        >.
      </p>
      <p><span>Made with</span>❤️ <span>by Asthriona.</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      longTime: 0
    };
  },
  methods: {
    //Code by Aimee (http://www.mangoya.cn/#/)
    runTime() {
      //运行倒计时
      var oldTime = new Date("2019/02/19 19:09:00");
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
        "Asthriona.com\nHosted by Nishikino Networks, \nDNS by Asthriona ltd.\nCode by Asthriona \nTheme by Asthriona, Project Inspired by Aimee ('http://www.mangoya.cn') (Part of the code belong to them.)\nHeader Images by Riot Games Artists. ('https://www.riotgames.com/en')\n Lowpoly Jett by GreenP ('https://twitter.com/GreenP_94')"
      );
    }
  },
  created() {
    this.runTime();
  }
};
</script>

<style scoped>
.footBack {
  color: #888;

  font-size: 12px;
  line-height: 0.5;
  text-align: center;
  width: 100%;
  min-height: 50px;
  margin-top: 25px;
  position: absolute;
}

.fcontainer {
  width: 100%;
  background: #232323;
  padding: 15px 10px 10px 10px;
  box-sizing: border-box;
  width: 100% !important;
}

.footBack a {
  color: #d86100;
  z-index: 3;
}
</style>
