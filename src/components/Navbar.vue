/* eslint-disable vue/multi-word-component-names */
/* eslint-disable vue/multi-word-component-names */
<template>
  <nav class="navbar fixed-top navbar-holder">

    <div class="container" style="z-index: 500">
      <div class="row d-flex flex-grow-1">

        <div class="col d-flex">
          <a href="https://daniebeler.com" class="navbar-brand icon-header brand-text">Daniel Hiebeler</a>
        </div>

        <div class="col d-flex justify-content-end align-items-end">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About me</router-link>
          <router-link to="/games">Games</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>
      </div>
    </div>
  </nav>
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

.brand-text {
  font-family: bolt, Avenir, Helvetica, Arial, sans-serif;
}

a {
  color: #222A2F;
  text-decoration: none;
  padding-left: 30px;
}

a:hover {
  color: #222A2F;
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
  /* margin-top: 17px; */
  margin-bottom: 15px;
  transition: 1s;
  background-color: white;
  color: #222A2F;
}
</style>
