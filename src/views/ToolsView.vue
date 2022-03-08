<template>
  <Topic topic="TOOLS" image="abstract.jpg" />

  <section class="section-intro">
    <div class="container">
      <div class="row" style="padding-bottom: 30px">
        <div
          class="col justify-content-center d-flex"
          style="padding-bottom: 30px"
        >
          <Heading text="Introduction" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Topic from "@/components/Topic.vue";
import Heading from "@/components/Heading.vue";
import GameImage from "@/components/GameImage.vue";

export default {
  name: "ToolsView",
  components: {
    Topic,
    Heading,
    GameImage,
  },
};
</script>

<style scoped>
.section-intro {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: white;
}
</style>
