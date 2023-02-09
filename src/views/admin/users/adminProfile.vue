<template>
  <div class="admin-user-pannel">
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-title> User Information </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field
                  v-model="user.id"
                  label="User ID"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="user.username"
                  label="Username"
                  outlined
                  dense
                  append-icon="mdi-pencil"
                  @click:append="editUsername()"
                ></v-text-field>
                <v-text-field
                  v-model="user.displayName"
                  label="Display Name"
                  outlined
                  dense
                  append-icon="mdi-pencil"
                  @click:append="editDisplayName()"
                ></v-text-field>
                <v-text-field
                  v-model="user.discriminator"
                  label="Discriminator"
                  outlined
                  dense
                  :append-icon="discrimLoading ? 'mdi-loading' : 'mdi-pencil'"
                  @click:append="editDiscriminator()"
                ></v-text-field>
                <v-text-field
                  v-model="user.email"
                  label="Email"
                  :prepend-inner-icon="
                    user.emailVerified ? 'mdi-check-circle' : 'mdi-alert-circle'
                  "
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-btn color="error" outlined>Unverify</v-btn>
                <v-btn class="ml-2" outlined color="success">Verify</v-btn>
                <v-btn class="ml-2" color="primary" outlined
                  >Send verification</v-btn
                >
                <v-text-field
                  class="mt-4"
                  v-model="roles"
                  label="Role"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="user.isVerified"
                  label="Is Verified"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="user.createdAt"
                  label="Created At"
                  outlined
                  dense
                  readonly
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card>
            <v-card-title>Ban and shit</v-card-title>
            <v-card-text>
              <span v-if="!banHistory">
                User Never been banned.
              </span>
              <span v-for="ban in banHistory" :key="ban.date" v-else>
                <v-text-field
                  v-model="ban.date"
                  label="Date"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="ban.reason"
                  label="Reason"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="ban.staffId"
                  label="Admin"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="ban.expires"
                  label="Duration"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <v-text-field
                  v-model="ban.expired"
                  label="Unban Date"
                  outlined
                  dense
                  readonly
                ></v-text-field>
                <br />
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <div class="display-1">User actions (WIP)</div>
        </v-col>
        <v-card>
          <v-card-title>Sanctions</v-card-title>
          <v-card-text>
            <v-btn color="error" outlined>Warn</v-btn>
            <v-btn class="ml-2" outlined color="success">Ban</v-btn>
            <v-btn class="ml-2" color="primary" outlined>Unban</v-btn>
            <v-btn outlined class="ml-2">Disable Account</v-btn>
            <v-btn outlined class="ml-2">Enable Account</v-btn>
          </v-card-text>
        </v-card>
        <v-card class="ml-4">
          <v-card-title>Verification</v-card-title>
          <v-card-text>
            <v-btn color="error" @click="unVerifyAccount()" outlined
              >Unverify</v-btn
            >
            <v-btn
              class="ml-2"
              @click="VerifyAccount()"
              outlined
              color="success"
              >Verify</v-btn
            >
          </v-card-text>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "adminUserProfile",
  data() {
    return {
      me: {},
      user: {},
      roles: "",
      isbanned: false,
      discrimLoading: false
    };
  },
  created() {
    this.getUser();
    this.getMeUser();
    if (this.me == null || this.me.isAdmin == false) {
      this.$router.push({ name: "home" });
    }
  },
  methods: {
    getUser() {
      if (this.user) this.user = {};
      axios
        .get(`${process.env.VUE_APP_URI}admin/user/${this.$route.params.id}`, {
          headers: { Authorization: localStorage.getItem("token") }
        })
        .then(res => {
          this.user = res.data.user;
          const user = res.data.user;
          if (user.isAdmin === true) {
            this.roles = "Admin";
          } else if (user.isMod === true) {
            this.roles = "Moderator";
          } else {
            this.roles = "User";
          }
          if (user.isBanned === true) {
            this.isbanned = true;
          }
          if (!user.banReason) {
            this.user.banReason = "Not Banned";
            this.user.banExpiry = "Not Banned";
          }
        });
    },
    getMeUser() {
      axios
        .get(`${process.env.VUE_APP_URI}login/whoami`, {
          headers: { Authorization: localStorage.getItem("token") }
        })
        .then(res => {
          this.me = res.data.user;
        });
    },
    editDisplayName() {
      axios
        .patch(
          `${process.env.VUE_APP_URI}admin/user/${this.$route.params.id}`,
          {
            displayName: this.user.displayName
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(res => {
          console.log(res.data);
          this.getUser();
        });
    },
    editUsername() {
      axios
        .patch(
          `${process.env.VUE_APP_URI}admin/user/${this.$route.params.id}`,
          {
            username: this.user.username
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(res => {
          console.log(res.data);
          this.getUser();
        });
    },
    editDiscriminator() {
      this.discrimLoading = true;
      axios
        .patch(
          `${process.env.VUE_APP_URI}admin/user/${this.$route.params.id}`,
          {
            discriminator: this.user.discriminator
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(res => {
          console.log(res.data);
          setTimeout(() => {
            this.getUser();
            this.discrimLoading = false;
          }, 1000);
        });
    },
    VerifyAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/verify`,
          {
            id: this.user.id
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(res => {
          console.log(res.data);
          this.getUser();
        });
    },
    unVerifyAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/unverify`,
          {
            id: this.user.id
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(res => {
          console.log(res.data);
          this.getUser();
        })
        .catch(err => {
          console.log(err.response.data);
        });
    }
  }
};
</script>

<style>
.admin-user-pannel {
  margin-top: 20px;
}
</style>
