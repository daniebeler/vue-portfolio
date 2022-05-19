<template>
  <h1>{{text}}</h1>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Heading',
  props: {
    text: String
  }
}
</script>

<style scoped>
  h1 {
    text-align: center;
    display:inline-block;
    position:relative;
  }

  h1::after{
  content:'';
  height: 3px;
  width: 60px;
  background:var(--my_primary);
  position:absolute;
  margin:auto;
  bottom: -10px;
  left:0;
  right:0;
  }
</style>
