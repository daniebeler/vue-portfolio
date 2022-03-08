/* eslint-disable vue/multi-word-component-names */ /* eslint-disable
vue/multi-word-component-names */
<template>
  <nav class="navbar fixed-top navbar-holder" style="background: white">
    <div class="container" style="z-index: 500">
      <div class="row d-flex flex-grow-1">
        <div class="col-auto d-flex">
          <router-link to="/" class="navbar-brand icon-header brand-text"
            >Daniel Hiebeler</router-link
          >
        </div>

        <div
          class="col justify-content-end align-items-center links d-none d-sm-flex"
        >
          <router-link to="/about" class="bolt">About me</router-link>
          <router-link to="/contact" class="bolt">Contact</router-link>
        </div>

        <div
          class="col justify-content-end align-items-center links d-flex d-sm-none"
        >
          <input type="checkbox" name="" id="nav-toggler" class="fas fa-bars" />
          <nav class="navb">
            <router-link to="/about" class="bolt">About me</router-link>
            <router-link to="/contact" class="bolt">Contact</router-link>
          </nav>
        </div>
      </div>
    </div>
  </nav>

  <!-- <input type="checkbox" name="" id="nav-toggler" class="fas fa-bars"> -->
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar"
};
</script>

<style scoped>
* {
  transition: all 0.2s linear;
}

body,
html {
  overflow-x: hidden;
}

#nav-toggler {
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 1010;
  font-size: 2rem;
}

#nav-toggler:checked {
  transform: rotate(180deg);
}

#nav-toggler:checked::before {
  content: "\f00d";
  color: #fff;
  transition: 0.2s linear 0.2s;
}

#nav-toggler:checked ~ .navb {
  left: 0;
}

.navb {
  position: fixed;
  top: 0;
  left: -110%;
  height: 100%;
  width: 100%;
  background-color: #ff7128;
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  padding: 0 10%;
}

.navb a {
  font-size: 3em;
}

.brand-text {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

a {
  color: var(--my_dark);
  text-decoration: none;
  padding-left: 10px;
  transition: 0.3s ease-in-out;
}

a:hover {
  color: var(--my_dark);
}

a::before,
a::after {
  opacity: 0;
  transition: 0.3s ease-in-out;
}

a:hover::after,
a:hover::before {
  opacity: 1;
}

.links .router-link-active {
  text-decoration: none;
  color: #222a2f;
}

.links .router-link-active::before,
a::before {
  content: "</";
  color: inherit;
}

.links .router-link-active::after,
a::after {
  white-space: pre-wrap;
  content: "> ";
}

.links .router-link-active,
.links .router-link-active::after,
.links .router-link-active::before {
  color: #dc3545;
  opacity: 1;
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

.navb-wrapper {
  z-index: 99;
  position: fixed;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.navb-holder {
  padding-top: 10px;
  padding-bottom: 10px;
  transition: 1s;
  color: #222a2f;
}

body.offcanvas-active {
  overflow: hidden;
}
.offcanvas-header {
  display: none;
}

@media (max-width: 992px) {
  .offcanvas-header {
    display: block;
  }
  .navb-collapse {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: black;
    transition: visibility 0.2s ease-in-out, transform 0.2s ease-in-out;
  }
  .navb-collapse.show {
    visibility: visible;
    transform: translateX(-100%);
  }
}
</style>
