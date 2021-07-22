<template>
  <div class="home">
    <body id="home-body">
      <h2 class="home-title">Welcome to Your True Nature</h2>
      Mindfulness Based Therapy
      <div class="name-text">
        Lana Marie Willow MA <br />
        Registered Clinical Counsellor
      </div>
    </body>
    <div class="image-radius">
      <img id="home-image-lana-marie" src="../assets/lana-marie.jpeg" />
    </div>
  </div>
</template>

<script> 

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped lang="css">
.home {
  position: relative;
  padding: 1em;
  font-size: 1.25vw;
  font-family: Avenir, Arial, Helvetica, sans-serif;
  height: 100vh;
  align-items: center;
}

.home::before {
  content: "";
  position: absolute;
  background-image: url(../assets/background-form.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.75;
}

.home-title {
  text-align: center;
}

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

p {
  display: block;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 0;
  margin-right: 0;
}

#home-body {
  margin-top: 10%;
  color: black;
  text-align: center;
  position: relative;
}

#home-image-lana-marie {
  margin-left: auto;
  margin-right: auto;
  width: 15%;
  height: 15%;
  border: 10px;
  border-radius: 10%;
  padding: 1%;
  display: block;
  position: relative;
}
</style>
