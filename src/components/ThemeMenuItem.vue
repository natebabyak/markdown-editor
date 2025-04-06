<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'

defineProps(['theme'])

const themeStore = useThemeStore()
</script>

<template>
  <div class="theme-menu-item" @click="themeStore.set(theme)">
    <component class="theme-menu-item-icon" :is="themeStore.getIcon(theme)" />
  </div>
</template>

<style lang="css" scoped>
.theme-menu-item {
  background-color: var(--color-button-background);
  color: var(--color-button);
  padding: 1rem;
}

.theme-menu-item:first-child {
  border-radius: 9999px 9999px 0 0;
}

.theme-menu-item:last-child {
  border-radius: 0 0 9999px 9999px;
}

.theme-menu-item:hover {
  background-color: var(--color-button-background-hover);
  color: var(--color-button-hover);
}

.theme-menu-item-icon {
  height: 2rem;
  width: 2rem;
}
</style>
