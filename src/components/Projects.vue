<template>
  <section class="page_3 panel" data-color="white">
    <div class="container">
      <div class="row">
        <div class="col justify-content-center d-flex pb-5">
          <Heading text="All Projects" />
        </div>
      </div>

      <div class="row">
        <GameImage image="kommiuniti.svg" name="Kommiuniti" color="#2e3039ff" date="2022"
          url="https://kommiuniti.netlify.app/" />

        <GameImage image="travellers-friend.webp" name="Traveller's Friend" color="#f24713" date="2022"
          url="https://travellers-friend.netlify.app/" />

        <GameImage image="bob.svg" name="Buckets of Bookmarks" color="#ffd52c" date="2022"
          url="https://buckets-of-bookmarks.daniebeler.com" />

        <GameImage image="day-in-percent.webp" name="Day in Percent" color="#212121" date="2022"
          url="https://day-in-percent.daniebeler.com/" />

        <GameImage image="dine.webp" name="dine." color="#3e3d44" date="2020 - 2022" url="https://dine-app.at" />

        <GameImage image="idea-overflow.svg" name="Idea Overflow" color="#0cc87e" date="2022"
          url="https://ideaoverflow.xyz" />

        <GameImage image="rocket.webp" name="Risky Rocket" color="#31c381" date="2021"
          url="https://daniebeler.itch.io/risky-rocket" />

        <GameImage image="pong.webp" name="1D Pong" color="#ef6060" date="2021"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.onedpong" />

        <GameImage image="dailytasks.webp" name="Daily Tasks" color="#212121" date="2020"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks" />

        <GameImage image="balance.webp" name="Balance - The Game" color="#ffc656" date="2020"
          url="https://daniebeler.itch.io/balance" />

        <GameImage image="wrongway.webp" name="Wrong Way" color="#32aa50" date="2020"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.wrongway" />

        <GameImage image="parkingjam.webp" name="Parking Jam" color="#ed8923" date="2020"
          url="https://daniebeler.itch.io/parking-jam" />

        <GameImage image="justwatchad.webp" name="Just Watch Ad" color="#ffb602" date="2020"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.justwatchad" />

        <GameImage image="toggle-together.webp" name="Toggle Together" color="#2279ff" date="2019"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.toggletogether" />

        <GameImage image="mine-boy.webp" name="MineBoy" color="#653814" date="2019"
          url="https://daniebeler.itch.io/mineboy" />

        <GameImage image="21.webp" name="Twentyone" color="#5e35b1" date="2019"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.twentyone" />

        <GameImage image="speed-clicker.webp" name="Speed Clicker" color="#2ca6e9" date="2018"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.speed_clicker" />

        <GameImage image="reflextest.webp" name="Reflextest" color="#0dbc3e" date="2018"
          url="https://play.google.com/store/apps/details?id=com.daniebeler.reflextest" />

      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "./Heading.vue";
import GameImage from "./GameImage.vue";

export default defineComponent({
  name: "Projects",
  components: { Heading, GameImage }
},
)
</script>

<style scoped>
.page_3 {
  padding-top: 150px;
  padding-bottom: 50px;
  color: white;
  position: relative;
}
</style>
