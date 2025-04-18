<script setup lang="ts">
defineProps<{
  text: string
  location: 'north' | 'south' | 'east' | 'west'
}>()
</script>

<template>
  <div class="wrapper">
    <slot></slot>
    <div :class="['tooltip', location]">
      <span class="text">{{ text }}</span>
      <span :class="['arrow', location]"></span>
    </div>
  </div>
</template>

<style lang="css" scoped>
.wrapper {
  position: relative;
}

.tooltip {
  position: absolute;
}
</style>
