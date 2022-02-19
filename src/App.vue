<template>
  <Navbar/>
  <router-view/>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}

</script>

<style>

@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css');

#app {
  font-family: regular, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
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
  -webkit-user-select: none;
}

body * {
  z-index: 3;
}

h1 {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

::-webkit-scrollbar {
  display: none;
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

.header {
  position: fixed;
  z-index: 10;
  height: 50px;
  background-color: black;
}

.not-draggable {
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

.active-nav-item {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: #ac7ffb;
}

.active-nav-item:hover {
  text-decoration: none;
  color: var(--my_dark);
}

.active-nav-item a {
  color: #ac7ffb;
}

.active-nav-item a:hover {
  text-decoration: none;
  color: var(--my_dark);
}

.nav-item a {
  color: var(--my_dark);
}

.nav-item a:hover {
  text-decoration: none;
  color: #ac7ffb;
}

.nav-item {
  padding: 10px;
  padding-left: 20px;
  padding-right: 20px;
  color: #ac7ffb;
}

.nav-item:hover {
  text-decoration: none;
  color: var(--my_dark);
}

.header-area.nav-item {
  color: var(--my_dark);
}

.header-area.down.nav-item {
  color: rgba(48, 107, 242, 1);
}

.header-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: whitesmoke;
  color: var(--my_dark);
  z-index: 10;
}

.header-bar {
  position: fixed;
  height: 50px;
}

.header-size {
  font-size: 3rem;
  text-align: center;
}

@media (min-width: 768px) {
  .header-size {
    font-size: 4.5rem;
    text-align: center;
  }
}

.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 102;
  top: 0;
  left: 0;
  background-color: #ff7128;
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #fff;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

.animated-icon1,
.animated-icon2,
.animated-icon3 {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

.animated-icon1 span,
.animated-icon2 span,
.animated-icon3 span {
  display: block;
  position: absolute;
  height: 4px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

.animated-icon1 span {
  background: #fff;
}

.animated-icon1 span:nth-child(1) {
  top: 0px;
}

.animated-icon1 span:nth-child(2) {
  top: 10px;
}

.animated-icon1 span:nth-child(3) {
  top: 20px;
}

.animated-icon1.open span:nth-child(1) {
  top: 11px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
  background: #fff;
}

.animated-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
  background: #fff;
}

.animated-icon1.open span:nth-child(3) {
  top: 11px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
  background: #fff;
}

.navbar-wrapper {
  z-index: 99;
  position: fixed;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 100%;
  transition: 1s;
}

.navbar-holder {
  /* margin-top: 17px; */
  margin-bottom: 15px;
  transition: 1s;
}

.scrolled-navbar {
  background-color: RGBA(255, 255, 255, 1);
  transition: 0.5s;
}

.navbar-icon {
  height: 75px;
  z-index: 0;
  border-radius: 50%;
}

.effect-box::before {
  content: "</";
  color: inherit;
  opacity: 0;
  transition: 0.5s;
}

.effect-box::after {
  white-space: pre-wrap;
  content: "> ";
  opacity: 0;
  transition: 0.5s;
}

.effect-box:hover::after,
.effect-box:hover::before {
  opacity: 1;
  transition: 0.5s;
}

/*----------------------------------------*/
/*  Header
/*----------------------------------------*/

.headerz {
  position: fixed;
  top: 0;
  z-index: 101;
  width: 100%;
}

.progress-container {
  width: 100%;
  height: 8px;
}

.progressbar {
  height: 4px;
  background-color: var(--my_dark);
  border-radius: 2px;
  width: 0%;
}

@keyframes change {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

.ml6 {
  position: relative;
  font-weight: 900;
  font-size: 3.3em;
}

.ml6 .text-wrapper {
  position: relative;
  display: inline-block;
  padding-top: 0.2em;
  padding-right: 0.05em;
  padding-bottom: 0.1em;
  overflow: hidden;
}

.ml6 .letter {
  display: inline-block;
  line-height: 1em;
}

.red {
  color: #eb3349;
  background-color: #eb3349;
}

.ball {
  position: fixed;
  border-radius: 100%;
  opacity: 0.7;
  z-index: -1;
}

.page_footer {
  min-height: 100vh;
}

.icon-header {
  text-decoration: none;
  color: #222A2F;
  transition: 0.5s ease-in-out;
}

.icon-header:hover {
  text-decoration: none;
  color: #222A2F;
}

.icon-header::before {
  content: "</";
  color: inherit;
  opacity: 0;
  transition: 0.5s;
}

.icon-header::after {
  white-space: pre-wrap;
  content: "> ";
  opacity: 0;
  transition: 0.5s;
}

.icon-header:hover::after,
.icon-header:hover::before {
  opacity: 1;
  transition: 0.5s;
}

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
