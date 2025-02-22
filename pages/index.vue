<template>
    <div class="bg-zinc-900">

        <section class="p-5 flex items-center flex-col">
            <div class="container">
                <h1 class="text-4xl md:text-5xl text-white pb-12 pt-12">Welcome 👋</h1>
            </div>
        </section>

        <Hero />

        <CaseStudies />

    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Hero from "@/components/Hero.vue";
import Intro from "@/components/Intro.vue";
import CaseStudies from "@/components/CaseStudies.vue";

export default defineComponent({
    name: "HomeView",
    components: {
        Hero,
        Intro,
        CaseStudies,
    },
    methods: {
        openEmail() {
            window.open("mailto:hiebeler.daniel@gmail.com");
        },
        openUrl(url: string) {
            window.open(url, "_blank");
        },
    },
});
</script>

<style scoped></style>