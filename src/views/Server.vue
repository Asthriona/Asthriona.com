<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12" class="text-center">
          <h3>Servers</h3>
          <h5>List of my actual and owned servers</h5>
          <h5>
            <span style="color:greenyellow;">◉</span> Online Servers ({{
              OnlineServers.length
            }}):
          </h5>
        </b-col>
        <b-col v-for="server in OnlineServers" :key="server.name">
          <b-card-group>
            <b-card
              bg-variant="dark"
              text-variant="white"
              :title="server.name"
              tag="article"
              style="
                max-width: 20rem;
                min-width: 15rem;
                min-height: 130px;
                text-align: center;
              "
              class="mb-2 col-5"
            >
              <b-card-text>
                {{ server.usage }} <br />
                Location: <i>{{ server.location || "NA" }}</i>
              </b-card-text>
            </b-card>
          </b-card-group>
        </b-col>
        <ul>
          <li v-for="info in infos" :key="info.id" class="muted">
            {{ info.data }}
          </li>
        </ul>
        <hr />
        <b-col cols="12" class="spacer" style="margin-top: 50px"></b-col>
        <b-col cols="12" class="text-center">
          <h5>Yukiko Clusters:</h5>
        </b-col>
        <b-col cols="12">
          <b-card-group>
            <b-card
              v-for="cluster in clusters"
              :key="cluster.name"
              bg-variant="dark"
              text-variant="white"
              :title="cluster.name"
              tag="article"
              style="max-width: 20rem;min-width: 15rem;min-height: 130px;text-align: center;"
              class="mb-2 col-6"
            >
              <b-card-text>
                <li
                  style="list-style-type: none"
                  v-for="server in cluster.server"
                  :key="server"
                >
                  {{ server }}
                </li>
                <hr />
                Location: {{ cluster.location }} <br />
                Usage: {{ cluster.usage }}
              </b-card-text>
            </b-card>
          </b-card-group>
          <i
            >Info: The location indicate the Physical location of all the
            servers in a cluster, and DC indicate what datacenter each server
            within a cluster is located. Eg: OSK3</i
          >
          <br />
          <i
            >Info 2: All server lister above are separate than my own
            servers.</i
          >
        </b-col>
        <br />
        <b-col cols="12" class="spacer" style="margin-top: 50px"></b-col>
        <b-col cols="12">
          <div class="text-center">
            <h5>
              <span style="color:red;">◉</span> Offline/Dead Servers ({{
                OfflineServers.length
              }})
            </h5>
          </div>
        </b-col>
        <b-col v-for="server in OfflineServers" :key="server.name">
          <b-card-group>
            <b-card
              bg-variant="dark"
              text-variant="white"
              :title="server.name"
              tag="article"
              style="max-width: 20rem;min-width: 15rem;min-height: 130px;text-align: center;"
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
  name: "ServerList",
  data() {
    return {
      clusters: [
        {
          name: "Fallen",
          server: ["Shiro", "Suzune", "Makoto", "Sadayo", "Ishii"],
          location: "Glasgow DC1",
          usage: "Web Cluster"
        },
        {
          name: "fantasy",
          server: ["Mitsuru", "Orpheus", "Sumire", "Chito", "Yuuri"],
          location: "Tokyo DC1",
          usage: "Web Cluster"
        },
        {
          name: "Force",
          server: ["Tali", "Rukia", "Winry", "Yoruichi", "Tomori"],
          location: "New York DC3",
          usage: "Web Cluster"
        },
        {
          name: "Hope",
          server: ["Cadenza", "Aqua", "Kurisu", "Megumin", "Enomoto"],
          location: "New York DC3",
          usage: "Web Cluster"
        },
        {
          name: "Myth",
          server: ["Ina", "Calliope", "Amelia", "Gura", "Kiara"],
          location: "Tokyo 1",
          usage: "Bot Cluster"
        },
        {
          name: "Council",
          server: ["Nanashi", "Ouro", "Ceres", "Hakos", "Tsukumo"],
          location: "Tokyo 2",
          usage: "Bot Cluster"
        }
      ],
      OnlineServers: [
        {
          name: "Yukiko-01",
          usage: "Yukiko Alternate bots",
          location: "Paris DC1"
        },
        {
          name: "Asthriona-mail",
          usage: "Main Mail server",
          location: "Paris 1"
        },
        {
          name: "Stardust-01",
          usage: "Nishikino Network's Gateway",
          location: "Paris DC1"
        },
        {
          name: "Stardust-02",
          usage: "Yukiko Alternate bots",
          location: "Paris DC1"
        },
        {
          name: "Ina",
          usage: "Main Yukiko server",
          location: "Paris DC1"
        },
        {
          name: "Lyra",
          usage: "Speedtest.net host",
          location: "Paris DC2"
        },
        {
          name: "Cadenza",
          usage: "DNS Server",
          location: "Tokyo 1"
        },
        {
          name: "Maki",
          usage: "Internal tools",
          location: "Tokyo 1"
        },
        {
          name: "Kurisu",
          usage: "Internal tools",
          location: "Tokyo 1"
        },
        {
          name: "Afterlife-SGP1",
          usage: "Yukiko Internal tools",
          location: "Tokyo 3"
        },
        {
          name: "Yuno",
          usage: "Yukiko Bot Testing",
          location: "New York DC1"
        },
        {
          name: "Yuki",
          usage: "Yukiko Web Testing",
          location: "New York DC1"
        },
        {
          name: "Maki-osk3",
          usage: "Internal Tools",
          location: "Tokyo 2"
        },
        {
          name: "Kurisu-osk3",
          usage: "Gateway Monitoring",
          location: "Tokyo 2"
        },
        {
          name: "Massami",
          usage: "Bots Monitoring",
          location: "Tokyo 2"
        },
        {
          name: "Nagi",
          usage: "app-Firewall",
          location: "Tokyo 2"
        },
        {
          name: "Boogiepop",
          usage: "Pre-Production.",
          location: "Tokyo 2"
        },
        {
          name: "Celty",
          usage: "Pre-Production.",
          location: "Tokyo 2"
        },
        {
          name: "Marie",
          usage: "Pre-Production.",
          location: "Tokyo 2"
        },
        {
          name: "Fubuki",
          usage: "Labs.",
          location: "Tokyo 3"
        },
        {
          name: "Hololive",
          usage: "Labs.",
          location: "Tokyo 3"
        },
        {
          name: "Vshojo",
          usage: "Labs.",
          location: "Tokyo 3"
        },
        {
          name: "Nijisansji",
          usage: "Labs.",
          location: "Tokyo 3"
        },
        {
          name: "Ochaco",
          usage: "Asthriona Gateway.",
          location: "New York DC1"
        },
        {
          name: "Mumei-sgp1",
          usage: "Web Hosting.",
          location: "Singapore 1"
        },
        {
          name: "Seele",
          usage: "Remote Desktop.",
          location: "Paris-OC1"
        },
        {
          name: "Marine",
          usage: "Web Hosting.",
          location: "Singapore 1"
        },
        {
          name: "Kronii",
          usage: "Game Host.",
          location: "Tokyo 1"
        },
        {
          name: "Okayu",
          usage: "Internal Tools.",
          location: "Tokyo 1"
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
          name: "Applejack-02",
          usage: "VPS Node"
        },
        {
          name: "AMS",
          usage: "Static WebHost"
        },
        {
          name: "Maki-old",
          usage: "NodeJS App Hosting"
        },
        {
          name: "Applejack-01",
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
        },
        {
          name: "ZeroTwo",
          usage: "Main Yukiko server (Hardware Failure)",
          location: "Paris DC1"
        },
        {
          name: "AfterLife",
          usage: "DNS Server (Hardware Failure)",
          location: "Tokyo 1"
        }
      ],
      infos: [
        {
          id: 1,
          data:
            "All servers with a name ending with -osk were moved from Osaka to Tokyo."
        },
        {
          id: 2,
          data:
            "Servers labeled 'testing' or 'labs' are labs cluster. (Mostly running Debian and Kubernetes)"
        },
        {
          id: 3,
          data:
            "All Servers are running in different datacenters for network stability and redondency reasons."
        }
      ]
    };
  },
  metaInfo: {
    meta: [
      // twitter card
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Asthriona" },
      { name: "twitter:title", content: "Asthriona" },
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
.muted {
  color: #999 !important;
  font-size: smaller !important;
}
</style>
