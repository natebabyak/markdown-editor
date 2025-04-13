<script setup lang="ts">
import BaseIconButton from './BaseIconButton.vue'
import IconLeftPanelClose from './icons/IconCloseSidebar.vue'
import IconLeftPanelOpen from './icons/IconOpenSidebar.vue'
import { useSidebarStore } from '@/stores/sidebar'

const sidebarStore = useSidebarStore()
</script>

<template>
  <aside class="sidebar" :class="[sidebarStore.isOpen ? 'open' : 'closed']">
    <BaseIconButton
      @click="sidebarStore.toggle"
      :icon="sidebarStore.isOpen ? IconLeftPanelClose : IconLeftPanelOpen"
      :size="'large'"
    />
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
