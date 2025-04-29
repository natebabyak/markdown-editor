<script setup lang="ts">
import { computed, ref } from 'vue'
import IconLeftPanelClose from './icons/IconCloseSidebar.vue'
import IconLeftPanelOpen from './icons/IconOpenSidebar.vue'
import { useMarkdownStore } from '@/stores/project'
import LargeIconButton from './LargeIconButton.vue'

const isOpen = ref(false)
const markdown = useMarkdownStore()
const outline = computed(() => markdown.outline)

const toggle = () => (isOpen.value = !isOpen.value)
</script>

<template>
  <aside :class="['sidebar', { open: isOpen }]">
    <LargeIconButton @click="toggle" :icon="isOpen ? IconLeftPanelClose : IconLeftPanelOpen" />
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
  background-color: var(--background);
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
