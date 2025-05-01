<template>
  <div>
    <Intro />
    <Hero />

    <CaseStudies />

    <Contact />

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import CaseStudies from "@/components/CaseStudies.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Hero,
    Intro,
    CaseStudies,
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