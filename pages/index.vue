<template>
  <div>
    <Hero />
    <About />

    <Projects />

    <Contact />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import About from "~/components/About.vue";
import Hero from "~/components/Hero.vue";
import Projects from "~/components/Projects.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
    About,
    Projects,
  },
});
</script>

<style scoped></style>