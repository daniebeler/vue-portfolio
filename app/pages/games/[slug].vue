<template>
  <main v-if="game" class="container mx-auto flex-col mt-20">
    <div class="container">



      <div class="flex space-x-5 px-5">
        <img :src="`/img/${game.logo}`" :alt="game.title" class="w-32 rounded-2xl" />
        <div>
          <h1 class="text-3xl font-semibold">{{ game.title }}</h1>
          <div class="flex flex-wrap space-x-3 space-y-2 py-2">
            <div class="bg-primary rounded-full text-background px-1 py-0.5 text-xs text-nowrap font-semibold"
              v-for="tech in game.tech" :key="tech">{{
                tech }}</div>
          </div>
          <p>{{ game.releaseYear }}</p>
        </div>

      </div>

      <div class="mt-10 flex space-x-4 space-y-4 px-5">
        <!-- biome-ignore lint/a11y/useAnchorContent: <explanation> -->
        <a v-if="game.itchUrl" :href="game.itchUrl" target="blank" rel="noopener noreferrer"><img
            src="/img/badges/itchio.png" alt="" class="h-14"></a>

        <!-- biome-ignore lint/a11y/useAnchorContent: <explanation> -->
        <a v-if="game.playStoreUrl" :href="game.playStoreUrl" target="blank" rel="noopener noreferrer"><img
            src="/img/badges/playstore.png" alt="" class="h-14"></a>
      </div>

      <div v-if="game.screenshots?.length" class="mt-10 flex w-full gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
        <img v-for="shot in game.screenshots" :key="shot" :src="`/img/${game.slug}/${shot}`"
          :alt="`${game.title} screenshot`" class="h-96 w-auto shrink-0 snap-start rounded-xl" loading="lazy" />
      </div>

      <a v-if="game.sourceUrl" :href="game.sourceUrl" target="blank" rel="noopener noreferrer"
        class="border border-gray-300 rounded-xl px-5 py-3 block w-fit mt-10">View on GitHub</a>

      <NuxtLink to="/">Back to Portfolio</NuxtLink>

    </div>
  </main>
  <div v-else>
    <h1>Game not found</h1>
    <NuxtLink to="/">Return Home</NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { type Game, gamesData } from '~/assets/data/games';

const route = useRoute()

const game = gamesData.find((g: Game) => g.slug === route.params.slug)

if (game) {
  useSeoMeta({
    title: `${game.title} | Game Portfolio`,
    description: game.description,
    ogImage: game.logo
  })
}
</script>