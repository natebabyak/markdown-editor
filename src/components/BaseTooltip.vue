<script setup lang="ts">
import { ref } from 'vue'

type Direction = 'north' | 'south' | 'east' | 'west'

defineProps<{
  location: Direction
  text: string
}>()

const visible = ref<boolean>(false)

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
    <div class="tooltip" v-if="visible" :class="location" @mouseenter="hide">
      <span class="tooltip-text"> {{ text }} </span>
      <span class="tooltip-arrow" :class="location"> </span>
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
  left: 50%;
  padding: 0.25rem 0.5rem 0.25rem 0.5rem;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1002;
}

.tooltip.north {
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, -0.5rem);
}

.tooltip.south {
  left: 50%;
  top: 100%;
  transform: translate(-50%, 0.5rem);
}

.tooltip.east {
  left: 100%;
  top: 50%;
  transform: translate(0.5rem, -50%);
}

.tooltip.west {
  right: 100%;
  top: 50%;
  transform: translate(-0.5rem, -50%);
}

.tooltip-arrow {
  background-color: var(--page-background);
  border-right: 1px solid var(--senary-contrast);
  border-top: 1px solid var(--senary-contrast);
  height: 0.5rem;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 0.5rem;
  z-index: 1003;
}

.tooltip-arrow.north {
  transform: translate(-50%, -50%) rotate(135deg);
  bottom: -0.25rem;
  left: 50%;
}

.tooltip-arrow.south {
  left: 50%;
  top: -0.05rem;
  transform: translate(-50%, -50%) rotate(-45deg);
}

.tooltip-arrow.east {
  left: 0;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-135deg);
}

.tooltip-arrow.west {
  top: 50%;
  right: -0.25rem;
}
</style>
