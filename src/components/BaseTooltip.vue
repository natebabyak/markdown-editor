<script setup lang="ts">
import { ref } from 'vue'

type Direction = 'north' | 'east' | 'south' | 'west'

defineProps<{
  location: Direction
  text: string
}>()

const visible = ref<Boolean>(false)

const hide = () => (visible.value = false)
const show = () => (visible.value = true)
</script>

<template>
  <div class="tooltip-wrapper" @mouseenter="show" @mouseleave="hide">
    <div class="tooltip" v-if="visible" :class="location">
      <span class="tooltip-text"> {{ text }}</span>
      <span class="tooltip-arrow" :class="location"></span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.tooltip-wrapper {
  position: relative;
}

.tooltip {
  padding: 0.25rem;
  position: absolute;
  z-index: 1002;
}
</style>
