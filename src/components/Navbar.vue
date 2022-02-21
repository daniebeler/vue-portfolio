/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/multi-word-component-names */
<template>
  <nav class="navbar fixed-top navbar-holder">
    <div class="container" style="z-index: 500">
      <div class="row d-flex flex-grow-1">
        <div class="col-auto d-flex">
          <router-link to="/" class="navbar-brand icon-header brand-text">Daniel Hiebeler</router-link>
        </div>

        <div class="col justify-content-end align-items-center links d-none d-sm-flex">
          <router-link to="/about" class="bolt">About me</router-link>
          <router-link to="/contact" class="bolt">Contact</router-link>
        </div>

        <div class="col justify-content-end align-items-center links d-flex d-sm-none">
          <router-link to="/about" class="bolt">me</router-link>
        </div>
      </div>
    </div>
  </nav>

</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  created: function() {
    console.log('meem')
  }
}
</script>

<style scoped>

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
  color: #222A2F;
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
  color: #DC3545;
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

.navbar-wrapper {
  z-index: 99;
  position: fixed;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.navbar-holder {
  padding-top: 10px;
  padding-bottom: 10px;
  transition: 1s;
  background-color: white;
  color: #222A2F;
}


body.offcanvas-active{
	overflow:hidden;
}
.offcanvas-header{ display:none; }

@media (max-width: 992px) {
  .offcanvas-header{ display:block; }
  .navbar-collapse {
    position: fixed;
    top:0;
    bottom: 0;
    left: 100%;
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    overflow-y: auto;
    visibility: hidden;
    background-color: black;
    transition: visibility .2s ease-in-out, transform .2s ease-in-out;
  }
  .navbar-collapse.show {
    visibility: visible;
    transform: translateX(-100%);
  }
}
</style>
