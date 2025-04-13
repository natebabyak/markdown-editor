<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  isActive?: boolean
  isDefault?: boolean
  text: string
}>()
</script>

<template>
  <div :class="{ active: isActive }" class="button">
    <div class="left">
      <component :is="icon" class="icon" />
      <span class="text">{{ text }}</span>
    </div>
    <span v-if="isDefault" class="default">(default)</span>
  </div>
</template>

<style lang="css" scoped>
.button {
  align-items: center;
  border-radius: 9999px;
  color: var(--tertiary-contrast);
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0 0.5rem 0 0.5rem;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  width: 100%;
}

.left {
  display: flex;
  gap: 0.5rem;
  justify-content: left;
}

.button:hover {
  background-color: var(--senary-contrast);
  color: var(--full-contrast);
}

.button.active {
  background-color: var(--full-contrast);
  color: var(--senary-contrast);
  cursor: default;
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}

.text {
  font-weight: 500;
}

.default {
  font-style: italic;
}
</style>
