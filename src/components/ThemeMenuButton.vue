<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'
import { useThemeStore } from '@/stores/theme'
import ThemeMenu from './ThemeMenu.vue'

const target = useTemplateRef<HTMLElement>('target')
const themeMenuOpen = ref<Boolean>(false)
const themeStore = useThemeStore()

const toggleThemeMenu = () => (themeMenuOpen.value = !themeMenuOpen.value)

onClickOutside(target, () => (themeMenuOpen.value = false))
</script>

<template>
  <div class="theme-menu-button-container">
    <div class="theme-menu-button" ref="target" @click="toggleThemeMenu">
      <component class="theme-menu-button-icon" :is="themeStore.getIcon()" />
    </div>
    <ThemeMenu v-if="themeMenuOpen" />
  </div>
</template>

<style lang="css" scoped>
.theme-menu-button-container {
  position: relative;
}

.theme-menu-button {
  color: var(--color-button);
  cursor: pointer;
  transition: color 0.3s ease;
}

.theme-menu-button:hover {
  color: var(--color-button-hover);
}

.theme-menu-button-icon {
  height: 2rem;
  width: 2rem;
}
</style>
