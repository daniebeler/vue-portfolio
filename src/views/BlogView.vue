<template>
  <section class="holder">
    <div class="container" style="margin-top: 130px">

      <BlogPreview
        heading="My personal toolbox"
        summary="meeem"
        image="tools.jpg"
      />
      <BlogPreview
        heading="My personal toolbox"
        summary="meeem"
        image="tools.jpg"
        destination="my-personal-toolbox"
      />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/Heading.vue";
import BlogPreview from "@/components/BlogPreview.vue";

export default {
  name: "ContactView",
  components: {
    Heading,
    BlogPreview,
  },
};
</script>

<style scoped></style>
