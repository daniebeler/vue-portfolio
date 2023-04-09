<template>
  <section class="page_1 d-flex justify-content-center">
    <div class="container">
      <div class="row justify-content-center" style="flex-wrap: wrap-reverse">
        <div class="col-12 col-md-6 justify-content-center align-items-center d-flex flex-column">
          <div>
            <h1 class="heading">
              I'm <span style="color: var(--my_primary)">Daniel</span>
            </h1>
            <h1 class="heading">Hiebeler</h1>
            <h2>
              <v-typical class="blink" :steps="[
                'Sailor⛵',
                1500,
                'Programmer💻',
                1500,
                'Metalhead🤘',
                1500,
                'Austrian🇦🇹',
                1500,
                'Civil Servant',
                1500,
                'Adventurer🏞️',
                1500,
                'Game Dev🎮',
                1500,
              ]" :loop="Infinity" :wrapper="'strong'"></v-typical>
            </h2>
          </div>
        </div>
        <div class="col-8 col-md-6">
          <img class="p-4 first-img" src="@/assets/img/schulfoto.webp" alt="Icon of ReflexTest" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import VTypical from "vue-typical";

export default defineComponent({
  name: "Hero",
  components: {
    VTypical
  }
},
)
</script>

<style scoped>
.page_1 {
  height: 100vh;
  color: var(--my_dark);
  flex-direction: column;
  background-color: #ecb847;
}

.first-img {
  width: 100%;
  border-radius: 50%;
}

.heading {
  font-size: 3rem;
  text-align: left;
}

@media (min-width: 768px) {
  .heading {
    font-size: 4.5rem;
    text-align: left;
  }
}


.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
