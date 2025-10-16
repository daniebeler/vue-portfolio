<template>
  <section class="p-5 flex items-center flex-col">
    <div class="container">

      <h2 class="text-3xl font-bold pb-12 flex items-center">
        <span class="text-yellow-500 mr-2">01.</span>About Me
        <div class="h-px bg-zinc-600 flex-grow ml-4"></div>
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

        <div class="relative overflow-hidden rounded-xl border border-[#2a2a4a]">
          <div class="absolute inset-0 bg-gradient-to-br from-[#0f0921] to-[#0a192f] z-0"></div>

          <div class="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#4d5bce]/20 blur-3xl z-0"></div>
          <div class="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-[#9d4edd]/10 blur-3xl z-0"></div>

          <div class="relative z-10 h-full flex flex-col p-6">
            <div class="flex items-center gap-3 mb-4">
              <img src="/img/ghostbyte_logo_white.svg" height="42px" width="42px">
              <h3 class="text-xl font-bold tracking-tight text-white">Ghostbyte</h3>
            </div>

            <div class="flex flex-col justify-center flex-grow">
              <p class="font-bold tracking-tighter text-3xl lg:text-2xl xl:text-4xl mb-3">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-white to-cyan-300">
                  Turning Ideas Into <span class="hidden lg:inline-block xl:hidden">Digital Reality</span>
                </span>
                <br />
                <span class="bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-cyan-400 lg:hidden xl:inline-block">
                  Digital Reality
                </span>
              </p>
              <p class="text-gray-300 mb-4 max-w-lg lg:text-sm xl:text-md">
                I'm the co-founder of Ghostbyte, a software development studio I started with my brother to bring ideas
                to life through custom software and exceptional digital experiences.
              </p>
              <div class="flex">
                <a href="https://ghostbyte.dev" target="_blank" rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#9d4edd] to-[#4cc9f0] rounded-md text-white hover:opacity-90 transition-opacity text-sm">
                  <span>View our Work</span>
                  <ArrowRight class="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Intro from "./Hero.vue";
import GameImage from "./GameImage.vue";
import { ArrowRight } from "lucide-vue-next";

export default defineComponent({
  name: "About",
  components: { Intro, GameImage, ArrowRight }
},
)
</script>
