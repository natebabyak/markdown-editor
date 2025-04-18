<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  name: string
}>()
</script>

<template>
  <div class="option">
    <component :is="icon" :class="icon" />
    <span class="name">{{ name }}</span>
  </div>
</template>

<style lang="css" scoped>
.option {
  cursor: pointer;
  display: flex;
  gap: 0.5rem;
  height: 1.5rem;
  justify-content: left;
  width: 100%;
}

.icon {
  height: 1rem;
  width: 1rem;
}

.name {
  font-weight: 500;
}
</style>
