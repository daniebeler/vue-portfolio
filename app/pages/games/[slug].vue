<template>
  <main v-if="game" class="flex items-center flex-col mt-20">
    <div class="container">



      <div class="flex space-x-5">
        <img :src="`/img/${game.logo}`" :alt="game.title" class="w-32 rounded-2xl" />
        <div>
          <h1 class="text-3xl">{{ game.title }}</h1>
          <div class="flex space-x-3 py-2">
            <div class="bg-primary" v-for="tech in game.tech" :key="tech">{{ tech }}</div>
          </div>
          <p>{{ game.releaseYear }}</p>
        </div>

      </div>

      <div class="mt-10 flex space-x-4 space-y-4">
        <!-- biome-ignore lint/a11y/useAnchorContent: <explanation> -->
        <a v-if="game.itchUrl" :href="game.itchUrl" target="blank" rel="noopener noreferrer"><img
            src="/img/badges/itchio.png" alt="" class="h-14"></a>

        <!-- biome-ignore lint/a11y/useAnchorContent: <explanation> -->
        <a v-if="game.playStoreUrl" :href="game.playStoreUrl" target="blank" rel="noopener noreferrer"><img
            src="/img/badges/playstore.png" alt="" class="h-14"></a>
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