<template>
  <Topic topic="TOOLS" image="tools-title.jpg" />

  <section class="section-intro">
    <div class="container">
      <div class="row" style="padding-bottom: 30px">
        <div
          class="col justify-content-center d-flex"
          style="padding-bottom: 30px"
        >
          <Heading text="Design inspiration" />
        </div>
      </div>

      <div class="row" style="padding-bottom: 30px">
        <ToolPreview image="color-title.jpg" topic="Color palettes" destination="colors"/>
      </div>

      <div class="row" style="padding-bottom: 30px">
        <div
          class="col justify-content-center d-flex"
          style="padding-bottom: 30px"
        >
          <Heading text="Productivity" />
        </div>
      </div>

      <div class="row" style="padding-bottom: 30px">
        <ToolPreview image="ivy-lee.jpg" topic="Daily Tasks" description="The Ivy Lee Method" destination=""/>
      </div>
    </div>
  </section>
</template>

<script>
import Topic from "@/components/Topic.vue";
import Heading from "@/components/Heading.vue";
import GameImage from "@/components/GameImage.vue";
import ToolPreview from "@/components/ToolPreview.vue";

export default {
  name: "ToolsView",
  components: {
    Topic,
    Heading,
    GameImage,
    ToolPreview,
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
