<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import ThemeMenuItem from './ThemeMenuItem.vue'

const themeStore = useThemeStore()

const themes = Object.values(themeStore.themes)
</script>

<template>
  <div class="theme-menu">
    <ThemeMenuItem v-for="theme in themes" :key="theme" :theme="theme" />
  </div>
</template>

<style lang="css" scoped>
.theme-menu {
  left: -50%;
  position: absolute;
  top: calc(100% + 0.5rem);
}
</style>
