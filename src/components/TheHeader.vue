<script setup lang="ts">
import HeaderLogo from './TheLogo.vue'
import HeaderMenuButton from './MenuButton.vue'
</script>

<template>
  <header class="header">
    <HeaderLogo />
    <HeaderMenuButton />
  </header>
</template>

<style lang="css" scoped>
.header {
  align-items: center;
  background-color: var(--page-background);
  border-bottom: 1px solid var(--senary-contrast);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  width: 100%;
}
</style>
