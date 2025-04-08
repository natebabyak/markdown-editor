<script setup lang="ts">
import { ref } from 'vue'

type Direction = 'north' | 'south' | 'east' | 'west'

defineProps<{
  location: Direction
  text: string
}>()

const visible = ref<Boolean>(false)

let timeout: ReturnType<typeof setTimeout> | null = null

const show = () => {
  timeout = setTimeout(() => (visible.value = true), 300)
}

const hide = () => {
  if (timeout) clearTimeout(timeout)
  visible.value = false
}
</script>

<template>
  <div class="tooltip-wrapper" @mouseenter="show" @mouseleave="hide">
    <slot></slot>
    <div class="tooltip" v-show="visible" :class="location" @mouseenter="hide">
      <span class="tooltip-text"> {{ text }} </span>
      <span class="tooltip-arrow" :class="location"></span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tooltip-wrapper {
  position: relative;
}

.tooltip {
  background-color: var(--page-background);
  border: 1px solid var(--senary-contrast);
  border-radius: 9999px;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  position: absolute;
  z-index: 1002;
}

.tooltip.north {
}

.tooltip.south {
  left: -50%;
  top: calc(100% + 0.75rem);
}

.tooltip.east {
}

.tooltip.west {
}

.tooltip-arrow {
  -webkit-transform: rotate(45deg);
  background-color: var(--page-background);
  border: 1px solid var(--senary-contrast);
  height: 0.7071rem;
  position: absolute;
  transform: rotate(45deg);
  width: 0.7071rem;
  z-index: 1003;
}

.tooltip-arrow.north {
}

.tooltip-arrow.south {
  border-bottom: none;
  border-right: none;
  left: calc(50% - 0.44em);
  top: -0.4rem;
}

.tooltip-arrow.east {
}

.tooltip-arrow.west {
}
</style>
