<script setup lang="ts">
import { computed, ref } from 'vue'
import IconLeftPanelClose from './icons/IconCloseSidebar.vue'
import IconLeftPanelOpen from './icons/IconOpenSidebar.vue'
import HeaderIconButton from './HeaderIconButton.vue'
import { useEditorStore } from '@/stores/editor'

const isOpen = ref(false)
const editor = useEditorStore()
const outline = computed(() => editor.getOutline)

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
      <div class="headings">
        <div v-for="(heading, index) in outline" :key="index" class="heading">
          <span v-for="i in heading.level" :key="i" class="indent"></span>
          <div @click="editor.goToLine(heading.line)" class="item">
            <span class="text">{{ heading.text }}</span>
            <span class="line">{{ heading.line }}</span>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style lang="css" scoped>
.sidebar {
  user-select: none;
  background-color: var(--background-soft);
  border-right: 1px solid var(--border);
  padding: 0.5rem;
  width: 3rem;
}

.sidebar.open {
  width: 24rem;
}

.indent {
  width: 1rem;
}

h1 {
  font-weight: 600;
  font-size: 1.5rem;
}

hr {
  border-color: var(--border);
}

.outline {
  padding: 0.25rem;
  height: calc(100vh - 9rem);
}

.headings {
  padding: 0.25rem;
  overflow-y: scroll;
  height: 100%;
}

.heading {
  display: flex;
  text-overflow: clip;
}

.item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  color: var(--text-mute);
  width: 100%;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
}

.text {
  font-weight: 600;
  overflow: hidden;
}

.line {
  font-weight: 600;
}

.item:hover {
  color: var(--text-soft);
  text-decoration: underline;
}
</style>
