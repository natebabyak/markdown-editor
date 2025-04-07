<script setup lang="ts">
import GithubLink from './GithubLink.vue'
import ThemeMenuButton from './ThemeMenuButton.vue'
</script>

<template>
  <header class="header">
    <ThemeMenuButton />
    <GithubLink />
  </header>
</template>

<style lang="css" scoped>
.header {
  background-color: var(--page-background);
  border-bottom: 1px solid var(--senary-contrast);
  display: flex;
  gap: 2rem;
  justify-content: right;
  padding: 1rem 2rem 1rem 2rem;
  position: fixed;
  width: 100%;
}
</style>
