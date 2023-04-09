<template>
  <section class="page_footer d-flex align-items-center justify-content-center">
    <div class="container">
      <div class="row d-flex">
        <div class="col d-flex flex-column pb-4">
          <Heading text="Follow me" />
        </div>
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center">
          <img class="socialmedia" src="@/assets/img/circle_button_instagram.svg" alt=""
            @click="openUrl('https://instagram.com/daniebeler')" />
          <img class="socialmedia" src="@/assets/img/circle_button_github.svg" alt=""
            @click="openUrl('https://github.com/daniebeler')" />
          <a href="https://techhub.social/@daniebeler" target="_blank" rel="me noopener noreferrer">
            <img class="socialmedia" src="@/assets/img/circle_button_mastodon.svg" alt="" />
          </a>
          <img class="socialmedia" src="@/assets/img/circle_button_email.svg" alt="" @click="openEmail()" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";

export default defineComponent({
  name: "Socials",
  components: { Heading },
  methods: {
    openEmail() {
      window.open("mailto:hiebeler.daniel@gmail.com");
    },
    openUrl(url: string) {
      window.open(url, "_blank");
    },
  }
},
)
</script>


<style scoped>
.page_footer {
  background-color: #ecb847;
  padding-top: 130px;
  padding-bottom: 130px;
}

.socialmedia {
  margin: 5px;
  width: 50px;
}

.socialmedia:hover {
  cursor: pointer;
}
</style>
