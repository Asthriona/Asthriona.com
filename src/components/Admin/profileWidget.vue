<template>
  <div class="profileWidget d-flex justify-center">
    <div class="alert">
      <v-alert :color="alert.type" v-if="alert.message">
        {{ alert.message }}
      </v-alert>
    </div>
    <v-col cols="12">
      <div class="d-flex justify-center">
        <div class="moderation">
          <v-btn target="_blank" color="error" text disabled>
            <v-icon>mdi-account-key</v-icon>
            <span>lock Account</span>
          </v-btn>
          <v-dialog v-model="banDialog" persistent max-width="900">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="error"
                text
                v-if="!user.isBanned"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-account-off</v-icon>
                <span>Ban Account</span>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>Ban {{ user.username }}</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-alert
                        v-model="alert.show"
                        close-label="Okay!"
                        :color="alert.type"
                        dark
                        dismissible
                      >
                        {{ alert.text }}
                      </v-alert>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="banReason"
                        label="Ban Reason*"
                        :rules="[v => !!v || 'Ban Reason is required']"
                        :counter="2000"
                        autofocus
                        height="200"
                        min-width="100%"
                        max-width="500px"
                        require
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-date-picker v-model="banExpires"> </v-date-picker>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-action>
                <v-spacer></v-spacer>
                <v-btn color="error" text @click="banDialog = false"
                  >Cancel</v-btn
                >
                <v-btn
                  color="error"
                  text
                  @click="banAccount"
                  :disabled="!banReason"
                  >Ban {{ `${user.username}#${user.discriminator}` }}</v-btn
                >
              </v-card-action>
            </v-card>
          </v-dialog>
          <!-- Unban Account -->
          <v-dialog v-model="unBanDialog" persistent max-width="900">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                text
                v-if="user.isBanned"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-account-check-outline</v-icon>
                <span>Unban Account</span>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>unBan {{ user.username }}</v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <h2>
                        Are you sure you want to unban {{ user.username }}?
                      </h2>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-action>
                <v-spacer></v-spacer>
                <div class="alert">
                  <v-alert v-model="alert.show" :color="alert.type">
                    {{ alert.text }}
                  </v-alert>
                </div>
                <v-btn color="error" text @click="ubBanDialog = false"
                  >Cancel</v-btn
                >
                <v-btn color="success" text @click="unBanAccount"
                  >UnBan {{ `${user.username}#${user.discriminator}` }}</v-btn
                >
              </v-card-action>
            </v-card>
          </v-dialog>
          <!-- Delete Account -->
          <v-btn @click="deleteAccount" color="error" text disabled>
            <v-icon>mdi-account-remove</v-icon>
            <span>Delete Account</span>
          </v-btn>
        </div>
        <div class="verification-admin">
          <v-btn @click="verifyAccount" color="success" text>
            <v-icon>mdi-account-check-outline</v-icon>
            <span>Verify</span>
          </v-btn>
          <v-btn @click="unVerify" color="error" v-if="user.isVerified" text>
            <v-icon>mdi-shield-cancel-outline</v-icon>
            <span>Unverify</span>
          </v-btn>
          <v-btn
            @click="modAccount"
            color="success"
            v-if="!user.isMod"
            text
            disabled
          >
            <v-icon>mdi-shield-crown-outline</v-icon>
            <span>Grant Moderation</span>
          </v-btn>
          <v-btn @click="unModAccount" color="error" text v-if="user.isMod">
            <v-icon>mdi-shield-crown-outline</v-icon>
            <span>Revoke Mod status</span>
          </v-btn>
          <v-btn
            @click="adminAccount"
            color="success"
            text
            v-if="!user.isAdmin"
          >
            <v-icon>mdi-shield-crown</v-icon>
            <span>Grant Admin status</span>
          </v-btn>
          <v-btn
            @click="unAdminAccount"
            color="success"
            text
            v-if="user.isAdmin"
          >
            <v-icon>mdi-shield-crown</v-icon>
            <span>Revoke Admin status</span>
          </v-btn>
        </div>
      </div>
    </v-col>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "admin-profile-widget",
  props: ["user", "myself"],
  data() {
    return {
      banDialog: false,
      unBanDialog: false,
      banReason: "",
      banExpires: "",
      alert: {
        type: "",
        text: "",
        show: false
      }
    };
  },
  methods: {
    banAccount() {
      const banDate = new Date(this.banExpires).getTime();
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/ban`,
          {
            userId: this.user.id,
            reason: this.banReason,
            banDate: banDate
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isBanned = true;
          // eslint-disable-next-line vue/no-mutating-props
          this.user.selectedBadge = "mdi-shield-off-outline";
          this.alert.type = "success";
          this.alert.text = "Account banned";
          this.alert.show = true;
          setTimeout(() => {
            this.banDialog = false;
          }, 3000);
        })
        .catch(error => {
          console.log(error.response);
          this.alert.type = "error";
          this.alert.text = error.response.data.message;
          this.alert.show = true;
        });
    },
    unBanAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/unban`,
          {
            userId: this.user.userId
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isBanned = false;
          this.alert.type = "success";
          this.alert.text = "Account unbanned";
          this.unBanDialog = false;
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error unbanning account";
        });
    },
    deleteAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/delete`,
          {
            userId: this.user.id
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          this.$emit("delete", this.user.id);
          this.alert.type = "success";
          this.alert.text = "Account deleted";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error deleting account";
        });
    },
    verifyAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/verify`,
          {
            userId: this.user.userId
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isVerified = true;
          this.alert.type = "success";
          this.alert.text = "Account verified";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error verifying account";
        });
    },
    unVerify() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/unverify`,
          {
            userId: this.user.userId
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isVerified = false;
          this.alert.type = "success";
          this.alert.text = "Account unverified";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error unverifying account";
        });
    },
    modAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/mod/${this.user.id}`,
          {},
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isMod = true;
          this.alert.type = "success";
          this.alert.text = "Account modded";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error modding account";
        });
    },
    unModAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/unmod/${this.user.id}`,
          {},
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isMod = false;
          this.alert.type = "success";
          this.alert.text = "Account unmodded";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error unmodding account";
        });
    },
    adminAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/admin`,
          {
            userId: this.user.userId
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isAdmin = true;
          this.alert.type = "success";
          this.alert.text = "Account admined";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error admining account";
        });
    },
    unAdminAccount() {
      axios
        .post(
          `${process.env.VUE_APP_URI}admin/unadmin`,
          {
            userId: this.user.userId
          },
          {
            headers: { Authorization: localStorage.getItem("token") }
          }
        )
        .then(() => {
          // eslint-disable-next-line vue/no-mutating-props
          this.user.isAdmin = false;
          this.alert.type = "success";
          this.alert.text = "Account unadmined";
        })
        .catch(error => {
          console.log(error);
          this.alert.type = "error";
          this.alert.text = "Error unadmining account";
        });
    }
  }
};
</script>
