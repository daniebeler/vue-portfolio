<template>
<section class="holder">
  <div class="container h-100">
    <div class="row h-100">
      <div class="col flex-column d-flex justify-content-center text-center">
        <Heading text="Get in touch"/>
        <h1 class="email">
          hiebeler.daniel@gmail.com
        </h1>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import Heading from '@/components/Heading.vue'
export default {
  name: 'ContactView',
  components: {
    Heading
  }

}
</script>

<style scoped>

section {
  background-color: #ECB847;
  color: white;
  padding-top: 100px;
  padding-bottom: 200px;
  height: 100vh;
}

  .email {
    padding-top: 50px;
    font-size: 4vw;
  }

</style>
