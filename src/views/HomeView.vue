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
                  'Sailor',
                  1500,
                  'Programmer',
                  1500,
                  'HTL Student',
                  1500,
                ]" :loop="Infinity" :wrapper="'strong'"></v-typical>
              </h2>
            </div>
          </div>
          <div class="col-8 col-md-6">
            <img class="p-4 first-img" src="@/assets/img/me.png" alt="Icon of ReflexTest" />
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
            <img class="intro-img" src="@/assets/img/skeeta.jpg" alt="" />
          </div>
          <div class="col-10 col-lg-6 ps-lg-4">
            <p class="intro-description">
              Hi! I'm Daniel Hiebeler, programmer with a passion in game
              development.
            </p>
            <p class="intro-description">
              I'm born in 2003 in Austria. I love programming all kind of stuff.
              At the moment I am attending fifth grade of HTL Dornbirn. I love all
              kinds of programming and I also like online challenges like
              TryHackMe or HackerRank. Especially OSINT challenges are a lot of
              fun...
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section class="page_2 panel" data-color="grey">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Who am I" />
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-auto d-flex align-items-center justify-content-center">
            <img class="m-4 img-logo" src="@/assets/img/me3.jpg" alt="Icon of me" />
          </div>
          <div class="d-flex col-10 col-md align-items-center">
            <div>
              <p>
                Welcome to my page! Here you will find some facts about me and
                you can get a small overview of my projects.<br /><br />
                <strong>A bit about me:</strong> At the moment I am attending
                fifth grade of HTL Dornbirn. I am interested in all kinds of
                programming projects, especially mobile game development. I also
                like online challenges like TryHackMe or HackerRank.
              </p>
              <div class="row pt-3">
                <div class="d-flex col justify-content-center">
                  <Button name="More Information" url="about" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <!-- <section class="latestprojects">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Latest Projects" />
          </div>
        </div>
        <div class="row" style="padding-bottom: 80px; flex-wrap: wrap-reverse">
          <div class="col-12 col-md-5">
            <img class="img-project" src="@/assets/img/ideaoverflow-preview.png" alt="Icon of ReflexTest" />
          </div>
          <div class="col-12 col-md-7">
            <h1>Idea Overflow</h1>
            <p>
              With Idea Overflow I am developing a social network specifically
              for software developers where everyone can share ideas.
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-12 col-md-7">
            <h1>dine.</h1>
            <p>
              Together with some friends I founded the startup “dine.”. It is a
              delivery service app that promotes sustainable and healthy food.
              The app virtually collects all orders from a school or company and
              sends them together to the supplier. As a result, the supplier
              only has to drive once and the ordering process is simplified for
              everyone involved.
            </p>
          </div>
          <div class="col-12 col-md-5">
            <img class="img-project" src="@/assets/img/dine-preview.png" alt="Icon of ReflexTest" />
          </div>
        </div>
      </div>
    </section> -->

    <section class="page_3 panel" data-color="white">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Projects" />
          </div>
        </div>

        <div class="row">
          <GameImage image="reflextest.webp" name="Reflextest" color="#0dbc3e"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.reflextest" />

          <GameImage image="speed-clicker.webp" name="Speed Clicker" color="#2ca6e9"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.speed_clicker" />

          <GameImage image="21.webp" name="Twentyone" color="#5e35b1"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.twentyone" />

          <GameImage image="mine-boy.webp" name="MineBoy" color="#653814"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.MineBoy" />

          <GameImage image="toggle-together.webp" name="Toggle Together" color="#2279ff"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.toggletogether" />

          <GameImage image="justwatchad.webp" name="Just Watch Ad" color="#ffb602"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.justwatchad" />

          <GameImage image="parkingjam.webp" name="Parking Jam" color="#ed8923"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.RushHour" />

          <GameImage image="wrongway.webp" name="Wrong Way" color="#32aa50"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.wrongway" />

          <GameImage image="balance.webp" name="Balance - The Game" color="#ffc656"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.Balance" />

          <GameImage image="pong.webp" name="1D Pong" color="#ef6060"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.onedpong" />

          <GameImage image="rocket.webp" name="Risky Rocket" color="#31c381"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.RiskyRocket" />

          <GameImage image="dailytasks.webp" name="Daily Tasks" color="#212121"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks" />

          <GameImage image="idea-overflow.svg" name="Idea Overflow" color="#0cc87e" url="https://ideaoverflow.xyz" />

          <GameImage image="dine.png" name="dine." color="#dfcfb0" url="https://dine-app.at" />
        </div>
      </div>
    </section>

    <!-- <section class="section-tools">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Tools" />
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div
            class="d-flex flex-column col-10 col-md-8 col-lg-6 align-items-center"
          >
            <p>
              Between all the games, I also developed some quite useful tools.
              the list isn't very long yet, but there will be more to come.
            </p>
            <div class="row pt-3">
              <div class="d-flex col justify-content-center">
                <Button name="Explore" url="tools" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

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
import Button from "@/components/Button.vue";
import GameImage from "@/components/GameImage.vue";
import VTypical from "vue-typical";

export default defineComponent({
  name: "HomeView",
  components: {
    Heading,
    Button,
    GameImage,
    VTypical,
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
  background-color: #ECB847;
}

.intro-img {
  width: 100%;
  border-radius: 15px;
}

.intro-description {
  font-size: 1.5rem;
}

.img-project {
  width: 100%;
  border-radius: 15px;
}

.latestprojects {
  padding-top: 50px;
  color: var(--my_dark);
  background-color: #ecb847;
}

.page_3 {
  padding-top: 150px;
  padding-bottom: 50px;
  color: white;
  position: relative;
}

.section-tools {
  background-color: #ecb847;
  padding-top: 70px;
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

.project-holder {
  background-color: #f3f5f6;
  padding: 0.9rem 1.1rem 0.9rem;
  border-radius: 10px;
  margin-bottom: 3rem;
  transition: 0.5s;
}

.project-holder:hover {
  cursor: pointer;
  transform: translateY(-10px);
}

.about-holder {
  padding-left: 30px;
  padding-right: 30px;
}

.color-grey {
  background-color: var(--my_dark);
}

.color-red {
  background-color: var(--my_primary);
}

.color-white {
  background-color: var(--my_light);
}

.color-transparent {
  background-color: transparent;
}

.img-logo {
  max-width: 250px;
  border-radius: 15px;
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
