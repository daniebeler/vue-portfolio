<script lang="ts" setup>
useSchemaOrg([
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
      'https://at.linkedin.com/in/danielhiebeler',
      'https://github.com/daniebeler',
      'https://daniebeler.bio.link/',
      'https://play.google.com/store/apps/dev?id=4896585242816990690',
      'https://techhub.social/@daniebeler',
      'https://bento.me/daniebeler',
      'https://www.threads.net/@daniebeler',
      'https://pixelix.social/daniebeler'
    ]
  }),
]);
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
