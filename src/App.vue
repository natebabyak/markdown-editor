<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <RouterView class="router-view" />
</template>

<style lang="css" scoped>
.router-view {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
