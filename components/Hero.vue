<template>
  <section class="container mx-auto py-20 md:py-32 p-5">
      <div class="space-y-6">
        <h1 class="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span class="text-yellow-500">Daniel Hiebeler</span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-zinc-400">Software Developer & Designer</h2>
        <!-- <p class="text-2xl md:text-3xl h-10 text-zinc-400">
          <v-typical :steps="[
            'Sailor⛵',
            1500,
            'Programmer💻',
            1500,
            'Metalhead🤘',
            1500,
            'Austrian🇦🇹',
            1500,
            'Student at TU Wien',
            1500,
            'Web Developer',
            1500,
            'Adventurer🏞️',
            1500,
            'Game Dev🎮',
            1500,
          ]" :loop="Infinity" :wrapper="'strong'"></v-typical>
        </p> -->
        <p class="text-lg text-zinc-300 max-w-xl mt-4">
          I'm passionate about creating meaningful digital experiences and blending clean design with functionality.
          Currently, I'm studying Informatics at TU Wien to further refine my skills.</p>
        <div class="flex gap-4">
          <a href="/#projects"
            class="bg-yellow-500 hover:bg-yellow-600 flex items-center px-4 py-2 rounded-lg text-black">
            View Projects
            <ArrowRight class="ml-2 h-5 w-5" />
          </a>
          <a href="mailto:hiebeler.daniel@gmail.com" class="px-4 py-2 border-zinc-600 border rounded-lg">Contact Me</a>
        </div>
      </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTypical from "vue-typical";
import { ArrowRight } from 'lucide-vue-next'

export default defineComponent({
  name: "Hero",
  components: { VTypical, ArrowRight }
},
)
</script>
