<template>
  <section class="section-intro rounded-3xl bg-[#ecb847] pt-10 pl-5 pb-10">
    <div>
      <h1 class="heading">
        I'm <span style="color: var(--my_primary)">Daniel</span>
      </h1>
      <h1 class="heading">Hiebeler</h1>
      <h2>
        <v-typical class="blink" :steps="[
          'Sailor⛵',
          1500,
          'Programmer💻',
          1500,
          'Metalhead🤘',
          1500,
          'Austrian🇦🇹',
          1500,
          'Civil Servant',
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
import Heading from "./Heading.vue";
import VTypical from "vue-typical";

export default defineComponent({
  name: "Intro",
  components: { Heading, VTypical }
},
)
</script>

