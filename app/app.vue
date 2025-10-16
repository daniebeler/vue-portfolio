<script lang="ts" setup>
import { definePerson, useSchemaOrg } from 'nuxt-schema-org/schema';
import { useSeoMeta } from 'nuxt/app';


/* useSchemaOrg([
  definePerson({
    name: 'Daniel Hiebeler',
    alternateName: 'daniebeler',
    givenName: 'Daniel',
    familyName: 'Hiebeler',
    email: 'hiebeler.daniel@gmail.com',
    gender: 'male',
    url: 'https://daniebeler.com',
    sameAs: [
      'https://www.instagram.com/daniebeler/',
      'https://www.linkedin.com/in/danielhiebeler',
      'https://github.com/daniebeler',
      'https://daniebeler.bio.link/',
      'https://play.google.com/store/apps/dev?id=4896585242816990690',
      'https://techhub.social/@daniebeler',
      'https://bento.me/daniebeler',
      'https://www.threads.net/@daniebeler',
      'https://pixelix.social/daniebeler',
      'https://buymeacoffee.com/daniebeler'
    ]
  }),
]); */

useSeoMeta({
  charset: 'utf-8',
  title: 'Daniel Hiebeler | Developer Portfolio',
  description: 'Explore the portfolio of Daniel Hiebeler, a passionate developer showcasing projects in web development, software engineering, and more.',
  author: 'Daniel Hiebeler',
  ogTitle: 'Daniel Hiebeler | Developer Portfolio',
  ogDescription: 'Explore the portfolio of Daniel Hiebeler, a passionate developer showcasing projects in web development, software engineering, and more.',
  ogUrl: 'https://daniebeler.com',
  ogType: 'website',
  ogImage: 'https://daniebeler.com/img/profilbild.webp',
})
</script>

<template>
  <div>
    <NuxtPage />
    <Footer />
  </div>
</template>
