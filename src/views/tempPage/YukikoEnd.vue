<template>
  <div class="Yukiko-End">
    <v-container>
      <v-row>
        <v-col cols="12" class="text-center">
          <div class="page-content">
            <div class="countdown" v-if="showText == false">
              <span class="display-2">Days until Yukiko Shut down</span><br />
              <span class="display-4">{{ timeLeft }}</span> <br />
              <small class="muted"
                >for more information about what's going on, please read
                <a
                  href="https://yukiko.app/news/More-infos-about-the-verifiaction-status-situation"
                  >More infos about the verifiaction status situation.</a
                ></small
              >
            </div>
            <div class="text" v-if="showText == true">
              <span class="display-2">Yukiko is shutting down</span><br />
              <span class="display-2">Thank you for the adventure!</span>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "YukikoEnd",
  data() {
    return {
      timeLeft: "Doing complex time calculations...",
      showText: false
    };
  },
  methods: {
    daysUntil() {
      const countDownDate = new Date("Oct 28, 2022 00:00:00").getTime();
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        this.timeLeft = "Yukiko is dead.";
        this.showText = true;
      } else {
        this.timeLeft = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }
    }
  },
  mounted() {
    this.daysUntil();
    setInterval(this.daysUntil, 1000);
  }
};
</script>

<style>
/* .Yukiko-End {
  height: 100%;
} */
.page-content {
  margin-top: 20vh;
}
.down-text {
  position: absolute;
  bottom: 0;
}
</style>
