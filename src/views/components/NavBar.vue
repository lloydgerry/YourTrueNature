<template>
  <div id="nav" class="nav-bar">
    <div id="nav-left">
      <router-link to="/">
        <h1 class="nav-item-white">Your True Nature</h1>
      </router-link>
    </div>
    <div id="nav-right">
      <ul class="nav-item-white">
        <router-link to="/about">About</router-link>
        |
        <router-link to="/services">Services</router-link>
        |
        <router-link to="/contact">Contact</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isOpen: false,
      active: false,
      navList: [{ url: "#", name: "Welcome", children: [] }],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="../../styles/css/NavBar.css" lang="css"></style>
