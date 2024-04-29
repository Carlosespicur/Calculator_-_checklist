<template>
  <div>
    <Nav></Nav>
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
import nav from '../components/nav.vue'
useHead({
    title: 'Título de nuestra web'
})

</script>

<style lang="scss">
@import "@/assets/styles/buttons.scss";
@import "@/assets/styles/heading.scss";
body{
  font-family: 'Cascadia code', sans-serif;
  margin: 0;
  padding: 0;
}
</style>
