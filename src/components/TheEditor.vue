<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useEditorStore } from '@/stores/editor'
import { useEditorThemeStore } from '@/stores/editorTheme'

const editor = ref()
const editorStore = useEditorStore()
const themeStore = useEditorThemeStore()

onMounted(() => {
  if (editor.value) {
    editorStore.mountEditor(editor.value)
  }
})

watch(
  () => themeStore.theme,
  () => {
    editorStore.reconfigureTheme()
  },
)
</script>

<template>
  <div class="container">
    <div ref="editor" class="editor"></div>
  </div>
</template>

<style scoped>
.container {
  height: 100%;
  overflow-y: scroll;
}

.editor {
  border-right: 1px solid var(--border);
}
</style>
