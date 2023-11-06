<template>
  <div class="">
    <img class="rounded-3xl h-full" :src="`/img/${image}`" alt="Icon" @click="openUrl()" />
  </div>
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
  methods: {
    openUrl() {
      window.open(this.url, "_blank");
    }
  },
});
</script>
