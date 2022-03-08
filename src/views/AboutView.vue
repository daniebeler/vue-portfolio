<template>
  <Topic topic="ABOUT ME" image="sailing.jpg" />

  <section class="section-intro">
    <div class="container">
      <div class="row" style="padding-bottom: 30px">
        <div
          class="col justify-content-center d-flex"
          style="padding-bottom: 30px"
        >
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

  <section class="section-profiles">
    <div class="container">
      <div class="row" style="padding-bottom: 30px">
        <div class="col justify-content-center d-flex">
          <Heading text="Social Media" />
        </div>
      </div>
      <div class="row">
        <GameImage
          image="insta.webp"
          name="Instagram"
          color="#ea001e"
          url="https://www.instagram.com/daniebeler"
        />

        <GameImage
          image="git.webp"
          name="Github"
          color="#000"
          url="https://github.com/daniebeler"
        />

        <GameImage
          image="idea-overflow.svg"
          name="Idea Overflow"
          color="#0cc87e"
          url="https://ideaoverflow.xyz/users/daniebeler"
        />

        <GameImage
          image="polywork.svg"
          name="Polywork"
          color="#5F6CEB"
          url="https://www.polywork.com/daniebeler"
        />

        <GameImage
          image="geocaching.webp"
          name="Geocaching"
          color="#02884d"
          url="https://www.geocaching.com/p/?guid=555c891d-21dd-46d3-bb35-49bb06bec867"
        />

        <GameImage
          image="hackerrank.webp"
          name="Hackerrank"
          color="#39424e"
          url="https://www.hackerrank.com/daniebeler?hr_r=1"
        />

        <GameImage
          image="tryhackme.webp"
          name="TryHackMe"
          color="#212c42"
          url="https://tryhackme.com/p/daniebeler"
        />

        <GameImage
          image="chess.webp"
          name="Chess.com"
          color="#2c2b29"
          url="https://www.chess.com/member/daniebeler"
        />
      </div>
    </div>
  </section>
</template>

<script>
import Topic from '@/components/Topic.vue'
import Heading from "@/components/Heading.vue";
import GameImage from "@/components/GameImage.vue";

export default {
  name: "AboutView",
  components: {
    Topic,
    Heading,
    GameImage,
  },
};
</script>

<style scoped>

.section-intro {
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: white;
}

.intro-img {
  width: 100%;
  border-radius: 15px;
}

.intro-description {
  font-size: 1.5rem;
}

.section-profiles {
  position: relative;
  color: white;
  padding-top: 150px;
  padding-bottom: 150px;
  background-color: var(--my_dark);
}

.heading {
  color: white;
  font-size: 4.5rem;
}

.img {
  width: 100%;
  border-radius: 15px;
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
  background-color: #2c2b29;
  text-decoration: none !important;
}

.img-chess {
  background-color: #2c2b29;
}

.img-hackerrank {
  background-color: #39424e;
}

.img-codewars {
  background-color: #262729;
}

.img-tryhackme {
  background-color: #212c42;
}

.img-ideaoverflow {
  background-color: #0cc87e;
}

.img-git {
  background-color: #f7f7f7;
}

.img-insta {
  background-color: #ea001e;
}

.img-geocaching {
  background-color: #02884d;
}

.img-htb {
  background-color: #141d2c;
}

.img-overlay:hover {
  opacity: 1;
  cursor: pointer;
}

.overlay-txt {
  color: white;
}

.overlay-txt-git {
  color: #000000;
}

.bg-1 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: linear-gradient(45deg, #0fd64f, #f8ef42);
}

.bg-2 {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 2;
  background-color: var(--my_light);
  transition: background-color 1s ease;
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

.holder {
  border-radius: 20px;
  color: var(--my_dark);
  padding: 30px;
  margin-top: calc(var(--bs-gutter-x) / 2);
  margin-bottom: calc(var(--bs-gutter-x) / 2);
}

.picture-games {
  width: 100%;
  max-width: 220px;
  border-radius: 20px;
}

.skills-text-col {
  min-width: 150px;
}

h2 {
  margin-bottom: 0;
}
</style>
