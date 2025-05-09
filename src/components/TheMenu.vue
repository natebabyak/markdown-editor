<script setup lang="ts">
import { useMenuStore } from '@/stores/menu'
import ThemeSelect from './ThemeSelect.vue'
import { usePreviewThemeStore } from '@/stores/previewTheme'
import { useEditorThemeStore } from '@/stores/editorTheme'
import { useAppThemeStore } from '@/stores/appTheme'
import HeaderIconButton from './HeaderIconButton.vue'
import IconClose from './icons/IconClose.vue'

const menu = useMenuStore()
</script>

<template>
  <span v-if="menu.isOpen" @click="menu.close()" class="overlay"></span>
  <div :class="['menu', { open: menu.isOpen }]">
    <div class="top">
      <HeaderIconButton v-tooltip.left="'Close menu'" @click="menu.close()" :icon="IconClose" />
    </div>
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
  opacity: 0.5;
  background-color: var(--background);
  inset: 0;
  width: 100vw;
  height: 100vh;
}

hr {
  border-color: var(--border);
}

h1 {
  font-weight: 600;
  font-size: 1.5rem;
}

.menu {
  background-color: var(--background);
  border-left: 1px solid var(--border);
  height: 100vh;
  padding: 0.5rem;
  position: fixed;
  right: -24rem;
  top: 0;
  transition: transform 0.5s ease;
  width: 24rem;
  user-select: none;
}

.menu.open {
  transform: translateX(-24rem);
}

.top {
  display: flex;
  justify-content: right;
}

.item {
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.item span {
  font-weight: 600;
  color: var(--text-soft);
}
</style>
