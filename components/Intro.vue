<template>
  <section class="p-5 pt-20 flex items-center flex-col">
    <div class="container">
      <h1 class="text-4xl md:text-3xl lg:text-5xl flex font-extrabold">
        Hi, I'm&nbsp;<span class="text-yellow-500">Daniel Hiebeler</span>
      </h1>
      <h2 class="h-10 text-xl pt-2">
        <v-typical class="blink text-zinc-800" :steps="[
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

      <p>I build exceptional digital experiences with a focus on clean design and robust functionality.</p>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTypical from "vue-typical";

export default defineComponent({
  name: "Intro",
  components: { VTypical }
},
)
</script>
