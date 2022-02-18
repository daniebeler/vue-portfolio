/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/multi-word-component-names */
<template>
  <nav class="navbar fixed-top navbar-holder">
    <div id="myNav" class="overlay">
      <div class="overlay-content">
        <div>
          <a class="effect-box" href="https://daniebeler.com">Home</a>
        </div>
        <a class="effect-box" href="https://daniebeler.com/about">About</a>
        <a class="effect-box" href="https://daniebeler.com/contact">Contact</a>
        <a class="effect-box" href="https://daniebeler.com/games">Games</a>
        <a class="effect-box" href="https://daniebeler.com/webdesign">Webdesign</a>
        <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
      </div>
    </div>

    <div class="headerz">
      <div class="progress-container">
        <div class="progressbar" id="myBar"></div>
      </div>
    </div>

    <div class="container" style="z-index: 500">
      <div class="row d-flex flex-grow-1 justify-content-between">
        <div class="col"></div>

        <div class="col d-flex justify-content-center">
          <a href="https://daniebeler.com" class="navbar-brand icon-header"
            >Daniel Hiebeler</a
          >
        </div>

        <div class="col d-flex justify-content-end">
          <button
            style="z-index: 1030; outline: none"
            onclick="toggleNav()"
            class="nav-toggler"
            type="button"
          >
            <div class="animated-icon1">
              <span></span><span></span><span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <!-- <h1>meem</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar'
}
</script>

<style scoped>
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
</style>
