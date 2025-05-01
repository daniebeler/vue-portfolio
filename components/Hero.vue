<template>
  <section className="container mx-auto py-20 md:py-32 p-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Hi, I'm <span className="text-yellow-500">Daniel Hiebeler</span>
        </h1>
        <h2 className="text-2xl md:text-3xl h-10 text-zinc-400">
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
        </h2>
        <p className="text-lg text-zinc-300 max-w-md">
          I build exceptional digital experiences with a focus on clean design and robust functionality.
        </p>
        <div className="flex gap-4">
          <a href="/#projects" class="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-lg text-black">
            View Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="mailto:hiebeler.daniel@gmail.com" class="px-4 py-2 border-zinc-600 border rounded-lg">Contact Me</a>
        </div>
      </div>
      <div className="relative aspect-square max-w-md mx-auto md:ml-auto">
        <div
          className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-purple-500/20 rounded-2xl -z-10 blur-xl">
        </div>
        <div className="h-full w-full rounded-2xl overflow-hidden border border-zinc-800">
          <Image src="/placeholder.svg" alt="Daniel Hiebeler" width={400} height={400}
            className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTypical from "vue-typical";

export default defineComponent({
  name: "Hero",
  components: { VTypical }
},
)
</script>
