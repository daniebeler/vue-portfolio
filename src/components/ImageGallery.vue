<template>
  <section class="section-intro">
    <div class="container">
      <div class="row" style="padding-bottom: 30px">
        <div class="col justify-content-center d-flex" style="padding-bottom: 30px">
          <Heading text="Some images" />
        </div>
      </div>
      <div class="row d-flex">
        <div class="col-12 grid-container">
          <div class="item1">
            <img class="intro-img" src="@/assets/img/kuppel.webp" alt="" />
          </div>
          <div class="item2">
            <img class="intro-img" src="@/assets/img/vesuv.webp" alt="" />
          </div>
          <div class="item3">
            <img class="intro-img" src="@/assets/img/skeeta.webp" alt="" />
          </div>
          <div class="item4">
            <img class="intro-img" src="@/assets/img/selfie.webp" alt="" />
          </div>
          <div class="item5">
            <img class="intro-img" src="@/assets/img/sailing420.webp" alt="" />
          </div>
          <div class="item6">
            <img class="intro-img" src="@/assets/img/sailing29er.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";

export default defineComponent({
  name: "ImageGallery",
  components: { Heading }
},
)
</script>

<style scoped>
.section-intro {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #ecb847;
}

.intro-img {
  width: 100%;
  border-radius: 10px;
}


.item1 {
  grid-area: one;
}

.item2 {
  grid-area: two;
}

.item3 {
  grid-area: three;
}

.item4 {
  grid-area: four;
}

.item5 {
  grid-area: five;
}

.item6 {
  grid-area: six;
}

.grid-container {
  display: grid;
  grid-template-areas:
    "one one two two two two"
    "one one three three three three"
    "four four three three three three"
    "five five five six six six";
  gap: 10px;
}
</style>
