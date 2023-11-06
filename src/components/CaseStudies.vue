<template>
  <section class="page_case_studies d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row d-flex">
        <div class="col d-flex flex-column pb-5">
          <Heading text="Best Projects" />
        </div>
      </div>
      <div class="row pb-5">
        <div class="col d-flex justify-content-center">
          <img class="case-study" src="@/assets/img/dine-case-study.webp" alt=""
            @click="openUrl('https://dine-app.at')" />
        </div>
      </div>

      <div class="row pb-5">
        <div class="col d-flex justify-content-center">
          <img class="case-study" src="@/assets/img/io-case-study.webp" alt=""
            @click="openUrl('https://ideaoverflow.xyz')" />
        </div>
      </div>
    </div>


    <div class="h-6 w-6 bg-red-500">

    </div>

  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";

export default defineComponent({
  name: "CaseStudies",
  components: { Heading },
  methods: {
    openUrl(url: string) {
      window.open(url, "_blank");
    },
  }
},
)
</script>

<style scoped>
.page_case_studies {
  background-color: var(--my_dark);
  color: white;
  padding-top: 130px;
}

.case-study {
  width: 100%;
  border-radius: 10px;
}

.case-study:hover {
  cursor: pointer;
}
</style>
