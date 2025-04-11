<script setup lang="ts">
import IconLeftPanelClose from './icons/IconLeftPanelClose.vue'
import IconLeftPanelOpen from './icons/IconLeftPanelOpen.vue'
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
  <aside class="sidebar" :class="[sidebarStore.isOpen ? 'open' : 'closed']">
    <div class="button" @click="sidebarStore.toggle">
      <IconLeftPanelClose class="icon" v-if="sidebarStore.isOpen" />
      <IconLeftPanelOpen class="icon" v-else />
    </div>
  </aside>
</template>

<style lang="css" scoped>
.sidebar {
  border-right: 1px solid var(--senary-contrast);
  padding: 1rem;
  position: absolute;
  transition: transform 0.3s ease;
}

.sidebar.open {
  transform: translateX(20%);
}

.sidebar.closed {
  transform: translateX(0);
}

.button {
  color: var(--quaternary-contrast);
  cursor: pointer;
  transition: color 0.3s ease;
}

.button:hover {
  color: var(--full-contrast);
}

.icon {
  height: 2rem;
  width: 2rem;
}
</style>
