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
  align-items: center;
  border-radius: 25%;
  color: var(--tertiary-contrast);
  cursor: pointer;
  display: flex;
  height: 2rem;
  justify-content: center;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  width: 2rem;
}

.button:hover {
  background-color: var(--senary-contrast);
  color: var(--full-contrast);
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}
</style>
