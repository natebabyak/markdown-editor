<script setup lang="ts">
import type { Component } from 'vue'
import IconOpenInNew from './icons/IconOpenInNew.vue'

defineProps<{
  icon: Component
  text: string
  url: string
}>()
</script>

<template>
  <a :href="url" class="link">
    <div class="left">
      <component :is="icon" class="icon" />
      <span class="text">{{ text }}</span>
    </div>
    <IconOpenInNew class="open-in-new-icon" />
  </a>
</template>

<style lang="css" scoped>
.link {
  align-items: center;
  border-radius: 9999px;
  color: var(--tertiary-contrast);
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  justify-content: space-between;
  margin: 0.5rem 0 0.5rem 0;
  padding: 0 0.5rem 0 0.5rem;
  text-decoration: none;
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

.link:hover {
  background-color: var(--senary-contrast);
  color: var(--full-contrast);
}

.icon {
  height: 1.5rem;
  width: 1.5rem;
}

.text {
  font-weight: 500;
}
</style>
