<script setup lang="ts">
import IconLeftPanelClose from './icons/IconCloseSidebar.vue'
import IconLeftPanelOpen from './icons/IconOpenSidebar.vue'
import { useSidebarStore } from '@/stores/sidebar'

const sidebar = useSidebarStore()
</script>

<template>
  <aside class="sidebar" :class="[sidebar.isOpen ? 'open' : 'closed']">
    <div class="icon-button" @click="sidebar.toggle">
      <IconLeftPanelClose v-if="sidebar.isOpen" />
      <IconLeftPanelOpen v-else />
    </div>
  </aside>
</template>

<style lang="css">
.sidebar {
  background-color: var(--octonary-contrast);
  border-right: 1px solid var(--senary-contrast);
  height: 100%;
  padding: 1rem;
  transition: width 0.5s ease;
}

.sidebar.open {
  width: 20vw;
}

.sidebar.closed {
  width: 4rem;
}
</style>
