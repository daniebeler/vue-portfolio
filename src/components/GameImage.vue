<template>
  <div class="">
    <img class="rounded-3xl h-full" :src="`/img/${image}`" alt="Icon" @click="openUrl()" />
    <!-- <div class="row">
      <div class="col d-flex flex-column justify-content-center">
        <div class="release-date" v-bind:style="{ backgroundColor: color }">{{ date }}</div>
        <p>{{ name }}</p>
      </div>
    </div> -->
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
    },
    getPic(name: any) {
    return '/assets/img/' + name;
  }
  },
});
</script>
