<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import IconArrowDropUp from './icons/IconArrowDropUp.vue'
import IconArrowDropDown from './icons/IconArrowDropDown.vue'
import { useProjectStore } from '@/stores/project'
import { onClickOutside } from '@vueuse/core'

const isOpen = ref(false)
const project = useProjectStore()
const target = useTemplateRef('target')

const close = () => (isOpen.value = false)
const toggle = () => (isOpen.value = !isOpen.value)

onClickOutside(target, close)
</script>

<template>
  <div class="wrapper" ref="target">
    <div @click="toggle" class="toggle">
      <span class="text">{{}}</span>
      <span class="arrow">
        <IconArrowDropUp v-if="isOpen" />
        <IconArrowDropDown v-else />
      </span>
    </div>
    <div class="select"></div>
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
}

.toggle:hover {
  background-color: var(--background-mute);
}
</style>
