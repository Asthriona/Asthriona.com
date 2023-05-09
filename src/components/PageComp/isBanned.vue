<template>
  <div class="banned">
    <h3>Your account "{{ user.username }}" has been banned</h3>
    <div class="banInfo">
      <span>Reason: {{ user.banReason }}</span> <br />
      <span
        >Expires:
        {{
          user.banHistory[user.banHistory.length - 1].expires
            | moment("MM/DD/YYYY hh:mm a")
        }}</span
      >
    </div>
    <!-- for more information please visit <router-link :to="{ name: 'Sanction' }">Sanction page</router-link></p> -->
  </div>
</template>

<script>
export default {
  name: "Banned-comp",
  props: ["user"]
};
</script>

<style scoped>
.banned {
  background-color: #f00;
  position: relative;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 6rem;
  text-align: center;
  color: #fff;
  line-height: 100%;
}
</style>
