<template>
  <div class="col-12 col-md-6 col-lg-4 mb-3">
    <router-link :to="`/tools/${destination}`" custom v-slot="{ navigate }">
      <div role="link" @click="navigate" class="container wrapper">
        <div class="row">
          <div class="col">
            <img
              style="width: 100%"
              :src="require(`@/assets/img/${image}`)"
              alt=""
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="text-wrapper">
              <h3>
                <strong>{{ topic }}</strong>
              </h3>
              <p style="margin: 0">{{ description }}</p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ToolPreview",
  props: {
    image: String,
    topic: String,
    description: String,
    destination: String,
  },
};
</script>

<style scoped>
.wrapper {
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  padding: 0;
  transition-duration: 0.5s;
}

.wrapper:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.wrapper row,
.wrapper col {
  margin: 0 !important;
  padding: 0;
}

.wrapper img {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.text-wrapper {
  padding: 20px;
}
</style>
