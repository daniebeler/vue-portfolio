<template>
  <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3 cont">
    <img class="img" :src="require(`@/assets/img/${image}`)" alt="Icon" @click="openUrl()" />
    <div class="row">
      <div class="col d-flex flex-column justify-content-center">
        <div class="release-date" v-bind:style="{ backgroundColor: color }">{{ date }}</div>
        <p>{{ name }}</p>
      </div>
    </div>
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
  },
});
</script>

<style scoped>
.img {
  width: 100%;
  display: block;
  border-radius: 10px;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
}

.img:hover {
  cursor: pointer;
}

.icn {
  height: 30px;
}

.release-date {
  width: fit-content;
  border-radius: 3px;
  padding: 1px 4px;
  margin: 15px 0 5px 0;
  font-size: 0.8rem;
}

.cont {
  position: relative;
}

.cont:hover .img-overlay {
  opacity: 1;
  cursor: pointer;
}

.img-overlay {
  position: absolute;
  border-radius: 15px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
}

.overlay-txt {
  color: white;
}
</style>
