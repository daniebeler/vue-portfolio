<template>
  <section class="introduction">
    <div class="container">
      <div class="row">
        <div class="col-10 col-md-8">
          <img src="@/assets/img/blog/tools.jpg" alt="" />
          <h1 style="padding-top: 30px" class="text-center">
            My personal toolbox
          </h1>
          <p class="text-center">A collection of software I use</p>
        </div>
      </div>
    </div>
  </section>

  <section class="holder">
    <div class="container inner-holder" style="margin-top: 130px">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-12 col-md-8 col-lg-5 blog-content">
          <p>
            In this post I am sharing a list of the most important tools I use.
            The list itself has no specific order but I tried to organize it
            into some catecories.
          </p>
          <h1>Communication</h1>
          <p><strong>Instagram</strong> - social media</p>
          <p><strong>Signal</strong> - communication</p>
          <p><strong>WhatsApp</strong> - communication</p>
          <p><strong>Discord</strong> - voicechat</p>

          <h1>Productivity</h1>
          <p><strong>Daily Tasks</strong> - Ivy Lee method</p>
          <p><strong>Google Tasks</strong> - tasks and notes</p>

          <h1>Text Editors</h1>
          <p><strong>Visual Studio Code</strong> - programming</p>
          <p><strong>Libre Office</strong> - general</p>
          <p><strong>Microsoft Office</strong> - general</p>

          <h1>Web Browser</h1>
          <p><strong>Mozilla Firefox</strong> - main browser</p>
          <p><strong>Google Chrome</strong> - Webdesign testing</p>

          <h1>Browser Extensions</h1>
          <p><strong>Wappalyzer</strong> - technology profiler for websites</p>
          <p><strong>Font Ninja</strong> - Font finder for websites</p>
          <p><strong>Honey</strong> - coupons finder</p>
          <p><strong>AdBlocker Ultimate</strong> - adblocker</p>

          <h1>Operating System</h1>
          <p><strong>Microsoft Windows</strong> - dual boot</p>
          <p><strong>Linux Mint</strong> - dual boot</p>

          <h1>Others</h1>
          <p><strong>Flameshot</strong> - Screenshots</p>
          <p><strong>Windscribe</strong> - VPN</p>
          <p><strong>VirtualBox</strong> - Virtualization</p>
          <p><strong>Termius</strong> - SSH Client</p>
          <p><strong>DBeaver</strong> - Database Client</p>

          <h1>VS Code extensions</h1>
          <p><strong>CodeSnap</strong> - Screenshots</p>
          <p><strong>Material Theme</strong> - Theme</p>
          <p><strong>Material Icon Theme</strong> - Icon Theme</p>
          <p><strong>Prettier</strong> - code formatter</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "@/components/Heading.vue";
import BlogPreview from "@/components/BlogPreview.vue";

export default {
  name: "ContactView",
  components: {
    Heading,
    BlogPreview,
  },
};
</script>

<style scoped>
.introduction {
  padding-top: 150px;
}

.introduction .row {
  display: flex;
  justify-content: center;
}

.introduction img {
  border-radius: 15px;
  width: 100%;
}

.welcome {
  height: 100vh;
}

.blog-content h1 {
  margin-top: 30px;
}

.first-holder {
  /* background-color: white; */
  color: #4b597b;
}

.bg-image {
  height: 100vh;
  background-image: url("~@/assets/img/blog/tools.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.second-page {
  background-color: white;
  color: #4b597b;
  padding-top: 50px;
}
</style>
