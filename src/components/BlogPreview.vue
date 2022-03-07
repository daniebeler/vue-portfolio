<template>
  <div
    class="row align-items-center justify-content-center"
    style="display: flex; flex-direction: row; margin-bottom: 60px"
  >
    <div class="col-3">
      <img
        class="blog-image"
        :src="require(`@/assets/img/blog/${image}`)"
        alt=""
      />
    </div>
    <div class="col-5">
      <h1>{{ heading }}</h1>
      <p>{{ summary }}</p>
      <router-link :to="`/blog/${destination}`" class="btn_general btn_dark"
        >Read more</router-link
      >
    </div>
  </div>
</template>

<script>
import Heading from "@/components/Heading.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  components: {
    Heading,
  },
  props: {
    heading: String,
    summary: String,
    image: String,
    destination: String,
  },
};
</script>

<style scoped>
h1 {
  font-size: 1.8rem;
}

.blog-image {
  width: 100%;
}
</style>
