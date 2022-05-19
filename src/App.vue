<template>
  <HomeView></HomeView>
</template>

<script lang="ts">
import HomeView from "./views/HomeView.vue";
export default {
  name: "App",
  components: {
    HomeView,
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css");

#app {
  font-family: regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--my_dark);
}

:root {
  --my_dark: #1c1d20;
  --my_light: #fff;
  --my_primary: #dc3545;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  color: white;
  font-family: font, sans-serif;
}

h1 {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

.bolt {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

::selection {
  background: #ffb7b7;
}

@font-face {
  font-family: "bolt";
  src: url("@/assets/fonts/Poppins-Bold.ttf") format("truetype");
  font-display: swap;
}

@font-face {
  font-family: "regular";
  src: url("@/assets/fonts/Poppins-Regular.ttf") format("truetype");
  font-display: swap;
}

</style>
