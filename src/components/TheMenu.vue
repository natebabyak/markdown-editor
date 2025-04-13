<script setup lang="ts">
import IconClose from './icons/IconClose.vue'
import IconGithub from './icons/IconGithub.vue'
import IconSpellcheck from './icons/IconSpellcheck.vue'
import IconWordCount from './icons/IconWordCount.vue'
import { onClickOutside } from '@vueuse/core'
import { useMenuStore } from '@/stores/menu'
import { useTemplateRef } from 'vue'
import { useThemeStore } from '@/stores/theme'
import MenuLink from './MenuLink.vue'
import MenuButton from './MenuButton.vue'
import BaseIconButton from './BaseIconButton.vue'

const menuStore = useMenuStore()
const target = useTemplateRef<HTMLElement>('target')
const themeStore = useThemeStore()

onClickOutside(target, () => menuStore.close())
</script>

<template>
  <div :class="[menuStore.isOpen ? 'open' : 'closed']" class="menu" ref="target">
    <div class="button-container">
      <BaseIconButton @click="menuStore.close" :icon="IconClose" />
    </div>
    <h2>Tools</h2>
    <hr />
    <MenuButton :icon="IconSpellcheck" :text="'Spellcheck'" />
    <MenuButton :icon="IconWordCount" :text="'Word Count'" />
    <h2>Theme</h2>
    <hr />
    <MenuButton
      v-for="theme in themeStore.themes"
      :key="theme"
      @click="themeStore.set(theme)"
      :icon="themeStore.icon(theme)"
      :is-active="theme === themeStore.app"
      :is-default="theme === 'system'"
      :text="themeStore.name(theme)"
    >
    </MenuButton>
    <h2>Links</h2>
    <hr />
    <MenuLink
      :icon="IconGithub"
      :text="'GitHub'"
      :url="'https://github.com/natebabyak/markdown-editor'"
    />
  </div>
</template>

<style lang="css" scoped>
.menu {
  background-color: var(--octonary-contrast);
  border-left: 1px solid var(--senary-contrast);
  height: 100vh;
  padding: 1rem;
  position: fixed;
  right: 0;
  top: 0;
  transition: transform 0.5s ease;
  width: 24rem;
}

.menu.open {
  transform: translateX(0);
}

.menu.closed {
  transform: translateX(24rem);
}

.button-container {
  display: flex;
  justify-content: right;
}

hr {
  border-color: var(--senary-contrast);
}
</style>
