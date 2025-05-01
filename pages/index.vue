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
  methods: {
    openEmail() {
      window.open("mailto:hiebeler.daniel@gmail.com");
    },
    openUrl(url: string) {
      window.open(url, "_blank");
    },
  },
});
</script>

<style scoped></style>