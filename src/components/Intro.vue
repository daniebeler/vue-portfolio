<template>
  <section class="section-intro">
    <div class="container">
      <div class="row" style="padding-bottom: 30px">
        <div class="col justify-content-center d-flex" style="padding-bottom: 30px">
          <Heading text="Introduction" />
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-10 col-lg-6 pe-lg-4 pb-5 pb-lg-5">
          <img class="intro-img" src="@/assets/img/daniel.webp" alt="" />
        </div>
        <div class="col-10 col-lg-6 ps-lg-4">
          <p class="intro-description">
            Hi! I'm Daniel Hiebeler, programmer with a passion in game
            development.
          </p>
          <p class="intro-description">Under Construction 🚧</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";

export default defineComponent({
  name: "Intro",
  components: { Heading }
},
)
</script>

<style scoped>
.section-intro {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #ecb847;
}

.intro-img {
  width: 100%;
  border-radius: 10px;
}

.intro-description {
  font-size: 1.5rem;
}
</style>
