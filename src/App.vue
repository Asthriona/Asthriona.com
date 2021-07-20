<template>
  <div id="app">
    <Nishikino />
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader";
import TheFooter from "./components/TheFooter";
import Nishikino from "./components/Nishikino";

export default {
  components: {
    TheHeader,
    TheFooter,
    Nishikino
  }
};
</script>

<style>
html body {
  background-color: #212226;
  overflow-x: hidden;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #cccccc;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
.SiteTitle {
  margin-top: 5%;
  margin-bottom: 5%;
}
.SiteTitle .MainLine {
  font-family: Asthriona;
  font-size: 4.5rem;
}
</style>
