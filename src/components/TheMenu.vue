<script setup lang="ts">
import IconClose from './icons/IconClose.vue'
import IconGithub from './icons/IconGithub.vue'
import IconSpellcheck from './icons/IconSpellcheck.vue'
import IconWordCount from './icons/IconWordCount.vue'
import { onClickOutside } from '@vueuse/core'
import { useMenuStore } from '@/stores/menu'
import { useTemplateRef } from 'vue'
import { useThemeStore } from '@/stores/theme'

const menuStore = useMenuStore()
const target = useTemplateRef<HTMLElement>('target')
const themeStore = useThemeStore()

onClickOutside(target, () => menuStore.close())
</script>

<template>
  <div :class="[menuStore.isOpen ? 'open' : 'closed']" class="menu" ref="target">
    <div class="button-container">
      <div @click="menuStore.close" class="icon-button">
        <IconClose />
      </div>
    </div>
    <h2>Tools</h2>
    <hr />
    <div class="icon-and-text-button">
      <IconSpellcheck />
      <span>Spellcheck</span>
    </div>
    <div class="icon-and-text-button">
      <IconWordCount />
      <span>Word Count</span>
    </div>
    <h2>Themes</h2>
    <hr />
    <div
      v-for="theme in themeStore.themes"
      :key="theme"
      @click="themeStore.set(theme)"
      :class="{ active: theme == themeStore.theme }"
      class="icon-and-text-button"
    >
      <component :is="themeStore.icon(theme)" />
      <span>{{ themeStore.name(theme) }}</span>
    </div>
    <h2>Links</h2>
    <hr />
    <a class="icon-and-text-button" href="https://github.com/natebabyak/markdown-editor">
      <IconGithub />
      <span>GitHub</span>
    </a>
  </div>
</template>

<style lang="css">
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
</style>
