<template>
  <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3 cont">
    <img class="img" :src="require(`@/assets/img/${image}`)" alt="Icon">
    <div class="m-3 img-overlay d-flex align-items-center justify-content-center" :style="{ background: color }"
      @click="openUrl()">
      <div class="overlay-txt bolt">{{name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GameImage',
  props: {
    image: String,
    name: String,
    color: String,
    url: String
  },
  methods: {
    openUrl () {
      window.open(this.url, '_blank')
    }
  }
}
</script>

<style scoped>
.img {
  width: 100%;
  display: block;
  border-radius: 15px;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
}

.img:hover {
  cursor: pointer;
}

.cont {
  position: relative;
}

.cont:hover .img-overlay {
  opacity: 1;
  cursor: pointer;
}

.img-overlay {
  position: absolute;
  border-radius: 15px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: 0.5s ease;
}

.overlay-txt {
  color: white;
}
</style>
