<template>
  <div class="profile">
    <Profile :user="user" />
  </div>
</template>

<script>
import Profile from "../../components/users/profileComp";
export default {
  name: "UserProfile",
  props: ["user"],
  data() {
    return {
      comp: "Profile"
    };
  },
  components: {
    Profile
    // Friends
  }
};
</script>

<style scoped>
li {
  list-style-type: none;
  display: inline;
  text-align: center;
  color: #007bff;
}
li:hover {
  border-bottom: 2px solid #007bff;
  cursor: pointer;
}
</style>
