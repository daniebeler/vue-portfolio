<template>
  <!-- <section class="welcome container">
  <div class="row">
    <div class="col" style="background: black">
      fief
    </div>
    <div class="col">

    </div>
  </div>
</section> -->
  <section class="holder">
    <div class="container" style="margin-top: 130px">
      <div class="row">
        <div class="col">
          <h1>Communication</h1>
          <p><strong>Instagram</strong> - social media</p>
          <p><strong>Signal</strong> - communication</p>
          <p><strong>WhatsApp</strong> - communication</p>
          <p><strong>Discord</strong> - voicechat</p>

          <h1>Tools</h1>
        </div>
      </div>
      fief
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

<style scoped>
.welcome {
  height: 100vh;
}
</style>
