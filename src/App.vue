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

<style lang="css">
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */
  font-size: 100%;
}

.body {
  display: block;
  padding-top: 65px;
  /* move page down height of NavBar */
}

#image-radius {
  border-radius: 10px;
}

/* website styles */
h1 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h2 {
  display: block;
  font-size: 1.5em;
  margin-top: 0.83em;
  margin-bottom: 0.83em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

p {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}
</style>
