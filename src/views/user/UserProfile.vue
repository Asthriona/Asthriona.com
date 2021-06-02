<template>
  <div class="profile">
    <div class="profile-link">
      <h4 class="text-center mt-4">
        <ul>
          <li @click="comp = 'Profile'">Profile</li>
          |
          <li @click="comp = 'Friends'">Friends</li>
        </ul>
      </h4>
    </div>
    <div class="profile-comp">
      <Profile v-if="comp == 'Profile'" />
      <Friends v-else-if="comp == 'Friends'" />
    </div>
  </div>
</template>

<script>
import Profile from "../../components/users/profileComp";
import Friends from "../../components/users/friendsComp";
export default {
  data() {
    return {
      comp: "Profile"
    };
  },
  components: {
    Profile,
    Friends
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
