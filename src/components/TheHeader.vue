<script setup lang="ts">
import HeaderIconButton from './HeaderIconButton.vue'
import IconMenu from './icons/IconMenu.vue'
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>

<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo" />
    <HeaderIconButton v-tooltip.left="'Open menu'" @click="menu.toggle()" :icon="IconMenu" />
  </header>
</template>

<style lang="css" scoped>
.header {
  user-select: none;
  align-items: center;
  background-color: var(--background);
  border-bottom: 1px solid var(--border);
  display: flex;
  height: 3rem;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.logo {
  height: 2rem;
  width: 2rem;
}
</style>
