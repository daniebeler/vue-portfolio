<template>
  <div class="bg-zinc-900">
    <Hero />

    <Projects />

    <CaseStudies />

    <!-- <Contact /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Contact from "../components/Contact.vue";
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import ImageGallery from "@/components/ImageGallery.vue";
import Socials from "@/components/Socials.vue";
import Projects from "@/components/Projects.vue";
import CaseStudies from "@/components/CaseStudies.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Contact,
    Hero,
    Intro,
    ImageGallery,
    Socials,
    Projects,
    CaseStudies
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

<style scoped>
</style>
