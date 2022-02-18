<template>
<div class="wrapper">

  <section class="page_1 d-flex justify-content-center panel" data-color="grey">
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="heading">
          I'm <span style="color: #DC3545">Daniel</span>
        </h1>
        <h1 class="heading">
          Hiebeler
        </h1>
        <h4 style="text-align: left">I am Programmer</h4>
        </div>

      </div>
      <div class="row justify-content-center text-center">
        <p class="hero-subtitle"><span class="typed"
            data-typed-items="Sailor, Programmer, Game Developer, HTL Student"></span></p>
      </div>
    </div>
  </section>

  <section class="page_2 panel" data-color="grey">
    <div class="container">
      <div class="row d-flex justify-content-center">
        <div class="col-auto d-flex align-items-center">
          <img class="m-4 img-logo not-draggable" src="@/assets/img/logo.webp" alt="Icon of ReflexTest">
        </div>
        <div class="d-flex col align-items-center">
          <div>
            <p>
              Welcome to my page! Here you will find some facts about me and you can get a small overview
              of my projects.<br><br>
              <strong>A bit about me:</strong> At the moment I am attending fifth grade of HTL Dornbirn.
              I love all kinds of programming, with passion in mobile game development. I also like online
              challenges like TryHackMe or HackerRank. Especially OSINT challenges are a lot of fun...
            </p>
            <div class="row pt-3">
              <div class="d-flex col justify-content-center">
                <a href="about" class="btn_general btn_light">More Information</a>
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
        <div class="col justify-content-center d-flex">
          <Heading text="Latest Projects"/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1>Idea Overflow</h1>
        </div>
        <div class="col">
          <h1>Idea Overflow</h1>
          <p>
            With Idea Overflow I am developing a social network specifically for software developers where everyone can share ideas.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="page_3 panel" data-color="white">

    <div class="container">
      <div class="row mt-5 mb-3" data-aos="zoom-in-up">
        <h2 class="col">
          Games
        </h2>
      </div>
      <div class="row">

        <div class="col-6 col-lg-3 col-md-4 pt-3 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/reflextest.webp" alt="Icon of ReflexTest">
          <div class="m-3 img-overlay img-reflextest d-flex align-items-center justify-content-center"
            onclick="location.href='games#reflextest';">
            <div class="overlay-txt">Reflextest</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/speed-clicker.webp" alt="Icon of Speed Clicker">
          <div class="m-3 img-overlay img-speedclicker d-flex align-items-center justify-content-center"
            onclick="location.href='games#speedclicker';">
            <div class="overlay-txt">Speed Clicker</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/21.webp" alt="Icon of Twentyone">
          <div class="m-3 img-overlay img-twentyone d-flex align-items-center justify-content-center"
            onclick="location.href='games#twentyone';">
            <div class="overlay-txt">Twentyone</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/mine-boy.webp" alt="Icon of MineBoy">
          <div class="m-3 img-overlay img-mineboy d-flex align-items-center justify-content-center"
            onclick="location.href='games#mineboy';">
            <div class="overlay-txt">MineBoy</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/toggle-together.webp" alt="Icon of Toggle Together">
          <div class="m-3 img-overlay img-toggletogether d-flex align-items-center justify-content-center"
            onclick="location.href='games#toggletogether';">
            <div class="overlay-txt">Toggle Together</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/justwatchad.webp" alt="Icon of Just Watch Ad">
          <div class="m-3 img-overlay img-justwatchad d-flex align-items-center justify-content-center"
            onclick="location.href='games#justwatchad';">
            <div class="overlay-txt">Just Watch Ad</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/parkingjam.webp" alt="Icon of Parking Jam">
          <div class="m-3 img-overlay img-parkingjam d-flex align-items-center justify-content-center"
            onclick="location.href='games#parkingjam';">
            <div class="overlay-txt">Parking Jam</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/wrongway.webp" alt="Icon of Wrong Way">
          <div class="m-3 img-overlay img-wrongway d-flex align-items-center justify-content-center"
            onclick="location.href='games#wrongway';">
            <div class="overlay-txt">Wrong Way</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/balance.webp" alt="Icon of Balance">
          <div class="m-3 img-overlay img-balance d-flex align-items-center justify-content-center"
            onclick="location.href='games#balance';">
            <div class="overlay-txt">Balance - The Game</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/pong.webp" alt="Icon of Daily Tasks">
          <div class="m-3 img-overlay img-pong d-flex align-items-center justify-content-center"
            onclick="location.href='games#pong';">
            <div class="overlay-txt">1D Pong</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/rocket.webp" alt="Icon of Daily Tasks">
          <div class="m-3 img-overlay img-rocket d-flex align-items-center justify-content-center"
            onclick="location.href='games#riskyrocket';">
            <div class="overlay-txt">Risky Rocket</div>
          </div>
        </div>

      </div>
      <div class="row mt-5 mb-3" data-aos="zoom-in-up">
        <h2 class="col">
          Other projects
        </h2>
      </div>
      <div class="row">
        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/dailytasks.webp" alt="Icon of Daily Tasks">
          <div class="m-3 img-overlay img-dailytasks d-flex align-items-center justify-content-center"
            onclick="location.href='https://play.google.com/store/apps/details?id=com.daniebeler.dailytasks';">
            <div class="overlay-txt">Daily Tasks</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/idea-overflow.svg" alt="Icon of Daily Tasks">
          <div class="m-3 img-overlay img-ideaoverflow d-flex align-items-center justify-content-center"
            onclick="location.href='https://ideaoverflow.xyz';">
            <div class="overlay-txt">Idea Overflow</div>
          </div>
        </div>

        <div class="col-6 col-lg-3 pt-3 col-md-4 pb-3" data-aos="zoom-in-up">
          <img class="img" src="@/assets/img/dine.png" alt="Icon of Daily Tasks">
          <div class="m-3 img-overlay img-dine d-flex align-items-center justify-content-center"
            onclick="location.href='https://dine-app.at';">
            <div class="overlay-txt">dine.</div>
          </div>
        </div>

      </div>

      <div class="row" data-aos="zoom-in-up" style="margin-top: 20px;">
        <div class="d-flex col justify-content-center">
          <a href="games" class="btn_general btn_dark">More Information</a>
        </div>
      </div>
    </div>
  </section>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Heading from '@/components/Heading.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Heading
  }
})
</script>

<style scoped>
.wrapper {
  transition: background-color 1s ease;
  background-color: #23272D;
}

.page_1 {
  height: 100vh;
  color: black;
  flex-direction: column;
  background-color: white;
}

.page_2 {
  color: var(--my_light);
  font-size: 1.2rem;
  padding-top: 200px;
  padding-bottom: 100px;
  background-color: #222A2F;
}

.latestprojects {
  padding-top: 50px;
  color: white;
}

.page_3 {
  padding-top: 150px;
  padding-bottom: 50px;
  color: var(--my_dark);
  position: relative;
}

.projects-heading {
  color: #eb3349;
}

.heading {
  color: #222A2F;
  font-size: 3rem;
  text-align: left;
}

@media (min-width: 768px) {
  .heading {
    color: #222A2F;
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

.img-container {
  width: 100%;
  padding: 15px;
}

.img-border {
  width: 100%;
  border-radius: 10px;
}

@keyframes change {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

/*----------------------------------------*/
/*  Arrow Down
/*----------------------------------------*/

.img-arrow-down {
  width: 50px;
}

.arrow {
  text-align: center;
  bottom: 20%;
}

.bounce {
  -moz-animation: bounce 2s infinite;
  -webkit-animation: bounce 2s infinite;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
}

.fixed-bottom {
  position: absolute;
  bottom: 20%;
  z-index: 100;
}

.table-section-2 {
  color: var(--my_light);
}

.img {
  width: 100%;
  border-radius: 15px;
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
}

.img:hover {
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

.img-reflextest {
  background-color: #0dbc3e;
}

.img-speedclicker {
  background-color: #2ca6e9;
}

.img-twentyone {
  background-color: #5e35b1;
}

.img-mineboy {
  background-color: #653814;
}

.img-toggletogether {
  background-color: #2279ff;
}

.img-justwatchad {
  background-color: #ffb602;
}

.img-parkingjam {
  background-color: #ed8923;
}

.img-wrongway {
  background-color: #32aa50;
}

.img-balance {
  background-color: #ffc656;
}

.img-pong {
  background-color: #ef6060;
}

.img-rocket {
  background-color: #31c381;
}

.img-dailytasks {
  background-color: #212121;
}

.img-ideaoverflow {
  background-color: #0cc87e;
}

.img-dine {
  background-color: #dfcfb0;
}

/* .img-overlay:hover {
  opacity: 1;
  cursor: pointer;
} */

.overlay-txt {
  color: white;
}

.bg-1 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: var(--my_dark);
}

.bg-2 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: var(--my_dark);
  transition: background-color 0.5s ease;
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
}

.hero-subtitle{
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
