<template>
  <section class="p-5 flex items-center flex-col">
    <div class="container">

      <h2 class="text-3xl font-bold pb-12 flex items-center">
        <span class="text-yellow-500 mr-2">01.</span>&nbsp;About Me
        <div class="h-px bg-zinc-600 flex-grow ml-4"></div>
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="grid grid-cols-2 gap-4">

          <div class="aspect-square">
            <img class="rounded-2xl lg:rounded-3xl h-full aspect-square" src="/img/profilbild.webp" alt="Icon" />
          </div>

          <div class="grid grid-cols-2 gap-4">
            <a href="https://www.linkedin.com/in/danielhiebeler" target="_blank" rel="noopener noreferrer"
              class="bg-[#2867B2] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
              <img class="h-2/4" src="/img/logo-linkedin.svg" alt="Icon" />
            </a>

            <a href="https://techhub.social/@daniebeler" target="_blank" rel="me noopener noreferrer"
              class="bg-[#6364FF] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
              <img class="h-2/4" src="/img/logo-mastodon.svg" alt="Icon" />
            </a>

            <a href="https://www.instagram.com/daniebeler/" target="_blank" rel="noopener noreferrer"
              class="bg-linear-to-tr from-[#f40000] to-[#b800b3] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
              <img class="h-2/4" src="/img/logo-instagram.svg" alt="Icon" />
            </a>

            <a href="https://www.github.com/daniebeler/" target="_blank" rel="noopener noreferrer"
              class="bg-[#fff] rounded-2xl lg:rounded-3xl aspect-square flex items-center justify-center transition-transform duration-200 hover:scale-105 hover:cursor-pointer">
              <img class="h-2/4" src="/img/logo-github-dark.svg" alt="Icon" />
            </a>
          </div>
        </div>

        <div class="bg-red-300">

        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "./Hero.vue";
import GameImage from "./GameImage.vue";

export default defineComponent({
  name: "About",
  components: { Intro, GameImage }
},
)
</script>
