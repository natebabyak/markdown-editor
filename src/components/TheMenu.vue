<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import ThemeSelect from './ThemeSelect.vue'
import { usePreviewThemeStore } from '@/stores/previewTheme'
import { useEditorThemeStore } from '@/stores/editorTheme'
import { useAppThemeStore } from '@/stores/appTheme'
import IconSpellcheck from './icons/IconSpellcheck.vue'
import IconWordCount from './icons/IconWordCount.vue'

const menu = useMenuStore()
</script>

<template>
  <span v-if="menu.isOpen" @click="menu.close()" class="overlay"></span>
  <div :class="['menu', { open: menu.isOpen }]">
    <h1>Tools</h1>
    <hr />
    <span>Spellcheck</span>
    <IconSpellcheck />
    <span>Word Count</span>
    <IconWordCount />
    <h1>Settings</h1>
    <hr />
    <div class="item">
      <span>App Theme</span>
      <ThemeSelect :theme-store="useAppThemeStore()" />
    </div>
    <hr />
    <div class="item">
      <span>Editor Theme</span>
      <ThemeSelect :theme-store="useEditorThemeStore()" />
    </div>
    <hr />
    <div class="item">
      <span>Preview Theme</span>
      <ThemeSelect :theme-store="usePreviewThemeStore()" />
    </div>
  </div>
</template>

<style lang="css" scoped>
.overlay {
  position: fixed;
  opacity: 0.25;
  background-color: var(--color-black);
  inset: 0;
  width: 100vw;
  height: 100vh;
}

.menu {
  background-color: var(--background);
  border-left: 1px solid var(--border);
  height: 100vh;
  padding: 1rem;
  position: fixed;
  right: -24rem;
  top: 0;
  transition: transform 0.5s ease;
  width: 24rem;
}

.menu.open {
  transform: translateX(-24rem);
}

.item {
  align-items: center;
  display: flex;
  justify-content: space-between;
}
</style>
