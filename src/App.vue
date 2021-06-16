<template>
  <div id="app">
    <NavBar />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "@/views/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style src="./styles/css/App.css" lang="css">
.app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
}
</style>
