/* eslint-disable vue/multi-word-component-names */ /* eslint-disable
vue/multi-word-component-names */
<template>
  <nav class="navbar fixed-top navbar-holder">
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
            <a href="#" data-text="home">home</a>
            <a href="#" data-text="about">about</a>
            <a href="#" data-text="services">services</a>
            <a href="#" data-text="blogs">blogs</a>
            <a href="#" data-text="contact">contact</a>
            <div class="background-image"></div>
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
  name: "Navbar",
  created: function () {
    console.log("meem");
  },
};
</script>

<style scoped>
* {
  /* font-family: "Poppins", sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
  text-decoration: none;
  text-transform: uppercase; */
  transition: all 0.2s linear;
}

body,
html {
  overflow-x: hidden;
}

#nav-toggler {
  -webkit-appearance: none;
  position: fixed;
  top: 20px;
  right: 30px;
  cursor: pointer;
  z-index: 1010;
  font-size: 3rem;
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
  z-index: 1000;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow: column;
  padding: 0 10%;
}

.navb a {
  font-size: 4em;
  color: transparent;
  -webkit-text-stroke: 0.5px rgba(255, 255, 255, 0.5);
  font-weight: bolder;
  position: relative;
  letter-spacing: 3px;
}

.navb a::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  color: rgba(255, 255, 255, 0.9);
  transition: 0.3s linear;
  clip-path: polygon(0 0, 0 0, 0 100%, 0% 100%);
}

.navb a:hover::before {
  clip-path: polygon(0 0, 100% 0, 99% 100%, 0 100%);
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: url(@/assets/images/nav-img-1.jpg) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.navb a:hover:nth-child(2) ~ .background-image {
  background: url(@/assets/images/nav-img-2.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.navb a:hover:nth-child(3) ~ .background-image {
  background: url(@/assets/images/nav-img-3.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.navb a:hover:nth-child(4) ~ .background-image {
  background: url(@/assets/images/nav-img-4.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

.navb a:hover:nth-child(5) ~ .background-image {
  background: url(@/assets/images/nav-img-5.jpg) no-repeat;
  background-size: cover;
  background-position: center;
}

@media (max-width: 768px) {
  .navb a {
    font-size: 3em;
  }
}

@media (max-width: 450px) {
  .navb a {
    font-size: 2em;
  }
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
  background-color: white;
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
