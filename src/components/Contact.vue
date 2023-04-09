<template>
  <section class="holder section-contact">
    <div class="container h-100">
      <div class="row h-100">
        <div class="col flex-column d-flex justify-content-center text-center">
          <Heading text="Get in touch" />
          <h1 class="email">
            hiebeler.daniel<span style="color: var(--my_primary)">@</span>gmail.com
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Heading from './Heading.vue';

export default {
  components: { Heading }
}
</script>

<style scoped>
.section-contact {
  background-color: #ecb847;
  color: var(--my_dark);
  padding-top: 100px;
  padding-bottom: 200px;
  height: 100vh;
}

.email {
  padding-top: 50px;
  font-size: 4vw;
}
</style>
