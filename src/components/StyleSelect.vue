<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import IconArrowDropUp from './icons/IconArrowDropUp.vue'
import IconArrowDropDown from './icons/IconArrowDropDown.vue'
import { onClickOutside } from '@vueuse/core'
import { useEditorStore } from '@/stores/editor'
import StyleSelectOption from './StyleSelectOption.vue'

const isOpen = ref(false)
const target = useTemplateRef('target')

const editor = useEditorStore()

const numStyles = 7

const close = () => (isOpen.value = false)
const toggle = () => (isOpen.value = !isOpen.value)

onClickOutside(target, close)
</script>

<template>
  <div v-if="editor.view" class="wrapper" ref="target">
    <div v-tooltip.bottom="'Style'" @click="toggle" class="toggle">
      <span class="text">{{ /*editor.getStyle()*/ }}</span>
      <span class="arrow">
        <IconArrowDropUp v-if="isOpen" />
        <IconArrowDropDown v-else />
      </span>
    </div>
    <div v-if="isOpen" class="select">
      <StyleSelectOption
        @click="
          () => {
            close()
            /*editor.handleStyle(index - 1)*/
          }
        "
        v-for="index in numStyles"
        :index="index - 1"
        :key="index"
      />
    </div>
  </div>
</template>

<style lang="css" scoped>
.toggle {
  align-items: center;
  background-color: var(--background-soft);
  border-radius: 9999px;
  display: flex;
  height: 1.5rem;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.25rem;
  color: var(--text-mute);
  cursor: pointer;
  user-select: none;
  width: 8rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.toggle:hover {
  background-color: var(--background-mute);
  color: var(--text-soft);
}

.text {
  font-weight: 600;
}

.select {
  position: absolute;
  z-index: 1000;
  background-color: var(--background-soft);
  width: 8.5rem;
  border-left: 1px solid var(--border);
  border-right: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  padding: 0.25rem;
  transform: translate3d(-0.25rem, 0.25rem, 0);
  user-select: none;
}
</style>
