<template>
  <section class="p-5 flex items-center flex-col">
    <div class="container">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">

        <Intro />

        <div class="grid grid-cols-2 gap-4">

          <div>
            <img class="rounded-2xl lg:rounded-3xl h-full aspect-square" src="/img/profilbild.webp" alt="Icon" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <a href="https://linkedin.com/in/daniel-hiebeler-146046172" target="_blank" rel="noopener noreferrer"
              class="bg-[#2867B2] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <img class="h-2/4" src="/img/logo-linkedin.svg" alt="Icon" />
            </a>

            <a href="https://techhub.social/@daniebeler" target="_blank" rel="me noopener noreferrer"
              class="bg-[#6364FF] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <img class="h-2/4" src="/img/logo-mastodon.svg" alt="Icon" />
            </a>

            <a href="https://www.instagram.com/daniebeler/" target="_blank" rel="noopener noreferrer"
              class="bg-linear-to-tr from-[#f40000] to-[#b800b3] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <img class="h-2/4" src="/img/logo-instagram.svg" alt="Icon" />
            </a>

            <a href="https://www.github.com/daniebeler/" target="_blank" rel="noopener noreferrer"
              class="bg-[#fff] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105">
              <img class="h-2/4" src="/img/logo-github-dark.svg" alt="Icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "./Intro.vue";
import GameImage from "./GameImage.vue";

export default defineComponent({
  name: "Hero",
  components: { Intro, GameImage }
},
)
</script>
