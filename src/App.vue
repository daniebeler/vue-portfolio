<template>
  <Navbar />

  <router-view v-slot="{ Component, route }">
  <transition name="fade" mode="out-in">
    <div :key="route.name">
      <component :is="Component"></component>
    </div>
  </transition>
</router-view>

  <Footer />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
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
  --my_dark: #23272d;
  --my_light: #fff;
  --my_dark_grey: #4b597b;
  --my_blue: #01afe6;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: var(--blue);
  color: white;
  font-family: font, sans-serif;
}

body * {
  z-index: 3;
}

h1 {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

.bolt {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

::-webkit-scrollbar {
  display: none;
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



.fade-enter-active, .fade-leave-active {
  transition: opacity .4s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
} */


/*----------------------------
   Buttons
  ------------------------------ */

.btn_general {
  color: var(--my_light);
  font-size: 16px;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  padding: 10px 15px;
  min-width: 180px;
  text-decoration: none !important;
  outline: none !important;
  position: relative;
  z-index: 9;
  border-radius: 6px;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.btn_general:before {
  z-index: -1;
  border-radius: 6px;
}

.btn_dark:before {
  background-color: var(--my_dark);
}

.btn_blue:before {
  background-color: var(--my_blue);
}

.btn_light:before {
  opacity: 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
  background-color: var(--my_light);
}

.btn_general:after,
.btn_general:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.btn_dark::after {
  opacity: 0;
  border: 2px solid var(--my_dark);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  border-radius: 6px;
}

.btn_blue::after {
  opacity: 0;
  border: 2px solid var(--my_blue);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  border-radius: 6px;
}

.btn_light:after {
  opacity: 1;
  border: 2px solid var(--my_light);
  -webkit-transform: scale(1);
  transform: scale(1);
  border-radius: 6px;
}

.btn_general:hover {
  color: var(--my_dark);
}

.btn_blue:hover {
  color: var(--my_blue);
}

.btn_light:hover:before {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
  background-color: var(--my_light);
}

.btn_light:hover:after {
  opacity: 0;
  border: 2px solid var(--my_light);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  border-radius: 6px;
}

.btn_dark:hover::before,
.btn_blue:hover::before {
  opacity: 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
.btn_dark:hover::after,
.btn_blue:hover::after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.nav-toggler {
  background: none;
  border: none;
}

*:focus {
  outline: 0 !important;
}
</style>
