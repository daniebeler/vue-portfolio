<template>
  <section class="p-5 flex items-center flex-col">
    <div class="container">

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">

          <Intro />

          <div class="grid grid-cols-2 gap-4">

            <div>
              <img class="rounded-3xl h-full" src="/img/schulfoto.webp" alt="Icon" />
            </div>

            <div class="grid grid-cols-2 gap-4">
              <div class="bg-[#2867B2] rounded-3xl flex items-center justify-center">
                <img class="h-2/4" src="/img/logo-linkedin.svg" alt="Icon" />
              </div>

              <div class="bg-[#6364FF] rounded-3xl flex items-center justify-center">
                <img class="h-2/4" src="/img/logo-mastodon.svg" alt="Icon" />
              </div>

              <div class="bg-gradient-to-tr from-[#f40000] to-[#b800b3] rounded-3xl flex items-center justify-center">
                <img class="h-2/4" src="/img/logo-instagram.svg" alt="Icon" />
              </div>

              <div class="bg-[#fff] rounded-3xl flex items-center justify-center">
                <img class="h-2/4" src="/img/logo-github-dark.svg" alt="Icon" />
              </div>
            </div>
          </div>


      </div>



      <h1 class="text-3xl text-white pb-4">Startups:</h1>


      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        <div>
          <img class="rounded-3xl h-full" src="/img/dine-case-study.webp" alt="Icon" />
        </div>


        <div>
          <img class="rounded-3xl h-full" src="/img/io-case-study.webp" alt="Icon" />
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
  name: "Projects",
  components: { Intro, GameImage }
},
)
</script>
