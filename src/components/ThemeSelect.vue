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
  background-color: var(--background-soft);
  border-radius: 9999px;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  width: calc(14rem);
}

.toggle-text {
  color: var(--text-mute);
  font-weight: 600;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.arrow {
  color: var(--text-mute);
}

.toggle:hover {
  background-color: var(--background-mute);
}

.toggle:hover .toggle-text {
  color: var(--text-soft);
}

.select {
  background-color: var(--background-soft);
  border-radius: 1.5rem;
  position: absolute;
  left: 0;
  width: 14rem;
  z-index: 1000;
}

.option {
  background-color: var(--background-soft);
  border-radius: 9999px;
  cursor: pointer;
  padding-left: 0.25rem;
  padding-right: 0.25rem;
  width: fit-content;
  height: 1.5rem;
  width: 14rem;
  align-items: center;
  display: flex;
  justify-content: left;
  padding-left: 0.5rem;
}

.option-text {
  color: var(--text-mute);
  font-weight: 600;
}

.option:hover {
  background-color: var(--background-mute);
}

.option:hover .option-text {
  color: var(--text-soft);
}

.option.active {
  background-color: var(--brand);
  cursor: default;
}

.option.active .option-text {
  color: var(--background);
}
</style>
