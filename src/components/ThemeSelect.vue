<script setup lang="ts">
import IconArrowDropUp from './icons/IconArrowDropUp.vue'
import IconArrowDropDown from './icons/IconArrowDropDown.vue'
import { onClickOutside } from '@vueuse/core'
import { ref, useTemplateRef } from 'vue'

defineProps(['themeStore'])

const isOpen = ref(false)
const target = useTemplateRef<HTMLElement>('target')

const close = () => (isOpen.value = false)
const toggle = () => (isOpen.value = !isOpen.value)

onClickOutside(target, close)
</script>

<template>
  <div class="wrapper" ref="target">
    <div @click="toggle" class="toggle">
      <span class="toggle-text">{{ themeStore.name() }}</span>
      <span class="arrow">
        <IconArrowDropUp v-if="isOpen" />
        <IconArrowDropDown v-else />
      </span>
    </div>
    <div v-if="isOpen" @mouseleave="themeStore.unpreview()" class="select">
      <div
        v-for="theme in themeStore.themes"
        @click="
          () => {
            close()
            themeStore.set(theme)
          }
        "
        @mouseenter="themeStore.preview(theme)"
        :class="['option', { active: themeStore.isActive(theme) }]"
        :key="theme"
      >
        <span class="option-text">{{ themeStore.name(theme) }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  position: relative;
}

.toggle {
  align-items: center;
  background-color: var(--background);
  border: 1px solid var(--border);
  border-radius: 9999px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  width: calc((20vw - 2rem) / 2);
}

.select {
  background-color: var(--background-soft);
  position: absolute;
  left: 0;
  width: fit-content;
  z-index: 1000;
}

.option {
  border-radius: 9999px;
  cursor: pointer;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: fit-content;
}
</style>
