<script setup lang="ts">
import IconMenu from './icons/IconMenu.vue'
import { useMenuStore } from '@/stores/menu'

const menu = useMenuStore()
</script>

<template>
  <header class="header">
    <img class="logo" src="../assets/logo.svg" alt="logo" />
    <div class="button" ref="target" @click="menu.open">
      <IconMenu class="icon" />
    </div>
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
  width: 100%;
}

.logo {
  height: 2rem;
  width: 2rem;
}

.button {
  color: var(--quaternary-contrast);
  cursor: pointer;
  transition: color 0.3s ease;
}

.button:hover {
  color: var(--full-contrast);
}

.icon {
  height: 2rem;
  width: 2rem;
}
</style>
