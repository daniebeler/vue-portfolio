<template>
  <!-- <section class="welcome container">
  <div class="row">
    <div class="col" style="background: black">
      fief
    </div>
    <div class="col">

    </div>
  </div>
</section> -->
  <section class="holder">
    <div class="container" style="margin-top: 130px">
      <div class="row">
        <div class="col">
          <h1>Communication</h1>
          <p><strong>Instagram</strong> - social media</p>
          <p><strong>Signal</strong> - communication</p>
          <p><strong>WhatsApp</strong> - communication</p>
          <p><strong>Discord</strong> - voicechat</p>

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
.welcome {
  height: 100vh;
}
</style>
