<template>
  <Topic topic="BLOG" image="abstract.jpg" />

  <section class="holder">
    <div class="container" style="margin-top: 130px">
      <BlogPreview
        heading="My personal toolbox"
        summary="A collection of software I use"
        image="tools.jpg"
        destination="my-personal-toolbox"
      />
    </div>
  </section>
</template>

<script>
import Topic from "@/components/Topic.vue";
import Heading from "@/components/Heading.vue";
import BlogPreview from "@/components/BlogPreview.vue";

export default {
  name: "BlogView",
  components: {
    Topic,
    Heading,
    BlogPreview,
  },
};
</script>

<style scoped></style>
