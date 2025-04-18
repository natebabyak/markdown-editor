<script setup lang="ts">
import BaseIconButton from './BaseIconButton.vue'
import IconLeftPanelClose from './icons/IconCloseSidebar.vue'
import IconLeftPanelOpen from './icons/IconOpenSidebar.vue'
import { useSidebarStore } from '@/stores/sidebar'
import TableOfContents from './TableOfContents.vue'

const sb = useSidebarStore()
</script>

<template>
  <aside class="sidebar" :class="[sb.isOpen ? 'open' : 'closed']">
    <BaseIconButton @click="sb.toggle" :icon="sb.isOpen ? IconLeftPanelClose : IconLeftPanelOpen" />
    <TableOfContents v-if="sb.isOpen" />
  </aside>
</template>

<style lang="css" scoped>
.sidebar {
  background-color: var(--octonary-contrast);
  border-right: 1px solid var(--senary-contrast);
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
