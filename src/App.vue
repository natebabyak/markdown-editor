<script setup lang="ts">
import TheEditor from './components/TheEditor.vue'
import TheFooter from './components/TheFooter.vue'
import TheHeader from './components/TheHeader.vue'
import ThePreview from './components/ThePreview.vue'
import TheSidebar from './components/TheSidebar.vue'
</script>

<template>
  <TheHeader />
  <main class="main">
    <TheSidebar />
    <TheEditor />
    <ThePreview />
  </main>
  <TheFooter />
</template>

<style lang="css" scoped>
.main {
  display: flex;
  height: calc(100vh);
  padding-top: 4rem;
}
</style>
