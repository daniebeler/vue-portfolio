<template>
  <a :href="url" target="_blank" rel="noopener noreferrer">
    <img class="rounded-2xl lg:rounded-3xl h-full aspect-square cursor-pointer transition-transform duration-200 hover:scale-105" :src="`/img/${image}`" alt="Icon" />
  </a>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GameImage",
  props: {
    image: String,
    name: String,
    color: String,
    url: String,
    date: String
  },
});
</script>
