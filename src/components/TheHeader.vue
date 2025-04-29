<script setup lang="ts">
import LargeIconButton from './LargeIconButton.vue'
import IconMenu from './icons/IconMenu.vue'
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>

<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo" />
    <LargeIconButton @click="menu.toggle()" :icon="IconMenu" />
  </header>
</template>

<style lang="css" scoped>
.header {
  align-items: center;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  width: 100%;
}

.logo {
  height: 2rem;
  width: 2rem;
}
</style>
