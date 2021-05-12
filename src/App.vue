<template>
  <div id="app">
    <div id="nav">
      <div class="nav-left-align">
        <router-link to="/">Your True Nature</router-link>
      </div>
      <div class="nav-right-align">
        <router-link to="/about">About</router-link> |
        <router-link to="/servives">Services</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  height: 48px;
  background-color: #e2deff;
  display: flex;
  padding: 30px;
  justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 0 10px;
}

#nav a.router-link-exact-active {
  /* color: #42b983; */
}
</style>
