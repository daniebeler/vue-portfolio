<template>
  <section class="rounded-2xl lg:rounded-3xl bg-[#ecb847] p-10 md:p-6 lg:p-10 flex items-center">
    <div>
      <h1 class="text-4xl md:text-3xl lg:text-5xl flex flex-col">
        <div class="text-zinc-800">
          I'm <span style="color: var(--my_primary)">Daniel</span>
        </div>

        <span class="text-4xl md:text-3xl lg:text-5xl text-zinc-800">Hiebeler</span>
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
