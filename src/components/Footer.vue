<template>
  <section class="page_footer d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row d-flex">
        <div class="col d-flex flex-column pb-4">
          <Heading text="Follow me"/>
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <img class="socialmedia" src="@/assets/img/instagram.png" alt="" @click="openInstagram()">
          <img class="socialmedia" src="@/assets/img/email.png" alt="" @click="openEmail()">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from '@/components/Heading.vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
  components: {
    Heading
  },
  methods: {
    openInstagram () {
      window.open('https://instagram.com/daniebeler', '_blank')
    },
    openEmail () {
      window.open('mailto:hiebeler.daniel@gmail.com')
    }
  }
}
</script>

<style scoped>

.page_footer{
  background-color: #fff;
  padding-top: 70px;
  padding-bottom: 70px;
}

.socialmedia{
  margin: 5px;
  width: 50px;
}

.socialmedia:hover {
  cursor: pointer;
}

</style>
