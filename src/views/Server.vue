<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <h3>Servers</h3>
          <h5>List of my actual and owned servers</h5>
          <h5>Online Servers:</h5>
        </b-col>
        <b-col v-for="server in OnlineServers" :key="server.name">
          <b-card-group>
            <b-card
              bg-variant="dark"
              text-variant="white"
              :title="server.name"
              tag="article"
              style="max-width: 20rem; min-width: 15rem; min-height: 130px; text-align:center;"
              class="mb-2 col-5"
            >
              <b-card-text>
                {{ server.usage }}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <b-col cols="12">
          <div class="text-center">
            <h5>Offline/Dead Servers</h5>
          </div>
        </b-col>
        <b-col v-for="server in OfflineServers" :key="server.name">
          <b-card-group>
            <b-card
              bg-variant="dark"
              text-variant="white"
              :title="server.name"
              tag="article"
              style="max-width: 20rem; min-width: 15rem; min-height: 130px; text-align:center;"
              class="mb-2 col-5"
            >
              <b-card-text>
                {{ server.usage }}
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OnlineServers: [
        {
          name: "Yukiko-01",
          usage: "Hosting some Yukiko's code and comisisons bot"
        },
        {
          name: "Asthriona-mail",
          usage: "Main Mail server"
        },
        {
          name: "Stardust-01",
          usage: "Hosting Nishikino Network's Gateway"
        },
        {
          name: "Stardust-02",
          usage: "Static files hosting + Bot hosting for YDT"
        },
        {
          name: "Shiro",
          usage: "NodeJS App Hosting (Web)"
        },
        {
          name: "Suzune",
          usage: "Yukiko's Website"
        },
        {
          name: "ZeroTwo",
          usage: "Main Yukiko server"
        },
        {
          name: "Lyra",
          usage: "Speedtest.net and main server"
        },
        {
          name: "AfterLife",
          usage: "DNS Server"
        },
        {
          name: "Cadenza",
          usage: "DNS Server"
        },
        {
          name: "Maki",
          usage: "Internal tools"
        },
        {
          name: "Kurisu",
          usage: "Internal tools"
        },
        {
          name: "Afterlife",
          usage: "Yukiko Internal tools"
        },
        {
          name: "Yuno",
          usage: "Waiting for produiction use"
        },
        {
          name: "Yuki",
          usage: "Waiting for produiction use"
        }
      ],
      OfflineServers: [
        {
          name: "Yukiko-02",
          usage: "Rescue Server for Yukiko"
        },
        {
          name: "SMG-mail",
          usage: "Main Mail server"
        },
        {
          name: "FRSTOR-01",
          usage: "Static and private file hosting"
        },
        {
          name: "FRSTOR-02",
          usage: "Backup Server"
        },
        {
          name: "Sunset",
          usage: "VPS Node"
        },
        {
          name: "Sonata",
          usage: "Cloudsdale Radio Station 1"
        },
        {
          name: "SpitFire",
          usage: "Cloudsdale Radio Station 2"
        },
        {
          name: "Soarin",
          usage: "Cloudsdale Radio Station 3"
        },
        {
          name: "Derpy",
          usage: "Old Main server"
        },
        {
          name: "Octavia",
          usage: "Cloudsdale Radio Web Hosting"
        },
        {
          name: "Cadance",
          usage: "Cloudsdale Radio Relay"
        },
        {
          name: "Applejack",
          usage: "VPS Node"
        },
        {
          name: "AMS",
          usage: "Static WebHost"
        },
        {
          name: "Maki",
          usage: "NodeJS App Hosting"
        },
        {
          name: "Applejack",
          usage: "VPS Node"
        },
        {
          name: "Massami",
          usage: "Asthriona Personal Node"
        },
        {
          name: "Luna",
          usage: "FireWall"
        },
        {
          name: "Celestia",
          usage: "Network Security node"
        },
        {
          name: "RainbowDash",
          usage: "Game Server"
        },
        {
          name: " Cloudsdale",
          usage: "First Cloudsdale Radio Server"
        }
      ]
    };
  }
};
</script>
