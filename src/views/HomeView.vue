<template>
  <div class="wrapper">
    <section class="page_1 d-flex justify-content-center">
      <div class="container">
        <div class="row" style="flex-wrap: wrap-reverse">
          <div
            class="col-12 col-lg-6 justify-content-center align-items-center d-flex flex-column"
          >
            <div>
              <h1 class="heading">
                I'm <span style="color: #dc3545">Daniel</span>
              </h1>
              <h1 class="heading">Hiebeler</h1>
              <h4 style="text-align: left">Sailor, Programmer,...</h4>
            </div>
          </div>
          <div class="col-12 col-lg-6">
            <img
              class="p-4 first-img"
              src="@/assets/img/me.png"
              alt="Icon of ReflexTest"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="page_2 panel" data-color="grey">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Who am I" />
          </div>
        </div>

        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-auto d-flex align-items-center justify-content-center">
            <img
              class="m-4 img-logo"
              src="@/assets/img/me3.jpg"
              alt="Icon of me"
            />
          </div>
          <div class="d-flex col align-items-center">
            <div>
              <p>
                Welcome to my page! Here you will find some facts about me and
                you can get a small overview of my projects.<br /><br />
                <strong>A bit about me:</strong> At the moment I am attending
                fifth grade of HTL Dornbirn. I love all kinds of programming,
                with passion in mobile game development. I also like online
                challenges like TryHackMe or HackerRank. Especially OSINT
                challenges are a lot of fun...
              </p>
              <div class="row pt-3">
                <div class="d-flex col justify-content-center">
                  <a href="about" class="btn_general btn_light"
                    >More Information</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="latestprojects">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Latest Projects" />
          </div>
        </div>
        <div class="row" style="padding-bottom: 80px; flex-wrap: wrap-reverse">
          <div class="col-12 col-md-5">
            <img
              class="img-project"
              src="@/assets/img/ideaoverflow-preview.png"
              alt="Icon of ReflexTest"
            />
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
              With Idea Overflow I am developing a social network specifically
              for software developers where everyone can share ideas.
            </p>
          </div>
          <div class="col-12 col-md-5">
            <img
              class="img-project"
              src="@/assets/img/dine-preview.png"
              alt="Icon of ReflexTest"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="page_3 panel" data-color="white">
      <div class="container">
        <div class="row">
          <div class="col justify-content-center d-flex pb-5">
            <Heading text="Apps and Games" />
          </div>
        </div>

        <div class="row">
          <GameImage
            image="reflextest.webp"
            name="Reflextest"
            color="#0dbc3e"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.reflextest"
          />

          <GameImage
            image="speed-clicker.webp"
            name="Speed Clicker"
            color="#2ca6e9"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.speed_clicker"
          />

          <GameImage
            image="21.webp"
            name="Twentyone"
            color="#5e35b1"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.twentyone"
          />

          <GameImage
            image="mine-boy.webp"
            name="MineBoy"
            color="#653814"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.MineBoy"
          />

          <GameImage
            image="toggle-together.webp"
            name="Toggle Together"
            color="#2279ff"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.toggletogether"
          />

          <GameImage
            image="justwatchad.webp"
            name="Just Watch Ad"
            color="#ffb602"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.justwatchad"
          />

          <GameImage
            image="parkingjam.webp"
            name="Parking Jam"
            color="#ed8923"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.RushHour"
          />

          <GameImage
            image="wrongway.webp"
            name="Wrong Way"
            color="#32aa50"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.wrongway"
          />

          <GameImage
            image="balance.webp"
            name="Balance - The Game"
            color="#ffc656"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.Balance"
          />

          <GameImage
            image="pong.webp"
            name="1D Pong"
            color="#ef6060"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.onedpong"
          />

          <GameImage
            image="rocket.webp"
            name="Risky Rocket"
            color="#31c381"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.RiskyRocket"
          />

          <GameImage
            image="dailytasks.webp"
            name="Daily Tasks"
            color="#212121"
            url="https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks"
          />

          <GameImage
            image="idea-overflow.svg"
            name="Idea Overflow"
            color="#0cc87e"
            url="https://ideaoverflow.xyz"
          />

          <GameImage
            image="dine.png"
            name="dine."
            color="#dfcfb0"
            url="https://dine-app.at"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Heading from "@/components/Heading.vue";
import GameImage from "@/components/GameImage.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    Heading,
    GameImage,
  },
});
</script>

<style scoped>
.wrapper {
  transition: background-color 1s ease;
  background-color: var(--my_dark);
}

.page_1 {
  height: 100vh;
  color: var(--my_dark);
  flex-direction: column;
  background-color: white;
}

.first-img {
  width: 100%;
  border-radius: 50%;
}

.page_2 {
  color: var(--my_light);
  font-size: 1.2rem;
  padding-top: 50px;
  padding-bottom: 100px;
  background-color: var(--my_dark);
}

.img-project {
  width: 100%;
  border-radius: 15px;
}

.latestprojects {
  padding-top: 50px;
  color: white;
}

.page_3 {
  padding-top: 150px;
  padding-bottom: 50px;
  color: white;
  position: relative;
}

.heading {
  color: #222a2f;
  font-size: 3rem;
  text-align: left;
}

@media (min-width: 768px) {
  .heading {
    color: #222a2f;
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
  background-color: #dc3545;
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

.hero-subtitle {
  color: #dc3545;
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  .hero-subtitle {
    color: #dc3545;
    font-size: 2.5rem;
  }
}
</style>
