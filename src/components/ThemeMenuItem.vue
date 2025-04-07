<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

defineProps(['theme'])

const themeStore = useThemeStore()
</script>

<template>
  <div class="theme-menu-item" @click="themeStore.set(theme)">
    <component class="theme-menu-item-icon" :is="themeStore.get(theme)" />
  </div>
</template>

<style lang="css" scoped>
.theme-menu-item {
  background-color: var(--page-background);
  border-left: 1px solid var(--senary-contrast);
  border-right: 1px solid var(--senary-contrast);
  color: var(--quaternary-contrast);
  cursor: pointer;
  padding: 1rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  z-index: 1001;
}

.theme-menu-item:first-child {
  border-radius: 9999px 9999px 0 0;
  border-top: 1px solid var(--senary-contrast);
}

.theme-menu-item:last-child {
  border-bottom: 1px solid var(--senary-contrast);
  border-radius: 0 0 9999px 9999px;
}

.theme-menu-item:hover {
  background-color: var(--septenary-contrast);
  color: var(--full-contrast);
}

.theme-menu-item-icon {
  height: 2rem;
  width: 2rem;
}
</style>
