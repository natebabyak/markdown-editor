<script setup lang="ts">
import BaseIconButton from './BaseIconButton.vue'
import IconMenu from './icons/IconMenu.vue'
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>

<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo" />
    <BaseIconButton @click="menu.open" :icon="IconMenu" v-tooltip.left="'Menu'" />
  </header>
</template>

<style lang="css">
.header {
  align-items: center;
  background-color: var(--page-background);
  border-bottom: 1px solid var(--senary-contrast);
  display: flex;
  height: 4rem;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  width: 100vw;
}

.logo {
  height: 2rem;
  width: 2rem;
}
</style>
