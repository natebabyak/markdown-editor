<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
}>()
</script>

<template>
  <div class="button">
    <component :is="icon" class="icon" />
  </div>
</template>

<style lang="css" scoped>
.button {
  color: var(--tertiary-contrast);
  cursor: pointer;
  height: 2rem;
  transition: color 0.3s ease;
  width: 2rem;
}

.button:hover {
  color: var(--full-contrast);
}

.icon {
  height: 2rem;
  width: 2rem;
}
</style>
