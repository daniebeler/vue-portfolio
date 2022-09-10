<template>
  <div class="wrapper">
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
                  'Game Dev🎮',
                  1500,
                ]" :loop="Infinity" :wrapper="'strong'"></v-typical>
              </h2>
            </div>
          </div>
          <div class="col-8 col-md-6">
            <img class="p-4 first-img" src="@/assets/img/daniel.webp" alt="Icon of ReflexTest" />
          </div>
        </div>
      </div>
    </section>

    <section class="section-intro">
      <div class="container">
        <div class="row" style="padding-bottom: 30px">
          <div class="col justify-content-center d-flex" style="padding-bottom: 30px">
            <Heading text="Introduction" />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-10 col-lg-6 pe-lg-4 pb-5 pb-lg-5">
            <img class="intro-img" src="@/assets/img/skeeta.webp" alt="" />
          </div>
          <div class="col-10 col-lg-6 ps-lg-4">
            <p class="intro-description">
              Hi! I'm Daniel Hiebeler, programmer with a passion in game
              development.
            </p>
            <p class="intro-description">
              I'm born in 2003 in Austria. I love programming all kind of stuff.
              At the moment I am attending fifth grade of HTL Dornbirn. I love
              all kinds of programming and I also like online challenges like
              TryHackMe or HackerRank. Especially OSINT challenges are a lot of
              fun...
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-intro">
      <div class="container">
        <div class="row" style="padding-bottom: 30px">
          <div class="col justify-content-center d-flex" style="padding-bottom: 30px">
            <Heading text="Some images" />
          </div>
        </div>
        <div class="row d-flex">
          <div class="col-12 grid-container">
            <div class="item1"><img class="intro-img" src="@/assets/img/me3-ar.webp" alt="" /></div>
            <div class="item2"><img class="intro-img" src="@/assets/img/sailing-ar.webp" alt="" /></div>
            <div class="item3"><img class="intro-img" src="@/assets/img/skeeta.webp" alt="" /></div>
            <div class="item4"><img class="intro-img" src="@/assets/img/selfie.webp" alt="" /></div>
          </div>
        </div>
      </div>
    </section>

    <section class="page_footer d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row d-flex">
          <div class="col d-flex flex-column pb-4">
            <Heading text="Follow me" />
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center">
            <img class="socialmedia" src="@/assets/img/instagram.webp" alt="" @click="openUrl('https://instagram.com/daniebeler')" />
            <img class="socialmedia" src="@/assets/img/github.webp" alt="" @click="openUrl('https://github.com/daniebeler')" />
            <img class="socialmedia" src="@/assets/img/email.webp" alt="" @click="openEmail()" />
          </div>
        </div>
      </div>
    </section>

    <section class="page_case_studies d-flex align-items-center justify-content-center">
      <div class="container">
        <div class="row d-flex">
          <div class="col d-flex flex-column pb-5">
            <Heading text="Best Projects" />
          </div>
        </div>
        <div class="row pb-5">
          <div class="col d-flex justify-content-center">
            <img class="case-study" src="@/assets/img/dine-case-study.webp" alt="" @click="openUrl('https://dine-app.at')" />
          </div>
        </div>

        <div class="row pb-5">
          <div class="col d-flex justify-content-center">
            <img class="case-study" src="@/assets/img/io-case-study.webp" alt="" @click="openUrl('https://ideaoverflow.xyz')" />
          </div>
        </div>
      </div>
    </section>

    <section class="page_3 panel" data-color="white">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="All Projects" />
          </div>
        </div>

        <div class="row">
          <GameImage image="reflextest.webp" name="Reflextest" color="#0dbc3e" date="2018"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.reflextest" />

          <GameImage image="speed-clicker.webp" name="Speed Clicker" color="#2ca6e9" date="2018"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.speed_clicker" />

          <GameImage image="21.webp" name="Twentyone" color="#5e35b1" date="2019"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.twentyone" />

          <GameImage image="mine-boy.webp" name="MineBoy" color="#653814" date="2019"
            url="https://daniebeler.itch.io/mineboy" />

          <GameImage image="toggle-together.webp" name="Toggle Together" color="#2279ff" date="2019"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.toggletogether" />

          <GameImage image="justwatchad.webp" name="Just Watch Ad" color="#ffb602" date="2020"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.justwatchad" />

          <GameImage image="parkingjam.webp" name="Parking Jam" color="#ed8923" date="2020"
            url="https://daniebeler.itch.io/parking-jam" />

          <GameImage image="wrongway.webp" name="Wrong Way" color="#32aa50" date="2020"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.wrongway" />

          <GameImage image="balance.webp" name="Balance - The Game" color="#ffc656" date="2020"
            url="https://daniebeler.itch.io/balance" />

            <GameImage image="dailytasks.webp" name="Daily Tasks" color="#212121" date="2020"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks" />

          <GameImage image="pong.webp" name="1D Pong" color="#ef6060" date="2021"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.onedpong" />

          <GameImage image="rocket.webp" name="Risky Rocket" color="#31c381" date="2021"
            url="https://daniebeler.itch.io/risky-rocket" />

          <GameImage image="idea-overflow.svg" name="Idea Overflow" color="#0cc87e" date="2022"
            url="https://ideaoverflow.xyz" />

          <GameImage image="dine.webp" name="dine." color="#dfcfb0" date="2020 - 2022"
            url="https://dine-app.at" />

          <GameImage image="day-in-percent.webp" name="Day in Percent" color="#212121" date="2022"
            url="https://day-in-percent.daniebeler.com/" />

          <GameImage image="bob.webp" name="Buckets of Bookmarks" color="#ffb24b" date="2022"
            url="https://buckets-of-bookmarks.daniebeler.com" />

            <GameImage image="travellers-friend.webp" name="Traveller's Friend" color="#f24713" date="2022"
            url="https://travellers-friend.netlify.app/" />
        </div>
      </div>
    </section>

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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "@/components/Heading.vue";
import GameImage from "@/components/GameImage.vue";
import VTypical from "vue-typical";

export default defineComponent({
  name: "HomeView",
  components: {
    Heading,
    GameImage,
    VTypical,
  },
  methods: {
    openEmail() {
      window.open('mailto:hiebeler.daniel@gmail.com')
    },
    openUrl(url: string) {
      window.open(url, "_blank");
    },
  },
});
</script>

<style scoped>
.blink::after {
  content: "|";
  animation: blink 1s infinite step-start;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.wrapper {
  transition: background-color 1s ease;
  background-color: var(--my_dark);
}

.item1 {
  grid-area: header;
}

.item2 {
  grid-area: menu;
}

.item3 {
  grid-area: main;
}

.item4 {
  grid-area: right;
}

.grid-container {
  display: grid;
  grid-template-areas:
    'header menu menu'
    'header main main'
    'right main main';
  gap: 10px;
}

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

.section-intro {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #ecb847;
}

.intro-img {
  width: 100%;
  border-radius: 10px;
}

.intro-description {
  font-size: 1.5rem;
}

.page_footer {
  background-color: #ecb847;
  padding-top: 130px;
  padding-bottom: 130px;
}

.page_case_studies {
  background-color: var(--my_dark);
  color: white;
  padding-top: 130px;
}

.case-study{
  width: 100%;
  border-radius: 10px;
}

.case-study:hover {
  cursor: pointer;
}

.socialmedia {
  margin: 5px;
  width: 50px;
}

.socialmedia:hover {
  cursor: pointer;
}

.page_3 {
  padding-top: 150px;
  padding-bottom: 50px;
  color: white;
  position: relative;
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
