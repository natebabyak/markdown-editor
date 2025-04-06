<script setup lang="ts">
import GithubLink from './GithubLink.vue'
</script>

<template>
  <header class="header">
    <GithubLink />
  </header>
</template>

<style lang="css" scoped>
.header {
  border-bottom: 1px solid var(--color-border);
}
</style>
