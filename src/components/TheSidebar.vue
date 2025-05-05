<script setup lang="ts">
import { computed, ref } from 'vue'
import IconLeftPanelClose from './icons/IconCloseSidebar.vue'
import IconLeftPanelOpen from './icons/IconOpenSidebar.vue'
import { useProjectStore } from '@/stores/project'
import HeaderIconButton from './HeaderIconButton.vue'

const isOpen = ref(false)
const project = useProjectStore()
const outline = computed(() => project.outline)

const toggle = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <aside :class="['sidebar', { open: isOpen }]">
    <HeaderIconButton
      v-tooltip.right="(isOpen ? 'Close' : 'Open') + ' sidebar'"
      @click="toggle"
      :icon="isOpen ? IconLeftPanelClose : IconLeftPanelOpen"
    />
    <div v-if="isOpen" class="outline">
      <h1>Outline</h1>
      <hr />
      <div v-for="(heading, index) in outline" :key="index" class="heading">
        <span v-for="i in heading.level" :key="i" class="indent"></span>
        <span>{{ heading.text }}</span>
      </div>
    </div>
  </aside>
</template>

<style lang="css" scoped>
.sidebar {
  background-color: var(--background-soft);
  border-right: 1px solid var(--border);
  padding: 0.5rem;
  width: 3rem;
}

.sidebar.open {
  width: 24rem;
}

.heading {
  display: flex;
}

.indent {
  width: 1rem;
}
</style>
