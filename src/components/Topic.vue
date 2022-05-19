<template>
  <section class="header" :style="cssProps">
    <h1>{{ topic }}</h1>
  </section>
</template>

<script>
export default {
  name: "Topic",
  props: {
    image: String,
    topic: String,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/img/" + this.image)})`,
      },
    };
  },
};
</script>

<style scoped>
.header {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.header h1 {
  text-align: center;
  font-size: 5em;
}
</style>
