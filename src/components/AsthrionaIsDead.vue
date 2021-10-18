<template>
  <div>
    <div class="banner">
      <h2>{{ message }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsthrionaIsDead",
  data() {
    return {
      message:
        "Protocol Asthriona is Dead engaged. Vital function of this website are disabled."
    };
  },
  metaInfo: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ]
  },
  beforeMount() {}
};
</script>

<style scoped>
.banner {
  background-color: #f44336;
  color: #fff;
  padding: 5px;
  text-align: center;
}
</style>
